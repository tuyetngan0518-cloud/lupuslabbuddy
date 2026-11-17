import type { TermDetail } from "./types.ts";

export const inflammation: Record<string, TermDetail> = {
  inflammation: {
    en: [
      ["what", "Inflammation is the body's response to something it treats as harmful. Blood flow to the area increases and immune cells move in, which causes redness, warmth, swelling and pain. It normally helps healing. In lupus the immune system sets it off against healthy tissue, and when it lasts it can damage organs."],
      ["report", "Two blood tests reflect inflammation in a general way: the erythrocyte sedimentation rate (ESR) and C-reactive protein (CRP). Neither shows where the inflammation is or what is causing it."],
      ["know", "Inflammation inside the body, for example in the kidneys, often cannot be felt. This is one reason lab tests are part of regular lupus care."],
    ],
    vi: [
      ["what", "Viêm là phản ứng của cơ thể trước thứ mà cơ thể coi là có hại. Máu dồn đến vùng đó nhiều hơn và các tế bào miễn dịch kéo tới, gây đỏ, nóng, sưng và đau. Bình thường viêm giúp cơ thể lành lại. Ở người bệnh lupus, hệ miễn dịch gây viêm ở cả mô lành, và nếu kéo dài thì viêm có thể làm tổn thương các cơ quan."],
      ["report", "Có hai xét nghiệm máu phản ánh tình trạng viêm một cách tổng quát: tốc độ máu lắng (ESR) và protein phản ứng C (CRP). Cả hai đều không cho biết viêm ở đâu hay do đâu."],
      ["know", "Viêm ở bên trong cơ thể, ví dụ ở thận, thường không cảm nhận được. Đó là một lý do người bệnh lupus được làm xét nghiệm định kỳ."],
    ],
  },

  esr: {
    en: [
      ["what", "The erythrocyte sedimentation rate, or ESR, measures how far red blood cells sink in an upright tube of blood in one hour. During inflammation the blood carries more of certain proteins, which make red cells stick together and sink faster."],
      ["why", "ESR often rises when lupus is active, so some doctors follow it over time as one general sign among others."],
      ["report", "It is reported in mm per hour (mm/h). Usual values are higher in women and rise with age."],
      ["know", "ESR is not specific. Anemia, pregnancy, infection, kidney disease and high antibody amounts in the blood all raise it. It also changes slowly, over days to weeks."],
    ],
    vi: [
      ["what", "Tốc độ máu lắng, viết tắt ESR, đo xem sau một giờ hồng cầu lắng xuống được bao xa trong một ống máu dựng đứng. Khi có viêm, một số protein trong máu tăng lên, khiến hồng cầu dính vào nhau và lắng nhanh hơn."],
      ["why", "ESR thường tăng khi lupus hoạt động, nên một số bác sĩ theo dõi chỉ số này theo thời gian như một dấu hiệu tổng quát, bên cạnh các dấu hiệu khác."],
      ["report", "Kết quả được ghi theo đơn vị mm mỗi giờ (mm/h). Giá trị thông thường ở phụ nữ cao hơn và tăng theo tuổi."],
      ["know", "ESR không đặc hiệu. Thiếu máu, mang thai, nhiễm trùng, bệnh thận và lượng kháng thể cao trong máu đều làm ESR tăng. ESR cũng thay đổi chậm, phải sau vài ngày đến vài tuần."],
    ],
  },

  crp: {
    en: [
      ["what", "C-reactive protein, or CRP, is a protein the liver releases into the blood within hours of inflammation starting. It falls again quickly once the cause has settled."],
      ["why", "CRP behaves in an unusual way in lupus. In many people it stays low or rises only a little during a flare, even when ESR is high. A clearly raised CRP in a person with lupus therefore makes doctors think about infection. It can also rise when lupus inflames the joints or the linings around the lungs and heart."],
      ["report", "CRP is reported in mg/L or mg/dL. A \"high-sensitivity\" CRP (hs-CRP) is a more finely tuned version used to estimate heart and blood vessel risk; it is read differently."],
      ["know", "CRP alone cannot separate a flare from an infection. It is one piece of information among several."],
    ],
    vi: [
      ["what", "Protein phản ứng C, viết tắt CRP, là protein gan đưa vào máu chỉ vài giờ sau khi tình trạng viêm bắt đầu. CRP giảm nhanh trở lại khi nguyên nhân gây viêm đã hết."],
      ["why", "Ở người bệnh lupus, CRP diễn biến khác thường. Ở nhiều người, CRP vẫn thấp hoặc chỉ tăng nhẹ trong đợt bùng phát, kể cả khi ESR cao. Vì vậy khi CRP tăng rõ ở người bệnh lupus, bác sĩ sẽ nghĩ đến nhiễm trùng. CRP cũng có thể tăng khi lupus gây viêm khớp hoặc viêm màng bao quanh phổi và tim."],
      ["report", "CRP được ghi theo đơn vị mg/L hoặc mg/dL. CRP \"độ nhạy cao\" (hs-CRP) là xét nghiệm nhạy hơn, dùng để ước lượng nguy cơ tim mạch; cách đọc kết quả cũng khác."],
      ["know", "Chỉ riêng CRP không phân biệt được đợt bùng phát với nhiễm trùng. Đây chỉ là một trong nhiều thông tin bác sĩ cân nhắc."],
    ],
  },
};
