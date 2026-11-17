// The bilingual glossary. Used on the Glossary screen, and matching pairs are
// pinned into the translation step so the same Vietnamese word is used every time.
// Definitions say what a term is, never what a result means for one person.
// The longer explanations live in glossary-details.ts, keyed by `id`.
// Vietnamese wording was reviewed for natural phrasing on 17 Nov 2026. No expert has reviewed it.

export type GlossaryGroup =
  | "basics"
  | "antibodies"
  | "blood"
  | "kidney"
  | "inflammation"
  | "medicines"
  | "safety"
  | "report";

/** The order the groups appear in on the Glossary screen. Their names live in public/ui.js. */
export const glossaryGroups: GlossaryGroup[] = [
  "basics",
  "antibodies",
  "blood",
  "kidney",
  "inflammation",
  "medicines",
  "safety",
  "report",
];

export interface GlossaryTerm {
  /** Short name used in the page address, e.g. /glossary.html#creatinine. Never change one once published. */
  id: string;
  group: GlossaryGroup;
  en: string;
  vi: string;
  defEn: string;
  defVi: string;
}

export const glossary: GlossaryTerm[] = [
  // ---------- Lupus basics ----------
  { id: "sle", group: "basics", en: "Systemic lupus erythematosus (SLE)", vi: "Lupus ban đỏ hệ thống (SLE)", defEn: "A long-term autoimmune disease that can affect many parts of the body.", defVi: "Bệnh tự miễn mạn tính có thể ảnh hưởng đến nhiều cơ quan trong cơ thể." },
  { id: "immune-system", group: "basics", en: "Immune system", vi: "Hệ miễn dịch", defEn: "The body's defence against germs, made up of cells and proteins.", defVi: "Hệ thống bảo vệ cơ thể trước vi trùng, gồm các tế bào và protein." },
  { id: "autoimmune-disease", group: "basics", en: "Autoimmune disease", vi: "Bệnh tự miễn", defEn: "A condition in which the immune system attacks the body's own tissues.", defVi: "Tình trạng hệ miễn dịch tấn công chính các mô của cơ thể." },
  { id: "antibody", group: "basics", en: "Antibody", vi: "Kháng thể", defEn: "A protein the immune system makes to recognise a target.", defVi: "Protein do hệ miễn dịch tạo ra để nhận diện một mục tiêu." },
  { id: "autoantibody", group: "basics", en: "Autoantibody", vi: "Tự kháng thể", defEn: "An antibody directed at part of the body itself.", defVi: "Kháng thể chống lại chính các thành phần của cơ thể." },
  { id: "disease-activity", group: "basics", en: "Disease activity", vi: "Mức độ hoạt động bệnh", defEn: "How active lupus is at a given time.", defVi: "Cho biết lupus đang hoạt động mạnh hay nhẹ tại một thời điểm." },
  { id: "flare", group: "basics", en: "Flare", vi: "Đợt bùng phát", defEn: "A period when lupus becomes more active.", defVi: "Giai đoạn lupus hoạt động mạnh hơn." },
  { id: "remission", group: "basics", en: "Remission", vi: "Lui bệnh", defEn: "A period when lupus is quiet, with few or no signs of activity.", defVi: "Giai đoạn lupus lắng xuống, có ít hoặc không có dấu hiệu hoạt động." },
  { id: "biomarker", group: "basics", en: "Biomarker", vi: "Dấu ấn sinh học", defEn: "Something measurable in blood or urine that reflects what is happening in the body.", defVi: "Chất đo được trong máu hoặc nước tiểu, phản ánh điều đang diễn ra trong cơ thể." },
  { id: "serology", group: "basics", en: "Serology", vi: "Huyết thanh học", defEn: "Blood tests that look for antibodies and related immune proteins.", defVi: "Các xét nghiệm máu tìm kháng thể và những protein miễn dịch liên quan." },

  // ---------- Antibody and complement tests ----------
  { id: "ana", group: "antibodies", en: "Antinuclear antibody (ANA)", vi: "Kháng thể kháng nhân (ANA)", defEn: "Autoantibodies against parts of the cell nucleus, measured by a blood test.", defVi: "Tự kháng thể chống lại các thành phần của nhân tế bào, đo bằng xét nghiệm máu." },
  { id: "ana-pattern", group: "antibodies", en: "ANA pattern", vi: "Kiểu huỳnh quang ANA", defEn: "The shape of the glow seen under the microscope in an ANA test, such as homogeneous or speckled.", defVi: "Hình ảnh phát sáng nhìn thấy dưới kính hiển vi trong xét nghiệm ANA, ví dụ đồng nhất hoặc lốm đốm." },
  { id: "titer", group: "antibodies", en: "Titer", vi: "Hiệu giá", defEn: "How far a blood sample can be diluted and still test positive, written like 1:160.", defVi: "Mức pha loãng mẫu máu mà xét nghiệm vẫn còn dương tính, ghi dạng 1:160." },
  { id: "anti-dsdna", group: "antibodies", en: "Anti-dsDNA antibody", vi: "Kháng thể kháng DNA chuỗi kép (anti-dsDNA)", defEn: "An autoantibody against double-stranded DNA, measured by a blood test.", defVi: "Tự kháng thể chống lại DNA chuỗi kép, đo bằng xét nghiệm máu." },
  { id: "anti-sm", group: "antibodies", en: "Anti-Sm antibody", vi: "Kháng thể kháng Sm", defEn: "An autoantibody against a group of proteins in the cell nucleus.", defVi: "Tự kháng thể chống lại một nhóm protein trong nhân tế bào." },
  { id: "anti-ro", group: "antibodies", en: "Anti-Ro antibody (SSA)", vi: "Kháng thể kháng Ro (SSA)", defEn: "An autoantibody against the Ro protein, measured by a blood test.", defVi: "Tự kháng thể chống lại protein Ro, đo bằng xét nghiệm máu." },
  { id: "anti-la", group: "antibodies", en: "Anti-La antibody (SSB)", vi: "Kháng thể kháng La (SSB)", defEn: "An autoantibody against the La protein, often tested together with anti-Ro.", defVi: "Tự kháng thể chống lại protein La, thường được xét nghiệm cùng với anti-Ro." },
  { id: "anti-rnp", group: "antibodies", en: "Anti-RNP antibody", vi: "Kháng thể kháng RNP", defEn: "An autoantibody against proteins attached to RNA in the cell nucleus.", defVi: "Tự kháng thể chống lại các protein gắn với RNA trong nhân tế bào." },
  { id: "antiphospholipid", group: "antibodies", en: "Antiphospholipid antibodies", vi: "Kháng thể kháng phospholipid", defEn: "Autoantibodies linked to blood clotting, measured by several blood tests.", defVi: "Các tự kháng thể liên quan đến đông máu, đo bằng một số xét nghiệm máu." },
  { id: "lupus-anticoagulant", group: "antibodies", en: "Lupus anticoagulant", vi: "Kháng đông lupus", defEn: "One of the antiphospholipid antibodies, found with a clotting-time test.", defVi: "Một trong các kháng thể kháng phospholipid, phát hiện bằng xét nghiệm thời gian đông máu." },
  { id: "anticardiolipin", group: "antibodies", en: "Anticardiolipin antibodies", vi: "Kháng thể kháng cardiolipin", defEn: "One of the antiphospholipid antibodies, measured by a blood test.", defVi: "Một trong các kháng thể kháng phospholipid, đo bằng xét nghiệm máu." },
  { id: "anti-b2gp1", group: "antibodies", en: "Anti-beta-2 glycoprotein I antibodies", vi: "Kháng thể kháng beta-2 glycoprotein I", defEn: "One of the antiphospholipid antibodies, measured by a blood test.", defVi: "Một trong các kháng thể kháng phospholipid, đo bằng xét nghiệm máu." },
  { id: "coombs", group: "antibodies", en: "Direct Coombs test", vi: "Nghiệm pháp Coombs trực tiếp", defEn: "A blood test that looks for antibodies stuck to red blood cells.", defVi: "Xét nghiệm máu tìm kháng thể bám trên bề mặt hồng cầu." },
  { id: "complement", group: "antibodies", en: "Complement", vi: "Bổ thể", defEn: "A group of blood proteins that help the immune system.", defVi: "Nhóm protein trong máu hỗ trợ hệ miễn dịch." },
  { id: "c3", group: "antibodies", en: "Complement C3", vi: "Bổ thể C3", defEn: "One of the complement proteins commonly measured in lupus.", defVi: "Một protein bổ thể thường được đo trong bệnh lupus." },
  { id: "c4", group: "antibodies", en: "Complement C4", vi: "Bổ thể C4", defEn: "One of the complement proteins commonly measured in lupus.", defVi: "Một protein bổ thể thường được đo trong bệnh lupus." },

  // ---------- Blood count ----------
  { id: "cbc", group: "blood", en: "Complete blood count (CBC)", vi: "Tổng phân tích tế bào máu (công thức máu)", defEn: "A blood test that counts red cells, white cells and platelets.", defVi: "Xét nghiệm máu đếm hồng cầu, bạch cầu và tiểu cầu." },
  { id: "red-blood-cells", group: "blood", en: "Red blood cells", vi: "Hồng cầu", defEn: "Blood cells that carry oxygen around the body.", defVi: "Tế bào máu vận chuyển oxy đi khắp cơ thể." },
  { id: "hemoglobin", group: "blood", en: "Hemoglobin", vi: "Huyết sắc tố (hemoglobin)", defEn: "The protein in red blood cells that carries oxygen.", defVi: "Protein trong hồng cầu có nhiệm vụ vận chuyển oxy." },
  { id: "hematocrit", group: "blood", en: "Hematocrit", vi: "Dung tích hồng cầu (hematocrit)", defEn: "The share of the blood's volume that is made up of red blood cells.", defVi: "Tỉ lệ thể tích máu do hồng cầu chiếm." },
  { id: "anemia", group: "blood", en: "Anemia", vi: "Thiếu máu", defEn: "A lower than usual amount of red blood cells or hemoglobin.", defVi: "Lượng hồng cầu hoặc huyết sắc tố thấp hơn bình thường." },
  { id: "hemolytic-anemia", group: "blood", en: "Hemolytic anemia", vi: "Thiếu máu tán huyết", defEn: "Anemia that happens because red blood cells are broken down too early.", defVi: "Thiếu máu do hồng cầu bị phá hủy quá sớm." },
  { id: "white-blood-cells", group: "blood", en: "White blood cells", vi: "Bạch cầu", defEn: "Blood cells that are part of the immune system.", defVi: "Tế bào máu thuộc hệ miễn dịch." },
  { id: "leukopenia", group: "blood", en: "Leukopenia", vi: "Giảm bạch cầu", defEn: "A lower than usual number of white blood cells.", defVi: "Số lượng bạch cầu thấp hơn bình thường." },
  { id: "neutrophils", group: "blood", en: "Neutrophils", vi: "Bạch cầu trung tính", defEn: "The most common type of white blood cell, which fights bacteria.", defVi: "Loại bạch cầu phổ biến nhất, có nhiệm vụ chống vi khuẩn." },
  { id: "neutropenia", group: "blood", en: "Neutropenia", vi: "Giảm bạch cầu trung tính", defEn: "A lower than usual number of neutrophils.", defVi: "Số lượng bạch cầu trung tính thấp hơn bình thường." },
  { id: "lymphocytes", group: "blood", en: "Lymphocytes", vi: "Tế bào lympho", defEn: "A type of white blood cell that includes B cells and T cells.", defVi: "Một loại bạch cầu, gồm tế bào B và tế bào T." },
  { id: "lymphopenia", group: "blood", en: "Lymphopenia", vi: "Giảm bạch cầu lympho", defEn: "A lower than usual number of lymphocytes, one type of white blood cell.", defVi: "Số lượng tế bào lympho, một loại bạch cầu, thấp hơn bình thường." },
  { id: "platelets", group: "blood", en: "Platelets", vi: "Tiểu cầu", defEn: "Small blood cells that help blood to clot.", defVi: "Tế bào máu nhỏ giúp máu đông." },
  { id: "thrombocytopenia", group: "blood", en: "Thrombocytopenia", vi: "Giảm tiểu cầu", defEn: "A lower than usual number of platelets.", defVi: "Số lượng tiểu cầu thấp hơn bình thường." },

  // ---------- Kidney and urine ----------
  { id: "creatinine", group: "kidney", en: "Creatinine", vi: "Creatinin", defEn: "A waste product in the blood that the kidneys remove; used to check kidney function.", defVi: "Chất thải trong máu được thận lọc bỏ; dùng để kiểm tra chức năng thận." },
  { id: "egfr", group: "kidney", en: "Estimated glomerular filtration rate (eGFR)", vi: "Độ lọc cầu thận ước tính (eGFR)", defEn: "A calculation, based on creatinine, of how well the kidneys filter blood.", defVi: "Chỉ số tính từ creatinin, cho biết thận lọc máu tốt đến mức nào." },
  { id: "urea", group: "kidney", en: "Urea (BUN)", vi: "Urê máu (BUN)", defEn: "A waste product from protein that the kidneys remove from the blood.", defVi: "Chất thải từ quá trình chuyển hóa protein, được thận lọc khỏi máu." },
  { id: "albumin", group: "kidney", en: "Albumin", vi: "Albumin", defEn: "The main protein in blood, made by the liver.", defVi: "Protein chính trong máu, do gan tạo ra." },
  { id: "urinalysis", group: "kidney", en: "Urinalysis", vi: "Tổng phân tích nước tiểu", defEn: "A set of basic tests on a urine sample.", defVi: "Nhóm xét nghiệm cơ bản trên mẫu nước tiểu." },
  { id: "proteinuria", group: "kidney", en: "Proteinuria", vi: "Protein niệu (đạm niệu)", defEn: "Protein in the urine.", defVi: "Có protein trong nước tiểu." },
  { id: "upcr", group: "kidney", en: "Urine protein-to-creatinine ratio (UPCR)", vi: "Tỉ số protein/creatinin niệu (UPCR)", defEn: "A urine test that estimates how much protein is lost in a day from a single sample.", defVi: "Xét nghiệm nước tiểu ước tính lượng protein mất trong một ngày từ một mẫu duy nhất." },
  { id: "urine-24h", group: "kidney", en: "24-hour urine protein", vi: "Protein niệu 24 giờ", defEn: "A test that measures the protein in all the urine collected over one day.", defVi: "Xét nghiệm đo lượng protein trong toàn bộ nước tiểu thu được trong một ngày." },
  { id: "hematuria", group: "kidney", en: "Hematuria", vi: "Tiểu máu (hồng cầu niệu)", defEn: "Red blood cells in the urine.", defVi: "Có hồng cầu trong nước tiểu." },
  { id: "urinary-casts", group: "kidney", en: "Urinary casts", vi: "Trụ niệu", defEn: "Tiny tube-shaped particles formed in the kidneys and seen in urine under a microscope.", defVi: "Các hạt nhỏ hình ống hình thành trong thận, thấy được trong nước tiểu dưới kính hiển vi." },
  { id: "lupus-nephritis", group: "kidney", en: "Lupus nephritis", vi: "Viêm thận lupus", defEn: "Kidney inflammation caused by lupus.", defVi: "Tình trạng viêm thận do lupus gây ra." },
  { id: "kidney-biopsy", group: "kidney", en: "Kidney biopsy", vi: "Sinh thiết thận", defEn: "Taking a very small piece of kidney with a needle to look at under a microscope.", defVi: "Lấy một mẩu thận rất nhỏ bằng kim để xem dưới kính hiển vi." },

  // ---------- Inflammation ----------
  { id: "inflammation", group: "inflammation", en: "Inflammation", vi: "Viêm", defEn: "The body's response to injury, infection or an immune attack.", defVi: "Phản ứng của cơ thể trước tổn thương, nhiễm trùng hoặc sự tấn công của hệ miễn dịch." },
  { id: "esr", group: "inflammation", en: "Erythrocyte sedimentation rate (ESR)", vi: "Tốc độ máu lắng (ESR)", defEn: "A blood test that reflects inflammation in a general way.", defVi: "Xét nghiệm máu phản ánh tình trạng viêm một cách tổng quát." },
  { id: "crp", group: "inflammation", en: "C-reactive protein (CRP)", vi: "Protein phản ứng C (CRP)", defEn: "A blood protein that rises with inflammation or infection.", defVi: "Protein trong máu tăng lên khi có viêm hoặc nhiễm trùng." },

  // ---------- Medicines ----------
  { id: "immunosuppressant", group: "medicines", en: "Immunosuppressant", vi: "Thuốc ức chế miễn dịch", defEn: "A medicine that calms an overactive immune system.", defVi: "Thuốc làm dịu hệ miễn dịch đang hoạt động quá mức." },
  { id: "hydroxychloroquine", group: "medicines", en: "Hydroxychloroquine", vi: "Hydroxychloroquine", defEn: "A medicine commonly used in lupus.", defVi: "Thuốc thường được dùng trong bệnh lupus." },
  { id: "glucocorticoids", group: "medicines", en: "Glucocorticoids (corticosteroids)", vi: "Glucocorticoid (corticoid)", defEn: "A family of medicines that reduce inflammation quickly.", defVi: "Nhóm thuốc giúp giảm viêm nhanh." },
  { id: "prednisolone", group: "medicines", en: "Prednisolone and prednisone", vi: "Prednisolon và prednison", defEn: "Glucocorticoid medicines taken as tablets.", defVi: "Thuốc glucocorticoid dùng dạng viên uống." },
  { id: "methylprednisolone", group: "medicines", en: "Methylprednisolone", vi: "Methylprednisolon", defEn: "A glucocorticoid medicine given as tablets or through a drip.", defVi: "Thuốc glucocorticoid dùng dạng viên uống hoặc truyền tĩnh mạch." },
  { id: "methotrexate", group: "medicines", en: "Methotrexate", vi: "Methotrexat", defEn: "An immunosuppressant medicine usually taken once a week.", defVi: "Thuốc ức chế miễn dịch thường dùng mỗi tuần một lần." },
  { id: "azathioprine", group: "medicines", en: "Azathioprine", vi: "Azathioprin", defEn: "An immunosuppressant medicine taken as tablets.", defVi: "Thuốc ức chế miễn dịch dùng dạng viên uống." },
  { id: "mycophenolate", group: "medicines", en: "Mycophenolate mofetil", vi: "Mycophenolat mofetil", defEn: "An immunosuppressant medicine often used when lupus affects the kidneys.", defVi: "Thuốc ức chế miễn dịch thường dùng khi lupus ảnh hưởng đến thận." },
  { id: "cyclophosphamide", group: "medicines", en: "Cyclophosphamide", vi: "Cyclophosphamid", defEn: "A strong immunosuppressant medicine used for severe lupus.", defVi: "Thuốc ức chế miễn dịch mạnh dùng cho lupus nặng." },
  { id: "tacrolimus", group: "medicines", en: "Tacrolimus", vi: "Tacrolimus", defEn: "An immunosuppressant medicine from the calcineurin inhibitor family.", defVi: "Thuốc ức chế miễn dịch thuộc nhóm ức chế calcineurin." },
  { id: "cyclosporine", group: "medicines", en: "Cyclosporine", vi: "Cyclosporin", defEn: "An immunosuppressant medicine from the calcineurin inhibitor family.", defVi: "Thuốc ức chế miễn dịch thuộc nhóm ức chế calcineurin." },
  { id: "belimumab", group: "medicines", en: "Belimumab", vi: "Belimumab", defEn: "A biologic medicine for lupus that acts on B cells.", defVi: "Thuốc sinh học điều trị lupus, tác động lên tế bào B." },
  { id: "rituximab", group: "medicines", en: "Rituximab", vi: "Rituximab", defEn: "A biologic medicine that removes B cells for a time.", defVi: "Thuốc sinh học loại bỏ tế bào B trong một thời gian." },
  { id: "nsaids", group: "medicines", en: "Non-steroidal anti-inflammatory drugs (NSAIDs)", vi: "Thuốc kháng viêm không steroid (NSAID)", defEn: "Common pain and inflammation medicines such as ibuprofen and naproxen.", defVi: "Các thuốc giảm đau, kháng viêm thông dụng như ibuprofen và naproxen." },
  { id: "warfarin", group: "medicines", en: "Warfarin", vi: "Warfarin", defEn: "A medicine that makes blood slower to clot.", defVi: "Thuốc làm máu đông chậm hơn." },

  // ---------- Medicine-safety labs ----------
  { id: "liver-enzymes", group: "safety", en: "Liver enzymes (AST, ALT)", vi: "Men gan (AST, ALT)", defEn: "Blood tests used to check the liver, often when taking certain medicines.", defVi: "Xét nghiệm máu kiểm tra gan, thường làm khi dùng một số thuốc." },
  { id: "bilirubin", group: "safety", en: "Bilirubin", vi: "Bilirubin", defEn: "A yellow substance made when red blood cells are broken down and cleared by the liver.", defVi: "Chất màu vàng tạo ra khi hồng cầu bị phá hủy, được gan xử lý và thải ra." },
  { id: "tpmt", group: "safety", en: "TPMT test", vi: "Xét nghiệm TPMT", defEn: "A blood test of an enzyme that breaks down azathioprine.", defVi: "Xét nghiệm máu đo một loại enzym có nhiệm vụ phân giải azathioprin." },
  { id: "blood-glucose", group: "safety", en: "Blood glucose", vi: "Đường huyết", defEn: "The amount of sugar in the blood.", defVi: "Lượng đường trong máu." },
  { id: "lipid-panel", group: "safety", en: "Lipid panel", vi: "Bộ mỡ máu", defEn: "Blood tests that measure cholesterol and other fats.", defVi: "Các xét nghiệm máu đo cholesterol và các chất béo khác." },
  { id: "drug-level", group: "safety", en: "Drug level (trough level)", vi: "Nồng độ thuốc trong máu (nồng độ đáy)", defEn: "A blood test that measures how much of a medicine is in the blood.", defVi: "Xét nghiệm máu đo lượng thuốc đang có trong máu." },
  { id: "inr", group: "safety", en: "International normalised ratio (INR)", vi: "Chỉ số INR", defEn: "A blood test that shows how long blood takes to clot.", defVi: "Xét nghiệm máu cho biết máu mất bao lâu để đông." },

  // ---------- Reading a report ----------
  { id: "reference-range", group: "report", en: "Reference range", vi: "Khoảng tham chiếu", defEn: "The span of values a laboratory treats as usual for a test. It differs between laboratories.", defVi: "Khoảng giá trị mà phòng xét nghiệm coi là thông thường cho một xét nghiệm. Mỗi phòng xét nghiệm có khoảng khác nhau." },
  { id: "unit", group: "report", en: "Unit of measurement", vi: "Đơn vị đo", defEn: "The scale a result is counted in, printed beside the number.", defVi: "Cho biết kết quả được tính theo thang nào, in ngay cạnh con số." },
  { id: "positive-negative", group: "report", en: "Positive and negative result", vi: "Kết quả dương tính và âm tính", defEn: "Positive means the test found what it was looking for; negative means it did not.", defVi: "Dương tính nghĩa là xét nghiệm tìm thấy thứ cần tìm; âm tính nghĩa là không tìm thấy." },
  { id: "false-positive", group: "report", en: "False positive", vi: "Dương tính giả", defEn: "A positive result in a person who does not have the condition.", defVi: "Kết quả dương tính ở người thực ra không có bệnh hay tình trạng đang tìm." },
];
