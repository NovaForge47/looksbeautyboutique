import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-clean.jpg.asset.json";

import heroLogo from "@/assets/looks-logo-hero-transparent.png.asset.json";
import nailsBlackRed from "@/assets/nails-black-red.jpg.asset.json";
import nailsNudeOmbre from "@/assets/nails-nude-ombre.jpg.asset.json";
import nailsFrench from "@/assets/nails-french.jpg.asset.json";
import {
  ArrowRight,
  ArrowDown,
  Plus,
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LumierePage,
});

const BOOKING_URL = "https://looksbeautyboutique.setmore.com/";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Filellinon+3,+Athina+105+57,+Greece";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Filellinon+3,+Athina+105+57,+Greece&output=embed";


const team = [
  {
    name: "Vasiliki",
    title: "Nail Artist",
    exp: "Manicure · Semi-Permanent · Nail Art",
  },
  {
    name: "Sophia",
    title: "Nail Artist",
    exp: "Manicure · Pedicure · Repairs",
  },
];

const reviews = [
  {
    text:
      "This nail salon was amazing. So clean, professional, and detail oriented. Loved how my nails turned out!",
    name: "KENDA HARRIS",
  },
  {
    text:
      "I came in without an appointment and left an hour later super happy with beautifully manicured nails. Thanks for your professional, efficient and friendly service!",
    name: "SABINE PROKSCH-BAUER",
  },
  {
    text:
      "Had a wonderful experience here — mani/pedi. I came with a few broken nails and a bit of an emergency situation. Sophia was amazing — I highly recommend!",
    name: "MELINA PAPADOPOULOS",
  },
];

const hours: { day: string; time: string }[] = [
  { day: "Monday", time: "10:00 – 18:00" },
  { day: "Tuesday", time: "09:00 – 20:00" },
  { day: "Wednesday", time: "09:00 – 20:00" },
  { day: "Thursday", time: "09:00 – 20:00" },
  { day: "Friday", time: "08:00 – 20:00" },
  { day: "Saturday", time: "10:00 – 18:00" },
  { day: "Sunday", time: "Closed" },
];

