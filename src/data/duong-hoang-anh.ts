import type { MemberProfile } from "@/types/profile";

const assetRoot = "/images/duong-hoang-anh";

export const duongHoangAnh: MemberProfile = {
  slug: "duong-hoang-anh",
  variant: "finance",
  identity: {
    name: "Dương Hoàng Anh",
    initials: "DHA",
    role: {
      en: "Fixed Income Strategist & ALM Advisor",
      vi: "Chuyên gia Chiến lược Trái phiếu & Tư vấn ALM",
    },
    hero: {
      en: "I turn market signals, liquidity constraints and balance-sheet objectives into financial strategies that can be defended and executed.",
      vi: "Tôi chuyển hóa tín hiệu thị trường, ràng buộc thanh khoản và mục tiêu bảng cân đối thành chiến lược tài chính có thể bảo vệ và thực thi.",
    },
    portrait: {
      src: `${assetRoot}/duong-hoang-anh-portrait.webp`,
      alt: {
        en: "Portrait of Duong Hoang Anh in Kyoto, Japan",
        vi: "Chân dung Dương Hoàng Anh tại Kyoto, Nhật Bản",
      },
      width: 960,
      height: 1200,
    },
    caption: [
      { en: "Markets / ALM / Risk", vi: "Thị trường / ALM / Rủi ro" },
      { en: "BIDV / Fixed Income", vi: "BIDV / Trái phiếu" },
    ],
  },
  competitionLabel: {
    en: "Vietnam AI Innovation Challenge 2026 / Banking Track",
    vi: "Vietnam AI Innovation Challenge 2026 / Bảng Tài chính Ngân hàng",
  },
  heroCta: {
    label: { en: "Explore market expertise", vi: "Khám phá chuyên môn thị trường" },
    href: "#market-case",
  },
  judgeSummary: [
    {
      label: { en: "Professional milestone", vi: "Cột mốc chuyên môn" },
      value: {
        en: "Passed Level III of the CFA Program",
        vi: "Đã vượt qua Level III của CFA Program",
      },
    },
    {
      label: { en: "Market experience", vi: "Kinh nghiệm thị trường" },
      value: {
        en: "7+ years in fixed income and money markets",
        vi: "Hơn 7 năm trong thị trường trái phiếu và tiền tệ",
      },
    },
    {
      label: { en: "Execution proof", vi: "Bằng chứng thực thi" },
      value: {
        en: "Led a bond futures product from design to go-live",
        vi: "Dẫn dắt sản phẩm hợp đồng tương lai trái phiếu từ thiết kế tới go-live",
      },
    },
  ],
  teamContribution: {
    title: {
      en: "The market discipline that keeps banking innovation grounded",
      vi: "Kỷ luật thị trường giúp đổi mới ngân hàng luôn bám sát thực tế",
    },
    statement: {
      en: "I test every idea against market behavior, balance-sheet logic and risk controls.",
      vi: "Tôi kiểm chứng mọi ý tưởng bằng hành vi thị trường, logic bảng cân đối và các lớp kiểm soát rủi ro.",
    },
    intro: {
      en: "The team can build quickly. My role is to ensure we solve a problem banking users genuinely feel, with economics and controls that remain credible after the demo.",
      vi: "Đội có thể xây rất nhanh. Vai trò của tôi là bảo đảm chúng tôi giải đúng vấn đề người dùng ngân hàng thực sự gặp phải, với logic kinh tế và kiểm soát vẫn thuyết phục sau phần demo.",
    },
    responsibilities: [
      {
        title: { en: "Problem framing and desirability", vi: "Định hình bài toán và nhu cầu người dùng" },
        detail: {
          en: "Identify the banking pain point, target user and decision that the solution must improve.",
          vi: "Xác định đúng điểm đau ngân hàng, người dùng mục tiêu và quyết định mà giải pháp cần cải thiện.",
        },
      },
      {
        title: { en: "Financial and balance-sheet logic", vi: "Logic tài chính và bảng cân đối" },
        detail: {
          en: "Translate rates, liquidity, funding and portfolio objectives into clear product rules.",
          vi: "Chuyển lãi suất, thanh khoản, nguồn vốn và mục tiêu danh mục thành các quy tắc sản phẩm rõ ràng.",
        },
      },
      {
        title: { en: "Risk and control guardrails", vi: "Khung kiểm soát và rủi ro" },
        detail: {
          en: "Define the human checkpoints, limits and evidence needed for a defensible banking workflow.",
          vi: "Xác định các điểm kiểm soát của con người, giới hạn và bằng chứng cần thiết cho một quy trình ngân hàng có thể bảo vệ.",
        },
      },
      {
        title: { en: "Viability and judge narrative", vi: "Tính khả thi kinh doanh và câu chuyện với BGK" },
        detail: {
          en: "Challenge the value proposition and help explain why the solution should exist inside a bank.",
          vi: "Phản biện đề xuất giá trị và làm rõ vì sao giải pháp nên tồn tại trong một ngân hàng.",
        },
      },
    ],
  },
  marketCase: {
    name: "Bond Futures",
    sectionLabel: { en: "Career-defining case", vi: "Case study định hình sự nghiệp" },
    title: {
      en: "From market need to a live financial product",
      vi: "Từ nhu cầu thị trường đến một sản phẩm tài chính vận hành thực tế",
    },
    intro: {
      en: "An end-to-end product journey that connected instrument design with approval, accounting, risk management, controls and daily market operations.",
      vi: "Hành trình sản phẩm end-to-end kết nối thiết kế công cụ với phê duyệt, kế toán, quản trị rủi ro, kiểm soát và vận hành thị trường hàng ngày.",
    },
    role: {
      en: "Product Development & Trading Lead",
      vi: "Đầu mối Phát triển Sản phẩm & Giao dịch",
    },
    thesis: {
      en: "A financial product only works when market logic, controls and daily operations agree.",
      vi: "Một sản phẩm tài chính chỉ vận hành được khi logic thị trường, kiểm soát và hoạt động hàng ngày cùng thống nhất.",
    },
    facts: [
      {
        label: { en: "Challenge", vi: "Thách thức" },
        body: {
          en: "Launching a bond futures product required more than instrument design. Market rules, accounting, risk, controls and operations had to align.",
          vi: "Ra mắt sản phẩm hợp đồng tương lai trái phiếu đòi hỏi nhiều hơn thiết kế công cụ. Quy tắc thị trường, kế toán, rủi ro, kiểm soát và vận hành phải đồng bộ.",
        },
      },
      {
        label: { en: "Ownership", vi: "Phạm vi phụ trách" },
        body: {
          en: "Led the end-to-end development path from product design and approval through operational readiness and go-live.",
          vi: "Dẫn dắt toàn bộ lộ trình từ thiết kế và phê duyệt sản phẩm đến mức sẵn sàng vận hành và go-live.",
        },
      },
      {
        label: { en: "Operating proof", vi: "Bằng chứng vận hành" },
        body: {
          en: "Connected product development with subsequent bond trading, market-making and portfolio risk management.",
          vi: "Kết nối phát triển sản phẩm với giao dịch trái phiếu, tạo lập thị trường và quản trị rủi ro danh mục sau đó.",
        },
      },
    ],
    stages: [
      {
        meta: { en: "01 / Product architecture", vi: "01 / Kiến trúc sản phẩm" },
        title: { en: "Design the instrument", vi: "Thiết kế công cụ" },
        body: {
          en: "Translate market needs into product mechanics, participant workflows and measurable risk exposure.",
          vi: "Chuyển nhu cầu thị trường thành cơ chế sản phẩm, luồng người tham gia và mức phơi nhiễm rủi ro có thể đo lường.",
        },
      },
      {
        meta: { en: "02 / Control readiness", vi: "02 / Sẵn sàng kiểm soát" },
        title: { en: "Align the operating system", vi: "Đồng bộ hệ thống vận hành" },
        body: {
          en: "Bring accounting, risk, governance and operational controls into one launch path.",
          vi: "Đưa kế toán, rủi ro, quản trị và kiểm soát vận hành vào một lộ trình ra mắt thống nhất.",
        },
      },
      {
        meta: { en: "03 / Market execution", vi: "03 / Thực thi thị trường" },
        title: { en: "Go live and support trading", vi: "Go-live và hỗ trợ giao dịch" },
        body: {
          en: "Connect the approved product with market-making, portfolio decisions and daily risk discipline.",
          vi: "Kết nối sản phẩm đã được phê duyệt với tạo lập thị trường, quyết định danh mục và kỷ luật rủi ro hàng ngày.",
        },
      },
    ],
  },
  expertise: {
    title: { en: "Selected market expertise", vi: "Chuyên môn thị trường tiêu biểu" },
    intro: {
      en: "Three complementary lenses help the team assess whether a banking idea is desirable, viable and grounded in real financial operations.",
      vi: "Ba lăng kính bổ trợ giúp đội đánh giá một ý tưởng ngân hàng có đáng làm, khả thi về kinh doanh và bám sát vận hành tài chính thực tế hay không.",
    },
    items: [
      {
        code: "01",
        role: { en: "Markets and portfolio strategy", vi: "Thị trường và chiến lược danh mục" },
        title: { en: "Fixed Income & Portfolio Strategy", vi: "Chiến lược Trái phiếu & Danh mục" },
        evidence: {
          en: "Government and financial institution bonds, trading-book ownership, portfolio strategy and performance monitoring within balance-sheet and risk objectives.",
          vi: "Trái phiếu Chính phủ và tổ chức tài chính, quản lý trading book, chiến lược danh mục và theo dõi hiệu quả trong mục tiêu bảng cân đối và khẩu vị rủi ro.",
        },
        signal: { en: "Government & FI bonds", vi: "Trái phiếu Chính phủ & TCTC" },
        visual: "curve",
        featured: true,
      },
      {
        code: "02",
        role: { en: "Funding and balance sheet", vi: "Nguồn vốn và bảng cân đối" },
        title: { en: "Money Markets, Liquidity & ALM", vi: "Thị trường Tiền tệ, Thanh khoản & ALM" },
        evidence: {
          en: "Interbank lending, funding transactions, certificates of deposit, yield-curve analysis, ALM advisory and VND interest-rate swap development.",
          vi: "Cho vay liên ngân hàng, giao dịch nguồn vốn, chứng chỉ tiền gửi, phân tích đường cong lợi suất, tư vấn ALM và phát triển hoán đổi lãi suất VND.",
        },
        signal: { en: "Funding / Liquidity / Yield curve", vi: "Nguồn vốn / Thanh khoản / Đường cong lợi suất" },
        visual: "liquidity",
      },
      {
        code: "03",
        role: { en: "Decision support", vi: "Hỗ trợ ra quyết định" },
        title: { en: "Quant & AI-enabled Analysis", vi: "Phân tích Định lượng & AI" },
        evidence: {
          en: "Python-based data processing and reporting automation using pandas, NumPy and openpyxl, supported by AI tools for analysis and coding assistance.",
          vi: "Xử lý dữ liệu và tự động hóa báo cáo bằng Python với pandas, NumPy và openpyxl, kết hợp công cụ AI hỗ trợ phân tích và lập trình.",
        },
        signal: { en: "Python / Data / AI", vi: "Python / Dữ liệu / AI" },
        visual: "quant",
      },
    ],
  },
  background: {
    title: {
      en: "Built across products, portfolios and balance sheets",
      vi: "Kinh nghiệm xuyên suốt sản phẩm, danh mục và bảng cân đối",
    },
    intro: {
      en: "A career shaped by both product creation and the daily discipline of trading, liquidity and risk decisions.",
      vi: "Sự nghiệp được định hình bởi cả phát triển sản phẩm lẫn kỷ luật hàng ngày trong giao dịch, thanh khoản và quyết định rủi ro.",
    },
    timeline: [
      {
        period: { en: "Jan 2025 / Present", vi: "01/2025 / Hiện tại" },
        organization: "BIDV",
        title: { en: "Senior Fixed Income Trader", vi: "Chuyên gia Giao dịch Trái phiếu Cao cấp" },
        detail: {
          en: "Covers government and financial institution bond markets, selected trading books and long-term portfolio strategies, with Python-based process improvement for decision support.",
          vi: "Phụ trách thị trường trái phiếu Chính phủ và tổ chức tài chính, một số trading book và chiến lược danh mục dài hạn, đồng thời cải tiến quy trình bằng Python để hỗ trợ ra quyết định.",
        },
      },
      {
        period: { en: "Jan 2024 / Dec 2024", vi: "01/2024 / 12/2024" },
        organization: "BIDV",
        title: {
          en: "Money Market & Interest Rate Trader, ALM Advisory",
          vi: "Giao dịch Thị trường Tiền tệ & Lãi suất, Tư vấn ALM",
        },
        detail: {
          en: "Traded interest-rate products, monitored funding and liquidity across the yield curve, advised ALM decisions and led research into VND interest-rate swaps.",
          vi: "Giao dịch sản phẩm lãi suất, theo dõi nguồn vốn và thanh khoản trên đường cong lợi suất, tư vấn quyết định ALM và dẫn dắt nghiên cứu hoán đổi lãi suất VND.",
        },
      },
      {
        period: { en: "Nov 2016 / Oct 2022", vi: "11/2016 / 10/2022" },
        organization: "BIDV",
        title: {
          en: "Fixed Income Trader & Futures Product Development",
          vi: "Giao dịch Trái phiếu & Phát triển Sản phẩm Hợp đồng Tương lai",
        },
        detail: {
          en: "Led bond-futures product development, managed a VND fixed-income portfolio, executed market-making and researched macro, rates and yield-curve dynamics.",
          vi: "Dẫn dắt phát triển sản phẩm hợp đồng tương lai trái phiếu, quản lý danh mục trái phiếu VND, thực hiện tạo lập thị trường và nghiên cứu vĩ mô, lãi suất cùng đường cong lợi suất.",
        },
      },
      {
        period: { en: "2012 / 2016", vi: "2012 / 2016" },
        organization: "Foreign Trade University",
        title: { en: "Banking & Finance", vi: "Tài chính Ngân hàng" },
        detail: {
          en: "Graduated with an 8.0 grade and Very Good classification.",
          vi: "Tốt nghiệp điểm 8.0, xếp loại Giỏi.",
        },
      },
    ],
    recognition: [
      {
        en: "Passed Level III of the CFA Program",
        vi: "Đã vượt qua Level III của CFA Program",
      },
      {
        en: "Outstanding Trader Award, BIDV Treasury, 2019, 2020 and 2021",
        vi: "Outstanding Trader Award, Ban Kinh doanh Vốn BIDV, 2019, 2020 và 2021",
      },
      {
        en: "First Prize, Financial Race 2015",
        vi: "Giải Nhất cuộc thi Financial Race 2015",
      },
      {
        en: "Third Prize, Vietnam National Olympiad in Informatics",
        vi: "Giải Ba Kỳ thi Olympic Tin học Quốc gia",
      },
    ],
  },
  motivation: {
    title: { en: "Why this challenge", vi: "Vì sao tôi tham gia" },
    body: {
      en: "I joined the Vietnam AI Innovation Challenge to bring a market practitioner's lens to AI innovation. The strongest banking solution must respect how users, liquidity, balance sheets, risk controls and human decisions interact, not simply add AI to an existing process.",
      vi: "Tôi tham gia Vietnam AI Innovation Challenge để đưa góc nhìn của người trực tiếp làm thị trường vào đổi mới AI. Một giải pháp ngân hàng mạnh phải tôn trọng cách người dùng, thanh khoản, bảng cân đối, kiểm soát rủi ro và quyết định con người tương tác, thay vì chỉ thêm AI vào quy trình sẵn có.",
    },
    closing: {
      en: "I'm here to make our AI idea desirable for users, viable for the bank and credible in the market.",
      vi: "Tôi ở đây để bảo đảm ý tưởng AI của đội đáng dùng với khách hàng, khả thi với ngân hàng và đáng tin trên thị trường.",
    },
  },
  contact: {
    title: { en: "Bring market discipline into the solution", vi: "Đưa kỷ luật thị trường vào giải pháp" },
    body: {
      en: "For a conversation about fixed income, liquidity, ALM or the team's Banking Track perspective, reach me by email.",
      vi: "Để trao đổi về trái phiếu, thanh khoản, ALM hoặc góc nhìn Banking Track của đội, hãy liên hệ với tôi qua email.",
    },
    ctaLabel: { en: "Email Anh", vi: "Email cho Anh" },
    email: "anhdh1994@gmail.com",
  },
  seo: {
    title: "Dương Hoàng Anh | Fixed Income Strategist",
    description: {
      en: "Dương Hoàng Anh is a BIDV fixed-income strategist bringing market, ALM, liquidity and risk expertise to the Banking Track.",
      vi: "Dương Hoàng Anh là chuyên gia chiến lược trái phiếu tại BIDV, đóng góp chuyên môn thị trường, ALM, thanh khoản và rủi ro cho Banking Track.",
    },
  },
};
