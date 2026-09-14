import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHairBg from "@/assets/hero-hair.jpg.asset.json";

import heroLogoAsset from "@/assets/looks-logo-final.png.asset.json";
const heroLogo = heroLogoAsset.url;
import nailsBlackRed from "@/assets/nails-black-red.jpg.asset.json";
import nailsNudeOmbre from "@/assets/nails-nude-ombre.jpg.asset.json";
import nailsFrench from "@/assets/nails-french.jpg.asset.json";
import beforeAfterImg from "@/assets/before-after.png.asset.json";
import beforeAfterHairImg from "@/assets/before-after-hair.png.asset.json";
import beforeAfterBlue from "@/assets/before-after-blue.jpg.asset.json";
import beforeAfterNude from "@/assets/before-after-nude.jpg.asset.json";
import beforeAfterDark from "@/assets/before-after-dark.jpg.asset.json";
import hairBlondeCurls from "@/assets/hair-blonde-curls.jpg.asset.json";
import hairGrayBalayage from "@/assets/hair-gray-balayage.jpg.asset.json";
import hairHighlights from "@/assets/hair-highlights.jpg.asset.json";
import hairAshBlonde from "@/assets/hair-ash-blonde.jpg.asset.json";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LumierePage,
  head: () => ({
    meta: [
      { title: "Looks Beauty Boutique | Nails & Hair Salon στο Σύνταγμα" },
      {
        name: "description",
        content:
          "Nail & hair salon στην καρδιά του Συντάγματος, Φιλελλήνων 3. Manicure, pedicure, nail art και μαλλιά. Online ραντεβού 24/7.",
      },
      { property: "og:title", content: "Looks Beauty Boutique | Nails & Hair Salon, Athens" },
      {
        property: "og:description",
        content:
          "Περισσότερα από 15 χρόνια ομορφιάς στο Σύνταγμα. Κλείστε online ραντεβού για nails, hair & beauty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const BOOKING_URL = "https://looksbeautyboutique.setmore.com/";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Filellinon+3,+Athina+105+57,+Greece";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Filellinon+3,+Athina+105+57,+Greece&output=embed";

const hourTimes = [
  "10:00 – 18:00",
  "09:00 – 20:00",
  "09:00 – 20:00",
  "09:00 – 20:00",
  "08:00 – 20:00",
  "10:00 – 18:00",
  null,
];

function LumierePage() {
  return (
    <LanguageProvider>
      <div className="font-body bg-pearl text-ink">
        <Hero />
        <About />
        <HairBeforeAfter />
        <Stats />
        <Booking />
        <Story />
        <Gallery />
        <Reviews />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

/* -------------------- LANGUAGE SWITCH -------------------- */
function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-rose-gold/60 overflow-hidden ${
        compact ? "text-[11px]" : "text-[11px] lg:text-[12px]"
      }`}
    >
      {(["el", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 uppercase tracking-[0.15em] transition ${
            lang === l ? "bg-rose-gold text-ink" : "text-inherit hover:text-rose-gold"
          }`}
        >
          {l === "el" ? "ΕΛ" : "EN"}
        </button>
      ))}
    </div>
  );
}

