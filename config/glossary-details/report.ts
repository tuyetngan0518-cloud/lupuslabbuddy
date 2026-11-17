import type { TermDetail } from "./types.ts";

export const report: Record<string, TermDetail> = {
  "reference-range": {
    en: [
      ["what", "A reference range is the span of results a laboratory found in most healthy people it tested, usually the middle 95 out of 100. It is printed next to each result so the two can be compared. Other names are reference interval and normal range."],
      ["report", "The range appears beside the result, often in its own column. Results outside it are usually marked with H or L, an asterisk or bold type."],
      ["know", "Ranges differ between laboratories, because machines, methods and the people tested differ. Always use the range printed on the same report as the result. Many ranges also depend on age, sex and pregnancy. Because a range covers 95 out of 100 healthy people, 5 out of 100 healthy people fall just outside it on any one test. A result outside the range is a reason to look closer, not a diagnosis."],
    ],
    vi: [
      ["what", "Khoảng tham chiếu là khoảng kết quả mà phòng xét nghiệm ghi nhận ở phần lớn những người khỏe mạnh họ đã xét nghiệm; thường đó là khoảng chứa kết quả của 95 trong 100 người, sau khi bỏ phần thấp nhất và cao nhất. Khoảng này được in cạnh mỗi kết quả để đối chiếu. Tên gọi khác là khoảng bình thường hay trị số bình thường."],
      ["report", "Khoảng này nằm bên cạnh kết quả, thường ở một cột riêng. Kết quả nằm ngoài khoảng thường được đánh dấu bằng chữ H hoặc L, dấu sao hoặc chữ in đậm."],
      ["know", "Khoảng tham chiếu khác nhau giữa các phòng xét nghiệm, vì máy, phương pháp và nhóm người được xét nghiệm khác nhau. Luôn dùng khoảng in trên cùng phiếu với kết quả. Nhiều khoảng còn phụ thuộc vào tuổi, giới tính và việc có đang mang thai hay không. Vì khoảng này chỉ bao gồm 95 trong 100 người khỏe mạnh, nên ở bất kỳ xét nghiệm nào cũng có 5 trong 100 người khỏe mạnh có kết quả hơi lệch ra ngoài. Kết quả ngoài khoảng là lý do để xem xét kỹ hơn, chưa phải là chẩn đoán."],
    ],
  },

  unit: {
    en: [
      ["what", "A unit is the scale a result is counted in, such as g/L, mg/dL, U/L or cells per litre. A number on a lab report has no meaning without its unit."],
      ["report", "The unit is printed after the result or in its own column. Two systems are in use around the world. SI units, such as mmol/L and µmol/L, are used in much of Europe and Asia. Conventional units, such as mg/dL, are used in the United States and in many laboratories elsewhere."],
      ["know", "The same blood sample gives very different numbers in the two systems, and creatinine is a common example. Before comparing a result with one from another laboratory, or with a number read online, check that the units are the same. Some results, such as a titer or an INR, have no unit at all."],
    ],
    vi: [
      ["what", "Đơn vị đo cho biết kết quả được tính theo thang nào, ví dụ g/L, mg/dL, U/L hoặc số tế bào trên một lít. Một con số trên phiếu kết quả không có ý nghĩa nếu thiếu đơn vị."],
      ["report", "Đơn vị được in sau kết quả hoặc ở một cột riêng. Trên thế giới đang dùng hai hệ đơn vị. Đơn vị SI, như mmol/L và µmol/L, được dùng ở phần lớn châu Âu và châu Á. Đơn vị quy ước, như mg/dL, được dùng ở Hoa Kỳ và ở nhiều phòng xét nghiệm tại các nước khác."],
      ["know", "Cùng một mẫu máu cho ra những con số rất khác nhau ở hai hệ; creatinin là một ví dụ thường gặp. Trước khi so sánh một kết quả với kết quả từ phòng xét nghiệm khác, hoặc với một con số đọc được trên mạng, hãy kiểm tra xem đơn vị có giống nhau không. Một số kết quả, như hiệu giá hay INR, không có đơn vị."],
    ],
  },

  "positive-negative": {
    en: [
      ["what", "Many antibody tests give a yes-or-no answer. Positive means the test found what it was looking for. Negative means it did not find it, or found less than the laboratory's cut-off. In medicine, \"positive\" does not mean good and \"negative\" does not mean bad."],
      ["report", "Words used for positive include \"detected\" and \"reactive\". Words used for negative include \"not detected\" and \"non-reactive\". Some reports add \"borderline\", \"equivocal\" or \"weak positive\" for results close to the cut-off, and these are often repeated."],
      ["know", "Behind most yes-or-no answers there is a measured amount and a cut-off chosen by the laboratory. A positive result says the antibody is present. It does not, taken alone, say that a disease is present."],
    ],
    vi: [
      ["what", "Nhiều xét nghiệm kháng thể cho câu trả lời có hoặc không. Dương tính nghĩa là xét nghiệm tìm thấy thứ cần tìm. Âm tính nghĩa là không tìm thấy, hoặc tìm thấy ít hơn ngưỡng của phòng xét nghiệm. Trong y khoa, \"dương tính\" không có nghĩa là tốt và \"âm tính\" không có nghĩa là xấu."],
      ["report", "Kết quả dương tính còn được ghi là \"phát hiện\" hoặc \"có phản ứng\". Kết quả âm tính còn được ghi là \"không phát hiện\" hoặc \"không phản ứng\". Một số phiếu kết quả ghi thêm \"ranh giới\", \"nghi ngờ\" hoặc \"dương tính yếu\" cho những kết quả sát ngưỡng, và những xét nghiệm này thường được làm lại."],
      ["know", "Đằng sau phần lớn câu trả lời có hoặc không là một lượng đo được và một ngưỡng do phòng xét nghiệm chọn. Kết quả dương tính cho biết có kháng thể. Riêng điều đó chưa nói lên là có bệnh."],
    ],
  },

  "false-positive": {
    en: [
      ["what", "A false positive is a positive test result in a person who does not have the condition the test is looking for. The opposite, a false negative, is a negative result in a person who does have it. No test is free of either."],
      ["know", "The ANA test is a well-known example. It is positive in nearly everyone with lupus, but also in a noticeable share of healthy people, so most people with a positive ANA do not have lupus. Two words describe this. Sensitivity is how often a test is positive in people who have the condition. Specificity is how often it is negative in people who do not. ANA has high sensitivity and lower specificity. Anti-Sm is the reverse. This is why doctors combine several tests with symptoms and an examination and do not rely on one result."],
    ],
    vi: [
      ["what", "Dương tính giả là kết quả dương tính ở người thực ra không có bệnh hay tình trạng mà xét nghiệm đang tìm. Ngược lại, âm tính giả là kết quả âm tính ở người thực sự có. Không xét nghiệm nào tránh được hoàn toàn cả hai trường hợp này."],
      ["know", "Xét nghiệm ANA là một ví dụ quen thuộc. ANA dương tính ở gần như mọi người bệnh lupus, nhưng cũng dương tính ở một phần không nhỏ người khỏe mạnh, nên phần lớn người có ANA dương tính không mắc lupus. Có hai khái niệm mô tả điều này. Độ nhạy cho biết xét nghiệm dương tính ở bao nhiêu phần người có bệnh. Độ đặc hiệu cho biết xét nghiệm âm tính ở bao nhiêu phần người không có bệnh. ANA có độ nhạy cao và độ đặc hiệu thấp hơn. Anti-Sm thì ngược lại. Đó là lý do bác sĩ kết hợp nhiều xét nghiệm với triệu chứng và thăm khám, chứ không dựa vào một kết quả duy nhất."],
    ],
  },
};
