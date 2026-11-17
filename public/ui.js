// Shared by every page: the words in both languages, the header, and the language switch.

export const strings = {
  en: {
    siteName: "Lupus Lab Buddy",
    navAsk: "Ask",
    navGlossary: "Glossary",
    navAbout: "About and limits",
    limits: "General information only. Not about your results. No expert review.",
    langLabel: "Language",

    askTitle: "Understand a lab term, and see where the answer came from",
    askLede: "Ask about a lab test used in lupus (SLE). Each part of the answer shows its sources and evidence level.",
    askLabel: "Your question",
    askPlaceholder: "What does anti-dsDNA measure?",
    askHint: "Do not type your own results or personal details. This tool cannot read them.",
    ask: "Ask",
    answerIn: "Answers are written in English.",
    startersTitle: "Questions people start with",
    starters: [
      "What is an ANA test?",
      "What does anti-dsDNA measure?",
      "Why are complement C3 and C4 checked in lupus?",
      "Why is urine protein checked in lupus?",
      "What blood count changes can lupus cause?",
      "What do ESR and CRP show in lupus?",
      "Why is creatinine checked in lupus?",
      "Which lab tests are checked while taking lupus medicines?",
      "How often are lab tests usually done in lupus?",
    ],

    loadingSearch: "Searching the sources",
    loadingWrite: "Writing the answer",

    sources: "Sources",
    sourcesCount: (n) => `Sources (${n})`,
    evidenceLevel: "Evidence level",
    limited: "Evidence is limited",
    limitedWhy: "The sources support this only partly, or say the findings are uncertain.",
    levels: {
      "guideline or systematic review": "guideline or systematic review",
      "clinical trial": "clinical trial",
      "observational study": "observational study",
      "review or expert opinion": "review or expert opinion",
    },
    rangeTitle: "What a reference range is",
    rangeLow: "below the range",
    rangeIn: "reference range",
    rangeHigh: "above the range",
    rangeNote: "Example only, with no real values. Each lab prints its own range on the report, and ranges differ between labs.",
    helpfulQ: "Did this answer help?",
    yes: "Yes",
    no: "No",
    feedbackSent: "Feedback sent",
    feedbackFailed: "Feedback was not sent. Try again later.",
    tellMore: "Tell us what was wrong",

    refusalTitle: "Not enough evidence to answer this",
    refusalBody: "The sources this tool holds do not cover the question well enough. It is better to say so than to guess.",

    scope: {
      personal_result: [
        "This tool cannot interpret your own results",
        "Your care team can, because they know your history and your lab's ranges. You can ask what a test measures instead.",
      ],
      diagnosis_or_treatment: [
        "This tool cannot diagnose or advise on treatment",
        "Those decisions belong with your care team. You can ask what a lab test measures, or what a medicine is used for and which tests are checked while taking it. For example: “Which lab tests are checked while taking hydroxychloroquine?”",
      ],
      other_disease: [
        "This tool only covers lab tests in lupus",
        "It has no sources about other conditions. You can ask about a test used in lupus instead.",
      ],
      not_lab: [
        "This tool only answers questions about lab tests in lupus",
        "Try asking what a test measures, why it is checked, or how a lab report is laid out.",
      ],
    },

    errors: {
      daily_limit: ["Today's free question limit is used up", "The limit is shared by everyone using this tool and refills within a day. Ask again later."],
      service_problem: ["The answer service did not respond", "Wait a minute, then select Ask again."],
      network: ["The connection dropped", "Check your internet, then select Ask again."],
      empty_question: ["The question is empty", "Type a question about a lab test, then select Ask."],
      question_too_long: ["The question is too long", "Shorten it to 500 characters or fewer, then select Ask again."],
      not_configured: ["The answer service is not set up yet", "The site owner needs to connect it. Nothing is wrong on your side."],
      bad_request: ["The question could not be sent", "Reload the page, then select Ask again."],
    },

    glossaryTitle: "Glossary",
    glossaryLede: "Lab terms and lupus medicines in English and Vietnamese. Select a term to read more. Explanations say what a term is, not what a result means for you.",
    glossaryNote: "These explanations were written for this glossary. They are not taken from the cited sources, and no expert has reviewed them.",
    glossarySearch: "Find a term",
    glossaryNone: "No term matches. Try a shorter word.",
    glossaryJump: "Groups of terms",
    backToTop: "Back to top",
    glossaryGroups: {
      basics: "Lupus basics",
      antibodies: "Antibody and complement tests",
      blood: "Blood count",
      kidney: "Kidney and urine",
      inflammation: "Inflammation",
      medicines: "Medicines",
      safety: "Medicine-safety labs",
      report: "Reading a report",
    },
    glossaryBlocks: {
      what: "What it is",
      whatConcept: "What it means",
      why: "Why it is checked in lupus",
      whyMedicine: "Why it is used in lupus",
      report: "On a lab report",
      labs: "Labs checked while taking it",
      know: "Good to know",
    },
    askAbout: "Ask about this",
    askAboutHint: "Opens the Ask page with a question filled in, for an answer with sources.",
    medicineLine: "General information only. Decisions about medicines belong with your care team.",
    askTemplates: {
      test: (x) => `What is ${x} and why is it checked in lupus?`,
      medicine: (x) => `Which lab tests are checked while taking ${x}?`,
      concept: (x) => `What does ${x} mean in lupus?`,
    },

    feedbackTitle: "Feedback",
    feedbackLede: "Tell us what was wrong or unclear. Do not include your results or personal details.",
    feedbackKind: "What is it about?",
    kinds: {
      wrong: "An answer seemed wrong",
      source: "A source did not support the claim",
      unclear: "An answer was hard to understand",
      other: "Something else",
    },
    feedbackComment: "What happened?",
    sendFeedback: "Send feedback",
    feedbackEmpty: "Choose what it is about or write a comment, then select Send feedback.",
  },

  vi: {
    siteName: "Lupus Lab Buddy",
    navAsk: "Đặt câu hỏi",
    navGlossary: "Bảng thuật ngữ",
    navAbout: "Giới thiệu và phạm vi",
    limits: "Chỉ là thông tin chung. Không nhận xét về kết quả của riêng bạn. Chưa được chuyên gia thẩm định.",
    langLabel: "Ngôn ngữ",

    askTitle: "Hiểu thuật ngữ xét nghiệm, và biết câu trả lời dựa trên nguồn nào",
    askLede: "Hỏi về một xét nghiệm thường dùng trong bệnh lupus (SLE). Mỗi ý trong câu trả lời đều kèm nguồn tham khảo và mức độ bằng chứng.",
    askLabel: "Câu hỏi của bạn",
    askPlaceholder: "Xét nghiệm anti-dsDNA đo cái gì?",
    askHint: "Đừng nhập kết quả xét nghiệm hay thông tin cá nhân của bạn. Công cụ này không đọc được những thông tin đó.",
    ask: "Hỏi",
    answerIn: "Câu trả lời được viết bằng tiếng Việt.",
    startersTitle: "Bạn có thể bắt đầu với những câu hỏi này",
    starters: [
      "Xét nghiệm ANA là gì?",
      "Xét nghiệm anti-dsDNA đo cái gì?",
      "Vì sao người bệnh lupus cần xét nghiệm bổ thể C3 và C4?",
      "Vì sao người bệnh lupus cần xét nghiệm protein niệu?",
      "Lupus có thể gây ra những thay đổi gì trong công thức máu?",
      "Tốc độ máu lắng (ESR) và CRP cho biết điều gì ở người bệnh lupus?",
      "Vì sao người bệnh lupus cần xét nghiệm creatinin?",
      "Khi dùng thuốc điều trị lupus, cần làm những xét nghiệm theo dõi độ an toàn của thuốc nào?",
      "Người bệnh lupus thường cần làm xét nghiệm bao lâu một lần?",
    ],

    loadingSearch: "Đang tìm trong các nguồn tham khảo",
    loadingWrite: "Đang viết câu trả lời",

    sources: "Nguồn tham khảo",
    sourcesCount: (n) => `Nguồn tham khảo (${n})`,
    evidenceLevel: "Mức độ bằng chứng",
    limited: "Bằng chứng còn hạn chế",
    limitedWhy: "Các nguồn tham khảo chỉ ủng hộ một phần ý này, hoặc cho biết kết quả còn chưa chắc chắn.",
    levels: {
      "guideline or systematic review": "hướng dẫn hoặc tổng quan hệ thống",
      "clinical trial": "thử nghiệm lâm sàng",
      "observational study": "nghiên cứu quan sát",
      "review or expert opinion": "bài tổng quan hoặc ý kiến chuyên gia",
    },
    rangeTitle: "Khoảng tham chiếu là gì",
    rangeLow: "thấp hơn khoảng",
    rangeIn: "khoảng tham chiếu",
    rangeHigh: "cao hơn khoảng",
    rangeNote: "Chỉ là ví dụ minh họa, không dùng số liệu thật. Mỗi phòng xét nghiệm in khoảng tham chiếu riêng trên phiếu kết quả, và khoảng này mỗi nơi một khác.",
    helpfulQ: "Câu trả lời này có hữu ích không?",
    yes: "Có",
    no: "Không",
    feedbackSent: "Đã gửi góp ý",
    feedbackFailed: "Chưa gửi được góp ý. Hãy thử lại sau.",
    tellMore: "Cho chúng tôi biết chỗ nào chưa đúng",

    refusalTitle: "Chưa đủ bằng chứng để trả lời câu hỏi này",
    refusalBody: "Các nguồn tham khảo của công cụ này chưa đề cập đủ rõ đến câu hỏi. Thà nói rõ như vậy còn hơn đoán mò.",

    scope: {
      personal_result: [
        "Công cụ này không giải thích được kết quả của riêng bạn",
        "Việc đó cần bác sĩ điều trị của bạn, vì họ nắm rõ bệnh sử của bạn và khoảng tham chiếu của phòng xét nghiệm. Thay vào đó, bạn có thể hỏi một xét nghiệm đo cái gì.",
      ],
      diagnosis_or_treatment: [
        "Công cụ này không chẩn đoán và không tư vấn điều trị",
        "Những quyết định đó cần do bác sĩ điều trị của bạn đưa ra. Bạn có thể hỏi một xét nghiệm đo cái gì, hoặc một loại thuốc dùng để làm gì và cần xét nghiệm theo dõi độ an toàn của thuốc nào khi dùng. Ví dụ: “Người dùng hydroxychloroquine cần làm những xét nghiệm nào?”",
      ],
      other_disease: [
        "Công cụ này chỉ nói về xét nghiệm trong bệnh lupus",
        "Công cụ không có nguồn tham khảo về các bệnh khác. Bạn có thể hỏi về một xét nghiệm dùng trong bệnh lupus.",
      ],
      not_lab: [
        "Công cụ này chỉ trả lời câu hỏi về xét nghiệm trong bệnh lupus",
        "Hãy thử hỏi một xét nghiệm đo cái gì, vì sao cần làm, hoặc phiếu kết quả được trình bày thế nào.",
      ],
    },

    errors: {
      daily_limit: ["Đã hết lượt hỏi miễn phí của hôm nay", "Số lượt hỏi được dùng chung cho tất cả mọi người và sẽ có lại trong vòng một ngày. Hãy hỏi lại sau."],
      service_problem: ["Dịch vụ trả lời không phản hồi", "Chờ một phút rồi bấm Hỏi lần nữa."],
      network: ["Mất kết nối", "Kiểm tra kết nối mạng rồi bấm Hỏi lần nữa."],
      empty_question: ["Câu hỏi đang trống", "Nhập một câu hỏi về xét nghiệm rồi bấm Hỏi."],
      question_too_long: ["Câu hỏi quá dài", "Rút gọn còn tối đa 500 ký tự rồi bấm Hỏi lần nữa."],
      not_configured: ["Dịch vụ trả lời chưa được thiết lập", "Chủ trang cần kết nối dịch vụ. Lỗi không phải do bạn."],
      bad_request: ["Không gửi được câu hỏi", "Tải lại trang rồi bấm Hỏi lần nữa."],
    },

    glossaryTitle: "Bảng thuật ngữ",
    glossaryLede: "Thuật ngữ xét nghiệm và các thuốc điều trị lupus, bằng tiếng Anh và tiếng Việt. Chọn một thuật ngữ để đọc thêm. Phần giải thích cho biết thuật ngữ là gì, không nói kết quả của bạn có ý nghĩa gì.",
    glossaryNote: "Các phần giải thích này được viết riêng cho bảng thuật ngữ, không lấy từ các nguồn tham khảo được trích dẫn và chưa được chuyên gia thẩm định.",
    glossarySearch: "Tìm thuật ngữ",
    glossaryNone: "Không tìm thấy thuật ngữ phù hợp. Hãy thử một từ ngắn hơn.",
    glossaryJump: "Các nhóm thuật ngữ",
    backToTop: "Về đầu trang",
    glossaryGroups: {
      basics: "Kiến thức cơ bản về lupus",
      antibodies: "Xét nghiệm kháng thể và bổ thể",
      blood: "Công thức máu",
      kidney: "Thận và nước tiểu",
      inflammation: "Chỉ số viêm",
      medicines: "Thuốc điều trị",
      safety: "Xét nghiệm theo dõi khi dùng thuốc",
      report: "Cách đọc phiếu kết quả",
    },
    glossaryBlocks: {
      what: "Là gì",
      whatConcept: "Ý nghĩa",
      why: "Vì sao cần xét nghiệm ở người bệnh lupus",
      whyMedicine: "Vì sao dùng trong bệnh lupus",
      report: "Cách ghi trên phiếu kết quả",
      labs: "Xét nghiệm cần làm khi dùng thuốc",
      know: "Điều nên biết",
    },
    askAbout: "Hỏi về thuật ngữ này",
    askAboutHint: "Mở trang Đặt câu hỏi với câu hỏi đã điền sẵn, để nhận câu trả lời có nguồn tham khảo.",
    medicineLine: "Chỉ là thông tin chung. Mọi quyết định về thuốc cần do bác sĩ điều trị của bạn đưa ra.",
    askTemplates: {
      test: (x) => `${x} là gì và vì sao người bệnh lupus cần xét nghiệm này?`,
      medicine: (x) => `Cần làm những xét nghiệm nào khi dùng ${x}?`,
      concept: (x) => `Trong bệnh lupus, ${x} nghĩa là gì?`,
    },

    feedbackTitle: "Góp ý",
    feedbackLede: "Cho chúng tôi biết chỗ nào chưa đúng hoặc chưa rõ. Đừng ghi kết quả xét nghiệm hay thông tin cá nhân.",
    feedbackKind: "Bạn muốn góp ý về điều gì?",
    kinds: {
      wrong: "Câu trả lời có vẻ sai",
      source: "Nguồn tham khảo không khớp với nội dung",
      unclear: "Câu trả lời khó hiểu",
      other: "Vấn đề khác",
    },
    feedbackComment: "Bạn gặp vấn đề gì?",
    sendFeedback: "Gửi góp ý",
    feedbackEmpty: "Chọn nội dung góp ý hoặc viết nhận xét, rồi bấm Gửi góp ý.",
  },
};