/* -------------------- HERO NAV -------------------- */
function HeroNav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#gallery", label: t.nav.events, outline: true },
    { href: "#booking", label: t.nav.book, cta: true },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#home" aria-label={t.nav.home} className="shrink-0 w-8 h-8" />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.18em] uppercase text-white/80">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.cta
                  ? "rounded-full bg-rose-gold text-ink px-4 lg:px-5 py-2 hover:bg-rose-gold/90 transition"
                  : l.outline
                    ? "rounded-full border border-rose-gold/60 text-rose-gold px-4 lg:px-5 py-2 hover:bg-rose-gold/10 transition"
                    : "hover:text-rose-gold transition"
              }
            >
              {l.label}
            </a>
          ))}
          <div className="text-white/80">
            <LangSwitch />
          </div>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <div className="text-white/80">
            <LangSwitch compact />
          </div>
          <button
            className="p-2 text-white shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-rose-gold/30 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                l.cta
                  ? "inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
                  : l.outline
                    ? "inline-flex items-center justify-center rounded-full border border-rose-gold text-rose-gold px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
                    : "text-ink/80 text-sm uppercase tracking-[0.18em]"
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="home"
      className="relative bg-black text-white overflow-hidden min-h-[100svh]"
    >
      {/* Woman fully visible on mobile (contain, black bars blend into bg) */}
      <img
        src={heroHairBg.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-contain object-right"
      />
      <HeroNav />

      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-40">
        <a href="#home" aria-label={t.nav.home}>
          <img
            src={heroLogo}
            alt="looks. beauty boutique"
            className="w-32 sm:w-60 lg:w-[28rem] h-auto object-contain"
          />
        </a>
      </div>

      {/* 15+ years line — upper-left on mobile, centered on desktop */}
      <p
        className="absolute z-10 top-12 sm:top-[14%] lg:top-[16%] left-3 sm:left-1/2 sm:-translate-x-1/2 max-w-[58%] sm:max-w-[34%] text-center italic font-bold text-white text-[10px] sm:text-xl lg:text-[1.75rem]"
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          letterSpacing: "0.07em",
          wordSpacing: "0.1em",
          lineHeight: 1.25,
        }}
      >
        {t.hero.line2}
      </p>


      {/* Main phrase — kept to the left black space on mobile, centered on desktop */}
      <h1 className="absolute z-10 top-[28%] sm:top-1/2 left-3 sm:left-[34%] lg:left-[38%] sm:-translate-x-1/2 sm:-translate-y-1/2 font-display italic text-pearl text-2xl sm:text-4xl lg:text-5xl leading-[1.15] text-left max-w-[55%] sm:max-w-none">
        <span className="block">{t.hero.line1.first}</span>
        <span className="block pl-8 sm:pl-48 lg:pl-64">{t.hero.line1.second}</span>
      </h1>

      {/* Tagline — bottom-left on mobile, between button and shoulder on desktop */}
      <p className="absolute z-10 bottom-24 sm:bottom-10 left-3 sm:left-[34%] lg:left-[30%] max-w-[55%] sm:max-w-none font-display italic font-bold text-taupe text-xs sm:text-xl lg:text-3xl text-left">
        {t.hero.tagline}
      </p>

      {/* Buttons — bottom-left */}
      <div className="absolute z-10 bottom-3 sm:bottom-10 left-3 sm:left-8 flex flex-wrap gap-2 sm:gap-3">
        <a
          href="#booking"
          className="inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-4 sm:px-7 py-2 sm:py-3 text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] hover:bg-rose-gold/90 transition"
        >
          {t.nav.book}
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center rounded-full border border-rose-gold/60 text-pearl px-4 sm:px-7 py-2 sm:py-3 text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] hover:bg-rose-gold/10 transition"
        >
          {t.hero.about}
        </a>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  const { t } = useI18n();
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-sm border-2 border-rose-gold">
        <img src={src} alt={alt} className="block w-full h-auto" />
        <span className="absolute top-4 left-4 rounded-full bg-ink/70 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          {t.about.before}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-rose-gold text-ink text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          {t.about.after}
        </span>
      </div>
    </div>
  );
}

