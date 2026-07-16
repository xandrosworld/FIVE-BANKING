import type { MemberProfile } from "@/types/profile";

const assetRoot = "/images/ho-khanh-quynh";

export const hoKhanhQuynh: MemberProfile = {
  slug: "ho-khanh-quynh",
  variant: "project",
  knowsAbout: [
    "Project finance",
    "Corporate credit",
    "Investment project appraisal",
    "Financial analysis",
    "Credit risk assessment",
    "Renewable energy finance",
    "Healthcare and education infrastructure",
    "Applied AI in banking",
  ],
  identity: {
    name: "Hồ Khánh Quỳnh",
    initials: "HKQ",
    role: {
      en: "Project Finance & Credit Appraisal Manager",
      vi: "Quản lý Tài trợ Dự án & Thẩm định Tín dụng",
    },
    hero: {
      en: "I turn complex investment plans into credit decisions grounded in financial feasibility, sector risk and a structure the bank can defend.",
      vi: "Tôi chuyển những kế hoạch đầu tư phức tạp thành quyết định tín dụng dựa trên tính khả thi tài chính, rủi ro ngành và cấu trúc ngân hàng có thể bảo vệ.",
    },
    portrait: {
      src: `${assetRoot}/ho-khanh-quynh-portrait.png`,
      alt: {
        en: "Professional portrait of Ho Khanh Quynh",
        vi: "Chân dung nghề nghiệp của Hồ Khánh Quỳnh",
      },
      width: 231,
      height: 300,
    },
    caption: [
      { en: "Project Finance / Credit / AI", vi: "Tài trợ Dự án / Tín dụng / AI" },
      { en: "Hanoi, Vietnam", vi: "Hà Nội, Việt Nam" },
    ],
  },
  competitionLabel: {
    en: "Vietnam AI Innovation Challenge 2026 / Banking Track",
    vi: "Vietnam AI Innovation Challenge 2026 / Bảng Tài chính Ngân hàng",
  },
  heroCta: {
    label: { en: "Explore the appraisal lens", vi: "Khám phá góc nhìn thẩm định" },
    href: "#market-case",
  },
  judgeSummary: [
    {
      label: { en: "Experience base", vi: "Nền tảng kinh nghiệm" },
      value: {
        en: "Nearly 15 years in finance and banking",
        vi: "Gần 15 năm trong tài chính và ngân hàng",
      },
    },
    {
      label: { en: "Core discipline", vi: "Chuyên môn cốt lõi" },
      value: {
        en: "Corporate credit and large-project appraisal",
        vi: "Tín dụng doanh nghiệp và thẩm định dự án lớn",
      },
    },
    {
      label: { en: "Team mandate", vi: "Vai trò trong đội" },
      value: {
        en: "Financial feasibility, risk and credit structure",
        vi: "Khả thi tài chính, rủi ro và cấu trúc tín dụng",
      },
    },
  ],
  teamContribution: {
    title: {
      en: "The appraisal discipline behind a defensible banking decision",
      vi: "Kỷ luật thẩm định đứng sau một quyết định ngân hàng có thể bảo vệ",
    },
    statement: {
      en: "I challenge the team's proposal as an appraiser would: test the cash flow, surface the risks and connect every recommendation to evidence.",
      vi: "Tôi phản biện đề xuất của đội như một người thẩm định: kiểm tra dòng tiền, làm rõ rủi ro và gắn mọi khuyến nghị với bằng chứng.",
    },
    intro: {
      en: "Large projects demand one coherent view of commercial assumptions, financing structure, sector conditions and execution evidence.",
      vi: "Dự án lớn đòi hỏi một góc nhìn thống nhất về giả định thương mại, cấu trúc vốn, điều kiện ngành và bằng chứng triển khai.",
    },
    responsibilities: [
      {
        title: { en: "Financial feasibility", vi: "Khả thi tài chính" },
        detail: {
          en: "Test operating assumptions, projected cash flows, debt capacity and sensitivity to adverse scenarios.",
          vi: "Kiểm tra giả định vận hành, dòng tiền dự phóng, khả năng trả nợ và độ nhạy trước các kịch bản bất lợi.",
        },
      },
      {
        title: { en: "Sector and project risk", vi: "Rủi ro ngành và dự án" },
        detail: {
          en: "Frame the technical, market, legal, construction and operating risks that can change credit quality.",
          vi: "Định hình rủi ro kỹ thuật, thị trường, pháp lý, xây dựng và vận hành có thể làm thay đổi chất lượng tín dụng.",
        },
      },
      {
        title: { en: "Credit structure", vi: "Cấu trúc tín dụng" },
        detail: {
          en: "Shape financing conditions, control points and monitoring logic around the project's real risk profile.",
          vi: "Xây dựng điều kiện cấp vốn, điểm kiểm soát và logic giám sát theo đúng hồ sơ rủi ro thực tế của dự án.",
        },
      },
      {
        title: { en: "Stakeholder coordination", vi: "Điều phối các bên liên quan" },
        detail: {
          en: "Bring commercial, technical, legal and risk perspectives together before a recommendation advances.",
          vi: "Kết nối góc nhìn thương mại, kỹ thuật, pháp lý và rủi ro trước khi khuyến nghị được trình lên.",
        },
      },
    ],
  },
  marketCase: {
    name: "Large-Scale Project Finance",
    sectionLabel: { en: "Professional focus", vi: "Trọng tâm nghề nghiệp" },
    title: {
      en: "Turning complex investment plans into defensible credit decisions",
      vi: "Biến kế hoạch đầu tư phức tạp thành quyết định tín dụng có thể bảo vệ",
    },
    intro: {
      en: "At a Project Finance Center within a Vietnamese Big Four bank, Quỳnh focuses on appraising the feasibility of large investments, especially renewable energy, healthcare and education projects.",
      vi: "Tại Trung tâm Tài trợ Dự án của một ngân hàng Big4 Việt Nam, anh Quỳnh tập trung thẩm định tính khả thi của các khoản đầu tư lớn, đặc biệt trong năng lượng tái tạo, y tế và giáo dục.",
    },
    role: {
      en: "Middle Manager, Project Finance Center",
      vi: "Quản lý Cấp trung, Trung tâm Tài trợ Dự án",
    },
    thesis: {
      en: "Capital should move only when financial logic, project risk, credit structure and implementation evidence align.",
      vi: "Nguồn vốn chỉ nên được triển khai khi logic tài chính, rủi ro dự án, cấu trúc tín dụng và bằng chứng thực hiện cùng nhất quán.",
    },
    blueprintLabel: { en: "Project appraisal framework", vi: "Khung thẩm định dự án" },
    blueprintMarkers: [
      { en: "Feasibility", vi: "Khả thi" },
      { en: "Risk", vi: "Rủi ro" },
      { en: "Credit structure", vi: "Cấu trúc tín dụng" },
    ],
    facts: [
      {
        label: { en: "Operating context", vi: "Bối cảnh công việc" },
        body: {
          en: "Middle-management responsibility within a head-office project finance function at a Vietnamese Big Four bank.",
          vi: "Trách nhiệm quản lý cấp trung trong chức năng tài trợ dự án tại trụ sở chính của một ngân hàng Big4 Việt Nam.",
        },
      },
      {
        label: { en: "Sector reach", vi: "Phạm vi ngành" },
        body: {
          en: "Large investments across hydropower, wind, solar, hospitals and schools demand different assumptions but the same evidence discipline.",
          vi: "Các khoản đầu tư lớn vào thủy điện, điện gió, điện mặt trời, bệnh viện và trường học có giả định khác nhau nhưng cùng đòi hỏi kỷ luật bằng chứng.",
        },
      },
      {
        label: { en: "Decision discipline", vi: "Kỷ luật ra quyết định" },
        body: {
          en: "Financial analysis, risk assessment, credit structuring and close coordination form one appraisal process.",
          vi: "Phân tích tài chính, đánh giá rủi ro, xây dựng phương án tín dụng và phối hợp chặt chẽ tạo thành một quy trình thẩm định thống nhất.",
        },
      },
    ],
    stages: [
      {
        meta: { en: "01 / Feasibility", vi: "01 / Tính khả thi" },
        title: { en: "Interrogate the financial model", vi: "Kiểm tra mô hình tài chính" },
        body: {
          en: "Connect demand, pricing, cost, capital expenditure and cash-flow assumptions to debt-service capacity.",
          vi: "Kết nối giả định nhu cầu, giá, chi phí, vốn đầu tư và dòng tiền với khả năng trả nợ.",
        },
      },
      {
        meta: { en: "02 / Risk", vi: "02 / Rủi ro" },
        title: { en: "Stress the project beyond the base case", vi: "Thử sức chịu đựng ngoài kịch bản cơ sở" },
        body: {
          en: "Test sector, construction, operating and market risks under realistic adverse conditions.",
          vi: "Kiểm tra rủi ro ngành, xây dựng, vận hành và thị trường trong các điều kiện bất lợi thực tế.",
        },
      },
      {
        meta: { en: "03 / Structure", vi: "03 / Cấu trúc" },
        title: { en: "Build a controllable credit path", vi: "Xây dựng lộ trình tín dụng có thể kiểm soát" },
        body: {
          en: "Translate appraisal findings into financing terms, monitoring points and a clear recommendation.",
          vi: "Chuyển kết quả thẩm định thành điều khoản tài trợ, điểm giám sát và khuyến nghị rõ ràng.",
        },
      },
    ],
  },
  expertise: {
    title: { en: "Selected project-finance expertise", vi: "Chuyên môn tài trợ dự án tiêu biểu" },
    intro: {
      en: "Three connected disciplines show how Quỳnh evaluates whether a large investment can support safe, effective bank financing.",
      vi: "Ba nhóm năng lực liên kết thể hiện cách anh Quỳnh đánh giá liệu một khoản đầu tư lớn có thể tiếp nhận nguồn vốn ngân hàng an toàn và hiệu quả hay không.",
    },
    items: [
      {
        code: "01",
        role: { en: "Analytical foundation", vi: "Nền tảng phân tích" },
        title: { en: "Project Appraisal & Financial Analysis", vi: "Thẩm định Dự án & Phân tích Tài chính" },
        evidence: {
          en: "Nearly 15 years across banking, corporate credit and project appraisal support a structured view of feasibility, cash flow and repayment capacity.",
          vi: "Gần 15 năm trong ngân hàng, tín dụng doanh nghiệp và thẩm định dự án tạo nền tảng đánh giá có cấu trúc về tính khả thi, dòng tiền và khả năng trả nợ.",
        },
        signal: { en: "Model / Cash flow / Sensitivity", vi: "Mô hình / Dòng tiền / Độ nhạy" },
        visual: "curve",
        featured: true,
      },
      {
        code: "02",
        role: { en: "Sector perspective", vi: "Góc nhìn ngành" },
        title: {
          en: "Renewable Energy & Social Infrastructure",
          vi: "Năng lượng Tái tạo & Hạ tầng Xã hội",
        },
        evidence: {
          en: "Appraisal focus spanning hydropower, wind, solar, hospitals and schools, where project economics must withstand long horizons.",
          vi: "Trọng tâm thẩm định trải rộng từ thủy điện, điện gió, điện mặt trời tới bệnh viện và trường học, nơi hiệu quả dự án phải bền vững trong dài hạn.",
        },
        signal: { en: "Energy / Healthcare / Education", vi: "Năng lượng / Y tế / Giáo dục" },
        visual: "liquidity",
      },
      {
        code: "03",
        role: { en: "Decision design", vi: "Thiết kế quyết định" },
        title: {
          en: "Credit Structuring, Risk & Coordination",
          vi: "Cấu trúc Tín dụng, Rủi ro & Điều phối",
        },
        evidence: {
          en: "Appraisal findings become useful when they shape credit terms, controls and a coordinated decision across stakeholders.",
          vi: "Kết quả thẩm định chỉ thực sự hữu ích khi được chuyển thành điều kiện tín dụng, kiểm soát và quyết định phối hợp giữa các bên.",
        },
        signal: { en: "Stress / Structure / Coordinate", vi: "Thử sức / Cấu trúc / Điều phối" },
        visual: "quant",
        visualLines: ["cashflow.test()", "risk.stress()", "credit.structure()"],
      },
    ],
  },
  background: {
    title: {
      en: "A banking career built around credit judgment",
      vi: "Sự nghiệp ngân hàng được xây quanh năng lực phán đoán tín dụng",
    },
    intro: {
      en: "The verified record combines long-term banking experience, project appraisal responsibility, youth leadership and an active interest in applied AI.",
      vi: "Hồ sơ đã xác thực kết hợp kinh nghiệm dài hạn trong ngân hàng, trách nhiệm thẩm định dự án, hoạt động Đoàn và sự quan tâm chủ động tới AI ứng dụng.",
    },
    timeline: [
      {
        period: { en: "Current", vi: "Hiện tại" },
        organization: "Project Finance Center / Trung tâm Tài trợ Dự án",
        title: {
          en: "Middle Manager, Project Appraisal",
          vi: "Quản lý Cấp trung, Thẩm định Dự án",
        },
        detail: {
          en: "Appraises large investments and develops credit approaches within a Vietnamese Big Four bank.",
          vi: "Thẩm định các khoản đầu tư lớn và xây dựng phương án tín dụng tại một ngân hàng Big4 Việt Nam.",
        },
      },
      {
        period: { en: "Nearly 15 years", vi: "Gần 15 năm" },
        organization: "Finance and banking / Tài chính ngân hàng",
        title: {
          en: "Corporate Credit & Project Appraisal",
          vi: "Tín dụng Doanh nghiệp & Thẩm định Dự án",
        },
        detail: {
          en: "Experience across banking positions connected to corporate credit, financial analysis and investment-project appraisal.",
          vi: "Kinh nghiệm qua các vị trí ngân hàng liên quan đến tín dụng doanh nghiệp, phân tích tài chính và thẩm định dự án đầu tư.",
        },
      },
      {
        period: { en: "Two units", vi: "Hai đơn vị" },
        organization: "Youth Union / Đoàn Thanh niên",
        title: { en: "Former Deputy Secretary", vi: "Nguyên Phó Bí thư" },
        detail: {
          en: "Previously served as Deputy Secretary of the Youth Union at two organizational units.",
          vi: "Từng giữ vai trò Phó Bí thư Đoàn Thanh niên tại hai đơn vị.",
        },
      },
      {
        period: { en: "Ongoing", vi: "Đang tiếp tục" },
        organization: "Applied AI / AI ứng dụng",
        title: { en: "Independent Research Interest", vi: "Quan tâm Nghiên cứu Độc lập" },
        detail: {
          en: "Explores practical AI applications, especially for evidence-heavy banking workflows.",
          vi: "Tìm hiểu các ứng dụng thực tiễn của AI, đặc biệt trong những quy trình ngân hàng phụ thuộc nhiều vào bằng chứng.",
        },
      },
    ],
    recognition: [
      {
        en: "Nearly 15 years in finance and banking",
        vi: "Gần 15 năm trong lĩnh vực tài chính ngân hàng",
      },
      {
        en: "Large-project appraisal across renewable energy, healthcare and education",
        vi: "Thẩm định dự án lớn trong năng lượng tái tạo, y tế và giáo dục",
      },
      {
        en: "Former Deputy Secretary of the Youth Union at two units",
        vi: "Nguyên Phó Bí thư Đoàn Thanh niên tại hai đơn vị",
      },
      {
        en: "Active interest in researching applied AI",
        vi: "Chủ động quan tâm nghiên cứu AI ứng dụng",
      },
    ],
  },
  motivation: {
    title: {
      en: "Why applied AI belongs in project appraisal",
      vi: "Vì sao AI ứng dụng phù hợp với thẩm định dự án",
    },
    body: {
      en: "Project appraisal brings together long documents, financial models, sector evidence and interdependent risks. Applied well, AI can help specialists find evidence, compare assumptions and explore scenarios more consistently while keeping credit judgment with accountable professionals.",
      vi: "Thẩm định dự án kết nối tài liệu dài, mô hình tài chính, bằng chứng ngành và nhiều rủi ro phụ thuộc lẫn nhau. Khi được áp dụng đúng, AI có thể giúp chuyên gia tìm bằng chứng, đối chiếu giả định và phân tích kịch bản nhất quán hơn, trong khi phán đoán tín dụng vẫn thuộc về người chịu trách nhiệm.",
    },
    closing: {
      en: "I want AI to strengthen the evidence behind a credit decision, never obscure who owns it.",
      vi: "Tôi muốn AI củng cố bằng chứng đứng sau quyết định tín dụng, không bao giờ che mờ người chịu trách nhiệm.",
    },
  },
  contact: {
    title: {
      en: "Bring project-finance discipline into the team",
      vi: "Đưa kỷ luật tài trợ dự án vào đội ngũ",
    },
    body: {
      en: "This competition profile intentionally lists no personal contact channel and presents only the professional context relevant to The Banking Five.",
      vi: "Hồ sơ cuộc thi này chủ động không công khai kênh liên hệ cá nhân và chỉ trình bày bối cảnh nghề nghiệp liên quan tới The Banking Five.",
    },
    ctaLabel: { en: "Contact Quỳnh", vi: "Liên hệ anh Quỳnh" },
  },
  seo: {
    title: "Hồ Khánh Quỳnh | Project Finance & Credit Appraisal",
    description: {
      en: "Ho Khanh Quynh brings nearly 15 years in banking, corporate credit and large-project appraisal to The Banking Five at VAIC 2026.",
      vi: "Hồ Khánh Quỳnh mang gần 15 năm kinh nghiệm ngân hàng, tín dụng doanh nghiệp và thẩm định dự án lớn tới The Banking Five tại VAIC 2026.",
    },
  },
};
