// The Ask screen: sends the question and draws each possible outcome.
import { el, getLang, onLang, t } from "/ui.js";

const form = document.getElementById("ask-form");
const input = document.getElementById("question");
const button = document.getElementById("ask-button");
const result = document.getElementById("result");
const starterList = document.getElementById("starter-list");

const LEVEL_STEPS = {
  "guideline or systematic review": 4,
  "clinical trial": 3,
  "observational study": 2,
  "review or expert opinion": 1,
};

// What is on screen now, so it can be redrawn when the language changes.
let view = { state: "empty" };
let loadingTimer;

function starterButtons(list) {
  return list.map((q) =>
    el("li", {}, el("button", { type: "button", text: q, onclick: () => { input.value = q; submit(); } })),
  );
}

function message(kind, title, body) {
  return el("div", { class: `message ${kind}`, role: kind === "is-error" ? "alert" : null },
    el("h2", { text: title }),
    el("p", { text: body }),
  );
}

function evidenceBar(level) {
  const steps = LEVEL_STEPS[level] ?? 1;
  const bar = el("span", { class: "evidence-bar", "aria-hidden": "true" });
  for (let i = 1; i <= 4; i++) bar.append(el("i", { class: i <= steps ? "on" : "" }));
  return bar;
}

// Two short lines per source, so the margin is about as tall as the claim.
// The license is shown in the full Sources list under the answer.
function note(source, s) {
  return el("div", { class: "note" },
    el("span", {},
      el("a", { href: source.url, target: "_blank", rel: "noopener", text: source.authors, title: source.title }),
      `, ${source.year}`,
    ),
    el("span", { class: "evidence" },
      el("span", { class: "visually-hidden", text: s.evidenceLevel + ": " }),
      evidenceBar(source.evidenceLevel),
      " " + (s.levels[source.evidenceLevel] ?? source.evidenceLevel),
    ),
  );
}

function rangeFigure(s) {
  const svg = `
    <svg viewBox="0 0 460 64" role="img" aria-label="${s.rangeTitle}">
      <rect x="0" y="14" width="460" height="12" fill="#D5DBE5"/>
      <rect x="150" y="14" width="160" height="12" fill="#55607A"/>
      <path d="M150 8v24M310 8v24" stroke="#1F2A44" stroke-width="2"/>
      <g font-family="Be Vietnam Pro, sans-serif" font-size="13" fill="#1F2A44">
        <text x="75" y="52" text-anchor="middle">${s.rangeLow}</text>
        <text x="230" y="52" text-anchor="middle" font-weight="600">${s.rangeIn}</text>
        <text x="385" y="52" text-anchor="middle">${s.rangeHigh}</text>
      </g>
    </svg>`;
  const fig = el("figure", { class: "range-figure" }, el("figcaption", { text: s.rangeTitle }));
  fig.insertAdjacentHTML("beforeend", svg); // fixed markup and our own strings only
  fig.append(el("p", { text: s.rangeNote }));
  return fig;
}

function helpful(s) {
  const status = el("span", { class: "hint", role: "status" });
  const send = async (value, pressed, other) => {
    pressed.setAttribute("aria-pressed", "true");
    other.setAttribute("aria-pressed", "false");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ helpful: value }),
      });
      status.textContent = res.ok ? s.feedbackSent : s.feedbackFailed;
    } catch {
      status.textContent = s.feedbackFailed;
    }
    if (!value) status.append(" ", el("a", { href: "/feedback.html", text: s.tellMore }));
  };
  const yes = el("button", { class: "button-quiet", type: "button", text: s.yes, "aria-pressed": "false" });
  const no = el("button", { class: "button-quiet", type: "button", text: s.no, "aria-pressed": "false" });
  yes.addEventListener("click", () => send(true, yes, no));
  no.addEventListener("click", () => send(false, no, yes));
  return el("div", { class: "helpful" }, el("span", { text: s.helpfulQ }), yes, no, status);
}

