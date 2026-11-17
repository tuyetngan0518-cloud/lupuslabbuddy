import { el, onLang, t } from "/ui.js";

const form = document.getElementById("feedback-form");
const kinds = document.getElementById("kinds");
const comment = document.getElementById("comment");
const status = document.getElementById("feedback-status");

onLang((s) => {
  const chosen = form.elements.kind?.value;
  kinds.replaceChildren(
    ...Object.entries(s.kinds).map(([value, label]) =>
      el("label", { class: "choice" },
        el("input", { type: "radio", name: "kind", value, checked: value === chosen }),
        label,
      ),
    ),
  );
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const s = t();
  const kind = form.elements.kind?.value || "";
  const text = comment.value.trim();
  if (!kind && !text) {
    status.textContent = s.feedbackEmpty;
    return;
  }
  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, comment: text }),
    });
    status.textContent = res.ok ? s.feedbackSent : s.feedbackFailed;
    if (res.ok) form.reset();
  } catch {
    status.textContent = s.feedbackFailed;
  }
});