function BeforeAfterCarousel({ slides }: { slides: { src: string; alt: string }[] }) {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-sm border-2 border-rose-gold">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className="w-full shrink-0">
              <img src={slide.src} alt={slide.alt} className="block w-full h-auto" />
            </div>
          ))}
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-ink/70 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          {t.about.before}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-rose-gold text-ink text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          {t.about.after}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          onClick={prev}
          aria-label={t.gallery.prev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-ink transition"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t.gallery.next} ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-rose-gold" : "w-2 bg-rose-gold/40 hover:bg-rose-gold/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label={t.gallery.next}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-ink transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] font-medium ${
        dark ? "text-ink" : "text-rose-gold"
      }`}
    >
      {children}
    </p>
  );
}

function RoseLine({ center = false }: { center?: boolean }) {
  return <div className={`mt-5 h-[2px] w-[60px] bg-rose-gold ${center ? "mx-auto" : ""}`} />;
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <BeforeAfterCarousel
            slides={[
              { src: beforeAfterBlue.url, alt: t.about.carouselAlts[0] },
              { src: beforeAfterNude.url, alt: t.about.carouselAlts[1] },
              { src: beforeAfterDark.url, alt: t.about.carouselAlts[2] },
            ]}
          />
        </div>
        <div>
          <SectionLabel>{t.about.label}</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            {t.about.title}
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">{t.about.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.about.chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-rose-gold text-rose-gold bg-white px-5 py-2 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- HAIR BEFORE/AFTER -------------------- */
function HairBeforeAfter() {
  const { t } = useI18n();
  return (
    <section className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-14">
          <SectionLabel>{t.hair.label}</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            {t.hair.title}
          </h2>
        </div>
        <BeforeAfterCarousel
          slides={[
            { src: hairBlondeCurls.url, alt: t.hair.alts[0] },
            { src: hairGrayBalayage.url, alt: t.hair.alts[1] },
            { src: hairHighlights.url, alt: t.hair.alts[2] },
            { src: hairAshBlonde.url, alt: t.hair.alts[3] },
          ]}
        />
      </div>
    </section>
  );
}

/* -------------------- STATS -------------------- */
function Stats() {
  const { t } = useI18n();
  const items = [
    { n: "4.6★", l: t.stats.rating },
    { n: "164+", l: t.stats.reviews },
    { n: "6", l: t.stats.days },
    { n: "Online", l: t.stats.online },
  ];
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {items.map((s, i) => (
          <div
            key={s.l}
            className={`text-center px-6 ${i > 0 ? "lg:border-l lg:border-rose-gold/40" : ""}`}
          >
            <div className="font-display text-rose-gold text-6xl md:text-7xl leading-none">
              {s.n}
            </div>
            <div className="mt-4 text-white text-[11px] uppercase tracking-[0.25em]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- BOOKING -------------------- */
function Booking() {
  const { t } = useI18n();
  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel dark>{t.nav.book}</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">{t.booking.title}</h2>
          <p className="mt-4 text-ink/70">{t.booking.subtitle}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <iframe
              src={BOOKING_URL}
              title={t.booking.iframeTitle}
              className="w-full h-[720px] border-0"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-rose-gold" />
              <h3 className="font-display text-3xl">{t.booking.hours}</h3>
            </div>
            <ul className="mt-6 divide-y divide-rose-gold/20 text-sm">
              {t.booking.days.map((day, i) => {
                const time = hourTimes[i];
                return (
                  <li key={day} className="flex items-center justify-between py-2.5">
                    <span className="text-ink/80">{day}</span>
                    <span className={`font-medium ${time ? "text-ink" : "text-ink/40"}`}>
                      {time ?? t.booking.closed}
                    </span>
                  </li>
                );
              })}
            </ul>
            <a
              href="tel:+302117409989"
              className="mt-6 inline-flex items-center gap-2 text-rose-gold text-sm font-medium hover:underline"
            >
              <Phone size={14} /> 21 1740 9989
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STORY -------------------- */
function Story() {
  const { t } = useI18n();
  return (
    <section id="story" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-rose-gold">
          {t.story.label}
        </p>
        <RoseLine center />
        <div className="mt-12 text-ink/80 text-base md:text-lg leading-[1.9] space-y-6">
          {t.story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <blockquote className="relative mt-10 pl-6 md:pl-8 border-l-2 border-rose-gold text-left italic text-ink">
            <p>{t.story.quote}</p>
            <footer className="mt-4 text-rose-gold text-xs uppercase tracking-[0.25em] not-italic">
              — LOOKS Beauty Boutique
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY (CAROUSEL) -------------------- */
function Gallery() {
  const { t } = useI18n();
  const slides = [
    { src: nailsBlackRed.url, alt: t.gallery.alts[0] },
    { src: nailsFrench.url, alt: t.gallery.alts[1] },
    { src: nailsNudeOmbre.url, alt: t.gallery.alts[2] },
  ];
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    const next = (i + slides.length) % slides.length;
    setIndex(next);
    const track = trackRef.current;
    if (track) {
      const child = track.children[next] as HTMLElement | undefined;
      if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">{t.gallery.title}</h2>
        </div>

        <div className="mt-16 relative">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-[55%] xl:w-[50%]"
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-rose-gold bg-blush shadow-[0_25px_60px_-30px_rgba(194,178,128,0.6)]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(index - 1)}
            aria-label={t.gallery.prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-4 w-11 h-11 rounded-full bg-white border border-rose-gold text-rose-gold flex items-center justify-center shadow hover:bg-rose-gold hover:text-ink transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label={t.gallery.next}
            className="absolute top-1/2 -translate-y-1/2 right-2 lg:-right-4 w-11 h-11 rounded-full bg-white border border-rose-gold text-rose-gold flex items-center justify-center shadow hover:bg-rose-gold hover:text-ink transition"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-rose-gold" : "w-3 bg-rose-gold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- REVIEWS -------------------- */
function Reviews() {
  const { t } = useI18n();
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>{t.reviews.label}</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-white">
            {t.reviews.title}
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.reviews.items.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl p-10 pt-14"
              style={{ background: "#141414" }}
            >
              <span className="absolute top-4 left-8 font-display text-rose-gold text-[80px] leading-none">
                “
              </span>
              <p className="text-white text-base leading-[1.8]">{r.text}</p>
              <div className="mt-6 flex gap-1 text-rose-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-4 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {r.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section
      className="py-28 lg:py-36 text-center text-ink"
      style={{
        background: "linear-gradient(135deg, #988B84 0%, #EFE4CE 50%, #988B84 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          {t.cta.title}
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-ink mx-auto" />
        <p className="mt-6 text-ink/80 text-lg">{t.cta.subtitle}</p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-taupe px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-ink/90 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          {t.nav.book} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="bg-ink text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">{t.footer.blurb}</p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/looks_beautyboutiquesyntagma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-ink transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/looksbeautyboutique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-ink transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@looksbbsyntagma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-ink transition-all text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">
              {t.footer.nav}
            </div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="#home" className="hover:text-rose-gold">{t.footer.links.home}</a></li>
              <li><a href="#about" className="hover:text-rose-gold">{t.footer.links.about}</a></li>
              <li><a href="#booking" className="hover:text-rose-gold">{t.footer.links.booking}</a></li>
              <li><a href="#contact" className="hover:text-rose-gold">{t.footer.links.contact}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">
              {t.footer.contact}
            </div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rose-gold shrink-0" />
                <a href="tel:+302117409989" className="hover:text-rose-gold">21 1740 9989</a>
              </li>
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-rose-gold hover:text-ink transition-all"
            >
              {t.footer.directions} <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden border border-rose-gold/40 shadow-[0_25px_60px_-30px_rgba(194,178,128,0.6)]">
          <iframe
            title={t.footer.mapTitle}
            src={MAPS_EMBED}
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-16 h-px bg-rose-gold/40" />
        <p className="mt-6 text-center text-xs text-white/40">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
