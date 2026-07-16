import type { Locale, LocalizedCopy, MemberProfile } from "@/types/profile";
import { duongHoangAnh } from "./duong-hoang-anh.ts";
import { karthikeyanRamaswamy } from "./karthikeyan-ramaswamy.ts";
import { nguyenGiaHuy } from "./nguyen-gia-huy.ts";

export const githubUrl = "https://github.com/xandrosworld";

const assetRoot = "/images/mai-tan-thanh";

export const maiTanThanh: MemberProfile = {
  slug: "mai-tan-thanh",
  variant: "technology",
  knowsAbout: [
    "Applied AI",
    "Banking technology",
    "Solution architecture",
    "Document intelligence",
    "AI workflow orchestration",
  ],
  identity: {
    name: "Mai Tấn Thành",
    initials: "MTT",
    role: {
      en: "AI Technology Lead & Solution Architect",
      vi: "Tech Lead AI & Kiến trúc sư Giải pháp",
    },
    hero: {
      en: "I translate banking expertise into AI systems that can be tested, trusted and deployed.",
      vi: "Tôi chuyển hóa chuyên môn ngân hàng thành hệ thống AI có thể kiểm thử, tin cậy và triển khai.",
    },
    portrait: {
      src: `${assetRoot}/mai-tan-thanh-portrait-sunglasses.webp`,
      alt: {
        en: "Portrait of Mai Tan Thanh wearing black and sunglasses",
        vi: "Chân dung Mai Tấn Thành trong trang phục đen và đeo kính",
      },
      width: 960,
      height: 960,
    },
    caption: [
      { en: "AI / Banking / Systems", vi: "AI / Banking / Hệ thống" },
      { en: "Hanoi, VN", vi: "Hà Nội, Việt Nam" },
    ],
  },
  competitionLabel: {
    en: "Vietnam AI Innovation Challenge 2026 / Banking Track",
    vi: "Vietnam AI Innovation Challenge 2026 / Bảng Tài chính Ngân hàng",
  },
  heroCta: {
    label: { en: "Explore DocMind", vi: "Khám phá DocMind" },
    href: "#docmind",
  },
  judgeSummary: [
    {
      label: { en: "Product proof", vi: "Bằng chứng sản phẩm" },
      value: { en: "Built DocMind end to end", vi: "Trực tiếp xây DocMind end to end" },
    },
    {
      label: { en: "Domain context", vi: "Bối cảnh nghiệp vụ" },
      value: {
        en: "Banking operations, risk and digital transformation",
        vi: "Vận hành ngân hàng, rủi ro và chuyển đổi số",
      },
    },
    {
      label: { en: "Team mandate", vi: "Vai trò trong đội" },
      value: {
        en: "Technology lead for a five-person team",
        vi: "Tech Lead cho đội ngũ năm thành viên",
      },
    },
  ],
  teamContribution: {
    title: {
      en: "The technology layer that makes domain expertise executable",
      vi: "Lớp công nghệ biến chuyên môn nghiệp vụ thành sản phẩm chạy được",
    },
    statement: {
      en: "Banking specialists own domain depth. I turn that expertise into architecture, AI workflows and a reliable product.",
      vi: "Các chuyên gia ngân hàng làm chủ chiều sâu nghiệp vụ. Tôi chuyển hóa chuyên môn đó thành kiến trúc, AI workflow và một sản phẩm đáng tin cậy.",
    },
    intro: {
      en: "My role is not to replace the team's banking specialists. It is to give their judgment a technical system that can be integrated, tested and shipped under pressure.",
      vi: "Vai trò của tôi không thay thế các chuyên gia ngân hàng trong đội. Tôi tạo ra hệ thống kỹ thuật để chuyên môn của họ có thể được tích hợp, kiểm thử và triển khai dưới áp lực thời gian.",
    },
    responsibilities: [
      {
        title: { en: "Architecture and AI workflow", vi: "Kiến trúc và AI workflow" },
        detail: {
          en: "Define system boundaries, model orchestration and the right human checkpoints.",
          vi: "Xác định ranh giới hệ thống, cách điều phối mô hình và các điểm kiểm soát của con người.",
        },
      },
      {
        title: { en: "Banking to technical specification", vi: "Từ banking đến đặc tả kỹ thuật" },
        detail: {
          en: "Turn domain requirements into data contracts, acceptance criteria and buildable tasks.",
          vi: "Chuyển yêu cầu nghiệp vụ thành data contract, tiêu chí nghiệm thu và tác vụ có thể triển khai.",
        },
      },
      {
        title: { en: "Cross-stack integration", vi: "Tích hợp xuyên suốt hệ thống" },
        detail: {
          en: "Connect frontend, backend, data and AI into one coherent product workflow.",
          vi: "Kết nối frontend, backend, data và AI thành một luồng sản phẩm thống nhất.",
        },
      },
      {
        title: { en: "Release reliability", vi: "Độ tin cậy khi phát hành" },
        detail: {
          en: "Own integration, testing, logging, security decisions and deployment readiness.",
          vi: "Chịu trách nhiệm tích hợp, kiểm thử, logging, quyết định bảo mật và mức sẵn sàng triển khai.",
        },
      },
    ],
  },
  flagshipCase: {
    name: "DocMind",
    title: {
      en: "Evidence-first AI for credit dossiers",
      vi: "AI ưu tiên bằng chứng cho hồ sơ tín dụng",
    },
    intro: {
      en: "A working AI dossier workspace designed around reviewability, source traceability and the realities of banking documents.",
      vi: "Một AI workspace cho hồ sơ thực tế, được thiết kế xoay quanh khả năng kiểm tra, truy vết nguồn và đặc thù tài liệu ngân hàng.",
    },
    role: {
      en: "Sole End-to-End Builder",
      vi: "Người xây dựng End-to-End duy nhất",
    },
    repository: "https://github.com/xandrosworld/IDP-PLATFORM-PRO",
    repositoryLabel: "xandrosworld/IDP-PLATFORM-PRO",
    facts: [
      {
        label: { en: "Problem", vi: "Bài toán" },
        body: {
          en: "Credit dossiers are long, fragmented across sources, slow to reconcile and difficult to trace during review.",
          vi: "Hồ sơ tín dụng dài, phân tán ở nhiều nguồn, tốn thời gian đối chiếu và khó truy vết khi thẩm định.",
        },
      },
      {
        label: { en: "Built", vi: "Đã xây dựng" },
        body: {
          en: "Product workflow, architecture, AI orchestration, backend, frontend, source evidence, testing and deployment.",
          vi: "Luồng sản phẩm, kiến trúc, điều phối AI, backend, frontend, bằng chứng nguồn, kiểm thử và triển khai.",
        },
      },
      {
        label: { en: "Why it matters", vi: "Ý nghĩa" },
        body: {
          en: "Outputs help an appraiser verify the work. The system does not hide a lending decision inside an AI black box.",
          vi: "Đầu ra giúp người thẩm định kiểm tra công việc. Hệ thống không giấu quyết định tín dụng trong một hộp đen AI.",
        },
      },
    ],
    steps: [
      {
        id: "workflow",
        meta: { en: "01 / From dossier to review", vi: "01 / Từ hồ sơ đến thẩm định" },
        title: { en: "Automated dossier appraisal", vi: "Thẩm định hồ sơ tự động" },
        body: {
          en: "DocMind turns long and inconsistent input files into a structured review flow, from ingestion and extraction to preliminary appraisal output.",
          vi: "DocMind chuyển các tệp đầu vào dài và thiếu đồng nhất thành luồng thẩm định có cấu trúc, từ tiếp nhận, trích xuất đến đầu ra thẩm định sơ bộ.",
        },
        asset: {
          src: `${assetRoot}/docmind-automated-underwriting.webp`,
          alt: {
            en: "DocMind landing screen showing automated dossier appraisal and traceable banking document analysis",
            vi: "Màn hình DocMind giới thiệu thẩm định hồ sơ tự động và phân tích tài liệu ngân hàng có thể truy vết",
          },
          width: 1258,
          height: 1064,
        },
      },
      {
        id: "provenance",
        meta: { en: "02 / Source before assertion", vi: "02 / Nguồn trước kết luận" },
        title: { en: "Extraction with provenance", vi: "Trích xuất kèm truy vết nguồn" },
        body: {
          en: "The reviewer sees the original PDF beside structured multi-year data, with a direct path back to the source page and field.",
          vi: "Người thẩm định xem PDF gốc song song với dữ liệu nhiều năm đã cấu trúc, đồng thời có đường dẫn trực tiếp về đúng trang và trường nguồn.",
        },
        asset: {
          src: `${assetRoot}/docmind-source-traceability.webp`,
          alt: {
            en: "DocMind comparison workspace with a public financial statement on the left and extracted multi-year data on the right",
            vi: "Workspace đối chiếu DocMind với báo cáo tài chính công khai bên trái và dữ liệu nhiều năm được trích xuất bên phải",
          },
          width: 1900,
          height: 1075,
        },
      },
      {
        id: "copilot",
        meta: { en: "03 / Beyond OCR", vi: "03 / Không chỉ OCR" },
        title: { en: "A review workspace, not an OCR endpoint", vi: "Workspace thẩm định, không chỉ là OCR endpoint" },
        body: {
          en: "Document comparison, appraisal context and an AI copilot live in one product surface so every output remains inspectable.",
          vi: "Đối chiếu tài liệu, ngữ cảnh thẩm định và AI copilot cùng tồn tại trong một bề mặt sản phẩm để mọi đầu ra đều có thể kiểm tra.",
        },
        asset: {
          src: `${assetRoot}/docmind-capabilities.webp`,
          alt: {
            en: "DocMind capabilities page showing AI appraisal assistance and PDF to data comparison",
            vi: "Trang năng lực DocMind thể hiện trợ lý thẩm định AI và chức năng đối chiếu PDF với dữ liệu",
          },
          width: 1238,
          height: 911,
        },
      },
    ],
  },
  projects: {
    title: { en: "Selected systems", vi: "Hệ thống tiêu biểu" },
    intro: {
      en: "Three supporting repositories show how I approach operations, data products and release discipline beyond the flagship case.",
      vi: "Ba repository bổ trợ thể hiện cách tôi giải quyết hệ thống vận hành, sản phẩm dữ liệu và kỷ luật phát hành ngoài dự án flagship.",
    },
    items: [
      {
        name: "Vạn Phúc Operations System",
        repository: "https://github.com/xandrosworld/KH_ANDUCNHAN",
        repositoryLabel: "xandrosworld/KH_ANDUCNHAN",
        role: { en: "Multi-role business operations", vi: "Vận hành nghiệp vụ đa vai trò" },
        evidence: {
          en: "A business system shaped around operational roles, permissions and real working flows.",
          vi: "Hệ thống nghiệp vụ được xây quanh vai trò vận hành, phân quyền và luồng làm việc thực tế.",
        },
        asset: {
          src: `${assetRoot}/van-phuc-operations.webp`,
          alt: {
            en: "Van Phuc real estate operations platform with its dashboard interface",
            vi: "Nền tảng điều hành bất động sản Vạn Phúc cùng giao diện dashboard",
          },
          width: 1600,
          height: 900,
        },
        featured: true,
      },
      {
        name: "TronX AI Commerce Dashboard",
        repository: "https://github.com/xandrosworld/KH-QUAN-NENTANGHOC",
        repositoryLabel: "xandrosworld/KH-QUAN-NENTANGHOC",
        role: { en: "Data product and AI interaction", vi: "Sản phẩm dữ liệu và tương tác AI" },
        evidence: {
          en: "Multi-source data handling, dashboard decisions and AI-assisted interaction in one interface.",
          vi: "Xử lý dữ liệu đa nguồn, quyết định dashboard và tương tác có AI hỗ trợ trong cùng giao diện.",
        },
        asset: {
          src: `${assetRoot}/tronx-commerce-dashboard.webp`,
          alt: {
            en: "TronX commerce dashboard showing multi-channel business data and performance charts",
            vi: "Dashboard thương mại TronX hiển thị dữ liệu kinh doanh đa kênh và biểu đồ hiệu quả",
          },
          width: 1600,
          height: 900,
        },
      },
      {
        name: "UAT Command Center",
        repository: "https://github.com/xandrosworld/web-squad2",
        repositoryLabel: "xandrosworld/web-squad2",
        role: { en: "QA and release readiness", vi: "QA và mức sẵn sàng phát hành" },
        evidence: {
          en: "A command surface for UAT, role-based access and coordinated release decisions.",
          vi: "Bề mặt điều phối UAT, phân quyền theo vai trò và quyết định phát hành phối hợp.",
        },
        asset: {
          src: `${assetRoot}/uat-command-center.webp`,
          alt: {
            en: "Squad 2 UAT Command Center sign-in screen for centralized testing operations",
            vi: "Màn hình đăng nhập Bảng điều hành UAT Squad 2 cho hoạt động kiểm thử tập trung",
          },
          width: 1600,
          height: 900,
        },
      },
    ],
  },
  background: {
    title: { en: "Built from both sides of the brief", vi: "Kinh nghiệm từ cả hai phía của bài toán" },
    intro: {
      en: "Banking experience informs the constraints. Product building turns those constraints into an executable system.",
      vi: "Kinh nghiệm ngân hàng giúp hiểu đúng ràng buộc. Năng lực xây sản phẩm biến các ràng buộc đó thành hệ thống chạy được.",
    },
    timeline: [
      {
        period: { en: "2026 / Present", vi: "2026 / Hiện tại" },
        organization: "Xandro Systems",
        title: { en: "Founder & End-to-End Product Builder", vi: "Founder & Người xây sản phẩm End-to-End" },
        detail: {
          en: "Designing architecture and delivering software, AI automation, OCR and workflow systems for business clients.",
          vi: "Thiết kế kiến trúc và triển khai phần mềm, tự động hóa AI, OCR và hệ thống workflow cho khách hàng doanh nghiệp.",
        },
      },
      {
        period: { en: "2020 to 2023, 2025 to 2026", vi: "2020 đến 2023, 2025 đến 2026" },
        organization: "BIDV",
        title: {
          en: "Corporate Banking, Risk & Digital Transformation",
          vi: "Ngân hàng Doanh nghiệp, Quản lý Rủi ro & Chuyển đổi số",
        },
        detail: {
          en: "Worked across corporate banking, credit risk review and the BIDV Lending Hub transformation project.",
          vi: "Làm việc qua các mảng ngân hàng doanh nghiệp, rà soát rủi ro tín dụng và dự án chuyển đổi số BIDV Lending Hub.",
        },
      },
      {
        period: { en: "04/2026 to 07/2026 / In progress", vi: "04/2026 đến 07/2026 / Đang học" },
        organization: "AI Practical / 20,000 AI Talent",
        title: { en: "Applied AI Talent Program", vi: "Chương trình đào tạo AI ứng dụng" },
        detail: {
          en: "Enterprise-oriented training in AI applications, agents, product thinking, ethics and workflow automation.",
          vi: "Đào tạo định hướng doanh nghiệp về ứng dụng AI, agent, tư duy sản phẩm, đạo đức và tự động hóa workflow.",
        },
      },
      {
        period: { en: "Current", vi: "Hiện tại" },
        organization: "CFA Program",
        title: { en: "CFA Level II Candidate", vi: "Ứng viên CFA Level II" },
        detail: {
          en: "A finance foundation that supports structured reasoning about risk, evidence and business value.",
          vi: "Nền tảng tài chính hỗ trợ tư duy có cấu trúc về rủi ro, bằng chứng và giá trị kinh doanh.",
        },
      },
    ],
    recognition: [
      {
        en: "Top 2, CFA Research Challenge, university round",
        vi: "Top 2, CFA Research Challenge, vòng cấp trường",
      },
      {
        en: "Outstanding Banking Student, BIDV and State Bank Trade Union recognition, 2019",
        vi: "Sinh viên Ngân hàng tiêu biểu, được Công đoàn BIDV và Công đoàn Ngân hàng Nhà nước ghi nhận, 2019",
      },
    ],
  },
  motivation: {
    title: { en: "Why this challenge", vi: "Vì sao tôi tham gia" },
    body: {
      en: "I joined the Vietnam AI Innovation Challenge to prove that AI-native development is more than rapid prototyping. A valuable AI product must solve the right workflow, produce traceable outputs and remain reliable beyond the final demo.",
      vi: "Tôi tham gia Vietnam AI Innovation Challenge để chứng minh rằng phát triển AI-native không chỉ là tạo prototype thật nhanh. Một sản phẩm AI có giá trị phải giải đúng workflow, tạo đầu ra có thể truy vết và giữ được độ tin cậy sau phần demo cuối cùng.",
    },
    closing: {
      en: "I'm here to turn banking expertise into an AI system that survives beyond the demo.",
      vi: "Tôi ở đây để biến chuyên môn ngân hàng thành một hệ thống AI tiếp tục sống sau phần demo.",
    },
  },
  contact: {
    title: { en: "Build the system behind the pitch", vi: "Xây hệ thống đứng sau phần trình bày" },
    body: {
      en: "For repository evidence or a direct conversation about the technology role, use the two public channels below.",
      vi: "Để xem bằng chứng repository hoặc trao đổi trực tiếp về vai trò công nghệ, vui lòng dùng hai kênh công khai dưới đây.",
    },
    ctaLabel: { en: "Email Mai", vi: "Email cho Mai" },
    email: "maitanthanh1998@gmail.com",
    github: githubUrl,
  },
  seo: {
    title: "Mai Tấn Thành | AI Technology Lead",
    description: {
      en: "Mai Tan Thanh is an AI Technology Lead for the Banking Track, connecting banking expertise with DocMind, product architecture and reliable AI delivery.",
      vi: "Mai Tấn Thành là Tech Lead AI cho bảng Tài chính Ngân hàng, kết nối chuyên môn banking với DocMind, kiến trúc sản phẩm và triển khai AI đáng tin cậy.",
    },
  },
};

export const profiles: Record<string, MemberProfile> = {
  [maiTanThanh.slug]: maiTanThanh,
  [duongHoangAnh.slug]: duongHoangAnh,
  [karthikeyanRamaswamy.slug]: karthikeyanRamaswamy,
  [nguyenGiaHuy.slug]: nguyenGiaHuy,
};

export function localize(copy: LocalizedCopy, locale: Locale): string {
  return copy[locale];
}

export function getProfile(slug: string): MemberProfile | undefined {
  return profiles[slug];
}
