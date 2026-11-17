import type { TermDetail } from "./types.ts";

export const basics: Record<string, TermDetail> = {
  sle: {
    en: [
      ["what", "Systemic lupus erythematosus, usually just called lupus or SLE, is a long-term disease in which the immune system attacks the body's own tissues. \"Systemic\" means it can involve many parts of the body, such as the skin, joints, kidneys and blood cells. It is different in every person and tends to come and go in flares."],
      ["report", "No single test shows lupus. Doctors put together symptoms, an examination and several lab tests. Antibody tests such as ANA and anti-dsDNA help with the diagnosis. Blood counts, complement, creatinine and urine tests are repeated over time to follow the disease."],
      ["know", "Lupus cannot be passed from one person to another."],
    ],
    vi: [
      ["what", "Lupus ban đỏ hệ thống, thường gọi tắt là lupus hoặc SLE, là bệnh mạn tính trong đó hệ miễn dịch tấn công chính các mô của cơ thể. \"Hệ thống\" nghĩa là bệnh có thể ảnh hưởng đến nhiều nơi trong cơ thể như da, khớp, thận và tế bào máu. Mỗi người có biểu hiện bệnh khác nhau, và bệnh thường diễn tiến thành từng đợt, lúc bùng phát lúc lắng xuống."],
      ["report", "Không có xét nghiệm đơn lẻ nào đủ để khẳng định lupus. Bác sĩ phải kết hợp triệu chứng, thăm khám và nhiều xét nghiệm. Các xét nghiệm kháng thể như ANA và anti-dsDNA hỗ trợ chẩn đoán. Công thức máu, bổ thể, creatinin và xét nghiệm nước tiểu được làm lại định kỳ để theo dõi bệnh."],
      ["know", "Lupus không lây từ người này sang người khác."],
    ],
  },

  "immune-system": {
    en: [
      ["what", "The immune system is the body's defence against bacteria, viruses and other threats. It is made up of white blood cells and of proteins such as antibodies and complement. A healthy immune system can tell the body's own cells apart from invaders."],
      ["report", "Several common tests look at parts of the immune system. A complete blood count counts the white blood cells. Antibody tests and complement tests measure immune proteins in the blood."],
      ["know", "In lupus the immune system is not weak. It is misdirected, and part of it acts against the body itself."],
    ],
    vi: [
      ["what", "Hệ miễn dịch là hệ thống bảo vệ cơ thể trước vi khuẩn, virus và các mối nguy khác. Hệ này gồm các bạch cầu và những protein như kháng thể và bổ thể. Hệ miễn dịch khỏe mạnh phân biệt được tế bào của cơ thể với tác nhân xâm nhập từ bên ngoài."],
      ["report", "Nhiều xét nghiệm thông dụng đánh giá từng phần của hệ miễn dịch. Công thức máu đếm số bạch cầu. Xét nghiệm kháng thể và xét nghiệm bổ thể đo các protein miễn dịch trong máu."],
      ["know", "Ở người bệnh lupus, hệ miễn dịch không yếu. Hệ miễn dịch hoạt động sai hướng: một phần của nó quay sang chống lại chính cơ thể."],
    ],
  },

  "autoimmune-disease": {
    en: [
      ["what", "An autoimmune disease is one in which the immune system mistakes part of the body for a threat and attacks it. There are many such diseases. Some affect one organ, such as the thyroid. Others, like lupus, can affect many organs."],
      ["report", "Autoimmune diseases often leave a trace in the blood in the form of autoantibodies. Finding which autoantibodies are present helps doctors tell one autoimmune disease from another."],
    ],
    vi: [
      ["what", "Bệnh tự miễn là bệnh mà hệ miễn dịch nhầm một phần của cơ thể là mối nguy và tấn công phần đó. Có nhiều bệnh như vậy. Một số chỉ ảnh hưởng đến một cơ quan, ví dụ tuyến giáp. Một số khác, như lupus, có thể ảnh hưởng đến nhiều cơ quan."],
      ["report", "Bệnh tự miễn thường để lại dấu vết trong máu, đó là các tự kháng thể. Biết được người bệnh có những tự kháng thể nào giúp bác sĩ phân biệt bệnh tự miễn này với bệnh tự miễn khác."],
    ],
  },

  antibody: {
    en: [
      ["what", "An antibody is a small Y-shaped protein made by B cells, a type of white blood cell. Each antibody fits one target, the way a key fits one lock. Antibodies normally stick to germs and mark them for removal. Another name for antibodies is immunoglobulins."],
      ["report", "A lab report can show antibodies in two ways. Some tests measure one specific antibody, such as anti-dsDNA. Others measure all antibodies of one class together; these appear as immunoglobulins, written IgG, IgA and IgM."],
    ],
    vi: [
      ["what", "Kháng thể là một protein nhỏ hình chữ Y do tế bào B, một loại bạch cầu, tạo ra. Mỗi kháng thể chỉ khớp với một mục tiêu, giống như mỗi chìa khóa chỉ mở một ổ khóa. Bình thường, kháng thể bám vào vi trùng và đánh dấu để cơ thể loại bỏ chúng. Kháng thể còn có tên là globulin miễn dịch."],
      ["report", "Phiếu kết quả có thể ghi kháng thể theo hai cách. Một số xét nghiệm đo một kháng thể cụ thể, ví dụ anti-dsDNA. Một số khác đo gộp tất cả kháng thể cùng một lớp; khi đó phiếu ghi là globulin miễn dịch, viết tắt IgG, IgA và IgM."],
    ],
  },

  autoantibody: {
    en: [
      ["what", "An autoantibody is an antibody that targets part of the body itself and not a germ. In lupus, many autoantibodies are aimed at material found inside the cell nucleus, such as DNA."],
      ["report", "Most lupus antibody tests are autoantibody tests. Their names usually begin with \"anti-\" followed by the target, as in anti-dsDNA, anti-Sm or anti-Ro. The ANA test looks for the whole group at once."],
      ["know", "Having an autoantibody is not the same as having a disease. Some healthy people have autoantibodies, most often at low amounts."],
    ],
    vi: [
      ["what", "Tự kháng thể là kháng thể nhắm vào chính các thành phần của cơ thể chứ không phải vi trùng. Ở người bệnh lupus, nhiều tự kháng thể nhắm vào các chất nằm trong nhân tế bào, ví dụ DNA."],
      ["report", "Phần lớn xét nghiệm kháng thể dùng trong bệnh lupus là xét nghiệm tự kháng thể. Tên thường bắt đầu bằng \"anti-\" (kháng), tiếp theo là tên mục tiêu, như anti-dsDNA, anti-Sm hay anti-Ro. Xét nghiệm ANA tìm cả nhóm này trong cùng một lần."],
      ["know", "Có tự kháng thể không có nghĩa là có bệnh. Một số người khỏe mạnh cũng có tự kháng thể, thường với lượng thấp."],
    ],
  },

  "disease-activity": {
    en: [
      ["what", "Disease activity describes how much inflammation lupus is causing at a given moment. It is not the same as damage, which is lasting change left behind by earlier inflammation."],
      ["report", "Doctors judge activity from symptoms, an examination and lab tests together. The tests most often used are anti-dsDNA, complement C3 and C4, the blood count, creatinine and urine protein. Scoring tools such as SLEDAI turn these findings into a number that can be compared between visits."],
      ["know", "No lab test measures disease activity by itself. Results are always read alongside how a person feels and what the doctor finds."],
    ],
    vi: [
      ["what", "Mức độ hoạt động bệnh cho biết lupus đang gây viêm nhiều hay ít tại một thời điểm. Khái niệm này khác với tổn thương, tức những thay đổi lâu dài do các đợt viêm trước để lại."],
      ["report", "Bác sĩ đánh giá mức độ hoạt động bằng cách kết hợp triệu chứng, thăm khám và xét nghiệm. Các xét nghiệm thường dùng nhất là anti-dsDNA, bổ thể C3 và C4, công thức máu, creatinin và protein niệu. Các thang điểm như SLEDAI quy những thông tin này thành một con số để so sánh giữa các lần khám."],
      ["know", "Không có xét nghiệm nào tự nó đo được mức độ hoạt động bệnh. Kết quả luôn được xem xét cùng với cảm nhận của người bệnh và những gì bác sĩ ghi nhận khi khám."],
    ],
  },

  flare: {
    en: [
      ["what", "A flare is a period in which lupus becomes more active than before. Symptoms may return or get worse, new ones may appear, and lab results may change."],
      ["report", "Around a flare, some people show a rise in anti-dsDNA, a fall in complement C3 or C4, lower blood cell counts, or more protein in the urine. These changes do not appear in everyone, and each one can have other causes."],
      ["know", "Regular tests are done even when a person feels well, partly because some flares, especially in the kidneys, cause no symptoms at first and show only in lab results."],
    ],
    vi: [
      ["what", "Đợt bùng phát là giai đoạn lupus hoạt động mạnh hơn trước. Triệu chứng có thể trở lại hoặc nặng hơn, triệu chứng mới có thể xuất hiện, và kết quả xét nghiệm có thể thay đổi."],
      ["report", "Vào thời gian bùng phát, một số người có anti-dsDNA tăng, bổ thể C3 hoặc C4 giảm, số tế bào máu giảm, hoặc protein trong nước tiểu tăng. Không phải ai cũng có những thay đổi này, và mỗi thay đổi đều có thể do nguyên nhân khác."],
      ["know", "Xét nghiệm định kỳ vẫn được làm ngay cả khi người bệnh thấy khỏe, một phần vì có những đợt bùng phát, nhất là ở thận, ban đầu không gây triệu chứng và chỉ lộ ra qua kết quả xét nghiệm."],
    ],
  },

  remission: {
    en: [
      ["what", "Remission is a period in which lupus is quiet: there are no signs of active disease, usually while a person is still taking medicine. It is a main goal of lupus treatment. A related goal is called low disease activity, which means lupus is nearly but not completely quiet."],
      ["report", "In remission, the lab tests that reflect organ involvement, such as urine protein and blood counts, are usually steady. Some antibody tests can stay positive. ANA, for example, normally stays positive for life."],
      ["know", "Remission does not mean lupus is cured. Monitoring continues, because lupus can become active again."],
    ],
    vi: [
      ["what", "Lui bệnh là giai đoạn lupus lắng xuống: không có dấu hiệu bệnh đang hoạt động, thường là khi người bệnh vẫn đang dùng thuốc. Đây là một mục tiêu chính của điều trị lupus. Một mục tiêu gần với lui bệnh là mức độ hoạt động bệnh thấp, nghĩa là lupus gần như lắng hẳn nhưng chưa hoàn toàn."],
      ["report", "Trong giai đoạn lui bệnh, các xét nghiệm phản ánh tổn thương cơ quan, như protein niệu và công thức máu, thường ổn định. Một số xét nghiệm kháng thể có thể vẫn dương tính. Ví dụ, ANA thường dương tính suốt đời."],
      ["know", "Lui bệnh không có nghĩa là lupus đã khỏi hẳn. Người bệnh vẫn được theo dõi tiếp, vì lupus có thể hoạt động trở lại."],
    ],
  },

  biomarker: {
    en: [
      ["what", "A biomarker is anything that can be measured in the body and that says something about health or disease. Most biomarkers are substances in blood or urine. Anti-dsDNA, complement and urine protein are biomarkers used in lupus."],
      ["know", "Biomarkers serve different purposes. Some help with diagnosis, some follow disease activity, and some check the safety of a medicine. No lupus biomarker is perfect, so doctors use several together. Researchers are still looking for better ones, and newer biomarkers mentioned in studies are often not yet available in ordinary laboratories."],
    ],
    vi: [
      ["what", "Dấu ấn sinh học là bất kỳ chỉ số nào đo được trong cơ thể và phản ánh tình trạng sức khỏe hay bệnh tật. Phần lớn dấu ấn sinh học là các chất trong máu hoặc nước tiểu. Anti-dsDNA, bổ thể và protein niệu là những dấu ấn sinh học dùng trong bệnh lupus."],
      ["know", "Dấu ấn sinh học được dùng cho nhiều mục đích khác nhau. Một số giúp chẩn đoán, một số để theo dõi mức độ hoạt động bệnh, một số để kiểm tra độ an toàn của thuốc. Không có dấu ấn sinh học nào của lupus là hoàn hảo, nên bác sĩ dùng kết hợp nhiều loại. Các nhà nghiên cứu vẫn đang tìm những dấu ấn tốt hơn, và các dấu ấn mới được nhắc đến trong nghiên cứu thường chưa có ở phòng xét nghiệm thông thường."],
    ],
  },

  serology: {
    en: [
      ["what", "Serology is the study of serum, the clear liquid part of blood, and in practice it means blood tests for antibodies and related immune proteins. In lupus, \"the serology\" usually refers to ANA, anti-dsDNA and the other autoantibody tests, often together with complement C3 and C4."],
      ["know", "Doctors sometimes say a person is \"serologically active\". This means anti-dsDNA is raised or complement is low while the person has no symptoms. Studies describe people who stay this way for a long time without a flare, which is one reason these results are not read in isolation."],
    ],
    vi: [
      ["what", "Huyết thanh học là ngành nghiên cứu huyết thanh, phần dịch trong của máu. Trên thực tế, từ này dùng để chỉ các xét nghiệm máu tìm kháng thể và những protein miễn dịch liên quan. Với bệnh lupus, \"huyết thanh học\" thường là ANA, anti-dsDNA và các xét nghiệm tự kháng thể khác, thường kèm bổ thể C3 và C4."],
      ["know", "Đôi khi bác sĩ nói người bệnh \"có hoạt động về huyết thanh học\". Nghĩa là anti-dsDNA tăng hoặc bổ thể thấp trong khi người bệnh không có triệu chứng. Các nghiên cứu ghi nhận có những người ở trong tình trạng này rất lâu mà không có đợt bùng phát; đó là một lý do các kết quả này không được xem xét riêng lẻ."],
    ],
  },
};
