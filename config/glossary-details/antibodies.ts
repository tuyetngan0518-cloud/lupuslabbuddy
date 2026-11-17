import type { TermDetail } from "./types.ts";

export const antibodies: Record<string, TermDetail> = {
  ana: {
    en: [
      ["what", "The antinuclear antibody test, or ANA, is a blood test that looks for autoantibodies against the cell nucleus, the central part of a cell that holds its DNA. It is a screening test: it looks for a whole family of autoantibodies at once and does not say which ones are there."],
      ["why", "Nearly everyone with lupus has a positive ANA, so the test is used as the first step when lupus is suspected. Current classification rules for lupus require a positive ANA as the entry point."],
      ["report", "The result is usually given as a titer, written like 1:160, and often a pattern, such as homogeneous or speckled. Some laboratories use a different method and report a number with units."],
      ["know", "A positive ANA alone does not mean lupus. It is found in other autoimmune diseases, with some infections and medicines, and in some healthy people. Once positive, ANA usually stays positive, so it is not repeated to follow lupus."],
    ],
    vi: [
      ["what", "Xét nghiệm kháng thể kháng nhân, viết tắt ANA, là xét nghiệm máu tìm các tự kháng thể chống lại nhân tế bào, tức phần trung tâm chứa DNA của tế bào. Đây là xét nghiệm sàng lọc: tìm cả một nhóm tự kháng thể cùng lúc mà không cho biết cụ thể là loại nào."],
      ["why", "Gần như tất cả người bệnh lupus đều có ANA dương tính, nên đây là xét nghiệm đầu tiên khi nghi ngờ lupus. Tiêu chuẩn phân loại lupus hiện nay lấy ANA dương tính làm điều kiện bắt buộc đầu tiên."],
      ["report", "Kết quả thường được ghi dưới dạng hiệu giá, ví dụ 1:160, và thường kèm kiểu huỳnh quang như đồng nhất hoặc lốm đốm. Một số phòng xét nghiệm dùng phương pháp khác và trả kết quả bằng một con số kèm đơn vị."],
      ["know", "Chỉ riêng ANA dương tính không có nghĩa là mắc lupus. ANA dương tính còn gặp trong các bệnh tự miễn khác, khi bị một số bệnh nhiễm trùng hoặc dùng một số thuốc, và ở cả một số người khỏe mạnh. Một khi đã dương tính, ANA thường dương tính mãi, nên không được làm lại để theo dõi lupus."],
    ],
  },

  "ana-pattern": {
    en: [
      ["what", "In the usual ANA test, a person's blood is placed on cells on a glass slide and a glowing dye shows where antibodies have attached. The shape of the glow under the microscope is the pattern. Common patterns are homogeneous (the whole nucleus glows evenly), speckled (many small dots), nucleolar and centromere."],
      ["why", "The pattern gives a hint about which autoantibodies may be present. It helps the doctor decide which more specific tests, such as anti-dsDNA or anti-Sm, to order next."],
      ["report", "The pattern is printed beside the titer. Some reports add a code beginning with AC, such as AC-1, from an international list of pattern names."],
      ["know", "A pattern is a clue and not a diagnosis. The same pattern can be seen in different conditions and in healthy people."],
    ],
    vi: [
      ["what", "Trong xét nghiệm ANA thông thường, máu của người bệnh được nhỏ lên các tế bào trên lam kính, rồi một chất nhuộm phát sáng cho thấy kháng thể đã bám vào đâu. Hình ảnh vùng phát sáng nhìn dưới kính hiển vi chính là kiểu huỳnh quang. Các kiểu thường gặp là đồng nhất (cả nhân sáng đều), lốm đốm (nhiều chấm nhỏ), hạch nhân và tâm động."],
      ["why", "Kiểu huỳnh quang gợi ý người bệnh có thể có những tự kháng thể nào. Nhờ đó bác sĩ quyết định nên làm tiếp xét nghiệm chuyên biệt nào, ví dụ anti-dsDNA hay anti-Sm."],
      ["report", "Kiểu huỳnh quang được in bên cạnh hiệu giá. Một số phiếu kết quả ghi thêm mã bắt đầu bằng AC, ví dụ AC-1, lấy từ một danh mục quốc tế về tên các kiểu huỳnh quang."],
      ["know", "Kiểu huỳnh quang chỉ là một gợi ý, không phải chẩn đoán. Cùng một kiểu có thể gặp trong nhiều bệnh khác nhau và cả ở người khỏe mạnh."],
    ],
  },

  titer: {
    en: [
      ["what", "A titer is a way of saying how much antibody is in the blood. The laboratory dilutes the sample step by step, each time doubling the dilution, and tests it again. The titer is the last dilution at which the test is still positive."],
      ["report", "A titer is written as a ratio such as 1:80, 1:160 or 1:320. A larger second number means the sample could be diluted further and still test positive, so more antibody was present. Because each step is a doubling, titers move in jumps and not along a smooth scale."],
      ["know", "The dilution a laboratory uses as its starting point, and the one it calls positive, differ between laboratories. A change of one step between two tests is within the normal variation of the method."],
    ],
    vi: [
      ["what", "Hiệu giá là một cách cho biết trong máu có nhiều hay ít kháng thể. Phòng xét nghiệm pha loãng mẫu máu từng bước, mỗi bước loãng gấp đôi bước trước, rồi thử lại. Hiệu giá là mức pha loãng cuối cùng mà xét nghiệm vẫn còn dương tính."],
      ["report", "Hiệu giá được viết dưới dạng tỉ lệ như 1:80, 1:160 hoặc 1:320. Số thứ hai càng lớn thì mẫu càng pha loãng được nhiều mà vẫn dương tính, tức là có càng nhiều kháng thể. Vì mỗi bước là một lần gấp đôi, hiệu giá thay đổi theo từng nấc chứ không liên tục."],
      ["know", "Mức pha loãng khởi đầu, và mức được coi là dương tính, khác nhau giữa các phòng xét nghiệm. Chênh một nấc giữa hai lần xét nghiệm vẫn nằm trong dao động bình thường của phương pháp."],
    ],
  },

  "anti-dsdna": {
    en: [
      ["what", "Anti-dsDNA is an autoantibody against double-stranded DNA, the genetic material inside the cell nucleus. It is measured with a blood test."],
      ["why", "It has two uses. It helps with diagnosis, because it is uncommon outside lupus. It is also repeated over time, because in many people the amount rises and falls with disease activity, particularly when the kidneys are involved."],
      ["report", "The result is usually a number with units, often IU/mL, beside the laboratory's own cut-off. Some methods give a titer instead. Laboratories use several different methods, and their numbers cannot be compared with each other."],
      ["know", "Many people with lupus never have anti-dsDNA, so a negative result does not rule lupus out. In some people it stays raised for long periods while lupus is quiet."],
    ],
    vi: [
      ["what", "Anti-dsDNA là tự kháng thể chống lại DNA chuỗi kép, tức vật chất di truyền nằm trong nhân tế bào. Kháng thể này được đo bằng xét nghiệm máu."],
      ["why", "Xét nghiệm này có hai công dụng. Thứ nhất là hỗ trợ chẩn đoán, vì kháng thể này ít gặp ngoài bệnh lupus. Thứ hai là theo dõi: xét nghiệm được làm lại nhiều lần, vì ở nhiều người lượng kháng thể này tăng giảm theo mức độ hoạt động bệnh, nhất là khi thận bị ảnh hưởng."],
      ["report", "Kết quả thường là một con số kèm đơn vị, hay gặp là IU/mL, đặt cạnh ngưỡng riêng của phòng xét nghiệm. Một số phương pháp cho kết quả dạng hiệu giá. Các phòng xét nghiệm dùng nhiều phương pháp khác nhau, nên không so sánh trực tiếp được con số giữa các nơi."],
      ["know", "Nhiều người bệnh lupus không bao giờ có anti-dsDNA, nên kết quả âm tính không loại trừ lupus. Ở một số người, anti-dsDNA tăng kéo dài ngay cả khi lupus đang ổn định."],
    ],
  },

  "anti-sm": {
    en: [
      ["what", "Anti-Sm is an autoantibody against a group of proteins in the cell nucleus that help process genetic messages. \"Sm\" comes from Smith, the name of the patient in whom it was first found. It has nothing to do with smooth muscle antibody, a different test."],
      ["why", "Anti-Sm is very specific for lupus: it is rarely found in other conditions. A positive result therefore supports the diagnosis. Only a minority of people with lupus have it."],
      ["report", "It is usually reported as positive or negative, sometimes with a number. It is often part of a panel called ENA, together with anti-RNP, anti-Ro and anti-La."],
      ["know", "Anti-Sm does not rise and fall with disease activity in a useful way, so it is normally tested once and not repeated."],
    ],
    vi: [
      ["what", "Anti-Sm là tự kháng thể chống lại một nhóm protein trong nhân tế bào có vai trò xử lý thông tin di truyền. \"Sm\" lấy từ Smith, tên người bệnh đầu tiên được phát hiện có kháng thể này. Anti-Sm không liên quan gì đến kháng thể kháng cơ trơn, vốn là một xét nghiệm khác."],
      ["why", "Anti-Sm rất đặc hiệu cho lupus, tức là hiếm khi gặp trong các bệnh khác. Vì vậy kết quả dương tính củng cố chẩn đoán lupus. Tuy nhiên chỉ một phần nhỏ người bệnh lupus có kháng thể này."],
      ["report", "Kết quả thường được ghi là dương tính hoặc âm tính, đôi khi kèm con số. Xét nghiệm này thường nằm trong một bộ xét nghiệm gọi là ENA, cùng với anti-RNP, anti-Ro và anti-La."],
      ["know", "Anti-Sm không tăng giảm rõ theo mức độ hoạt động bệnh, nên thường chỉ làm một lần và không làm lại."],
    ],
  },

  "anti-ro": {
    en: [
      ["what", "Anti-Ro, also called anti-SSA, is an autoantibody against a protein named Ro. It is found in a share of people with lupus and is also common in Sjögren's syndrome, a related autoimmune disease."],
      ["why", "It is linked to certain features of lupus, such as skin rashes brought on by sunlight. It matters most around pregnancy: the antibody can cross the placenta and, in a small number of pregnancies, affect the baby's skin or heartbeat. For this reason it is usually tested in women with lupus who are pregnant or planning to be."],
      ["report", "It is reported as positive or negative, sometimes with a number. Some reports split it into Ro52 and Ro60, two different target proteins."],
      ["know", "Anti-Ro does not follow disease activity, so it is not repeated at each visit."],
    ],
    vi: [
      ["what", "Anti-Ro, còn gọi là anti-SSA, là tự kháng thể chống lại một protein tên Ro. Một phần người bệnh lupus có kháng thể này, và nó cũng thường gặp trong hội chứng Sjögren, một bệnh tự miễn có liên quan."],
      ["why", "Kháng thể này liên quan đến một số biểu hiện của lupus, ví dụ ban da xuất hiện khi ra nắng. Nó quan trọng nhất trong thời kỳ mang thai: kháng thể có thể đi qua nhau thai và, trong một số ít trường hợp, ảnh hưởng đến da hoặc nhịp tim của em bé. Vì vậy phụ nữ bị lupus đang mang thai hoặc dự định mang thai thường được làm xét nghiệm này."],
      ["report", "Kết quả được ghi là dương tính hoặc âm tính, đôi khi kèm con số. Một số phiếu kết quả tách thành Ro52 và Ro60, là hai protein mục tiêu khác nhau."],
      ["know", "Anti-Ro không thay đổi theo mức độ hoạt động bệnh, nên không làm lại ở mỗi lần khám."],
    ],
  },

  "anti-la": {
    en: [
      ["what", "Anti-La, also called anti-SSB, is an autoantibody against a protein named La. It is almost always found together with anti-Ro and is rarely present alone."],
      ["why", "It is less common in lupus than anti-Ro and is seen more often in Sjögren's syndrome. Like anti-Ro, it can cross the placenta, so it is considered when planning a pregnancy."],
      ["report", "It is reported as positive or negative, sometimes with a number, usually in the same panel as anti-Ro, anti-Sm and anti-RNP."],
      ["know", "It does not follow disease activity and is normally tested once."],
    ],
    vi: [
      ["what", "Anti-La, còn gọi là anti-SSB, là tự kháng thể chống lại một protein tên La. Kháng thể này gần như luôn đi cùng anti-Ro và hiếm khi xuất hiện một mình."],
      ["why", "Ở người bệnh lupus, anti-La ít gặp hơn anti-Ro; nó thường gặp hơn trong hội chứng Sjögren. Giống anti-Ro, anti-La có thể đi qua nhau thai, nên được tính đến khi lên kế hoạch mang thai."],
      ["report", "Kết quả được ghi là dương tính hoặc âm tính, đôi khi kèm con số, thường nằm chung bộ xét nghiệm với anti-Ro, anti-Sm và anti-RNP."],
      ["know", "Anti-La không thay đổi theo mức độ hoạt động bệnh và thường chỉ làm một lần."],
    ],
  },

  "anti-rnp": {
    en: [
      ["what", "Anti-RNP, in full anti-U1 ribonucleoprotein, is an autoantibody against proteins attached to RNA in the cell nucleus. Its targets sit close to those of anti-Sm, and the two are often found together."],
      ["why", "It is present in a share of people with lupus. Very high amounts are typical of mixed connective tissue disease, a condition that overlaps with lupus. The result helps doctors tell these related conditions apart."],
      ["report", "It is reported as positive or negative, sometimes with a number, as part of the ENA panel."],
      ["know", "It does not follow disease activity and is normally tested once."],
    ],
    vi: [
      ["what", "Anti-RNP, tên đầy đủ là anti-U1 ribonucleoprotein, là tự kháng thể chống lại các protein gắn với RNA trong nhân tế bào. Mục tiêu của nó rất gần với mục tiêu của anti-Sm, và hai kháng thể này thường đi cùng nhau."],
      ["why", "Một phần người bệnh lupus có kháng thể này. Lượng rất cao là đặc trưng của bệnh mô liên kết hỗn hợp, một bệnh có nhiều biểu hiện giống lupus. Kết quả giúp bác sĩ phân biệt các bệnh gần nhau này."],
      ["report", "Kết quả được ghi là dương tính hoặc âm tính, đôi khi kèm con số, và nằm trong bộ xét nghiệm ENA."],
      ["know", "Anti-RNP không thay đổi theo mức độ hoạt động bệnh và thường chỉ làm một lần."],
    ],
  },

  antiphospholipid: {
    en: [
      ["what", "Antiphospholipid antibodies are autoantibodies against proteins that sit on phospholipids, fatty molecules on the surface of cells. Three tests make up the group: lupus anticoagulant, anticardiolipin antibodies and anti-beta-2 glycoprotein I antibodies."],
      ["why", "A sizeable minority of people with lupus have them. They are linked to a higher chance of blood clots and of pregnancy complications. Knowing whether they are present shapes decisions around pregnancy, surgery and some medicines, so guidelines advise testing everyone with lupus."],
      ["report", "Each of the three tests is reported separately. A positive result is normally repeated at least twelve weeks later, because these antibodies can appear briefly after an infection and then go away."],
      ["know", "Having the antibodies is not the same as having antiphospholipid syndrome. That name is used only when a person with lasting antibodies has also had a clot or certain pregnancy problems."],
    ],
    vi: [
      ["what", "Kháng thể kháng phospholipid là các tự kháng thể chống lại những protein bám trên phospholipid, tức các phân tử chất béo ở bề mặt tế bào. Nhóm này gồm ba xét nghiệm: kháng đông lupus, kháng thể kháng cardiolipin và kháng thể kháng beta-2 glycoprotein I."],
      ["why", "Một phần đáng kể người bệnh lupus có các kháng thể này. Chúng có liên quan đến nguy cơ cao hơn bị cục máu đông và biến chứng thai kỳ. Việc có hay không có các kháng thể này ảnh hưởng đến những quyết định về mang thai, phẫu thuật và một số thuốc, nên các hướng dẫn điều trị khuyên xét nghiệm cho mọi người bệnh lupus."],
      ["report", "Ba xét nghiệm được ghi kết quả riêng từng cái. Khi kết quả dương tính, xét nghiệm thường được làm lại sau ít nhất mười hai tuần, vì các kháng thể này có thể xuất hiện thoáng qua sau một đợt nhiễm trùng rồi biến mất."],
      ["know", "Có các kháng thể này không có nghĩa là mắc hội chứng kháng phospholipid. Tên gọi đó chỉ dùng khi một người có kháng thể tồn tại kéo dài và đã từng bị cục máu đông hoặc gặp một số biến chứng thai kỳ nhất định."],
    ],
  },

  "lupus-anticoagulant": {
    en: [
      ["what", "Lupus anticoagulant is one of the three antiphospholipid antibody tests. The name is misleading in two ways. People without lupus can have it. And although it makes blood clot more slowly in a test tube, in the body it is linked to more clotting, not less."],
      ["why", "Among the antiphospholipid tests, it is the one most strongly linked to blood clots and pregnancy complications."],
      ["report", "It is not measured directly. The laboratory runs clotting-time tests, often named dRVVT and aPTT, and checks whether the clotting time is prolonged and then corrects in a set way. The result is reported as present or absent, or positive or negative."],
      ["know", "Blood-thinning medicines can interfere with this test, so laboratories ask which medicines a person is taking."],
    ],
    vi: [
      ["what", "Kháng đông lupus là một trong ba xét nghiệm kháng thể kháng phospholipid. Tên gọi này dễ gây hiểu lầm ở hai điểm. Một là người không bị lupus cũng có thể có kháng thể này. Hai là tuy làm máu đông chậm hơn trong ống nghiệm, trong cơ thể nó lại liên quan đến việc máu dễ đông hơn chứ không phải khó đông hơn."],
      ["why", "Trong các xét nghiệm kháng phospholipid, đây là xét nghiệm liên quan chặt chẽ nhất đến cục máu đông và biến chứng thai kỳ."],
      ["report", "Kháng đông lupus không được đo trực tiếp. Phòng xét nghiệm làm các xét nghiệm thời gian đông máu, thường có tên dRVVT và aPTT, để xem thời gian đông có kéo dài không, và có trở về bình thường theo kiểu đặc trưng không. Kết quả được ghi là có hoặc không, hay dương tính hoặc âm tính."],
      ["know", "Thuốc chống đông có thể làm sai lệch xét nghiệm này, nên phòng xét nghiệm thường hỏi người bệnh đang dùng thuốc gì."],
    ],
  },

  anticardiolipin: {
    en: [
      ["what", "Anticardiolipin antibodies are one of the three antiphospholipid antibody tests. Cardiolipin is a fatty molecule used in the test to catch the antibodies."],
      ["why", "They are tested in lupus as part of the antiphospholipid group, to estimate the chance of blood clots and pregnancy complications."],
      ["report", "Two classes are usually reported, IgG and IgM, each as a number with its own units (often written GPL and MPL). Laboratories describe results as negative, low, medium or high. Medium and high results that persist carry more weight than low ones."],
      ["know", "These antibodies can appear for a short time after infections. A positive result is repeated at least twelve weeks later to see whether it lasts."],
    ],
    vi: [
      ["what", "Kháng thể kháng cardiolipin là một trong ba xét nghiệm kháng thể kháng phospholipid. Cardiolipin là một phân tử chất béo được dùng trong xét nghiệm để bắt giữ kháng thể."],
      ["why", "Ở người bệnh lupus, xét nghiệm này được làm cùng nhóm kháng phospholipid, để ước lượng nguy cơ bị cục máu đông và biến chứng thai kỳ."],
      ["report", "Phiếu kết quả thường ghi hai lớp là IgG và IgM, mỗi lớp là một con số với đơn vị riêng (thường viết GPL và MPL). Phòng xét nghiệm xếp kết quả thành âm tính, thấp, trung bình hoặc cao. Kết quả trung bình và cao tồn tại kéo dài có ý nghĩa hơn kết quả thấp."],
      ["know", "Các kháng thể này có thể xuất hiện trong thời gian ngắn sau nhiễm trùng. Khi kết quả dương tính, xét nghiệm được làm lại sau ít nhất mười hai tuần để xem kháng thể có còn hay không."],
    ],
  },

  "anti-b2gp1": {
    en: [
      ["what", "Anti-beta-2 glycoprotein I antibodies are one of the three antiphospholipid antibody tests. Beta-2 glycoprotein I is a blood protein that attaches to phospholipids, and it is thought to be the main target of this whole group of antibodies."],
      ["why", "They are tested alongside lupus anticoagulant and anticardiolipin. The more of the three tests are positive, the stronger the link with blood clots, so doctors look at all three together."],
      ["report", "IgG and IgM classes are reported as numbers beside the laboratory's cut-off. The name is often shortened to anti-β2GPI."],
      ["know", "As with the other antiphospholipid tests, a positive result is repeated at least twelve weeks later."],
    ],
    vi: [
      ["what", "Kháng thể kháng beta-2 glycoprotein I là một trong ba xét nghiệm kháng thể kháng phospholipid. Beta-2 glycoprotein I là một protein trong máu gắn vào phospholipid, và được cho là mục tiêu chính của cả nhóm kháng thể này."],
      ["why", "Xét nghiệm này được làm cùng với kháng đông lupus và kháng thể kháng cardiolipin. Trong ba xét nghiệm, càng nhiều cái dương tính thì mối liên quan với cục máu đông càng mạnh, nên bác sĩ xem cả ba cùng lúc."],
      ["report", "Lớp IgG và IgM được ghi bằng con số đặt cạnh ngưỡng của phòng xét nghiệm. Tên thường được viết tắt là anti-β2GPI."],
      ["know", "Giống các xét nghiệm kháng phospholipid khác, khi kết quả dương tính thì xét nghiệm được làm lại sau ít nhất mười hai tuần."],
    ],
  },

  coombs: {
    en: [
      ["what", "The direct Coombs test, also called the direct antiglobulin test or DAT, checks whether antibodies or complement proteins are stuck to the surface of red blood cells."],
      ["why", "In lupus, autoantibodies can attach to red blood cells and cause them to be destroyed early. This is called autoimmune hemolytic anemia. The Coombs test is ordered when anemia is found and this cause is suspected."],
      ["report", "The result is positive or negative. Some reports grade the strength with plus signs and say whether antibody (IgG), complement (C3) or both were found."],
      ["know", "A positive Coombs test can be found in people with lupus whose red cells are not being destroyed, so it is read together with the hemoglobin and other tests."],
    ],
    vi: [
      ["what", "Nghiệm pháp Coombs trực tiếp, còn gọi là xét nghiệm kháng globulin trực tiếp hay DAT, kiểm tra xem có kháng thể hoặc protein bổ thể bám trên bề mặt hồng cầu hay không."],
      ["why", "Ở người bệnh lupus, tự kháng thể có thể bám vào hồng cầu và làm hồng cầu bị phá hủy sớm. Tình trạng này gọi là thiếu máu tán huyết tự miễn. Bác sĩ chỉ định nghiệm pháp Coombs khi phát hiện thiếu máu và nghi ngờ nguyên nhân này."],
      ["report", "Kết quả là dương tính hoặc âm tính. Một số phiếu kết quả ghi mức độ mạnh yếu bằng các dấu cộng và ghi rõ tìm thấy kháng thể (IgG), bổ thể (C3) hay cả hai."],
      ["know", "Nghiệm pháp Coombs có thể dương tính ở người bệnh lupus mà hồng cầu không hề bị phá hủy, nên kết quả được xem xét cùng với huyết sắc tố và các xét nghiệm khác."],
    ],
  },

  complement: {
    en: [
      ["what", "Complement is a set of more than thirty proteins in the blood that work as part of the immune system. When triggered, they switch each other on in a chain and help clear germs and worn-out cells."],
      ["why", "In active lupus, clusters of autoantibodies and their targets, called immune complexes, trigger the complement chain and use the proteins up faster than the liver can replace them. Blood amounts then fall. Low complement can therefore be a sign of active lupus, especially in the kidneys."],
      ["report", "The two proteins measured most often are C3 and C4. Some laboratories also offer CH50, a test of how well the whole chain works."],
      ["know", "Complement is one of the few lupus tests in which a lower result, not a higher one, is the one doctors watch for."],
    ],
    vi: [
      ["what", "Bổ thể là một nhóm gồm hơn ba mươi protein trong máu, là một phần của hệ miễn dịch. Khi được kích hoạt, chúng kích hoạt lẫn nhau theo kiểu dây chuyền và giúp dọn dẹp vi trùng cùng các tế bào già."],
      ["why", "Khi lupus hoạt động, các cụm gồm tự kháng thể và mục tiêu của chúng, gọi là phức hợp miễn dịch, kích hoạt chuỗi bổ thể và làm các protein này bị dùng hết nhanh hơn tốc độ gan tạo bù. Khi đó lượng bổ thể trong máu giảm. Vì vậy bổ thể thấp có thể là dấu hiệu lupus đang hoạt động, nhất là ở thận."],
      ["report", "Hai protein được đo nhiều nhất là C3 và C4. Một số phòng xét nghiệm còn làm CH50, xét nghiệm đánh giá hoạt động của cả chuỗi bổ thể."],
      ["know", "Bổ thể là một trong số ít xét nghiệm lupus mà bác sĩ chú ý đến kết quả thấp chứ không phải kết quả cao."],
    ],
  },

  c3: {
    en: [
      ["what", "C3 is the most plentiful complement protein in the blood and sits at the centre of the complement chain. It is made mainly by the liver."],
      ["why", "C3 is measured at most lupus visits. When lupus is active, C3 can be used up and its amount in the blood can fall. Doctors compare each result with the person's earlier ones, because the trend says more than a single value."],
      ["report", "C3 is reported as a number, usually in g/L or mg/dL, beside the laboratory's reference range."],
      ["know", "C3 is also an acute-phase protein, which means the liver makes more of it during inflammation or infection. This can hide a fall. C3 can also be low for reasons other than lupus."],
    ],
    vi: [
      ["what", "C3 là protein bổ thể có nhiều nhất trong máu và giữ vị trí trung tâm trong chuỗi bổ thể. C3 chủ yếu do gan tạo ra."],
      ["why", "C3 được đo ở hầu hết các lần khám lupus. Khi lupus hoạt động, C3 có thể bị dùng hết nhanh và lượng trong máu giảm. Bác sĩ so sánh từng kết quả với các kết quả trước của chính người bệnh, vì xu hướng thay đổi cho biết nhiều điều hơn một giá trị đơn lẻ."],
      ["report", "C3 được ghi bằng một con số, thường theo đơn vị g/L hoặc mg/dL, đặt cạnh khoảng tham chiếu của phòng xét nghiệm."],
      ["know", "C3 cũng là một protein pha cấp, nghĩa là gan tạo ra nhiều hơn khi có viêm hoặc nhiễm trùng. Điều này có thể che mất tình trạng C3 đang giảm. C3 cũng có thể thấp vì những lý do khác ngoài lupus."],
    ],
  },

  c4: {
    en: [
      ["what", "C4 is a complement protein that acts early in the pathway triggered by antibodies. It is made mainly by the liver."],
      ["why", "C4 is measured together with C3. Because it sits early in the antibody-triggered pathway, it is often the first of the two to fall when lupus becomes active."],
      ["report", "C4 is reported as a number, usually in g/L or mg/dL, beside the laboratory's reference range. Its usual amounts are much smaller than those of C3."],
      ["know", "Some people are born with fewer working copies of the C4 gene and always have a lowish C4, even when lupus is quiet. For them a steady low C4 is their usual value, which is why doctors look at the change from a person's own baseline."],
    ],
    vi: [
      ["what", "C4 là một protein bổ thể tham gia ở giai đoạn đầu của con đường do kháng thể kích hoạt. C4 chủ yếu do gan tạo ra."],
      ["why", "C4 được đo cùng với C3. Vì nằm ở đầu con đường do kháng thể kích hoạt, C4 thường giảm trước C3 khi lupus bắt đầu hoạt động."],
      ["report", "C4 được ghi bằng một con số, thường theo đơn vị g/L hoặc mg/dL, đặt cạnh khoảng tham chiếu của phòng xét nghiệm. Lượng C4 thông thường thấp hơn nhiều so với C3."],
      ["know", "Một số người bẩm sinh có ít bản sao hoạt động của gen C4 nên C4 luôn hơi thấp, kể cả khi lupus ổn định. Với họ, C4 thấp và ổn định là mức thông thường, vì vậy bác sĩ xem mức thay đổi so với mức nền của từng người."],
    ],
  },
};