const listeners = [];

function savedLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "vi") return saved;
  } catch {
    /* storage can be blocked; fall through */
  }
  return (navigator.language || "").toLowerCase().startsWith("vi") ? "vi" : "en";
}

let current = savedLang();

export const getLang = () => current;
export const t = () => strings[current];

/** Run `fn` now and again whenever the language changes. */
export function onLang(fn) {
  listeners.push(fn);
  fn(t(), getLang());
}

// Browsers that know "text-wrap: pretty" keep a paragraph from ending on one word alone.
// For the others, tie the last two words of a long text together with a non-breaking space.
const wrapsPretty = typeof CSS !== "undefined" && CSS.supports("text-wrap", "pretty");

function tidy(text) {
  if (wrapsPretty || typeof text !== "string" || text.length <= 60) return text;
  const i = text.lastIndexOf(" ");
  return i < 0 ? text : `${text.slice(0, i)} ${text.slice(i + 1)}`;
}

export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = tidy(v);
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v === true ? "" : v);
  }
  node.append(...children.filter((c) => c != null));
  return node;
}

function setLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* not saved; the choice still applies to this page */
  }
  current = lang;
  apply();
}

function apply() {
  const s = strings[current];
  document.documentElement.lang = current;
  // The browser tab title follows the language too. The Ask page shows the site name alone.
  const titleKey = { glossary: "glossaryTitle", about: "navAbout", feedback: "feedbackTitle" }[document.body.dataset.page];
  document.title = titleKey ? `${s[titleKey]} | ${s.siteName}` : s.siteName;
  // Any element with data-t="key" gets that string.
  for (const node of document.querySelectorAll("[data-t]")) node.textContent = tidy(s[node.dataset.t]);
  for (const node of document.querySelectorAll("[data-t-placeholder]")) node.placeholder = s[node.dataset.tPlaceholder];
  for (const b of document.querySelectorAll(".lang-switch button")) {
    b.setAttribute("aria-pressed", String(b.dataset.lang === current));
  }
  for (const fn of listeners) fn(s, current);
}

