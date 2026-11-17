// About page: a list of its sections, kept beside the text on wide screens.
import { el, onLang } from "/ui.js";

const contents = document.getElementById("about-contents");

onLang((s, lang) => {
  const block = document.querySelector(`.prose[data-show="${lang}"]`);
  const headings = [...block.querySelectorAll("h2")];
  headings.forEach((h, i) => (h.id = `${lang}-${i + 1}`));
  contents.setAttribute("aria-label", s.onThisPage);
  contents.replaceChildren(
    el("p", { class: "about-side-title", text: s.onThisPage, "aria-hidden": "true" }),
    ...headings.map((h) => el("a", { href: `#${h.id}`, text: h.textContent })),
  );
});
