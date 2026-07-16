"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { localize } from "@/data/profiles";
import type {
  FinanceMemberProfile,
  Locale,
  MemberProfile,
  TechnologyMemberProfile,
} from "@/types/profile";

interface ProfilePageProps {
  profile: MemberProfile;
  initialLocale: Locale;
}

const ui = {
  en: {
    navigation: "Primary navigation",
    menu: "Menu",
    closeMenu: "Close menu",
    nav: [
      ["DocMind", "#docmind"],
      ["Team role", "#team-role"],
      ["Systems", "#systems"],
      ["Background", "#background"],
      ["Contact", "#contact"],
    ],
    skip: "Skip to content",
    explore: "Explore DocMind",
    github: "GitHub",
    judgeRead: "Judge summary",
    flagship: "Flagship case",
    productEvidence: "Product evidence",
    viewRepository: "View repository",
    openRepository: "Open repository",
    teamRole: "Team role",
    selectedWork: "Supporting proof",
    recognition: "Selected recognition",
    profileEvidence: "Competition-relevant background",
    motivation: "Motivation",
    contact: "Contact",
    email: "Email Mai",
    imageProgress: "Product view",
    footer: "THE BANKING FIVE | VAIC 2026",
  },
  vi: {
    navigation: "Điều hướng chính",
    menu: "Menu",
    closeMenu: "Đóng menu",
    nav: [
      ["DocMind", "#docmind"],
      ["Vai trò", "#team-role"],
      ["Hệ thống", "#systems"],
      ["Kinh nghiệm", "#background"],
      ["Liên hệ", "#contact"],
    ],
    skip: "Đi tới nội dung chính",
    explore: "Khám phá DocMind",
    github: "GitHub",
    judgeRead: "Tóm tắt cho BGK",
    flagship: "Dự án flagship",
    productEvidence: "Bằng chứng sản phẩm",
    viewRepository: "Xem repository",
    openRepository: "Mở repository",
    teamRole: "Vai trò trong đội",
    selectedWork: "Bằng chứng bổ trợ",
    recognition: "Ghi nhận tiêu biểu",
    profileEvidence: "Kinh nghiệm liên quan đến cuộc thi",
    motivation: "Động lực",
    contact: "Liên hệ",
    email: "Email cho Mai",
    imageProgress: "Màn hình sản phẩm",
    footer: "THE BANKING FIVE | VAIC 2026",
  },
} as const;

