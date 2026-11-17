// Runs in <head>, before the page is drawn: sets the page language early so Vietnamese
// readers do not see English first, and asks for the Vietnamese letter files straight away.
// The rule for picking the language is the same as savedLang() in ui.js.
(function () {
  var lang = null;
  try {
    lang = localStorage.getItem("lang");
  } catch (e) {
    /* storage can be blocked; fall through */
  }
  if (lang !== "en" && lang !== "vi") {
    lang = (navigator.language || "").toLowerCase().indexOf("vi") === 0 ? "vi" : "en";
  }
  document.documentElement.lang = lang;
  if (lang !== "vi") return;
  ["literata-400-700-vietnamese", "be-vietnam-pro-400-vietnamese"].forEach(function (name) {
    var link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    link.href = "/fonts/" + name + ".woff2";
    document.head.appendChild(link);
  });
})();
