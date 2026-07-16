import type { MemberProfile } from "@/types/profile";

const assetRoot = "/images/nguyen-gia-huy";

export const nguyenGiaHuy: MemberProfile = {
  slug: "nguyen-gia-huy",
  variant: "risk",
  knowsAbout: [
    "Banking risk management",
    "Branch banking",
    "Risk governance",
    "Internal controls",
    "Human-in-the-loop decision making",
  ],
  identity: {
    name: "Nguyễn Gia Huy",
    initials: "NGH",
    role: {
      en: "Deputy Head of Risk Management, BIDV Truong Son Branch",
      vi: "Phó Trưởng phòng Quản lý Rủi ro, BIDV Chi nhánh Trường Sơn",
    },
    hero: {
      en: "I bring branch-level risk discipline to banking innovation, testing whether evidence, controls and human accountability hold up in real operations.",
      vi: "Tôi đưa kỷ luật quản lý rủi ro tại tuyến chi nhánh vào đổi mới ngân hàng, kiểm chứng liệu bằng chứng, kiểm soát và trách nhiệm con người có đứng vững trong vận hành thực tế hay không.",
    },
    portrait: {
      src: `${assetRoot}/nguyen-gia-huy-portrait.jpeg`,
      alt: {
        en: "Professional portrait of Nguyen Gia Huy",
        vi: "Chân dung nghề nghiệp của Nguyễn Gia Huy",
      },
      width: 285,
      height: 427,
    },
    caption: [
      { en: "Risk / Controls / Branch Banking", vi: "Rủi ro / Kiểm soát / Ngân hàng Chi nhánh" },
      { en: "BIDV Truong Son", vi: "BIDV Trường Sơn" },
    ],
  },
  competitionLabel: {
    en: "Vietnam AI Innovation Challenge 2026 / Banking Track",
    vi: "Vietnam AI Innovation Challenge 2026 / Bảng Tài chính Ngân hàng",
  },
  heroCta: {
    label: { en: "Explore the risk lens", vi: "Khám phá góc nhìn rủi ro" },
    href: "#market-case",
  },
  judgeSummary: [
    {
      label: { en: "Current responsibility", vi: "Trách nhiệm hiện tại" },
      value: {
        en: "Deputy Head of Risk Management at a BIDV branch",
        vi: "Phó Trưởng phòng Quản lý Rủi ro tại chi nhánh BIDV",
      },
    },
    {
      label: { en: "Experience base", vi: "Nền tảng kinh nghiệm" },
      value: {
        en: "6+ years in banking risk management",
        vi: "Hơn 6 năm trong quản lý rủi ro ngân hàng",
      },
    },
    {
      label: { en: "Team mandate", vi: "Vai trò trong đội" },
      value: {
        en: "Branch reality, controls and risk validation",
        vi: "Thực tế chi nhánh, kiểm soát và thẩm định rủi ro",
      },
    },
  ],
  teamContribution: {
    title: {
      en: "The control discipline that keeps banking AI accountable",
      vi: "Kỷ luật kiểm soát giúp AI ngân hàng luôn có trách nhiệm",
    },
    statement: {
      en: "I pressure-test the team's ideas against branch reality: what evidence is available, where controls belong and when a human must decide.",
      vi: "Tôi kiểm chứng ý tưởng của đội bằng thực tế chi nhánh: có bằng chứng gì, kiểm soát cần đặt ở đâu và khi nào con người phải ra quyết định.",
    },
    intro: {
      en: "A banking workflow is not credible because the model produces an answer. It becomes credible when users can trace the basis, handle exceptions and retain clear accountability for the outcome.",
      vi: "Một quy trình ngân hàng không trở nên đáng tin chỉ vì mô hình tạo ra câu trả lời. Nó chỉ đáng tin khi người dùng truy được căn cứ, xử lý được ngoại lệ và duy trì trách nhiệm rõ ràng với kết quả.",
    },
    responsibilities: [
      {
        title: { en: "Risk framing", vi: "Định hình rủi ro" },
        detail: {
          en: "Identify the decision, potential failure modes and consequences that the banking workflow must control.",
          vi: "Xác định quyết định, các kịch bản sai lệch và hệ quả mà quy trình ngân hàng phải kiểm soát.",
        },
      },
      {
        title: { en: "Evidence and control points", vi: "Bằng chứng và điểm kiểm soát" },
        detail: {
          en: "Challenge whether inputs are sufficient, outputs are explainable and checkpoints sit at the right moments.",
          vi: "Phản biện liệu đầu vào đã đủ, đầu ra có thể giải thích và các điểm kiểm soát có nằm đúng thời điểm hay chưa.",
        },
      },
      {
        title: { en: "Exceptions and escalation", vi: "Ngoại lệ và cơ chế chuyển cấp" },
        detail: {
          en: "Define conditions that require additional evidence, manual review or escalation instead of automatic progression.",
          vi: "Xác định điều kiện cần bổ sung bằng chứng, rà soát thủ công hoặc chuyển cấp thay vì tự động đi tiếp.",
        },
      },
      {
        title: { en: "Branch adoption", vi: "Khả năng áp dụng tại chi nhánh" },
        detail: {
          en: "Keep the proposed workflow understandable and usable for the people who will operate it under real constraints.",
          vi: "Giữ quy trình đề xuất dễ hiểu và có thể sử dụng với những người sẽ vận hành trong các ràng buộc thực tế.",
        },
      },
    ],
  },
  marketCase: {
    name: "Branch Risk Governance",
    sectionLabel: { en: "Operating lens", vi: "Góc nhìn vận hành" },
    title: {
      en: "Where banking policy meets frontline decisions",
      vi: "Nơi chính sách ngân hàng gặp quyết định tuyến đầu",
    },
    intro: {
      en: "Branch risk management sits at the point where policy, customer context, operational evidence and human judgment must align. That perspective gives the team a practical standard for evaluating an AI-assisted banking workflow.",
      vi: "Quản lý rủi ro tại chi nhánh nằm ở điểm giao giữa chính sách, bối cảnh khách hàng, bằng chứng vận hành và phán đoán con người. Góc nhìn đó tạo cho đội một tiêu chuẩn thực tế để đánh giá quy trình ngân hàng có AI hỗ trợ.",
    },
    role: {
      en: "Deputy Head of Risk Management",
      vi: "Phó Trưởng phòng Quản lý Rủi ro",
    },
    thesis: {
      en: "A controlled decision must be evidence-based, exception-aware and owned by an accountable human.",
      vi: "Một quyết định có kiểm soát phải dựa trên bằng chứng, nhận diện được ngoại lệ và thuộc trách nhiệm của một con người cụ thể.",
    },
    blueprintLabel: { en: "Risk decision framework", vi: "Khung quyết định rủi ro" },
    blueprintMarkers: [
      { en: "Evidence", vi: "Bằng chứng" },
      { en: "Controls", vi: "Kiểm soát" },
      { en: "Decision", vi: "Quyết định" },
    ],
    facts: [
      {
        label: { en: "Operating context", vi: "Bối cảnh vận hành" },
        body: {
          en: "Risk decisions at branch level must connect policy with the information and constraints present in day-to-day banking operations.",
          vi: "Quyết định rủi ro tại chi nhánh phải kết nối chính sách với thông tin và ràng buộc hiện hữu trong vận hành ngân hàng hằng ngày.",
        },
      },
      {
        label: { en: "Professional foundation", vi: "Nền tảng nghề nghiệp" },
        body: {
          en: "More than six years in banking risk management, now serving as Deputy Head of Risk Management at BIDV Truong Son Branch.",
          vi: "Hơn sáu năm trong quản lý rủi ro ngân hàng, hiện là Phó Trưởng phòng Quản lý Rủi ro tại BIDV Chi nhánh Trường Sơn.",
        },
      },
      {
        label: { en: "Competition relevance", vi: "Giá trị với cuộc thi" },
        body: {
          en: "A frontline risk lens helps the team test traceability, exception handling, control placement and human oversight before the demo becomes a proposal.",
          vi: "Góc nhìn rủi ro tuyến đầu giúp đội kiểm chứng khả năng truy vết, xử lý ngoại lệ, vị trí kiểm soát và giám sát con người trước khi demo trở thành đề xuất.",
        },
      },
    ],
    stages: [
      {
        meta: { en: "01 / Evidence", vi: "01 / Bằng chứng" },
        title: { en: "Establish a defensible basis", vi: "Thiết lập căn cứ có thể bảo vệ" },
        body: {
          en: "Make the source, completeness and relevance of decision inputs visible to the reviewer.",
          vi: "Làm rõ nguồn, mức độ đầy đủ và tính liên quan của đầu vào quyết định cho người rà soát.",
        },
      },
      {
        meta: { en: "02 / Controls", vi: "02 / Kiểm soát" },
        title: { en: "Design for exceptions", vi: "Thiết kế cho ngoại lệ" },
        body: {
          en: "Set limits and checkpoints that route uncertain or higher-risk cases to the appropriate review path.",
          vi: "Đặt giới hạn và điểm kiểm soát để chuyển trường hợp không chắc chắn hoặc rủi ro cao tới luồng rà soát phù hợp.",
        },
      },
      {
        meta: { en: "03 / Accountability", vi: "03 / Trách nhiệm" },
        title: { en: "Keep the human decision explicit", vi: "Giữ quyết định con người minh bạch" },
        body: {
          en: "Preserve a clear decision owner and an auditable path from evidence to final action.",
          vi: "Duy trì chủ thể ra quyết định rõ ràng và đường dẫn có thể kiểm tra từ bằng chứng tới hành động cuối cùng.",
        },
      },
    ],
  },
  expertise: {
    title: { en: "Selected risk expertise", vi: "Chuyên môn rủi ro tiêu biểu" },
    intro: {
      en: "The profile focuses on three practical lenses that help the team judge whether a banking innovation is controlled, usable and institution-ready.",
      vi: "Hồ sơ tập trung vào ba góc nhìn thực tế giúp đội đánh giá liệu đổi mới ngân hàng có được kiểm soát, dễ sử dụng và sẵn sàng cho tổ chức hay không.",
    },
    items: [
      {
        code: "01",
        role: { en: "Professional foundation", vi: "Nền tảng nghề nghiệp" },
        title: { en: "Banking Risk Management", vi: "Quản lý Rủi ro Ngân hàng" },
        evidence: {
          en: "More than six years of risk management experience combined with current leadership responsibility at BIDV Truong Son Branch.",
          vi: "Hơn sáu năm kinh nghiệm quản lý rủi ro kết hợp với trách nhiệm lãnh đạo hiện tại tại BIDV Chi nhánh Trường Sơn.",
        },
        signal: { en: "Risk / Review / Accountability", vi: "Rủi ro / Rà soát / Trách nhiệm" },
        visual: "curve",
        featured: true,
      },
      {
        code: "02",
        role: { en: "Operating discipline", vi: "Kỷ luật vận hành" },
        title: { en: "Branch Controls & Governance", vi: "Kiểm soát & Quản trị Chi nhánh" },
        evidence: {
          en: "A branch perspective for testing how policy, evidence, exceptions and escalation fit into the workflow people actually use.",
          vi: "Góc nhìn chi nhánh để kiểm chứng cách chính sách, bằng chứng, ngoại lệ và chuyển cấp phù hợp với quy trình người dùng thực sự vận hành.",
        },
        signal: { en: "Policy / Controls / Escalation", vi: "Chính sách / Kiểm soát / Chuyển cấp" },
        visual: "liquidity",
      },
      {
        code: "03",
        role: { en: "AI workflow validation", vi: "Kiểm chứng quy trình AI" },
        title: { en: "Human-in-the-loop Risk Decisions", vi: "Quyết định Rủi ro có Con người Kiểm soát" },
        evidence: {
          en: "A practical framework for keeping AI outputs traceable, reviewable and subordinate to explicit human accountability.",
          vi: "Khung thực tế giúp đầu ra AI có thể truy vết, rà soát và luôn nằm dưới trách nhiệm rõ ràng của con người.",
        },
        signal: { en: "Evidence / Exceptions / Human review", vi: "Bằng chứng / Ngoại lệ / Người rà soát" },
        visual: "quant",
        visualLines: ["risk.check()", "evidence.trace()", "human.review()"],
      },
    ],
  },
  background: {
    title: {
      en: "Built on risk practice and banking fundamentals",
      vi: "Được xây từ thực tiễn rủi ro và nền tảng ngân hàng",
    },
    intro: {
      en: "A concise professional record centered on branch risk leadership, more than six years of banking risk management and formal finance education.",
      vi: "Hồ sơ nghề nghiệp cô đọng, tập trung vào lãnh đạo rủi ro tại chi nhánh, hơn sáu năm quản lý rủi ro ngân hàng và đào tạo tài chính chính quy.",
    },
    timeline: [
      {
        period: { en: "Current", vi: "Hiện tại" },
        organization: "BIDV Truong Son Branch",
        title: {
          en: "Deputy Head of Risk Management Department",
          vi: "Phó Trưởng phòng Quản lý Rủi ro",
        },
        detail: {
          en: "Brings a branch-level risk management perspective to banking decisions, controls and the team's innovation work.",
          vi: "Đóng góp góc nhìn quản lý rủi ro tại tuyến chi nhánh cho quyết định ngân hàng, kiểm soát và hoạt động đổi mới của đội.",
        },
      },
      {
        period: { en: "6+ years", vi: "Hơn 6 năm" },
        organization: "Banking sector",
        title: { en: "Banking Risk Management Professional", vi: "Cán bộ Quản lý Rủi ro Ngân hàng" },
        detail: {
          en: "Professional experience developed around banking risk management and control discipline.",
          vi: "Kinh nghiệm nghề nghiệp được xây dựng quanh quản lý rủi ro ngân hàng và kỷ luật kiểm soát.",
        },
      },
      {
        period: { en: "Academic foundation", vi: "Nền tảng học thuật" },
        organization: "University of Economics Ho Chi Minh City",
        title: { en: "Bachelor of Finance and Banking", vi: "Cử nhân Tài chính - Ngân hàng" },
        detail: {
          en: "Formal training in finance and banking supporting a career in banking risk management.",
          vi: "Đào tạo chính quy về tài chính và ngân hàng, làm nền tảng cho sự nghiệp quản lý rủi ro ngân hàng.",
        },
      },
    ],
    recognition: [
      {
        en: "Deputy Head of Risk Management Department, BIDV Truong Son Branch",
        vi: "Phó Trưởng phòng Quản lý Rủi ro, BIDV Chi nhánh Trường Sơn",
      },
      {
        en: "More than six years of banking risk management experience",
        vi: "Hơn sáu năm kinh nghiệm quản lý rủi ro ngân hàng",
      },
      {
        en: "Bachelor of Finance and Banking, University of Economics Ho Chi Minh City",
        vi: "Cử nhân Tài chính - Ngân hàng, Đại học Kinh tế TP.HCM",
      },
    ],
  },
  motivation: {
    title: { en: "Why this challenge", vi: "Vì sao tôi tham gia" },
    body: {
      en: "I bring the branch risk perspective to the Vietnam AI Innovation Challenge. A banking AI solution should not only appear intelligent; it should help users reach a better-controlled decision with visible evidence, clear exceptions and an accountable human in the loop.",
      vi: "Tôi mang góc nhìn rủi ro tại chi nhánh tới Vietnam AI Innovation Challenge. Một giải pháp AI ngân hàng không chỉ cần thể hiện sự thông minh; nó phải giúp người dùng đi tới quyết định được kiểm soát tốt hơn, với bằng chứng rõ ràng, ngoại lệ minh bạch và con người chịu trách nhiệm trong quy trình.",
    },
    closing: {
      en: "I'm here to make sure innovation earns trust at the point where banking decisions are made.",
      vi: "Tôi ở đây để bảo đảm đổi mới tạo được niềm tin tại chính nơi các quyết định ngân hàng được đưa ra.",
    },
  },
  contact: {
    title: {
      en: "Bring risk discipline into banking innovation",
      vi: "Đưa kỷ luật rủi ro vào đổi mới ngân hàng",
    },
    body: {
      en: "For a professional conversation about branch risk management, banking controls or the team's Banking Track perspective, reach Huy by email.",
      vi: "Để trao đổi chuyên môn về quản lý rủi ro tại chi nhánh, kiểm soát ngân hàng hoặc góc nhìn Banking Track của đội, hãy liên hệ với Huy qua email.",
    },
    ctaLabel: { en: "Email Huy", vi: "Email cho Huy" },
    email: "giahuy3393@gmail.com",
  },
  seo: {
    title: "Nguyễn Gia Huy | Branch Risk Management",
    description: {
      en: "Nguyen Gia Huy is Deputy Head of Risk Management at BIDV Truong Son Branch, bringing 6+ years of banking risk experience to the Banking Track.",
      vi: "Nguyễn Gia Huy là Phó Trưởng phòng Quản lý Rủi ro tại BIDV Chi nhánh Trường Sơn, đóng góp hơn 6 năm kinh nghiệm rủi ro ngân hàng cho Banking Track.",
    },
  },
};
