// The Glossary screen: terms in groups; selecting a term opens its explanation.
import { el, onLang } from "/ui.js";

const list = document.getElementById("glossary");
const jump = document.getElementById("glossary-jump");
const none = document.getElementById("glossary-none");
const search = document.getElementById("term-search");
const toGroups = document.getElementById("to-groups");

// Lets "bo the" find "bổ thể": strips Vietnamese tone marks before comparing.
const plain = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");

// Which wording a group uses for its sub-headings and its "Ask about this" question.
const KIND = { basics: "concept", report: "concept", medicines: "medicine" };

let groups = [];
let terms = [];
let strings;
let lang = "en";
// Terms the reader has opened, so they stay open when the language or the search changes.
const open = new Set();

// The corner link back to the group links: shown only once those links have
// scrolled off the screen, and only when there are groups to go back to.
let jumpOnScreen = true;
let hasGroups = false;
function showToGroups() {
  toGroups.hidden = jumpOnScreen || !hasGroups;
}
new IntersectionObserver(([entry]) => {
  jumpOnScreen = entry.isIntersecting;
  showToGroups();
}).observe(jump);

// "Complete blood count (CBC)" reads better inside a question as "complete blood count (CBC)".
// Abbreviations and names like "C-reactive" or "ANA pattern" are left alone.
function midSentence(name) {
  return /^[A-ZĐ][a-zà-ỹ]/.test(name) ? name[0].toLowerCase() + name.slice(1) : name;
}

function blockTitle(kind, h) {
  const b = strings.glossaryBlocks;
  if (h === "what" && kind === "concept") return b.whatConcept;
  if (h === "why" && kind === "medicine") return b.whyMedicine;
  return b[h];
}

function termRow(x) {
  const kind = KIND[x.group] || "test";
  const other = lang === "en" ? "vi" : "en";
  const name = x[lang];
  const question = strings.askTemplates[kind](midSentence(name));
  const blocks = x.more ? x.more[lang] : [];

  return el("details", {
      class: "term",
      id: x.id,
      open: open.has(x.id),
      ontoggle: (e) => {
        if (e.target.open) {
          // This also fires for rows redrawn already open; only a fresh opening changes the address.
          if (!open.has(x.id)) history.replaceState(null, "", `#${x.id}`);
          open.add(x.id);
        } else {
          open.delete(x.id);
        }
      },
    },
    el("summary", {},
      el("span", { class: "term-name", text: name }),
      // The same name in both languages (most medicines) is shown once.
      x[other] !== name ? el("span", { class: "term-other", lang: other, text: x[other] }) : null,
      el("span", { class: "term-def", text: lang === "en" ? x.defEn : x.defVi }),
    ),
    el("div", { class: "term-more" },
      ...blocks.flatMap(([h, text]) => [el("h3", { text: blockTitle(kind, h) }), el("p", { text })]),
      kind === "medicine" ? el("p", { class: "term-caution", text: strings.medicineLine }) : null,
      el("p", { class: "term-foot" },
        el("a", { href: `/#q=${encodeURIComponent(question)}`, title: strings.askAboutHint, text: strings.askAbout }),
      ),
    ),
  );
}

function draw() {
  const q = plain(search.value.trim());
  const shown = terms.filter((x) => !q || plain(`${x.en} ${x.vi} ${x.defEn} ${x.defVi}`).includes(q));
  const filled = groups.filter((g) => shown.some((x) => x.group === g));

  jump.setAttribute("aria-label", strings.glossaryJump);
  jump.replaceChildren(
    ...filled.map((g) => el("a", { href: `#group-${g}`, text: strings.glossaryGroups[g] })),
  );
  list.replaceChildren(
    ...filled.map((g) =>
      el("section", { class: "glossary-group", id: `group-${g}` },
        el("h2", { text: strings.glossaryGroups[g] }),
        ...shown.filter((x) => x.group === g).map(termRow),
      ),
    ),
  );
  none.hidden = shown.length > 0;
  toGroups.textContent = strings.glossaryJump;
  hasGroups = filled.length > 0;
  showToGroups();
}

// An address like /glossary.html#creatinine opens that term.
function openFromAddress() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!terms.some((x) => x.id === id)) return;
  open.add(id);
  search.value = "";
  draw();
  document.getElementById(id).scrollIntoView({ block: "start" });
}

search.addEventListener("input", draw);
window.addEventListener("hashchange", openFromAddress);

// "?v=2" makes browsers fetch the new format and skip any copy of the old
// one (a plain list) they saved earlier. Raise the number if the format changes again.
try {
  const data = await (await fetch("/api/glossary?v=2")).json();
  groups = Array.isArray(data.groups) ? data.groups : [];
  terms = Array.isArray(data.terms) ? data.terms : [];
} catch {
  groups = [];
  terms = [];
}

onLang((s, l) => {
  strings = s;
  lang = l;
  draw();
});
openFromAddress();