function answer(data, s, arriving) {
  const wide = window.matchMedia("(min-width: 821px)").matches;
  const report = el("div", { class: `report${arriving ? " is-arriving" : ""}` });

  data.claims.forEach((claim, i) => {
    const body = el("div", { class: "claim-body" },
      claim.limited ? el("span", { class: "limited-label", text: s.limited }) : null,
      claim.limited ? el("span", { class: "limited-why", text: s.limitedWhy }) : null,
      el("p", { class: "claim-text", text: claim.text, lang: data.lang }),
    );
    // In the margin on wide screens; folded under the claim on a phone.
    const notes = el("details", { class: "notes", open: wide },
      el("summary", { text: s.sourcesCount(claim.sources.length) }),
      ...claim.sources.map((src) => note(src, s)),
    );
    const row = el("div", { class: `claim${claim.limited ? " is-limited" : ""}`, style: `--i:${i}` }, body, notes);
    report.append(row);
  });

  // Full credit for every article used, as the licenses require.
  const unique = new Map();
  for (const c of data.claims) for (const src of c.sources) unique.set(src.pmcid, src);
  const list = el("ol", {});
  for (const src of unique.values()) {
    list.append(el("li", {},
      `${src.authors} `,
      el("a", { href: src.url, target: "_blank", rel: "noopener", text: src.title }),
      `. ${src.journal}, ${src.year}. ${src.license.toUpperCase()}.`,
    ));
  }

  return [
    report,
    rangeFigure(s),
    el("section", { class: "all-sources" }, el("h2", { text: s.sources }), list),
    helpful(s),
  ];
}

function draw(arriving = false) {
  const s = t();
  clearInterval(loadingTimer);
  result.replaceChildren();
  result.hidden = view.state === "empty";
  // The starter list stays under every state so the next question is one click away.
  button.disabled = view.state === "loading";
  for (const b of starterList.querySelectorAll("button")) b.disabled = view.state === "loading";
  if (view.state === "empty") return;

  if (view.question) result.append(el("h2", { class: "asked", text: view.question }));

  if (view.state === "loading") {
    const status = el("p", { class: "loading-status", text: s.loadingSearch });
    const started = Date.now();
    loadingTimer = setInterval(() => {
      if (Date.now() - started > 2500) status.textContent = t().loadingWrite;
    }, 500);
    const rows = el("div", { class: "placeholder-rows", "aria-hidden": "true" });
    for (let i = 0; i < 6; i++) rows.append(el("span"));
    result.append(status, rows);
  } else if (view.state === "answer") {
    result.append(...answer(view.data, s, arriving));
  } else if (view.state === "refusal") {
    result.append(message("is-refusal", s.refusalTitle, s.refusalBody));
  } else if (view.state === "out_of_scope") {
    const [title, body] = s.scope[view.reason] ?? s.scope.not_lab;
    result.append(message("is-scope", title, body));
  } else {
    const [title, body] = s.errors[view.code] ?? s.errors.service_problem;
    result.append(message("is-error", title, body));
  }
}

async function submit() {
  const question = input.value.trim();
  if (question.length < 3) {
    view = { state: "error", code: "empty_question" };
    draw();
    input.focus();
    return;
  }
  view = { state: "loading", question };
  draw();

  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, lang: getLang() }),
    });
    const data = await res.json();
    if (data.state === "answer") view = { state: "answer", question, data };
    else if (data.state === "refusal") view = { state: "refusal", question };
    else if (data.state === "out_of_scope") view = { state: "out_of_scope", question, reason: data.reason };
    else view = { state: "error", question, code: data.code ?? "service_problem" };
  } catch {
    view = { state: "error", question, code: "network" };
  }
  draw(true);
  result.querySelector(".asked")?.scrollIntoView({
    block: "start",
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

// Enter sends; Shift+Enter makes a new line.
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    submit();
  }
});

// Keep the notes open in the margin when the window crosses the phone/desktop width.
window.matchMedia("(min-width: 821px)").addEventListener("change", (e) => {
  for (const d of document.querySelectorAll("details.notes")) d.open = e.matches;
});

onLang((s) => {
  starterList.replaceChildren(...starterButtons(s.starters));
  draw();
});

// A link from the Glossary carries a question after "#q=". It fills the box and
// waits for the reader to select Ask, so nothing is sent by accident. Browsers
// never send the part after "#" to the server, so the question is not logged.
const carried = location.hash.match(/^#q=(.+)$/);
if (carried) {
  try {
    input.value = decodeURIComponent(carried[1]).slice(0, 500);
    input.focus();
  } catch {
    /* a broken link: leave the box empty */
  }
  history.replaceState(null, "", location.pathname);
}
