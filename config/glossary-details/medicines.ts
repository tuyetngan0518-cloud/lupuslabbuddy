import type { TermDetail } from "./types.ts";

export const medicines: Record<string, TermDetail> = {
  immunosuppressant: {
    en: [
      ["what", "An immunosuppressant is any medicine that turns down the immune system. In lupus the immune system attacks the body's own tissues, so calming it can protect organs such as the kidneys. Methotrexate, azathioprine, mycophenolate mofetil, cyclophosphamide, tacrolimus and cyclosporine all belong to this family."],
      ["labs", "Most of these medicines can affect the bone marrow, where blood cells are made, and some affect the liver or kidneys. This is why a complete blood count, liver enzymes and creatinine are usually checked before starting and then at regular visits. Tests for hidden infections, such as hepatitis B, are often done before the first dose."],
      ["know", "Checks are usually closer together in the first months and after a change of dose, then further apart once results are steady. The exact timing differs between medicines and between clinics."],
    ],
    vi: [
      ["what", "Thuốc ức chế miễn dịch là tên gọi chung của các thuốc làm giảm hoạt động của hệ miễn dịch. Ở người bệnh lupus, hệ miễn dịch tấn công chính các mô của cơ thể, nên làm dịu hệ miễn dịch có thể bảo vệ các cơ quan như thận. Methotrexat, azathioprin, mycophenolat mofetil, cyclophosphamid, tacrolimus và cyclosporin đều thuộc nhóm này."],
      ["labs", "Phần lớn các thuốc này có thể ảnh hưởng đến tủy xương, nơi tạo ra tế bào máu, và một số thuốc ảnh hưởng đến gan hoặc thận. Vì vậy công thức máu, men gan và creatinin thường được kiểm tra trước khi bắt đầu và ở các lần tái khám định kỳ. Xét nghiệm tìm nhiễm trùng tiềm ẩn, ví dụ viêm gan B, thường được làm trước liều đầu tiên."],
      ["know", "Trong những tháng đầu và sau khi đổi liều, các lần xét nghiệm thường gần nhau hơn, rồi thưa dần khi kết quả ổn định. Lịch cụ thể khác nhau tùy thuốc và tùy cơ sở y tế."],
    ],
  },

  hydroxychloroquine: {
    en: [
      ["what", "Hydroxychloroquine is a tablet first developed to treat malaria. It gently adjusts how the immune system works, without switching it off."],
      ["why", "It is the medicine most widely used in lupus, and many people take it for years. Guidelines recommend it for most people with lupus because it is linked to fewer flares over time."],
      ["labs", "Hydroxychloroquine does not need frequent blood tests of its own. The blood count and kidney tests that are part of regular lupus visits also cover it. Kidney function matters because the kidneys help clear the medicine from the body, so doctors take it into account. Some clinics can measure the amount of hydroxychloroquine in the blood."],
      ["know", "The best-known check for this medicine is not a lab test. It is a regular eye examination, because long-term use can, uncommonly, affect the retina at the back of the eye."],
    ],
    vi: [
      ["what", "Hydroxychloroquine là thuốc viên ban đầu được bào chế để điều trị sốt rét. Thuốc điều chỉnh nhẹ hoạt động của hệ miễn dịch chứ không ức chế hẳn."],
      ["why", "Đây là thuốc được dùng rộng rãi nhất trong bệnh lupus, và nhiều người dùng suốt nhiều năm. Các hướng dẫn điều trị khuyên dùng thuốc này cho phần lớn người bệnh lupus, vì thuốc có liên quan đến việc ít bị bùng phát hơn về lâu dài."],
      ["labs", "Hydroxychloroquine không cần xét nghiệm máu thường xuyên dành riêng cho thuốc. Công thức máu và xét nghiệm thận trong các lần tái khám lupus định kỳ đã đủ để theo dõi. Chức năng thận quan trọng vì thận giúp thải thuốc ra khỏi cơ thể, nên bác sĩ có tính đến yếu tố này. Một số cơ sở y tế có thể đo lượng hydroxychloroquine trong máu."],
      ["know", "Việc kiểm tra quen thuộc nhất với thuốc này không phải là xét nghiệm máu mà là khám mắt định kỳ, vì dùng thuốc lâu dài có thể ảnh hưởng đến võng mạc ở đáy mắt, dù không thường gặp."],
    ],
  },

  glucocorticoids: {
    en: [
      ["what", "Glucocorticoids, often called corticosteroids or just steroids, are man-made versions of cortisol, a hormone the body makes itself. Prednisolone, prednisone and methylprednisolone are the ones used most in lupus. They are not the same as the steroids some athletes misuse."],
      ["why", "They calm inflammation faster than any other lupus medicine, so they are often used when lupus is active while slower medicines take effect."],
      ["labs", "Glucocorticoids can raise blood sugar and blood fats, so blood glucose and a lipid panel may be checked. Potassium is sometimes measured as well."],
      ["report", "These medicines change the blood count in a known way: the number of neutrophils often goes up and the number of lymphocytes goes down. This is a reason a blood count is read together with the list of medicines a person takes."],
      ["know", "Bone strength is usually followed with a bone density scan, which is an imaging test, not a lab test."],
    ],
    vi: [
      ["what", "Glucocorticoid, thường gọi là corticoid, là dạng tổng hợp của cortisol, một hormon cơ thể tự tạo ra. Prednisolon, prednison và methylprednisolon là những thuốc được dùng nhiều nhất trong bệnh lupus. Chúng khác với loại steroid mà một số vận động viên lạm dụng."],
      ["why", "Nhóm thuốc này làm dịu tình trạng viêm nhanh hơn mọi thuốc điều trị lupus khác, nên thường được dùng khi lupus đang hoạt động, trong lúc chờ các thuốc tác dụng chậm phát huy hiệu quả."],
      ["labs", "Glucocorticoid có thể làm tăng đường huyết và mỡ máu, nên người bệnh có thể được kiểm tra đường huyết và bộ mỡ máu. Đôi khi kali máu cũng được đo."],
      ["report", "Nhóm thuốc này làm thay đổi công thức máu theo một cách đã biết rõ: số bạch cầu trung tính thường tăng và số tế bào lympho giảm. Đây là một lý do công thức máu luôn được đọc cùng với danh sách thuốc người bệnh đang dùng."],
      ["know", "Độ chắc khỏe của xương thường được theo dõi bằng đo mật độ xương; đây là một kỹ thuật chẩn đoán hình ảnh, không phải xét nghiệm máu."],
    ],
  },

  prednisolone: {
    en: [
      ["what", "Prednisolone and prednisone are glucocorticoid tablets. They are close relatives: the liver turns prednisone into prednisolone, which is the form that works in the body. Which of the two is prescribed depends mostly on the country."],
      ["why", "They reduce inflammation quickly and are used when lupus is active. Guidelines describe using the lowest amount that keeps lupus under control."],
      ["labs", "The checks are the same as for all glucocorticoids: blood glucose and a lipid panel, and sometimes potassium."],
      ["report", "While a person takes these tablets, the white blood cell count on a complete blood count often reads higher, mainly because of more neutrophils, and the lymphocyte count often reads lower."],
    ],
    vi: [
      ["what", "Prednisolon và prednison là thuốc glucocorticoid dạng viên. Hai thuốc này rất gần nhau: gan chuyển prednison thành prednisolon, là dạng có tác dụng trong cơ thể. Dùng thuốc nào trong hai thuốc chủ yếu tùy theo từng nước."],
      ["why", "Thuốc giảm viêm nhanh và được dùng khi lupus đang hoạt động. Các hướng dẫn điều trị nêu nguyên tắc dùng lượng thấp nhất mà vẫn kiểm soát được lupus."],
      ["labs", "Các xét nghiệm theo dõi giống như với mọi glucocorticoid: đường huyết và bộ mỡ máu, đôi khi có kali máu."],
      ["report", "Trong thời gian dùng thuốc, số lượng bạch cầu trên công thức máu thường cao hơn, chủ yếu do bạch cầu trung tính tăng, còn số tế bào lympho thường thấp hơn."],
    ],
  },

  methylprednisolone: {
    en: [
      ["what", "Methylprednisolone is a glucocorticoid. It comes as tablets, and also as a liquid given through a drip into a vein."],
      ["why", "Tablets are used in the same way as prednisolone. The drip form, often called a pulse, is given in hospital over a few days when lupus is severe and inflammation needs to be brought down fast."],
      ["labs", "The checks are the same as for other glucocorticoids: blood glucose and a lipid panel. Around a pulse given by drip, blood glucose and potassium are often measured, because large amounts can shift them for a short time."],
      ["report", "As with other glucocorticoids, the neutrophil count often reads higher and the lymphocyte count lower for a while after treatment."],
    ],
    vi: [
      ["what", "Methylprednisolon là một thuốc glucocorticoid. Thuốc có dạng viên uống và dạng dung dịch truyền vào tĩnh mạch."],
      ["why", "Dạng viên được dùng tương tự prednisolon. Dạng truyền, thường gọi là liều xung (pulse), được dùng tại bệnh viện trong vài ngày khi lupus nặng và cần giảm viêm thật nhanh."],
      ["labs", "Các xét nghiệm theo dõi giống các glucocorticoid khác: đường huyết và bộ mỡ máu. Trong đợt truyền liều xung, đường huyết và kali máu thường được đo, vì lượng thuốc lớn có thể làm chúng thay đổi trong thời gian ngắn."],
      ["report", "Giống các glucocorticoid khác, số bạch cầu trung tính thường cao hơn và số tế bào lympho thấp hơn trong một thời gian sau khi dùng thuốc."],
    ],
  },

  methotrexate: {
    en: [
      ["what", "Methotrexate is an immunosuppressant. It is taken once a week, not every day, as tablets or as an injection under the skin."],
      ["why", "In lupus it is used mostly for joint and skin problems, and it can help lower the amount of glucocorticoid a person needs."],
      ["labs", "Three things are checked before starting and then regularly. A complete blood count, because the medicine can lower the number of blood cells. Liver enzymes, because it can irritate the liver. Creatinine, because the kidneys clear the medicine, and it can build up if they work less well."],
      ["know", "Tests are usually more frequent in the first months and after a change of dose. Hepatitis tests are often done before the first dose."],
    ],
    vi: [
      ["what", "Methotrexat là một thuốc ức chế miễn dịch. Thuốc được dùng mỗi tuần một lần, không phải mỗi ngày, dưới dạng viên uống hoặc tiêm dưới da."],
      ["why", "Ở người bệnh lupus, thuốc chủ yếu được dùng cho các biểu hiện ở khớp và da, và có thể giúp giảm lượng glucocorticoid người bệnh cần dùng."],
      ["labs", "Có ba xét nghiệm được làm trước khi bắt đầu và định kỳ sau đó. Công thức máu, vì thuốc có thể làm giảm số lượng tế bào máu. Men gan, vì thuốc có thể ảnh hưởng đến gan. Creatinin, vì thận thải thuốc ra ngoài, và thuốc có thể tích tụ nếu thận hoạt động kém hơn."],
      ["know", "Xét nghiệm thường được làm dày hơn trong những tháng đầu và sau khi đổi liều. Xét nghiệm viêm gan thường được làm trước liều đầu tiên."],
    ],
  },

  azathioprine: {
    en: [
      ["what", "Azathioprine is an immunosuppressant taken as tablets. It slows the growth of immune cells that drive inflammation."],
      ["why", "In lupus it is used to keep the disease quiet over the long term and to help reduce the need for glucocorticoids. It is one of the immunosuppressants that guidelines consider compatible with pregnancy."],
      ["labs", "A complete blood count and liver enzymes are checked before starting and regularly afterwards, because the medicine can lower blood cell numbers and can affect the liver. Many clinics also do a TPMT test once, before the first dose. TPMT is the enzyme that breaks azathioprine down, and people who naturally have little of it are more sensitive to the medicine."],
      ["report", "On a complete blood count, the red blood cells of people taking azathioprine are often slightly larger than usual. This appears as a higher MCV, the line that reports red cell size."],
    ],
    vi: [
      ["what", "Azathioprin là thuốc ức chế miễn dịch dạng viên uống. Thuốc làm chậm sự tăng sinh của các tế bào miễn dịch gây viêm."],
      ["why", "Ở người bệnh lupus, thuốc được dùng để giữ bệnh ổn định lâu dài và giúp giảm nhu cầu dùng glucocorticoid. Đây là một trong những thuốc ức chế miễn dịch mà các hướng dẫn điều trị coi là có thể dùng khi mang thai."],
      ["labs", "Công thức máu và men gan được kiểm tra trước khi bắt đầu và định kỳ sau đó, vì thuốc có thể làm giảm số lượng tế bào máu và ảnh hưởng đến gan. Nhiều cơ sở y tế cũng làm xét nghiệm TPMT một lần trước liều đầu tiên. TPMT là enzym phân giải azathioprin, và người bẩm sinh có ít enzym này sẽ nhạy cảm với thuốc hơn."],
      ["report", "Trên công thức máu, hồng cầu của người dùng azathioprin thường hơi to hơn bình thường. Điều này thể hiện ở chỉ số MCV cao hơn, là dòng cho biết kích thước hồng cầu."],
    ],
  },

  mycophenolate: {
    en: [
      ["what", "Mycophenolate mofetil, often shortened to MMF, is an immunosuppressant taken as tablets or capsules. A closely related form is called mycophenolic acid or mycophenolate sodium."],
      ["why", "It is one of the main medicines for lupus nephritis, which is kidney inflammation caused by lupus. It is also used for other forms of lupus that have not settled with first-line medicines."],
      ["labs", "A complete blood count is checked before starting and regularly afterwards, because the medicine can lower white blood cells and sometimes red blood cells. Liver enzymes and creatinine are usually checked alongside it."],
      ["know", "When the medicine is used for lupus nephritis, urine protein and creatinine are also followed closely. Those tests show how the kidneys are responding; they are not safety checks for the medicine itself."],
    ],
    vi: [
      ["what", "Mycophenolat mofetil, thường viết tắt là MMF, là thuốc ức chế miễn dịch dạng viên. Một dạng rất gần với nó có tên acid mycophenolic hoặc mycophenolat natri."],
      ["why", "Đây là một trong những thuốc chính để điều trị viêm thận lupus, tức tình trạng viêm thận do lupus gây ra. Thuốc cũng được dùng cho các thể lupus khác khi các thuốc lựa chọn đầu tiên chưa kiểm soát được bệnh."],
      ["labs", "Công thức máu được kiểm tra trước khi bắt đầu và định kỳ sau đó, vì thuốc có thể làm giảm bạch cầu và đôi khi cả hồng cầu. Men gan và creatinin thường được kiểm tra cùng lúc."],
      ["know", "Khi thuốc được dùng cho viêm thận lupus, protein niệu và creatinin cũng được theo dõi sát. Những xét nghiệm đó cho biết thận đáp ứng với điều trị ra sao; chúng không phải để theo dõi độ an toàn của thuốc."],
    ],
  },

  cyclophosphamide: {
    en: [
      ["what", "Cyclophosphamide is a strong immunosuppressant. It is most often given through a drip into a vein at set intervals, and sometimes as tablets."],
      ["why", "It is kept for severe lupus that threatens an organ, such as serious lupus nephritis or lupus affecting the brain and nerves. It is usually given for a limited number of months and then replaced by a milder medicine."],
      ["labs", "A complete blood count is checked before each dose and again between doses. White blood cells fall to their lowest point about one to two weeks after a dose, and that result guides the next one. Creatinine and liver enzymes are checked because they affect how the body handles the medicine. A urinalysis looks for blood in the urine, because the medicine can irritate the bladder."],
    ],
    vi: [
      ["what", "Cyclophosphamid là một thuốc ức chế miễn dịch mạnh. Thuốc thường được truyền tĩnh mạch theo từng đợt cách đều nhau, đôi khi dùng dạng viên."],
      ["why", "Thuốc được dành cho lupus nặng đe dọa một cơ quan, ví dụ viêm thận lupus nặng hoặc lupus ảnh hưởng đến não và thần kinh. Thuốc thường chỉ dùng trong một số tháng nhất định rồi được thay bằng thuốc nhẹ hơn."],
      ["labs", "Công thức máu được kiểm tra trước mỗi liều và một lần nữa giữa các liều. Bạch cầu giảm xuống mức thấp nhất khoảng một đến hai tuần sau khi truyền, và kết quả đó là căn cứ cho liều tiếp theo. Creatinin và men gan được kiểm tra vì chúng ảnh hưởng đến cách cơ thể xử lý thuốc. Tổng phân tích nước tiểu giúp tìm máu trong nước tiểu, vì thuốc có thể gây kích ứng bàng quang."],
    ],
  },

  tacrolimus: {
    en: [
      ["what", "Tacrolimus is an immunosuppressant from a family called calcineurin inhibitors. It was first used to protect transplanted organs. It is taken as capsules or tablets."],
      ["why", "In lupus it is used mainly for lupus nephritis, often together with other medicines, and it can help lower the amount of protein lost in the urine."],
      ["labs", "Creatinine is checked regularly, because the medicine itself can affect the kidneys. Potassium, magnesium and blood glucose are also followed, since tacrolimus can shift all three. A drug level, the amount of tacrolimus in the blood, may be measured to see whether the amount is in the intended range."],
      ["know", "A tacrolimus level is usually a trough level. The blood is drawn just before the next dose, so the timing of the sample matters. Blood pressure is checked at visits as well."],
    ],
    vi: [
      ["what", "Tacrolimus là thuốc ức chế miễn dịch thuộc nhóm ức chế calcineurin. Thuốc ban đầu được dùng để bảo vệ cơ quan được ghép. Thuốc có dạng viên uống."],
      ["why", "Ở người bệnh lupus, thuốc chủ yếu được dùng cho viêm thận lupus, thường phối hợp với các thuốc khác, và có thể giúp giảm lượng protein mất qua nước tiểu."],
      ["labs", "Creatinin được kiểm tra định kỳ, vì chính thuốc này có thể ảnh hưởng đến thận. Kali, magie và đường huyết cũng được theo dõi, vì tacrolimus có thể làm thay đổi cả ba. Nồng độ thuốc, tức lượng tacrolimus trong máu, có thể được đo để xem lượng thuốc có nằm trong khoảng mong muốn hay không."],
      ["know", "Nồng độ tacrolimus thường là nồng độ đáy. Máu được lấy ngay trước liều kế tiếp, nên thời điểm lấy mẫu rất quan trọng. Huyết áp cũng được đo ở các lần khám."],
    ],
  },

  cyclosporine: {
    en: [
      ["what", "Cyclosporine, also spelled ciclosporin, is an immunosuppressant from the calcineurin inhibitor family, the same family as tacrolimus. It is taken as capsules or a liquid."],
      ["why", "In lupus it is used less often than tacrolimus. It may be chosen for lupus nephritis or for low blood cell counts caused by lupus when other medicines are not suitable."],
      ["labs", "Creatinine is checked regularly, because the medicine can affect the kidneys. Potassium, magnesium, uric acid and a lipid panel are also followed. A drug level may be measured, usually as a trough level just before the next dose."],
      ["know", "Blood pressure is checked at each visit, because the medicine can raise it."],
    ],
    vi: [
      ["what", "Cyclosporin (còn viết là ciclosporin) là thuốc ức chế miễn dịch thuộc nhóm ức chế calcineurin, cùng nhóm với tacrolimus. Thuốc có dạng viên nang hoặc dung dịch uống."],
      ["why", "Trong bệnh lupus, thuốc ít được dùng hơn tacrolimus. Thuốc có thể được chọn cho viêm thận lupus hoặc khi lupus làm giảm tế bào máu mà các thuốc khác không phù hợp."],
      ["labs", "Creatinin được kiểm tra định kỳ, vì thuốc có thể ảnh hưởng đến thận. Kali, magie, acid uric và bộ mỡ máu cũng được theo dõi. Nồng độ thuốc có thể được đo, thường là nồng độ đáy ngay trước liều kế tiếp."],
      ["know", "Huyết áp được đo ở mỗi lần khám, vì thuốc có thể làm tăng huyết áp."],
    ],
  },

  belimumab: {
    en: [
      ["what", "Belimumab is a biologic medicine, which means it is a protein made in living cells, not a chemical tablet. It is given through a drip into a vein or as an injection under the skin."],
      ["why", "It blocks a signal that B cells need to survive. B cells are the immune cells that make antibodies, including the autoantibodies of lupus. It is added to standard treatment when lupus stays active, and it is also approved for lupus nephritis."],
      ["labs", "Belimumab has no special safety blood test of its own. The usual lupus tests continue. Anti-dsDNA and complement C3 and C4 are often followed, because studies show they tend to move towards the usual range in people who respond. Some clinics measure immunoglobulins, the body's own protective antibodies."],
    ],
    vi: [
      ["what", "Belimumab là một thuốc sinh học, nghĩa là một protein được sản xuất từ tế bào sống, không phải viên thuốc hóa học. Thuốc được truyền tĩnh mạch hoặc tiêm dưới da."],
      ["why", "Thuốc chặn một tín hiệu mà tế bào B cần để tồn tại. Tế bào B là tế bào miễn dịch tạo ra kháng thể, trong đó có các tự kháng thể của lupus. Thuốc được thêm vào phác đồ chuẩn khi lupus vẫn còn hoạt động, và cũng được phê duyệt cho viêm thận lupus."],
      ["labs", "Belimumab không có xét nghiệm riêng để theo dõi độ an toàn. Các xét nghiệm lupus thông thường vẫn tiếp tục. Anti-dsDNA và bổ thể C3, C4 thường được theo dõi, vì các nghiên cứu cho thấy ở người đáp ứng với thuốc, các chỉ số này có xu hướng trở về gần khoảng thông thường. Một số cơ sở y tế đo globulin miễn dịch, là các kháng thể bảo vệ của chính cơ thể."],
    ],
  },

  rituximab: {
    en: [
      ["what", "Rituximab is a biologic medicine given through a drip into a vein. It attaches to a marker called CD20 on B cells and removes those cells from the blood for several months."],
      ["why", "B cells make the autoantibodies of lupus. Rituximab is not a first choice, but guidelines mention it for severe lupus that has not responded to other medicines."],
      ["labs", "Hepatitis B tests are done before the first dose, because the medicine can let a past infection become active again. A complete blood count is followed afterwards. Immunoglobulins, the body's own protective antibodies, are often measured before and during treatment, since they can fall over time."],
      ["know", "Some clinics count B cells in the blood to see how long the effect of a dose lasts."],
    ],
    vi: [
      ["what", "Rituximab là thuốc sinh học truyền tĩnh mạch. Thuốc gắn vào một dấu ấn có tên CD20 trên tế bào B và loại bỏ các tế bào này khỏi máu trong vài tháng."],
      ["why", "Tế bào B tạo ra các tự kháng thể của lupus. Rituximab không phải lựa chọn đầu tiên, nhưng các hướng dẫn điều trị có nhắc đến thuốc này cho lupus nặng không đáp ứng với thuốc khác."],
      ["labs", "Xét nghiệm viêm gan B được làm trước liều đầu tiên, vì thuốc có thể làm virus viêm gan B từ lần nhiễm cũ hoạt động trở lại. Công thức máu được theo dõi sau đó. Globulin miễn dịch, là các kháng thể bảo vệ của chính cơ thể, thường được đo trước và trong quá trình điều trị, vì chúng có thể giảm dần theo thời gian."],
      ["know", "Một số cơ sở y tế đếm tế bào B trong máu để biết tác dụng của một đợt thuốc kéo dài bao lâu."],
    ],
  },

  nsaids: {
    en: [
      ["what", "Non-steroidal anti-inflammatory drugs, or NSAIDs, are common medicines for pain, fever and inflammation. Ibuprofen, naproxen, diclofenac and celecoxib are examples. Some are sold without a prescription."],
      ["why", "In lupus they are used for a short time to ease joint pain, muscle pain or chest pain from inflamed linings around the lungs or heart. They treat symptoms and do not change the course of lupus."],
      ["labs", "With regular use, creatinine is checked, because NSAIDs can reduce blood flow through the kidneys. This matters most for people with lupus nephritis. Liver enzymes and a complete blood count may also be checked. The blood count can show a fall in hemoglobin if there is slow bleeding from the stomach."],
      ["know", "Because some NSAIDs are bought without a prescription, they are easy to leave off a medicine list. Care teams read kidney results with the full list in mind."],
    ],
    vi: [
      ["what", "Thuốc kháng viêm không steroid, viết tắt NSAID, là các thuốc thông dụng để giảm đau, hạ sốt và kháng viêm. Ví dụ có ibuprofen, naproxen, diclofenac và celecoxib. Một số loại được bán không cần đơn."],
      ["why", "Ở người bệnh lupus, thuốc được dùng ngắn ngày để giảm đau khớp, đau cơ hoặc đau ngực do viêm màng bao quanh phổi hay tim. Thuốc chỉ giảm triệu chứng, không làm thay đổi diễn tiến của lupus."],
      ["labs", "Khi dùng thường xuyên, creatinin được kiểm tra, vì NSAID có thể làm giảm lượng máu đi qua thận. Điều này quan trọng nhất với người có viêm thận lupus. Men gan và công thức máu cũng có thể được kiểm tra. Công thức máu có thể cho thấy huyết sắc tố giảm nếu có chảy máu rỉ rả ở dạ dày."],
      ["know", "Vì một số NSAID được mua không cần đơn nên dễ bị bỏ sót khỏi danh sách thuốc. Bác sĩ đọc kết quả xét nghiệm thận dựa trên danh sách thuốc đầy đủ."],
    ],
  },

  warfarin: {
    en: [
      ["what", "Warfarin is an anticoagulant, a medicine that makes blood slower to clot. It is taken as tablets. It works by reducing the effect of vitamin K, which the liver needs to make clotting proteins."],
      ["why", "Some people with lupus have antiphospholipid antibodies, which raise the chance of blood clots. Warfarin is used for people with these antibodies who have already had a clot."],
      ["labs", "Warfarin is followed with the INR, a blood test that shows how long blood takes to clot. The care team sets a target range for each person, and the amount of warfarin is adjusted to the result. The test is frequent at first and less frequent once results are steady."],
      ["know", "Many foods and other medicines change how warfarin works, which is one reason the INR is repeated so often. In people with lupus anticoagulant, some INR machines read less accurately, so the laboratory may use a different method."],
    ],
    vi: [
      ["what", "Warfarin là thuốc chống đông, tức thuốc làm máu đông chậm hơn. Thuốc có dạng viên uống. Thuốc làm giảm tác dụng của vitamin K, chất mà gan cần để tạo ra các protein đông máu."],
      ["why", "Một số người bệnh lupus có kháng thể kháng phospholipid, làm tăng nguy cơ hình thành cục máu đông. Warfarin được dùng cho người có các kháng thể này và đã từng bị cục máu đông."],
      ["labs", "Warfarin được theo dõi bằng INR, xét nghiệm máu cho biết máu mất bao lâu để đông. Bác sĩ đặt một khoảng mục tiêu cho từng người, và lượng warfarin được điều chỉnh theo kết quả. Xét nghiệm được làm dày lúc đầu và thưa hơn khi kết quả đã ổn định."],
      ["know", "Nhiều loại thức ăn và thuốc khác làm thay đổi tác dụng của warfarin, đó là một lý do INR được làm lại thường xuyên. Ở người có kháng đông lupus, một số máy đo INR cho kết quả kém chính xác hơn, nên phòng xét nghiệm có thể dùng phương pháp khác."],
    ],
  },
};