function buildHeader() {
  const page = document.body.dataset.page;
  const link = (href, key, id) =>
    el("a", { href, "data-t": key, "aria-current": page === id ? "page" : null });
  // Each language is named in its own words, which readers spot faster than a two-letter code.
  const langButton = (lang, label) =>
    el("button", { type: "button", "data-lang": lang, lang, text: label, onclick: () => setLang(lang) });

  const header = el(
    "header",
    { class: "site-header" },
    el(
      "div",
      { class: "header-row" },
      el("a", { class: "site-name", href: "/" },
        // Empty alt: the name next to the mark already says what it is.
        el("img", { src: "/logo.svg", alt: "", width: "22", height: "22" }),
        "Lupus Lab Buddy",
      ),
      el("nav", { class: "site-nav", "aria-label": "Main" },
        link("/", "navAsk", "ask"),
        link("/glossary.html", "navGlossary", "glossary"),
        link("/about.html", "navAbout", "about"),
      ),
      el("div", { class: "lang-switch", role: "group", "aria-label": "Language / Ngôn ngữ" },
        langButton("en", "English"),
        langButton("vi", "Tiếng Việt"),
      ),
    ),
    el("p", { class: "limits-line", "data-t": "limits" }),
  );
  document.body.prepend(header);
}

// Long text written straight into a page (About): the same last-two-words tie, done once.
function tidyStaticText() {
  if (wrapsPretty) return;
  for (const node of document.querySelectorAll(".prose p, .prose li")) {
    const last = node.lastChild;
    if (last && last.nodeType === Node.TEXT_NODE) last.nodeValue = tidy(last.nodeValue);
  }
}

buildHeader();
tidyStaticText();
apply();
