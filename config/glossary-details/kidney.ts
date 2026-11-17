import type { TermDetail } from "./types.ts";

export const kidney: Record<string, TermDetail> = {
  creatinine: {
    en: [
      ["what", "Creatinine is a waste product that muscles release into the blood at a steady rate. The kidneys filter it out into the urine. When the kidneys filter less well, creatinine stays in the blood and its amount rises."],
      ["why", "Lupus can inflame the kidneys, often without any symptoms at first. Creatinine is measured at regular visits to watch how well the kidneys are filtering. It also guides the use of medicines that the kidneys clear from the body."],
      ["report", "Blood creatinine is reported in µmol/L or mg/dL beside a reference range. Most reports print an eGFR next to it, a calculation of kidney filtering based on the creatinine result."],
      ["know", "Creatinine depends on muscle mass, so usual values differ between people. It can also rise briefly with dehydration, a large meat meal or some medicines. Doctors compare each result with a person's own earlier ones."],
    ],
    vi: [
      ["what", "Creatinin là chất thải mà cơ bắp thải vào máu với tốc độ đều đặn. Thận lọc creatinin ra nước tiểu. Khi thận lọc kém đi, creatinin ứ lại trong máu và tăng lên."],
      ["why", "Lupus có thể gây viêm thận, ban đầu thường không có triệu chứng. Creatinin được đo ở các lần khám định kỳ để theo dõi khả năng lọc của thận. Đây cũng là căn cứ để bác sĩ cân nhắc khi dùng những thuốc được thải qua thận."],
      ["report", "Creatinin máu được ghi theo đơn vị µmol/L hoặc mg/dL, đặt cạnh khoảng tham chiếu. Phần lớn phiếu kết quả in thêm eGFR bên cạnh, là chỉ số ước tính khả năng lọc của thận dựa trên kết quả creatinin."],
      ["know", "Creatinin phụ thuộc vào khối lượng cơ, nên mức thông thường của mỗi người một khác. Creatinin cũng có thể tăng tạm thời khi mất nước, sau bữa ăn nhiều thịt hoặc khi dùng một số thuốc. Bác sĩ so sánh mỗi kết quả với các kết quả trước của chính người bệnh."],
    ],
  },

  egfr: {
    en: [
      ["what", "The estimated glomerular filtration rate, or eGFR, is a calculation of how much blood the kidneys filter each minute. It is not measured directly. A formula works it out from the blood creatinine together with age and sex."],
      ["why", "eGFR is easier to follow over time than creatinine alone, because it puts kidney function on one scale. It is used to follow the kidneys in lupus and to stage long-term kidney disease."],
      ["report", "It is printed next to creatinine, in mL/min/1.73 m². Many laboratories do not print exact values at the high end and write only \"above\" a certain number."],
      ["know", "eGFR is an estimate. It is less accurate in people with unusually high or low muscle mass, in pregnancy, and when kidney function is changing quickly."],
    ],
    vi: [
      ["what", "Độ lọc cầu thận ước tính, viết tắt eGFR, là con số ước tính lượng máu thận lọc được mỗi phút. Chỉ số này không được đo trực tiếp mà được tính bằng công thức từ creatinin máu cùng với tuổi và giới tính."],
      ["why", "So với chỉ riêng creatinin, eGFR dễ theo dõi theo thời gian hơn, vì nó quy chức năng thận về cùng một thang đo. eGFR được dùng để theo dõi thận ở người bệnh lupus và để phân giai đoạn bệnh thận mạn."],
      ["report", "eGFR được in cạnh creatinin, theo đơn vị mL/phút/1,73 m². Ở mức cao, nhiều phòng xét nghiệm không in giá trị chính xác mà chỉ ghi \"trên\" một con số nào đó."],
      ["know", "eGFR chỉ là con số ước tính. Con số này kém chính xác hơn ở người có khối lượng cơ quá nhiều hoặc quá ít, khi mang thai, và khi chức năng thận đang thay đổi nhanh."],
    ],
  },

  urea: {
    en: [
      ["what", "Urea is a waste product made by the liver when the body breaks down protein. The kidneys remove it from the blood. BUN, blood urea nitrogen, is another way of reporting the same test."],
      ["why", "Urea is measured together with creatinine as part of a kidney function check."],
      ["report", "It appears as urea, in mmol/L, or as BUN, in mg/dL. The two use different scales, so their numbers are not the same."],
      ["know", "Urea is less specific to the kidneys than creatinine. It also goes up with dehydration, a high-protein diet, bleeding in the gut and glucocorticoid treatment."],
    ],
    vi: [
      ["what", "Urê là chất thải do gan tạo ra khi cơ thể phân giải protein. Thận lọc urê khỏi máu. BUN, tức nitơ urê máu, là một cách ghi khác của cùng xét nghiệm này."],
      ["why", "Urê được đo cùng với creatinin trong bộ xét nghiệm kiểm tra chức năng thận."],
      ["report", "Kết quả được ghi là urê, theo đơn vị mmol/L, hoặc BUN, theo đơn vị mg/dL. Hai cách ghi dùng thang đo khác nhau, nên con số không giống nhau."],
      ["know", "Urê kém đặc hiệu cho thận hơn creatinin. Urê còn tăng khi mất nước, ăn nhiều đạm, chảy máu đường tiêu hóa và khi dùng glucocorticoid."],
    ],
  },

  albumin: {
    en: [
      ["what", "Albumin is the most plentiful protein in the blood. The liver makes it. It keeps fluid inside the blood vessels and carries hormones, medicines and other substances around the body."],
      ["why", "When lupus nephritis lets a lot of protein leak into the urine, the blood albumin can fall. Measuring blood albumin helps show how heavy the protein loss is."],
      ["report", "Blood albumin is reported in g/L or g/dL. Urine tests also measure albumin, for example the urine albumin-to-creatinine ratio, and that is a different test from blood albumin."],
      ["know", "Blood albumin can also be low with ongoing inflammation, liver disease or poor nutrition."],
    ],
    vi: [
      ["what", "Albumin là protein có nhiều nhất trong máu, do gan tạo ra. Albumin giữ nước ở lại trong lòng mạch và vận chuyển hormon, thuốc cùng các chất khác đi khắp cơ thể."],
      ["why", "Khi viêm thận lupus làm nhiều protein lọt ra nước tiểu, albumin máu có thể giảm. Đo albumin máu giúp biết mức độ mất protein nặng đến đâu."],
      ["report", "Albumin máu được ghi theo đơn vị g/L hoặc g/dL. Xét nghiệm nước tiểu cũng đo albumin, ví dụ tỉ số albumin/creatinin niệu, nhưng đó là xét nghiệm khác với albumin máu."],
      ["know", "Albumin máu cũng có thể thấp khi có viêm kéo dài, bệnh gan hoặc dinh dưỡng kém."],
    ],
  },

  urinalysis: {
    en: [
      ["what", "A urinalysis is a basic examination of a urine sample. It has two parts. A dipstick, a strip with coloured pads, tests for protein, blood, white cells and other substances. Often the urine is also looked at under a microscope for cells and casts; this part is called the sediment."],
      ["why", "Kidney inflammation in lupus often gives no symptoms early on. A urinalysis can show the first signs, so guidelines advise repeating it regularly in everyone with lupus."],
      ["report", "Dipstick results are given as negative, trace or a number of plus signs. Microscope results are given as cells per field of view."],
      ["know", "The dipstick is a screening test. If it shows protein, the amount is then measured properly with a urine protein-to-creatinine ratio. Menstrual blood, a urine infection or recent hard exercise can affect the result."],
    ],
    vi: [
      ["what", "Tổng phân tích nước tiểu là xét nghiệm cơ bản trên một mẫu nước tiểu, gồm hai phần. Phần que thử dùng một que có các ô đổi màu để kiểm tra protein, máu, bạch cầu và các chất khác. Ngoài ra nước tiểu thường còn được soi dưới kính hiển vi để tìm tế bào và trụ niệu; phần này gọi là soi cặn lắng."],
      ["why", "Ở giai đoạn đầu, viêm thận do lupus thường không gây triệu chứng. Tổng phân tích nước tiểu có thể cho thấy những dấu hiệu đầu tiên, nên các hướng dẫn điều trị khuyên làm lại định kỳ cho mọi người bệnh lupus."],
      ["report", "Kết quả que thử được ghi là âm tính, vết hoặc một số dấu cộng. Kết quả soi kính hiển vi được ghi theo số tế bào trên mỗi vi trường."],
      ["know", "Que thử là xét nghiệm sàng lọc. Nếu que thử cho thấy có protein, lượng protein sẽ được đo chính xác bằng tỉ số protein/creatinin niệu. Máu kinh, nhiễm trùng tiểu hoặc vận động gắng sức gần đây có thể ảnh hưởng đến kết quả."],
    ],
  },

  proteinuria: {
    en: [
      ["what", "Proteinuria means there is more protein in the urine than usual. Healthy kidney filters hold protein back in the blood. When the filters are inflamed or damaged, protein leaks through."],
      ["why", "Proteinuria is the main lab sign of lupus nephritis. It is used to find kidney involvement, to decide whether a kidney biopsy is needed, and to follow how the kidneys respond to treatment."],
      ["report", "A dipstick shows it as plus signs. The amount is measured with a urine protein-to-creatinine ratio or a 24-hour urine collection."],
      ["know", "Protein in the urine is not always from lupus. Fever, hard exercise, a urine infection or standing for a long time can raise it for a short while, so a first finding is usually confirmed with a second sample."],
    ],
    vi: [
      ["what", "Protein niệu (đạm niệu) nghĩa là có nhiều protein trong nước tiểu hơn bình thường. Ở thận khỏe mạnh, màng lọc giữ protein lại trong máu. Khi màng lọc bị viêm hoặc tổn thương, protein lọt qua."],
      ["why", "Protein niệu là dấu hiệu xét nghiệm chính của viêm thận lupus. Chỉ số này được dùng để phát hiện tổn thương thận, quyết định có cần sinh thiết thận hay không, và theo dõi thận đáp ứng với điều trị ra sao."],
      ["report", "Trên que thử, protein niệu được thể hiện bằng các dấu cộng. Lượng protein được đo bằng tỉ số protein/creatinin niệu hoặc bằng nước tiểu gom trong 24 giờ."],
      ["know", "Protein trong nước tiểu không phải lúc nào cũng do lupus. Sốt, vận động gắng sức, nhiễm trùng tiểu hoặc đứng lâu có thể làm protein niệu tăng trong thời gian ngắn, nên kết quả bất thường lần đầu thường được kiểm tra lại bằng mẫu thứ hai."],
    ],
  },

  upcr: {
    en: [
      ["what", "The urine protein-to-creatinine ratio, or UPCR, compares the amount of protein with the amount of creatinine in a single urine sample. Creatinine leaves the body at a steady rate, so dividing by it corrects for how dilute or concentrated the urine is."],
      ["why", "It gives an estimate of the protein lost over a whole day without collecting urine for 24 hours. This makes it practical to repeat at every visit to watch for lupus nephritis and follow its treatment."],
      ["report", "It is reported as a ratio, in mg/mmol, mg/mg or g/g depending on the laboratory. The scales differ a great deal, so the unit must be read with the number."],
      ["know", "A sample from the first urine of the morning gives the most consistent results. Some laboratories report an albumin-to-creatinine ratio (UACR), which measures only albumin and is a related but different test."],
    ],
    vi: [
      ["what", "Tỉ số protein/creatinin niệu, viết tắt UPCR, so sánh lượng protein với lượng creatinin trong một mẫu nước tiểu duy nhất. Creatinin được thải ra với tốc độ đều đặn, nên chia cho creatinin giúp loại bỏ ảnh hưởng của việc nước tiểu loãng hay đặc."],
      ["why", "Xét nghiệm này cho phép ước tính lượng protein mất trong cả ngày mà không cần gom nước tiểu 24 giờ. Nhờ vậy có thể làm lại ở mỗi lần khám để phát hiện viêm thận lupus và theo dõi điều trị."],
      ["report", "Kết quả được ghi dưới dạng tỉ số, theo đơn vị mg/mmol, mg/mg hoặc g/g tùy phòng xét nghiệm. Các thang đo này khác nhau rất nhiều, nên phải đọc con số cùng với đơn vị."],
      ["know", "Mẫu nước tiểu đầu tiên của buổi sáng cho kết quả ổn định nhất. Một số phòng xét nghiệm dùng tỉ số albumin/creatinin niệu (UACR), chỉ đo albumin; đây là xét nghiệm có liên quan nhưng không giống."],
    ],
  },

  "urine-24h": {
    en: [
      ["what", "A 24-hour urine protein test measures all the protein passed in the urine over one full day. Every drop of urine during that time is collected in a container and taken to the laboratory."],
      ["why", "It is the most direct way to measure protein loss. Some doctors use it to confirm a result from a single sample, at the time lupus nephritis is diagnosed, or when a decision depends on an exact figure."],
      ["report", "The result is the amount of protein per day, in g or mg per 24 hours. The report usually also gives the total volume of urine collected."],
      ["know", "The result is only as good as the collection. A missed sample makes it read too low. This is why the single-sample ratio, UPCR, is used for most routine follow-up."],
    ],
    vi: [
      ["what", "Xét nghiệm protein niệu 24 giờ đo toàn bộ lượng protein thải qua nước tiểu trong trọn một ngày. Người bệnh gom toàn bộ nước tiểu trong khoảng thời gian đó vào một bình chứa và mang đến phòng xét nghiệm."],
      ["why", "Đây là cách trực tiếp nhất để đo lượng protein mất đi. Một số bác sĩ dùng xét nghiệm này để kiểm tra lại kết quả từ một mẫu đơn lẻ, khi chẩn đoán viêm thận lupus, hoặc khi cần con số chính xác để ra quyết định."],
      ["report", "Kết quả là lượng protein mỗi ngày, tính bằng g hoặc mg trong 24 giờ. Phiếu kết quả thường ghi thêm tổng thể tích nước tiểu đã gom."],
      ["know", "Kết quả chỉ chính xác khi gom đủ nước tiểu. Bỏ sót một lần đi tiểu sẽ làm kết quả thấp hơn thực tế. Vì vậy phần lớn các lần theo dõi định kỳ dùng tỉ số trên một mẫu đơn lẻ (UPCR)."],
    ],
  },

  hematuria: {
    en: [
      ["what", "Hematuria means red blood cells in the urine. Often the amount is too small to change the colour of the urine and it is found only on testing; this is called microscopic hematuria."],
      ["why", "In lupus, inflamed kidney filters can let red cells through. Together with protein in the urine, hematuria is one of the signs that makes doctors look for lupus nephritis."],
      ["report", "A dipstick reports \"blood\" as negative, trace or plus signs. The microscope gives the number of red cells per field of view. Some reports note \"dysmorphic\" red cells, meaning misshapen cells, which suggests they came through the kidney filters."],
      ["know", "Blood in the urine has many other causes, including menstruation, urine infections and kidney stones. A dipstick result is usually confirmed under the microscope."],
    ],
    vi: [
      ["what", "Tiểu máu nghĩa là có hồng cầu trong nước tiểu. Thường lượng máu quá ít, không làm đổi màu nước tiểu và chỉ được phát hiện qua xét nghiệm; khi đó gọi là tiểu máu vi thể."],
      ["why", "Ở người bệnh lupus, màng lọc của thận khi bị viêm có thể để hồng cầu lọt qua. Cùng với protein trong nước tiểu, tiểu máu là một trong những dấu hiệu khiến bác sĩ nghĩ đến viêm thận lupus."],
      ["report", "Que thử ghi mục \"máu\" là âm tính, vết hoặc các dấu cộng. Soi kính hiển vi cho biết số hồng cầu trên mỗi vi trường. Một số phiếu kết quả ghi hồng cầu \"biến dạng\", tức hồng cầu méo mó, gợi ý chúng đã đi qua màng lọc của thận."],
      ["know", "Máu trong nước tiểu có nhiều nguyên nhân khác, gồm kinh nguyệt, nhiễm trùng tiểu và sỏi thận. Kết quả que thử thường được xác nhận lại dưới kính hiển vi."],
    ],
  },

  "urinary-casts": {
    en: [
      ["what", "Casts are tiny tube-shaped particles that form inside the kidney's small tubes and are washed out in the urine. They are too small to see without a microscope. They are named after what they contain: hyaline casts are made of protein alone, red cell casts contain red blood cells, and granular casts contain broken-down cell material."],
      ["why", "Because casts are formed inside the kidney, they show that what they contain came from the kidney and not from the bladder. Red cell casts point to inflammation of the kidney filters, as in lupus nephritis."],
      ["report", "They are listed in the microscopy or sediment part of a urinalysis, by type and number per field of view."],
      ["know", "A few hyaline casts can be found in healthy people, for example after exercise. Casts break down quickly, so a fresh sample is needed to see them."],
    ],
    vi: [
      ["what", "Trụ niệu là những hạt nhỏ hình ống hình thành bên trong các ống nhỏ của thận rồi trôi ra theo nước tiểu. Chúng rất nhỏ, phải dùng kính hiển vi mới thấy. Trụ niệu được đặt tên theo thành phần: trụ trong chỉ gồm protein, trụ hồng cầu chứa hồng cầu, và trụ hạt chứa mảnh vụn tế bào."],
      ["why", "Vì trụ niệu hình thành bên trong thận, những gì nằm trong trụ chắc chắn đến từ thận chứ không phải từ bàng quang. Trụ hồng cầu gợi ý màng lọc của thận đang viêm, như trong viêm thận lupus."],
      ["report", "Trụ niệu được liệt kê trong phần soi kính hiển vi hoặc cặn lắng của tổng phân tích nước tiểu, theo loại và số lượng trên mỗi vi trường."],
      ["know", "Một vài trụ trong có thể gặp ở người khỏe mạnh, ví dụ sau khi vận động. Trụ niệu phân hủy nhanh, nên cần mẫu nước tiểu mới lấy thì mới thấy được."],
    ],
  },

  "lupus-nephritis": {
    en: [
      ["what", "Lupus nephritis is inflammation of the kidneys caused by lupus. Immune complexes, which are clusters of autoantibodies and their targets, settle in the kidney's filters and inflame them. It affects a large share of people with lupus at some point and is one of the most important organ problems in the disease."],
      ["report", "It usually causes no symptoms at first and is found through tests: protein in the urine, blood or casts in the urine, or a rise in creatinine. Anti-dsDNA is often raised and complement low at the same time. The diagnosis is confirmed with a kidney biopsy, which also gives a class from I to VI describing the type of inflammation."],
      ["know", "This is the main reason urine and creatinine are checked regularly in everyone with lupus, including people who feel well."],
    ],
    vi: [
      ["what", "Viêm thận lupus là tình trạng viêm thận do lupus gây ra. Phức hợp miễn dịch, tức các cụm gồm tự kháng thể và mục tiêu của chúng, lắng đọng ở màng lọc của thận và gây viêm. Nhiều người bệnh lupus gặp tình trạng này vào một lúc nào đó, và đây là một trong những tổn thương cơ quan quan trọng nhất của bệnh."],
      ["report", "Ban đầu viêm thận lupus thường không gây triệu chứng và được phát hiện qua xét nghiệm: có protein trong nước tiểu, có máu hoặc trụ niệu trong nước tiểu, hoặc creatinin tăng. Cùng lúc đó anti-dsDNA thường tăng và bổ thể thấp. Chẩn đoán được xác định bằng sinh thiết thận; sinh thiết cũng cho biết bệnh thuộc nhóm nào từ I đến VI, tùy theo kiểu viêm."],
      ["know", "Đây là lý do chính khiến nước tiểu và creatinin được kiểm tra định kỳ ở mọi người bệnh lupus, kể cả những người thấy khỏe."],
    ],
  },

  "kidney-biopsy": {
    en: [
      ["what", "A kidney biopsy takes a very small sample of kidney tissue with a thin needle, guided by ultrasound. A specialist doctor called a pathologist then studies the sample under several kinds of microscope."],
      ["why", "Urine and blood tests can show that the kidneys are affected, but not which kind of lupus nephritis is present or how much lasting scarring there is. The biopsy answers both questions, and the choice of treatment depends on the answers."],
      ["report", "The biopsy report gives a class from I to VI. It often adds an activity score, for inflammation that is happening now, and a chronicity score, for scarring that is already there."],
      ["know", "Blood clotting tests and a platelet count are checked beforehand, because the main risk of the procedure is bleeding."],
    ],
    vi: [
      ["what", "Sinh thiết thận là lấy một mẫu mô thận rất nhỏ bằng kim mảnh, dưới hướng dẫn của siêu âm. Sau đó bác sĩ giải phẫu bệnh xem mẫu dưới nhiều loại kính hiển vi."],
      ["why", "Xét nghiệm nước tiểu và máu có thể cho thấy thận bị ảnh hưởng, nhưng không cho biết đó là loại viêm thận lupus nào hay thận đã bị xơ sẹo vĩnh viễn nhiều hay ít. Sinh thiết trả lời được cả hai câu hỏi, và việc chọn cách điều trị dựa vào đó."],
      ["report", "Kết quả sinh thiết xếp bệnh vào một nhóm từ I đến VI. Thường có thêm chỉ số hoạt động, nói về tình trạng viêm đang diễn ra, và chỉ số mạn tính, nói về phần xơ sẹo đã có."],
      ["know", "Trước khi sinh thiết, người bệnh được làm xét nghiệm đông máu và đếm tiểu cầu, vì nguy cơ chính của thủ thuật là chảy máu."],
    ],
  },
};