const navigation = {
  technology: {
    en: [
      ["DocMind", "#docmind"],
      ["Team role", "#team-role"],
      ["Systems", "#systems"],
      ["Background", "#background"],
      ["Contact", "#contact"],
    ],
    vi: [
      ["DocMind", "#docmind"],
      ["Vai trò", "#team-role"],
      ["Hệ thống", "#systems"],
      ["Kinh nghiệm", "#background"],
      ["Liên hệ", "#contact"],
    ],
  },
  finance: {
    en: [
      ["Market case", "#market-case"],
      ["Team role", "#team-role"],
      ["Expertise", "#expertise"],
      ["Background", "#background"],
      ["Contact", "#contact"],
    ],
    vi: [
      ["Case thị trường", "#market-case"],
      ["Vai trò", "#team-role"],
      ["Chuyên môn", "#expertise"],
      ["Kinh nghiệm", "#background"],
      ["Liên hệ", "#contact"],
    ],
  },
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function RepositoryLink({
  href,
  label,
  children,
  className = "repository-link",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}: ${children}`}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function Header({
  profile,
  locale,
  onLocaleChange,
}: {
  profile: MemberProfile;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = ui[locale];
  const navItems = navigation[profile.variant][locale];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.identity.initials}, ${profile.identity.name}, home`}
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.identity.initials}
          </span>
          <span className="brand-name">{profile.identity.name}</span>
        </a>

        <nav className="desktop-nav" aria-label={copy.navigation}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label="Language">
            {(["en", "vi"] as Locale[]).map((item) => (
              <button
                key={item}
                type="button"
                className={locale === item ? "is-active" : ""}
                aria-pressed={locale === item}
                onClick={() => onLocaleChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? copy.closeMenu : copy.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label={copy.navigation}
      >
        <div className="shell mobile-nav-inner">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span className="mono">0{index + 1}</span>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function DocMindCase({
  profile,
  locale,
}: {
  profile: TechnologyMemberProfile["flagshipCase"];
  locale: Locale;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const copy = ui[locale];

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-docmind-step]"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const next = Number((visible.target as HTMLElement).dataset.docmindStep ?? 0);
          setActiveStep(next);
        }
      },
      { rootMargin: "-24% 0px -42% 0px", threshold: [0.2, 0.5, 0.75] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const active = profile.steps[activeStep];

  return (
    <section id="docmind" className="docmind-section section-pad">
      <div className="shell">
        <div className="section-intro docmind-intro" data-reveal>
          <div>
            <p className="section-index mono">01 / {copy.flagship}</p>
            <h2>
              <span>{profile.name}</span>
              {localize(profile.title, locale)}
            </h2>
          </div>
          <div className="section-copy">
            <p>{localize(profile.intro, locale)}</p>
            <div className="role-stamp mono">{localize(profile.role, locale)}</div>
          </div>
        </div>

        <div className="case-facts" data-reveal>
          {profile.facts.map((fact) => (
            <article key={fact.label.en}>
              <h3 className="mono">{localize(fact.label, locale)}</h3>
              <p>{localize(fact.body, locale)}</p>
            </article>
          ))}
        </div>

        <div className="docmind-walkthrough">
          <div className="docmind-visual-column" aria-live="polite">
            <figure className="product-frame" key={active.id}>
              <div className="product-frame-bar">
                <span>DocMind</span>
                <span className="mono">
                  {copy.imageProgress} {String(activeStep + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <Image
                src={active.asset.src}
                alt={localize(active.asset.alt, locale)}
                width={active.asset.width}
                height={active.asset.height}
                sizes="(max-width: 1023px) 100vw, 58vw"
                quality={90}
              />
            </figure>
          </div>

          <div className="docmind-steps">
            {profile.steps.map((step, index) => (
              <article
                className={`docmind-step ${activeStep === index ? "is-active" : ""}`}
                data-docmind-step={index}
                key={step.id}
              >
                <div className="mobile-product-frame">
                  <Image
                    src={step.asset.src}
                    alt={localize(step.asset.alt, locale)}
                    width={step.asset.width}
                    height={step.asset.height}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    quality={88}
                  />
                </div>
                <p className="step-meta mono">{localize(step.meta, locale)}</p>
                <h3>{localize(step.title, locale)}</h3>
                <p>{localize(step.body, locale)}</p>
                <span className="step-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="case-repository" data-reveal>
          <span className="mono">{copy.productEvidence}</span>
          <RepositoryLink href={profile.repository} label={copy.viewRepository}>
            {profile.repositoryLabel}
          </RepositoryLink>
        </div>
      </div>
    </section>
  );
}

function MarketCase({
  profile,
  locale,
}: {
  profile: FinanceMemberProfile["marketCase"];
  locale: Locale;
}) {
  return (
    <section id="market-case" className="market-case-section section-pad">
      <div className="shell">
        <div className="section-intro market-case-intro" data-reveal>
          <div>
            <p className="section-index mono">01 / {localize(profile.sectionLabel, locale)}</p>
            <h2>
              <span>{profile.name}</span>
              {localize(profile.title, locale)}
            </h2>
          </div>
          <div className="section-copy">
            <p>{localize(profile.intro, locale)}</p>
            <div className="role-stamp mono">{localize(profile.role, locale)}</div>
          </div>
        </div>

        <div className="case-facts" data-reveal>
          {profile.facts.map((fact) => (
            <article key={fact.label.en}>
              <h3 className="mono">{localize(fact.label, locale)}</h3>
              <p>{localize(fact.body, locale)}</p>
            </article>
          ))}
        </div>

        <div className="market-blueprint">
          <figure className="market-thesis-card" data-reveal>
            <div className="market-card-meta mono">
              <span>Market infrastructure</span>
              <span>01 / 03</span>
            </div>
            <div className="market-curve-plot" aria-hidden="true">
              <svg viewBox="0 0 760 270" preserveAspectRatio="none">
                <path className="curve-grid-line" d="M0 210 H760" />
                <path className="curve-grid-line" d="M0 140 H760" />
                <path className="curve-grid-line" d="M0 70 H760" />
                <path className="curve-shadow" d="M14 223 C130 213, 174 168, 278 174 C392 181, 443 98, 552 108 C636 116, 677 60, 746 43" />
                <path className="curve-primary" d="M14 223 C130 213, 174 168, 278 174 C392 181, 443 98, 552 108 C636 116, 677 60, 746 43" />
                <circle cx="278" cy="174" r="7" />
                <circle cx="552" cy="108" r="7" />
                <circle cx="746" cy="43" r="7" />
              </svg>
              <span className="curve-label curve-label-design mono">Design</span>
              <span className="curve-label curve-label-control mono">Controls</span>
              <span className="curve-label curve-label-live mono">Go-live</span>
            </div>
            <figcaption>{localize(profile.thesis, locale)}</figcaption>
          </figure>

          <ol className="market-stages" data-reveal>
            {profile.stages.map((stage) => (
              <li key={stage.meta.en}>
                <p className="mono">{localize(stage.meta, locale)}</p>
                <h3>{localize(stage.title, locale)}</h3>
                <p>{localize(stage.body, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ExpertiseVisual({ visual }: { visual: FinanceMemberProfile["expertise"]["items"][number]["visual"] }) {
  if (visual === "curve") {
    return (
      <svg viewBox="0 0 620 190" preserveAspectRatio="none">
        <path className="expertise-grid-line" d="M0 150 H620" />
        <path className="expertise-grid-line" d="M0 95 H620" />
        <path className="expertise-curve-line" d="M10 158 C95 154, 131 118, 210 125 C296 133, 329 83, 421 91 C500 98, 545 47, 612 38" />
      </svg>
    );
  }

  if (visual === "liquidity") {
    return (
      <div className="liquidity-bars">
        {[44, 68, 52, 88, 64, 76, 96].map((height, index) => (
          <span key={height + index} style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="quant-stack mono">
      <span>pandas.read_excel()</span>
      <span>yield_curve.fit()</span>
      <span>risk_report.export()</span>
    </div>
  );
}

function ExpertiseSection({
  profile,
  locale,
}: {
  profile: FinanceMemberProfile["expertise"];
  locale: Locale;
}) {
  const copy = ui[locale];

  return (
    <section id="expertise" className="expertise-section section-pad">
      <div className="shell">
        <div className="section-intro systems-intro" data-reveal>
          <div>
            <p className="section-index mono">03 / {copy.selectedWork}</p>
            <h2>{localize(profile.title, locale)}</h2>
          </div>
          <p>{localize(profile.intro, locale)}</p>
        </div>

        <div className="expertise-archive">
          {profile.items.map((item) => (
            <article
              className={`expertise-entry ${item.featured ? "expertise-featured" : ""}`}
              key={item.code}
              data-reveal
            >
              <div className={`expertise-visual expertise-${item.visual}`} aria-hidden="true">
                <span className="expertise-code mono">{item.code}</span>
                <ExpertiseVisual visual={item.visual} />
                <span className="expertise-signal mono">{localize(item.signal, locale)}</span>
              </div>
              <div className="expertise-details">
                <p className="project-role mono">{localize(item.role, locale)}</p>
                <h3>{localize(item.title, locale)}</h3>
                <p>{localize(item.evidence, locale)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProfilePage({ profile, initialLocale }: ProfilePageProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const copy = ui[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const syncLocaleFromUrl = () => {
      const language = new URL(window.location.href).searchParams.get("lang");
      setLocale(language === "vi" ? "vi" : "en");
    };
    syncLocaleFromUrl();
    window.addEventListener("popstate", syncLocaleFromUrl);
    return () => window.removeEventListener("popstate", syncLocaleFromUrl);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lang", nextLocale);
    window.history.replaceState({}, "", nextUrl);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <Header profile={profile} locale={locale} onLocaleChange={changeLocale} />

      <main id="main-content" className={`profile-${profile.variant}`}>
        <section id="top" className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="competition-label mono">{localize(profile.competitionLabel, locale)}</p>
              <h1>{profile.identity.name}</h1>
              <p className="hero-role">{localize(profile.identity.role, locale)}</p>
              <p className="hero-statement">{localize(profile.identity.hero, locale)}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={profile.heroCta.href}>
                  {localize(profile.heroCta.label, locale)}
                  <span aria-hidden="true">↓</span>
                </a>
                {profile.contact.github ? (
                  <RepositoryLink
                    href={profile.contact.github}
                    label={copy.github}
                    className="button button-secondary"
                  >
                    {copy.github}
                  </RepositoryLink>
                ) : (
                  <a className="button button-secondary" href={`mailto:${profile.contact.email}`}>
                    {localize(profile.contact.ctaLabel, locale)}
                    <Arrow />
                  </a>
                )}
              </div>
            </div>

            <div className="hero-portrait-wrap" aria-label={localize(profile.identity.portrait.alt, locale)}>
              <div className="portrait-offset" aria-hidden="true" />
              <figure className="hero-portrait">
                <Image
                  src={profile.identity.portrait.src}
                  alt={localize(profile.identity.portrait.alt, locale)}
                  width={profile.identity.portrait.width}
                  height={profile.identity.portrait.height}
                  sizes="(max-width: 767px) 190px, (max-width: 1199px) 42vw, 430px"
                  loading="eager"
                  fetchPriority="high"
                  quality={75}
                />
                <figcaption className="portrait-caption mono">
                  <span>{localize(profile.identity.caption[0], locale)}</span>
                  <span>{localize(profile.identity.caption[1], locale)}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="judge-summary" aria-labelledby="judge-summary-title">
          <div className="shell">
            <h2 id="judge-summary-title" className="sr-only">
              {copy.judgeRead}
            </h2>
            <div className="summary-grid">
              {profile.judgeSummary.map((item, index) => (
                <article key={item.label.en}>
                  <span className="summary-number mono">0{index + 1}</span>
                  <div>
                    <p className="summary-label mono">{localize(item.label, locale)}</p>
                    <p className="summary-value">{localize(item.value, locale)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {profile.variant === "technology" ? (
          <DocMindCase profile={profile.flagshipCase} locale={locale} />
        ) : (
          <MarketCase profile={profile.marketCase} locale={locale} />
        )}

        <section id="team-role" className="team-role-section section-pad">
          <div className="shell">
            <div className="role-heading" data-reveal>
              <p className="section-index mono">02 / {copy.teamRole}</p>
              <h2>{localize(profile.teamContribution.title, locale)}</h2>
            </div>
            <div className="role-layout">
              <div className="role-statement" data-reveal>
                <blockquote>{localize(profile.teamContribution.statement, locale)}</blockquote>
                <p>{localize(profile.teamContribution.intro, locale)}</p>
              </div>
              <ol className="responsibility-list" data-reveal>
                {profile.teamContribution.responsibilities.map((item, index) => (
                  <li key={item.title.en}>
                    <span className="mono">0{index + 1}</span>
                    <div>
                      <h3>{localize(item.title, locale)}</h3>
                      <p>{localize(item.detail, locale)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {profile.variant === "technology" ? (
          <section id="systems" className="systems-section section-pad">
            <div className="shell">
              <div className="section-intro systems-intro" data-reveal>
                <div>
                  <p className="section-index mono">03 / {copy.selectedWork}</p>
                  <h2>{localize(profile.projects.title, locale)}</h2>
                </div>
                <p>{localize(profile.projects.intro, locale)}</p>
              </div>

              <div className="project-archive">
                {profile.projects.items.map((project, index) => (
                  <article
                    className={project.featured ? "project-entry project-featured" : "project-entry"}
                    key={project.name}
                    data-reveal
                  >
                    <figure className="project-media">
                      <Image
                        src={project.asset.src}
                        alt={localize(project.asset.alt, locale)}
                        width={project.asset.width}
                        height={project.asset.height}
                        sizes={project.featured
                          ? "(max-width: 767px) 100vw, 58vw"
                          : "(max-width: 767px) 100vw, 40vw"}
                        quality={82}
                      />
                      <div className="project-index mono">0{index + 1}</div>
                    </figure>
                    <div className="project-details">
                      <div className="project-content">
                        <p className="project-role mono">{localize(project.role, locale)}</p>
                        <h3>{project.name}</h3>
                        <p>{localize(project.evidence, locale)}</p>
                      </div>
                      <RepositoryLink href={project.repository} label={copy.openRepository}>
                        {project.repositoryLabel}
                      </RepositoryLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <ExpertiseSection profile={profile.expertise} locale={locale} />
        )}

        <section id="background" className="background-section section-pad">
          <div className="shell">
            <div className="section-intro background-intro" data-reveal>
              <div>
                <p className="section-index mono">04 / {copy.profileEvidence}</p>
                <h2>{localize(profile.background.title, locale)}</h2>
              </div>
              <p>{localize(profile.background.intro, locale)}</p>
            </div>

            <div className="background-layout">
              <ol className="timeline" data-reveal>
                {profile.background.timeline.map((item) => (
                  <li key={`${item.organization}-${item.period.en}`}>
                    <p className="timeline-period mono">{localize(item.period, locale)}</p>
                    <div>
                      <p className="timeline-organization">{item.organization}</p>
                      <h3>{localize(item.title, locale)}</h3>
                      <p>{localize(item.detail, locale)}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="recognition" data-reveal aria-labelledby="recognition-title">
                <p id="recognition-title" className="mono">
                  {copy.recognition}
                </p>
                <ul>
                  {profile.background.recognition.map((item) => (
                    <li key={item.en}>{localize(item, locale)}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="motivation-section section-pad">
          <div className="shell motivation-grid" data-reveal>
            <p className="section-index mono">05 / {copy.motivation}</p>
            <div>
              <h2>{localize(profile.motivation.title, locale)}</h2>
              <p className="motivation-body">{localize(profile.motivation.body, locale)}</p>
              <p className="motivation-closing">{localize(profile.motivation.closing, locale)}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="shell contact-grid" data-reveal>
            <div>
              <p className="section-index mono">06 / {copy.contact}</p>
              <h2>{localize(profile.contact.title, locale)}</h2>
            </div>
            <div className="contact-copy">
              <p>{localize(profile.contact.body, locale)}</p>
              <a className="contact-email mono" href={`mailto:${profile.contact.email}`}>
                {profile.contact.email}
              </a>
              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${profile.contact.email}`}>
                  {localize(profile.contact.ctaLabel, locale)}
                  <span aria-hidden="true">↗</span>
                </a>
                {profile.contact.github ? (
                  <RepositoryLink
                    href={profile.contact.github}
                    label={copy.github}
                    className="button button-secondary"
                  >
                    {copy.github}
                  </RepositoryLink>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>{profile.identity.name}</span>
          <span className="mono">{copy.footer}</span>
        </div>
      </footer>
    </>
  );
}
