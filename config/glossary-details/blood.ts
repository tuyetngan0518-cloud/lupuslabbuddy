import type { TermDetail } from "./types.ts";

export const blood: Record<string, TermDetail> = {
  cbc: {
    en: [
      ["what", "A complete blood count, or CBC, is a routine blood test that counts the three kinds of blood cells: red blood cells, white blood cells and platelets. It also measures hemoglobin and describes the size of the red cells."],
      ["why", "It is done at almost every lupus visit, for two reasons. Lupus itself can lower any of the three cell types. And several lupus medicines can lower blood cell numbers, so the count is also a safety check."],
      ["report", "A CBC prints many lines. The main ones are WBC (white blood cells), RBC (red blood cells), Hb or HGB (hemoglobin), Hct (hematocrit), MCV (red cell size) and PLT (platelets). A \"differential\" splits the white cells into types such as neutrophils and lymphocytes."],
      ["know", "Blood counts move a little from day to day. Infections, medicines and the time of day can all shift them."],
    ],
    vi: [
      ["what", "Tổng phân tích tế bào máu, hay công thức máu, viết tắt CBC, là xét nghiệm máu thường quy đếm ba loại tế bào máu: hồng cầu, bạch cầu và tiểu cầu. Xét nghiệm này cũng đo huyết sắc tố và cho biết kích thước hồng cầu."],
      ["why", "Xét nghiệm này được làm ở gần như mọi lần khám lupus, vì hai lý do. Một là bản thân lupus có thể làm giảm bất kỳ loại nào trong ba loại tế bào máu. Hai là một số thuốc điều trị lupus có thể làm giảm số tế bào máu, nên công thức máu cũng là xét nghiệm theo dõi độ an toàn của thuốc."],
      ["report", "Phiếu công thức máu có nhiều dòng. Các dòng chính là WBC (bạch cầu), RBC (hồng cầu), Hb hoặc HGB (huyết sắc tố), Hct (hematocrit), MCV (kích thước hồng cầu) và PLT (tiểu cầu). Phần \"công thức bạch cầu\" chia bạch cầu thành các loại như bạch cầu trung tính và tế bào lympho."],
      ["know", "Số lượng tế bào máu dao động nhẹ từ ngày này sang ngày khác. Nhiễm trùng, thuốc và thời điểm lấy máu trong ngày đều có thể làm thay đổi kết quả."],
    ],
  },

  "red-blood-cells": {
    en: [
      ["what", "Red blood cells carry oxygen from the lungs to the rest of the body. They are made in the bone marrow and live for about four months before being cleared and replaced."],
      ["report", "On a complete blood count, RBC is the number of red cells. Hemoglobin and hematocrit describe the same cells in other ways. MCV gives their average size, which helps doctors work out why the number might be low."],
      ["know", "A lower than usual amount of red cells or hemoglobin is called anemia. In lupus it has several possible causes, including long-term inflammation, low iron, kidney disease, medicines and, less often, destruction of red cells by autoantibodies."],
    ],
    vi: [
      ["what", "Hồng cầu vận chuyển oxy từ phổi đến khắp cơ thể. Hồng cầu được tạo ra ở tủy xương và sống khoảng bốn tháng, sau đó bị loại bỏ và thay bằng hồng cầu mới."],
      ["report", "Trên phiếu công thức máu, RBC là số lượng hồng cầu. Huyết sắc tố và hematocrit mô tả cùng những tế bào đó theo cách khác. MCV cho biết kích thước trung bình của hồng cầu, giúp bác sĩ tìm lý do khi số lượng thấp."],
      ["know", "Lượng hồng cầu hoặc huyết sắc tố thấp hơn bình thường được gọi là thiếu máu. Ở người bệnh lupus, thiếu máu có thể do nhiều nguyên nhân, gồm viêm kéo dài, thiếu sắt, bệnh thận, thuốc và, ít gặp hơn, hồng cầu bị tự kháng thể phá hủy."],
    ],
  },

  hemoglobin: {
    en: [
      ["what", "Hemoglobin is the iron-containing protein inside red blood cells that holds oxygen. It gives blood its red colour."],
      ["why", "Hemoglobin is the main measure used to find and follow anemia, which is common in lupus."],
      ["report", "It appears as Hb or HGB, in g/dL or g/L. The reference range depends on sex and age, and it differs in pregnancy, so the range printed on the report is the one to use."],
      ["know", "Hemoglobin shows that anemia is present but not why. Finding the cause takes other tests, such as iron studies, the reticulocyte count or the Coombs test."],
    ],
    vi: [
      ["what", "Huyết sắc tố (hemoglobin) là protein chứa sắt nằm trong hồng cầu, có nhiệm vụ mang oxy. Chính nó tạo nên màu đỏ của máu."],
      ["why", "Huyết sắc tố là chỉ số chính dùng để phát hiện và theo dõi thiếu máu, một tình trạng thường gặp ở người bệnh lupus."],
      ["report", "Trên phiếu kết quả, huyết sắc tố được ghi là Hb hoặc HGB, theo đơn vị g/dL hoặc g/L. Khoảng tham chiếu phụ thuộc vào giới tính và tuổi, và thay đổi khi mang thai, nên cần dùng khoảng in trên phiếu kết quả."],
      ["know", "Huyết sắc tố cho biết có thiếu máu nhưng không cho biết vì sao. Muốn tìm nguyên nhân cần các xét nghiệm khác, như xét nghiệm sắt, số hồng cầu lưới hoặc nghiệm pháp Coombs."],
    ],
  },

  hematocrit: {
    en: [
      ["what", "Hematocrit is the share of the blood's volume taken up by red blood cells. The rest is mostly plasma, the liquid part of blood."],
      ["report", "It appears as Hct, as a percentage or a decimal fraction. It rises and falls together with hemoglobin, and the two are read as a pair."],
      ["know", "Hematocrit depends on how much liquid is in the blood as well as on the number of red cells. It reads higher when a person is short of fluid and lower when there is extra fluid, without any change in the red cells themselves."],
    ],
    vi: [
      ["what", "Hematocrit (dung tích hồng cầu) là tỉ lệ thể tích máu do hồng cầu chiếm. Phần còn lại chủ yếu là huyết tương, phần dịch lỏng của máu."],
      ["report", "Trên phiếu kết quả, chỉ số này được ghi là Hct, dưới dạng phần trăm hoặc số thập phân. Hematocrit tăng giảm cùng với huyết sắc tố, và hai chỉ số này được đọc cùng nhau."],
      ["know", "Hematocrit phụ thuộc vào lượng dịch trong máu chứ không chỉ vào số hồng cầu. Chỉ số này cao hơn khi cơ thể thiếu nước và thấp hơn khi thừa dịch, dù bản thân hồng cầu không thay đổi."],
    ],
  },

  anemia: {
    en: [
      ["what", "Anemia means having less hemoglobin or fewer red blood cells than usual, so the blood carries less oxygen. It is a finding, not a single disease, and it always has a cause."],
      ["report", "Anemia shows as a hemoglobin below the laboratory's reference range. The MCV line sorts it by red cell size: small, normal or large. This points towards different causes."],
      ["know", "Anemia is one of the most common blood findings in lupus. The most frequent type comes from long-term inflammation. Low iron, kidney disease and medicines are other causes. Destruction of red cells by autoantibodies, called hemolytic anemia, is less common."],
    ],
    vi: [
      ["what", "Thiếu máu nghĩa là có ít huyết sắc tố hoặc ít hồng cầu hơn bình thường, nên máu mang được ít oxy hơn. Đây là một dấu hiệu chứ không phải một bệnh riêng, và luôn có nguyên nhân."],
      ["report", "Trên phiếu kết quả, thiếu máu thể hiện ở huyết sắc tố thấp hơn khoảng tham chiếu của phòng xét nghiệm. Dòng MCV phân loại thiếu máu theo kích thước hồng cầu: nhỏ, bình thường hoặc to. Mỗi loại gợi ý những nguyên nhân khác nhau."],
      ["know", "Thiếu máu là một trong những thay đổi về máu thường gặp nhất ở người bệnh lupus. Loại hay gặp nhất là do viêm kéo dài. Các nguyên nhân khác là thiếu sắt, bệnh thận và thuốc. Thiếu máu tán huyết, tức hồng cầu bị tự kháng thể phá hủy, thì ít gặp hơn."],
    ],
  },

  "hemolytic-anemia": {
    en: [
      ["what", "Hemolytic anemia is anemia caused by red blood cells being broken down faster than the bone marrow can replace them. In lupus the usual cause is autoantibodies that attach to the red cells; this form is called autoimmune hemolytic anemia."],
      ["report", "No single line shows it. Doctors look for a group of findings: low hemoglobin, a high reticulocyte count (young red cells released to make up the loss), raised LDH and bilirubin (released from broken cells), low haptoglobin, and a positive direct Coombs test."],
      ["know", "It affects a small share of people with lupus. It is one of the blood findings counted in the classification rules for lupus."],
    ],
    vi: [
      ["what", "Thiếu máu tán huyết là thiếu máu do hồng cầu bị phá hủy nhanh hơn tốc độ tủy xương tạo bù. Ở người bệnh lupus, nguyên nhân thường gặp là tự kháng thể bám vào hồng cầu; dạng này gọi là thiếu máu tán huyết tự miễn."],
      ["report", "Không có dòng riêng nào trên phiếu cho thấy tình trạng này. Bác sĩ tìm một nhóm dấu hiệu: huyết sắc tố thấp, số hồng cầu lưới cao (hồng cầu non được tủy đưa ra để bù lại), LDH và bilirubin tăng (do tế bào bị vỡ giải phóng ra), haptoglobin thấp, và nghiệm pháp Coombs trực tiếp dương tính."],
      ["know", "Tình trạng này xảy ra ở một phần nhỏ người bệnh lupus. Đây là một trong những thay đổi về máu được tính trong tiêu chuẩn phân loại lupus."],
    ],
  },

  "white-blood-cells": {
    en: [
      ["what", "White blood cells are the cells of the immune system that travel in the blood. There are several types. Neutrophils and lymphocytes are the two most numerous; monocytes, eosinophils and basophils make up the rest."],
      ["why", "Lupus can lower the white cell count, and so can several lupus medicines. A higher count can go with infection or with glucocorticoid treatment. The count is therefore watched both as a sign of lupus and as a safety check."],
      ["report", "The total appears as WBC. The differential lists each type, sometimes as a percentage and sometimes as an absolute number. The absolute number is the one doctors rely on."],
    ],
    vi: [
      ["what", "Bạch cầu là các tế bào của hệ miễn dịch lưu thông trong máu. Có nhiều loại bạch cầu. Bạch cầu trung tính và tế bào lympho là hai loại nhiều nhất; phần còn lại là bạch cầu đơn nhân, bạch cầu ái toan và bạch cầu ái kiềm."],
      ["why", "Lupus có thể làm giảm số bạch cầu, và một số thuốc điều trị lupus cũng vậy. Số bạch cầu tăng có thể gặp khi nhiễm trùng hoặc khi dùng glucocorticoid. Vì vậy chỉ số này được theo dõi vừa như một dấu hiệu của lupus, vừa để kiểm tra độ an toàn của thuốc."],
      ["report", "Tổng số bạch cầu được ghi là WBC. Phần công thức bạch cầu liệt kê từng loại, có khi theo phần trăm, có khi theo số lượng tuyệt đối. Bác sĩ dựa vào số lượng tuyệt đối."],
    ],
  },

  leukopenia: {
    en: [
      ["what", "Leukopenia means a total white blood cell count below the laboratory's reference range."],
      ["report", "It shows on the WBC line of a complete blood count. The differential then shows which type of white cell is low, most often lymphocytes or neutrophils."],
      ["know", "Leukopenia is common in lupus and is one of the blood findings counted in the classification rules. It can come from lupus itself, from a medicine or from a viral infection, and telling these apart is part of the doctor's work. Usual white cell counts also differ somewhat between people of different ancestry."],
    ],
    vi: [
      ["what", "Giảm bạch cầu nghĩa là tổng số bạch cầu thấp hơn khoảng tham chiếu của phòng xét nghiệm."],
      ["report", "Giảm bạch cầu thể hiện ở dòng WBC của công thức máu. Phần công thức bạch cầu cho biết loại bạch cầu nào thấp, thường là tế bào lympho hoặc bạch cầu trung tính."],
      ["know", "Giảm bạch cầu thường gặp ở người bệnh lupus và là một trong những thay đổi về máu được tính trong tiêu chuẩn phân loại. Nguyên nhân có thể là chính lupus, thuốc hoặc nhiễm virus, và phân biệt các nguyên nhân này là việc của bác sĩ. Số bạch cầu thông thường cũng hơi khác nhau giữa các nhóm người có nguồn gốc khác nhau."],
    ],
  },

  neutrophils: {
    en: [
      ["what", "Neutrophils are the most numerous white blood cells. They are the first cells to arrive at an infection and are especially important against bacteria."],
      ["report", "They appear in the differential of a complete blood count, as NEUT or as ANC, the absolute neutrophil count. Some reports list \"segs\" and \"bands\", which are mature and young neutrophils."],
      ["know", "Glucocorticoids raise the neutrophil count, and so do bacterial infections. Several immunosuppressant medicines can lower it, which is one reason the blood count is checked regularly while taking them."],
    ],
    vi: [
      ["what", "Bạch cầu trung tính là loại bạch cầu có số lượng nhiều nhất. Đây là những tế bào đầu tiên có mặt tại nơi nhiễm trùng và đặc biệt quan trọng trong việc chống vi khuẩn."],
      ["report", "Bạch cầu trung tính nằm trong phần công thức bạch cầu của công thức máu, ghi là NEUT hoặc ANC, tức số lượng tuyệt đối bạch cầu trung tính. Một số phiếu kết quả ghi \"segs\" và \"bands\", là bạch cầu trung tính trưởng thành và bạch cầu trung tính non."],
      ["know", "Glucocorticoid làm tăng số bạch cầu trung tính, và nhiễm vi khuẩn cũng vậy. Một số thuốc ức chế miễn dịch có thể làm giảm chỉ số này, đó là một lý do công thức máu được kiểm tra định kỳ khi dùng các thuốc đó."],
    ],
  },

  neutropenia: {
    en: [
      ["what", "Neutropenia means a neutrophil count below the laboratory's reference range."],
      ["why", "Neutrophils defend against bacteria, so a low count is watched closely. In lupus, neutropenia can come from the disease itself or from a medicine such as cyclophosphamide, azathioprine, mycophenolate or methotrexate."],
      ["report", "It is read from the absolute neutrophil count, ANC, not from the percentage. Doctors grade it as mild, moderate or severe according to that number."],
      ["know", "When neutropenia appears in someone taking an immunosuppressant, the blood count is usually repeated to see whether it lasts."],
    ],
    vi: [
      ["what", "Giảm bạch cầu trung tính nghĩa là số bạch cầu trung tính thấp hơn khoảng tham chiếu của phòng xét nghiệm."],
      ["why", "Bạch cầu trung tính bảo vệ cơ thể trước vi khuẩn, nên khi số lượng thấp thì người bệnh được theo dõi sát. Ở người bệnh lupus, giảm bạch cầu trung tính có thể do chính bệnh hoặc do thuốc như cyclophosphamid, azathioprin, mycophenolat hay methotrexat."],
      ["report", "Tình trạng này được xác định dựa trên số lượng tuyệt đối bạch cầu trung tính (ANC), không dựa trên tỉ lệ phần trăm. Bác sĩ phân độ nhẹ, vừa hoặc nặng theo con số đó."],
      ["know", "Khi người đang dùng thuốc ức chế miễn dịch bị giảm bạch cầu trung tính, công thức máu thường được làm lại để xem tình trạng này có kéo dài không."],
    ],
  },

  lymphocytes: {
    en: [
      ["what", "Lymphocytes are white blood cells that give the immune system its memory and precision. The main kinds are B cells, which make antibodies, and T cells, which direct the immune response and kill infected cells."],
      ["report", "They appear in the differential of a complete blood count, as LYMPH or ALC, the absolute lymphocyte count. An ordinary blood count does not separate B cells from T cells; that needs a special test called flow cytometry."],
      ["know", "B cells are the source of the autoantibodies in lupus, which is why some lupus medicines, such as belimumab and rituximab, are aimed at them."],
    ],
    vi: [
      ["what", "Tế bào lympho là những bạch cầu giúp hệ miễn dịch ghi nhớ và nhận diện chính xác mục tiêu. Hai loại chính là tế bào B, tạo ra kháng thể, và tế bào T, điều phối đáp ứng miễn dịch và tiêu diệt tế bào bị nhiễm."],
      ["report", "Tế bào lympho nằm trong phần công thức bạch cầu của công thức máu, ghi là LYMPH hoặc ALC, tức số lượng tuyệt đối tế bào lympho. Công thức máu thông thường không tách riêng tế bào B và tế bào T; muốn vậy cần một xét nghiệm đặc biệt gọi là đếm tế bào dòng chảy."],
      ["know", "Tế bào B là nơi tạo ra tự kháng thể trong bệnh lupus; vì vậy một số thuốc điều trị lupus như belimumab và rituximab nhắm vào tế bào B."],
    ],
  },

  lymphopenia: {
    en: [
      ["what", "Lymphopenia means a lymphocyte count below the laboratory's reference range."],
      ["report", "It is read from the absolute lymphocyte count in the differential of a complete blood count."],
      ["know", "Lymphopenia is the most common white cell change in lupus and often tracks with disease activity. Glucocorticoids and immunosuppressant medicines lower lymphocytes too, so the same finding can have more than one cause in the same person."],
    ],
    vi: [
      ["what", "Giảm bạch cầu lympho nghĩa là số tế bào lympho thấp hơn khoảng tham chiếu của phòng xét nghiệm."],
      ["report", "Chỉ số này được đọc từ số lượng tuyệt đối tế bào lympho trong phần công thức bạch cầu của công thức máu."],
      ["know", "Giảm bạch cầu lympho là thay đổi về bạch cầu thường gặp nhất ở người bệnh lupus và thường đi cùng mức độ hoạt động bệnh. Glucocorticoid và thuốc ức chế miễn dịch cũng làm giảm tế bào lympho, nên ở cùng một người, tình trạng này có thể do nhiều nguyên nhân cùng lúc."],
    ],
  },

  platelets: {
    en: [
      ["what", "Platelets are small cell fragments made in the bone marrow. When a blood vessel is damaged they clump together and start a clot that stops the bleeding."],
      ["why", "Lupus can lower the platelet count, usually because autoantibodies mark platelets for removal. A low count is also seen in some people with antiphospholipid antibodies, and some medicines can lower it."],
      ["report", "Platelets appear as PLT on a complete blood count."],
      ["know", "Now and then platelets clump in the sample tube and the machine counts too few. The laboratory can check this by looking at the blood under a microscope or by repeating the test with a different tube."],
    ],
    vi: [
      ["what", "Tiểu cầu là những mảnh tế bào nhỏ được tạo ra ở tủy xương. Khi mạch máu bị tổn thương, tiểu cầu kết dính lại với nhau và khởi đầu việc tạo cục máu đông để cầm máu."],
      ["why", "Lupus có thể làm giảm số tiểu cầu, thường do tự kháng thể đánh dấu tiểu cầu khiến chúng bị loại bỏ. Số tiểu cầu thấp cũng gặp ở một số người có kháng thể kháng phospholipid, và một số thuốc cũng có thể làm giảm tiểu cầu."],
      ["report", "Tiểu cầu được ghi là PLT trên công thức máu."],
      ["know", "Thỉnh thoảng tiểu cầu vón lại trong ống đựng mẫu nên máy đếm được ít hơn thực tế. Phòng xét nghiệm có thể kiểm tra bằng cách soi máu dưới kính hiển vi hoặc làm lại với loại ống khác."],
    ],
  },

  thrombocytopenia: {
    en: [
      ["what", "Thrombocytopenia means a platelet count below the laboratory's reference range."],
      ["report", "It shows on the PLT line of a complete blood count. Doctors grade it by how low the count is."],
      ["know", "It is one of the blood findings counted in the classification rules for lupus. In lupus it is usually mild and found only on a blood test. It can come from lupus itself, from antiphospholipid antibodies or from a medicine, so finding it usually leads to further tests."],
    ],
    vi: [
      ["what", "Giảm tiểu cầu nghĩa là số tiểu cầu thấp hơn khoảng tham chiếu của phòng xét nghiệm."],
      ["report", "Giảm tiểu cầu thể hiện ở dòng PLT của công thức máu. Bác sĩ phân độ dựa trên mức độ giảm."],
      ["know", "Đây là một trong những thay đổi về máu được tính trong tiêu chuẩn phân loại lupus. Ở người bệnh lupus, giảm tiểu cầu thường nhẹ và chỉ được phát hiện qua xét nghiệm máu. Nguyên nhân có thể là chính lupus, kháng thể kháng phospholipid hoặc thuốc, nên khi phát hiện thường cần làm thêm xét nghiệm."],
    ],
  },
};
