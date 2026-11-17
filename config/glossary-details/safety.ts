import type { TermDetail } from "./types.ts";

export const safety: Record<string, TermDetail> = {
  "liver-enzymes": {
    en: [
      ["what", "Liver enzymes are proteins that normally work inside liver cells. When liver cells are irritated or damaged, the enzymes leak into the blood and their amounts rise. The two measured most often are ALT and AST, together called transaminases."],
      ["why", "Several lupus medicines can irritate the liver, among them methotrexate, azathioprine and NSAIDs. Liver enzymes are checked before starting these medicines and regularly afterwards. Lupus itself can also affect the liver, though this is less common."],
      ["report", "ALT and AST are reported in U/L. A \"liver panel\" often adds ALP, GGT, bilirubin and albumin, which look at other aspects of the liver."],
      ["know", "AST is also found in muscle, so it can rise after hard exercise or with muscle inflammation. ALT is more specific to the liver. Alcohol, fatty liver, viral infections and many common medicines can raise both."],
    ],
    vi: [
      ["what", "Men gan là các protein bình thường hoạt động bên trong tế bào gan. Khi tế bào gan bị kích ứng hoặc tổn thương, các men này thoát vào máu và tăng lên. Hai loại được đo nhiều nhất là ALT và AST, gọi chung là transaminase."],
      ["why", "Một số thuốc điều trị lupus có thể ảnh hưởng đến gan, trong đó có methotrexat, azathioprin và NSAID. Men gan được kiểm tra trước khi bắt đầu các thuốc này và định kỳ sau đó. Bản thân lupus cũng có thể ảnh hưởng đến gan, dù ít gặp hơn."],
      ["report", "ALT và AST được ghi theo đơn vị U/L. \"Bộ xét nghiệm gan\" thường có thêm ALP, GGT, bilirubin và albumin, là những chỉ số đánh giá các khía cạnh khác của gan."],
      ["know", "AST cũng có trong cơ, nên có thể tăng sau khi vận động gắng sức hoặc khi viêm cơ. ALT đặc hiệu cho gan hơn. Rượu bia, gan nhiễm mỡ, nhiễm virus và nhiều thuốc thông dụng có thể làm tăng cả hai."],
    ],
  },

  bilirubin: {
    en: [
      ["what", "Bilirubin is a yellow substance formed when old red blood cells are broken down. The liver processes it and passes it out in bile. A large amount in the blood turns the skin and the whites of the eyes yellow, which is called jaundice."],
      ["why", "Bilirubin is part of the liver panel checked with some lupus medicines. It also rises when red blood cells are destroyed faster than usual, so it is one of the tests used when hemolytic anemia is suspected."],
      ["report", "It is reported as total bilirubin, in µmol/L or mg/dL. Many reports split it into direct (conjugated) bilirubin, already processed by the liver, and indirect (unconjugated) bilirubin, not yet processed. Which part is raised points towards the cause."],
      ["know", "Some healthy people have a harmless inherited trait called Gilbert's syndrome, in which bilirubin runs slightly high, especially when fasting or unwell."],
    ],
    vi: [
      ["what", "Bilirubin là chất màu vàng hình thành khi hồng cầu già bị phá hủy. Gan xử lý bilirubin rồi thải ra theo mật. Khi có nhiều trong máu, bilirubin làm vàng da và vàng lòng trắng mắt, gọi là hoàng đản."],
      ["why", "Bilirubin nằm trong bộ xét nghiệm gan được làm khi dùng một số thuốc điều trị lupus. Bilirubin cũng tăng khi hồng cầu bị phá hủy nhanh hơn bình thường, nên là một trong các xét nghiệm được làm khi nghi ngờ thiếu máu tán huyết."],
      ["report", "Kết quả được ghi là bilirubin toàn phần, theo đơn vị µmol/L hoặc mg/dL. Nhiều phiếu kết quả tách thành bilirubin trực tiếp (liên hợp), là phần đã được gan xử lý, và bilirubin gián tiếp (chưa liên hợp), là phần chưa được xử lý. Phần nào tăng sẽ gợi ý nguyên nhân."],
      ["know", "Một số người khỏe mạnh có một đặc điểm di truyền vô hại gọi là hội chứng Gilbert, khiến bilirubin hơi cao, nhất là khi nhịn đói hoặc đang ốm."],
    ],
  },

  tpmt: {
    en: [
      ["what", "TPMT, in full thiopurine methyltransferase, is an enzyme that breaks down azathioprine in the body. The amount of working enzyme is inherited. Most people have plenty, some have a reduced amount, and a few have almost none."],
      ["why", "In people with little TPMT, azathioprine builds up and can lower blood cell counts sharply. Many clinics therefore test TPMT once, before azathioprine is started, to help choose a suitable approach."],
      ["report", "The laboratory may measure the enzyme's activity, reported as normal, intermediate or low, or it may test the gene and report the variants found. Some laboratories also test a second gene, NUDT15, whose variants are more common in people of East Asian ancestry."],
      ["know", "A normal TPMT result does not replace regular blood counts during treatment. Blood counts can fall for other reasons."],
    ],
    vi: [
      ["what", "TPMT, tên đầy đủ là thiopurin methyltransferase, là enzym phân giải azathioprin trong cơ thể. Mỗi người có nhiều hay ít enzym hoạt động là do di truyền. Phần lớn mọi người có đủ, một số người có ít hơn, và một số rất ít người gần như không có."],
      ["why", "Ở người có ít TPMT, azathioprin tích tụ lại và có thể làm số tế bào máu giảm mạnh. Vì vậy nhiều cơ sở y tế xét nghiệm TPMT một lần trước khi bắt đầu azathioprin, để giúp chọn cách dùng thuốc phù hợp."],
      ["report", "Phòng xét nghiệm có thể đo hoạt độ enzym, ghi là bình thường, trung gian hoặc thấp, hoặc xét nghiệm gen và ghi các biến thể tìm thấy. Một số phòng xét nghiệm còn xét nghiệm gen thứ hai là NUDT15, có các biến thể thường gặp hơn ở người gốc Đông Á."],
      ["know", "Kết quả TPMT bình thường không thay thế việc làm công thức máu định kỳ trong quá trình điều trị. Số tế bào máu có thể giảm vì những lý do khác."],
    ],
  },

  "blood-glucose": {
    en: [
      ["what", "Blood glucose is the amount of sugar in the blood. The body keeps it within limits using insulin, a hormone made by the pancreas."],
      ["why", "Glucocorticoids raise blood glucose, more so in larger amounts and with longer use. Tacrolimus can raise it too. Blood glucose is therefore checked in people taking these medicines."],
      ["report", "A single measurement is reported in mmol/L or mg/dL, and the report may say whether the sample was taken fasting. HbA1c is a related test, reported as a percentage or in mmol/mol, that reflects average glucose over the past two to three months."],
      ["know", "With glucocorticoids, glucose tends to rise most in the afternoon and evening, so a fasting morning sample can miss it. HbA1c can read falsely low when red blood cells are short-lived, as in hemolytic anemia."],
    ],
    vi: [
      ["what", "Đường huyết là lượng đường trong máu. Cơ thể giữ đường huyết trong một giới hạn nhất định nhờ insulin, một hormon do tuyến tụy tạo ra."],
      ["why", "Glucocorticoid làm tăng đường huyết, càng dùng lượng lớn và kéo dài thì càng tăng nhiều. Tacrolimus cũng có thể làm tăng đường huyết. Vì vậy người dùng các thuốc này được kiểm tra đường huyết."],
      ["report", "Kết quả một lần đo được ghi theo đơn vị mmol/L hoặc mg/dL, và phiếu kết quả có thể ghi mẫu có được lấy lúc đói hay không. HbA1c là một xét nghiệm liên quan, ghi theo phần trăm hoặc mmol/mol, phản ánh đường huyết trung bình trong hai đến ba tháng gần nhất."],
      ["know", "Khi dùng glucocorticoid, đường huyết thường tăng nhiều nhất vào buổi chiều và tối, nên mẫu lấy lúc đói buổi sáng có thể không phát hiện được. HbA1c có thể thấp hơn thực tế khi hồng cầu sống ngắn hơn bình thường, như trong thiếu máu tán huyết."],
    ],
  },

  "lipid-panel": {
    en: [
      ["what", "A lipid panel is a group of blood tests that measure fats in the blood: total cholesterol, LDL cholesterol, HDL cholesterol and triglycerides."],
      ["why", "People with lupus have a higher chance of heart and blood vessel disease than other people of the same age, so guidelines advise checking the usual risk factors, including blood fats. Glucocorticoids and cyclosporine can raise them. Heavy protein loss in lupus nephritis also raises cholesterol."],
      ["report", "Each fat is reported in mmol/L or mg/dL. LDL is often calculated from the others and not measured directly. The report may say whether the sample was taken fasting."],
      ["know", "The printed ranges for lipids are general targets. The target that applies to one person depends on their overall heart risk, which their care team works out."],
    ],
    vi: [
      ["what", "Bộ mỡ máu là nhóm xét nghiệm máu đo các chất béo trong máu: cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid."],
      ["why", "Người bệnh lupus có nguy cơ mắc bệnh tim mạch cao hơn người cùng tuổi, nên các hướng dẫn điều trị khuyên kiểm tra những yếu tố nguy cơ thông thường, trong đó có mỡ máu. Glucocorticoid và cyclosporin có thể làm tăng mỡ máu. Mất nhiều protein qua nước tiểu trong viêm thận lupus cũng làm tăng cholesterol."],
      ["report", "Mỗi loại chất béo được ghi theo đơn vị mmol/L hoặc mg/dL. LDL thường được tính từ các chỉ số khác chứ không đo trực tiếp. Phiếu kết quả có thể ghi mẫu có được lấy lúc đói hay không."],
      ["know", "Các khoảng in sẵn cho mỡ máu là mục tiêu chung. Mục tiêu cho từng người phụ thuộc vào nguy cơ tim mạch tổng thể của người đó, do bác sĩ điều trị đánh giá."],
    ],
  },

  "drug-level": {
    en: [
      ["what", "A drug level is a blood test that measures how much of a medicine is in the blood. A trough level is taken just before the next dose, when the amount is at its lowest."],
      ["why", "It is used for medicines in which the gap between too little and too much is narrow, and in which the same dose gives different blood amounts in different people. In lupus this mainly means tacrolimus and cyclosporine. Some clinics also measure hydroxychloroquine or mycophenolate."],
      ["report", "The result is a number, in ng/mL or µg/L, with the range the laboratory or clinic is aiming for. The report should show the time the sample was taken."],
      ["know", "Timing decides what the number means. If the sample is taken after the dose and not before it, the result reads much higher and cannot be compared with a trough range."],
    ],
    vi: [
      ["what", "Nồng độ thuốc là xét nghiệm máu đo lượng thuốc đang có trong máu. Nồng độ đáy là kết quả từ mẫu máu lấy ngay trước liều kế tiếp, lúc lượng thuốc ở mức thấp nhất."],
      ["why", "Xét nghiệm này dùng cho những thuốc mà khoảng cách giữa quá ít và quá nhiều rất hẹp, và cùng một liều lại cho lượng thuốc trong máu khác nhau ở mỗi người. Với bệnh lupus, đó chủ yếu là tacrolimus và cyclosporin. Một số cơ sở y tế còn đo hydroxychloroquine hoặc mycophenolat."],
      ["report", "Kết quả là một con số, theo đơn vị ng/mL hoặc µg/L, kèm khoảng nồng độ mà phòng xét nghiệm hoặc bác sĩ muốn đạt. Phiếu kết quả nên ghi thời điểm lấy mẫu."],
      ["know", "Thời điểm lấy mẫu quyết định ý nghĩa của con số. Nếu mẫu được lấy sau khi uống thuốc chứ không phải trước, kết quả sẽ cao hơn nhiều và không so sánh được với khoảng nồng độ đáy."],
    ],
  },

  inr: {
    en: [
      ["what", "The international normalised ratio, or INR, shows how long a person's blood takes to clot compared with a standard. It is calculated from a clotting test called the prothrombin time (PT). The calculation makes results from different laboratories comparable."],
      ["why", "INR is used to follow warfarin, a medicine that slows clotting. Some people with lupus take warfarin because they have antiphospholipid antibodies and have had a blood clot. INR is also checked before procedures such as a kidney biopsy."],
      ["report", "INR is a plain number with no unit. A higher number means the blood takes longer to clot. For people on warfarin, the care team sets a target range, and it differs from the range printed for people not taking the medicine."],
      ["know", "In people with lupus anticoagulant, some finger-prick INR machines can read inaccurately, so a laboratory test on blood from a vein may be used."],
    ],
    vi: [
      ["what", "Chỉ số INR (tỉ số chuẩn hóa quốc tế) cho biết máu của một người mất bao lâu để đông so với một mẫu chuẩn. INR được tính từ một xét nghiệm đông máu gọi là thời gian prothrombin (PT). Nhờ cách tính này, kết quả từ các phòng xét nghiệm khác nhau so sánh được với nhau."],
      ["why", "INR được dùng để theo dõi việc dùng warfarin, thuốc làm chậm đông máu. Một số người bệnh lupus dùng warfarin vì có kháng thể kháng phospholipid và đã từng bị cục máu đông. INR cũng được kiểm tra trước các thủ thuật như sinh thiết thận."],
      ["report", "INR là một con số không có đơn vị. Số càng cao nghĩa là máu càng lâu đông. Với người dùng warfarin, bác sĩ đặt một khoảng mục tiêu riêng, khác với khoảng in sẵn dành cho người không dùng thuốc."],
      ["know", "Ở người có kháng đông lupus, một số máy đo INR bằng máu đầu ngón tay có thể cho kết quả không chính xác, nên có thể cần làm xét nghiệm tại phòng xét nghiệm với máu lấy từ tĩnh mạch."],
    ],
  },
};