function LumierePage() {
  return (
    <div className="font-body bg-pearl text-ink">
      <Hero />
      <Ribbon />
      <About />
      <Stats />
      <Team />
      <Booking />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* -------------------- HERO NAV -------------------- */
function HeroNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#booking", label: "Book Now" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center shrink-0 font-display italic text-white text-lg sm:text-xl tracking-tight">
          beauty boutique
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.18em] uppercase text-white/90">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              
              
              className={
                l.label === "Book Now"
                  ? "rounded-full bg-rose-gold text-ink px-4 lg:px-5 py-2 hover:bg-rose-gold/90 transition"
                  : "hover:text-rose-gold transition drop-shadow"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-white shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur border-t border-rose-gold/30 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              
              
              onClick={() => setOpen(false)}
              className={
                l.label === "Book Now"
                  ? "inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
                  : "text-white/90 text-sm uppercase tracking-[0.18em]"
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
  return (
    <section
      id="home"
      className="relative bg-ink text-white overflow-hidden min-h-[100svh]"
    >
      <img
        src={heroBg.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/80 md:from-ink/40 md:via-transparent md:to-ink/70" />
      <HeroNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 min-h-[100svh] flex items-center justify-center">
        <div className="max-w-2xl pt-24 pb-16 sm:pt-28 sm:pb-20 text-center flex flex-col items-center">
          <img
            src={heroLogo.url}
            alt="looks. beauty boutique"
            className="w-64 sm:w-80 lg:w-96 h-auto mb-8"
          />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-white">
            Beauty is in the details.
            <span className="block italic text-rose-gold">We make it yours.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] hover:bg-rose-gold/90 transition"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] hover:bg-white/10 transition"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------- RIBBON -------------------- */
function Ribbon() {
  const text =
    "LOOKS BEAUTY BOUTIQUE · MANICURE · PEDICURE · HAIR · NAIL ART · SYNTAGMA · ATHENS · ";
  return (
    <section className="bg-ink py-8 overflow-hidden border-y border-rose-gold/20">
      <div className="flex whitespace-nowrap lumiere-marquee-track">
        <div className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4">
          {text.repeat(6)}
        </div>
        <div
          aria-hidden
          className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4"
        >
          {text.repeat(6)}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const before = nailsFrench.url;
  const after = nailsBlackRed.url;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        ref={ref}
        className="relative aspect-square w-full overflow-hidden rounded-sm border-2 border-rose-gold select-none touch-none cursor-ew-resize"
        onMouseDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          setFromClientX(e.touches[0].clientX);
        }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <img
            src={after}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{ left: `${pos}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-rose-gold flex items-center justify-center shadow-lg pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <ArrowRight size={14} className="text-rose-gold -mr-1" />
          <ArrowRight size={14} className="text-rose-gold rotate-180 -ml-1" />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-ink/70 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          Before
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-rose-gold text-ink text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          After
        </span>
      </div>
      <p className="mt-4 text-center text-xs text-ink/50 uppercase tracking-[0.2em]">
        Drag to see the difference
      </p>
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
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <BeforeAfter />
        <div>
          <SectionLabel>Our Studio</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            Trust Your Look to True Artists
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">
            At Looks Beauty Boutique we believe every detail matters. We use only premium
            products and techniques to give you flawless results — every single time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "💅 Premium Products",
              "👩‍🎨 Certified Technicians",
              "✨ Signature Designs",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-rose-gold text-rose-gold bg-white px-5 py-2 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------- STATS -------------------- */
function Stats() {
  const items = [
    { n: "4.6★", l: "Google Rating" },
    { n: "164+", l: "Reviews" },
    { n: "6", l: "Days Open" },
    { n: "Online", l: "Bookings 24/7" },
  ];
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {items.map((s, i) => (
          <div
            key={s.l}
            className={`text-center px-6 ${
              i > 0 ? "lg:border-l lg:border-rose-gold/40" : ""
            }`}
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

/* -------------------- TEAM -------------------- */
function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Our Team</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Meet the Artists
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl shadow-[0_15px_35px_-20px_rgba(0,0,0,0.15)] p-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(201,165,92,0.4)]"
            >
              <div className="mx-auto w-32 h-32 rounded-full ring-[3px] ring-rose-gold ring-offset-4 ring-offset-white bg-blush flex items-center justify-center">
                <span className="font-display italic text-5xl text-rose-gold">
                  {m.name.charAt(0)}
                </span>
              </div>
              <h3 className="mt-8 font-display italic text-3xl">{m.name}</h3>
              <p className="mt-2 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {m.title}
              </p>
              <p className="mt-3 text-sm text-ink/60">{m.exp}</p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-rose-gold text-ink px-6 py-2.5 text-sm hover:bg-rose-gold/90 transition-all"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BOOKING -------------------- */
function Booking() {
  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel dark>Book an Appointment</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Reserve Your Visit
          </h2>
          <p className="mt-4 text-ink/70">Online 24/7 via Setmore — or by phone</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(201,165,92,0.35)]">
            <iframe
              src={BOOKING_URL}
              title="Book on Setmore"
              className="w-full h-[720px] border-0"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_25px_60px_-25px_rgba(201,165,92,0.35)]">
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-rose-gold" />
              <h3 className="font-display text-3xl">Opening Hours</h3>
            </div>
            <ul className="mt-6 divide-y divide-rose-gold/20 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-2.5">
                  <span className="text-ink/80">{h.day}</span>
                  <span
                    className={`font-medium ${
                      h.time === "Closed" ? "text-ink/40" : "text-ink"
                    }`}
                  >
                    {h.time}
                  </span>
                </li>
              ))}
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



/* -------------------- GALLERY -------------------- */
function Gallery() {
  const tiles = [
    { h: "aspect-[4/5]", src: nailsBlackRed.url, alt: "Black & red deck of cards nail art" },
    { h: "aspect-square", src: nailsFrench.url, alt: "Square French manicure with heart detail" },
    { h: "aspect-[4/5]", src: nailsNudeOmbre.url, alt: "Nude to white ombré almond nails" },
  ];
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Our Work Speaks for Itself
          </h2>
        </div>
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`mb-6 break-inside-avoid relative group overflow-hidden rounded-xl border border-rose-gold ${t.h} bg-blush`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Plus className="text-rose-gold" size={26} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REVIEWS -------------------- */
function Reviews() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Reviews</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-white">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
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
  return (
    <section
      className="py-28 lg:py-36 text-center text-ink"
      style={{
        background:
          "linear-gradient(135deg, #C9A55C 0%, #EFE4CE 50%, #C9A55C 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          Ready for the Perfect Look?
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-ink mx-auto" />
        <p className="mt-6 text-ink/80 text-lg">Book your appointment online — 24/7</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-rose-gold px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-ink/90 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          Book Now <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-white text-3xl tracking-tight">looks<span className="text-rose-gold">.</span></div>
            <div className="mt-1 font-display italic text-white/50 text-sm">beauty boutique</div>
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              A nail &amp; hair salon in the heart of Syntagma — inside the arcade at Filellinon 3. Every look is a work of art.
            </p>
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
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Navigate</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="#home" className="hover:text-rose-gold">Home</a></li>
              <li><a href="#about" className="hover:text-rose-gold">About</a></li>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold">Bookings</a></li>
              <li><a href="#contact" className="hover:text-rose-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Contact</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                <span>Inside the arcade, Filellinon 3, Athens 105 57</span>
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
              Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden border border-rose-gold/40 shadow-[0_25px_60px_-30px_rgba(201,165,92,0.6)]">
          <iframe
            title="Looks Beauty Boutique — Filellinon 3, Athens"
            src={MAPS_EMBED}
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-16 h-px bg-rose-gold/40" />
        <p className="mt-6 text-center text-xs text-white/40">
          © 2026 Looks Beauty Boutique. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
