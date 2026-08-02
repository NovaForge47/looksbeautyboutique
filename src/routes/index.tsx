import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroNewBg from "@/assets/hero-new-bg.jpg.asset.json";

import heroLogo from "@/assets/looks-logo-user-exact.png.asset.json";
import nailsBlackRed from "@/assets/nails-black-red.jpg.asset.json";
import nailsNudeOmbre from "@/assets/nails-nude-ombre.jpg.asset.json";
import nailsFrench from "@/assets/nails-french.jpg.asset.json";
import beforeAfterImg from "@/assets/before-after.png.asset.json";
import beforeAfterHairImg from "@/assets/before-after-hair.png.asset.json";
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
});

const BOOKING_URL = "https://looksbeautyboutique.setmore.com/";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Filellinon+3,+Athina+105+57,+Greece";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Filellinon+3,+Athina+105+57,+Greece&output=embed";


const reviews = [
  {
    text:
      "Αυτό το σαλόνι νυχιών ήταν καταπληκτικό. Τόσο καθαρό, επαγγελματικό και προσεγμένο στη λεπτομέρεια. Λάτρεψα το αποτέλεσμα στα νύχια μου!",
    name: "KENDA HARRIS",
  },
  {
    text:
      "Ήρθα χωρίς ραντεβού και έφυγα μια ώρα μετά υπερευχαριστημένη με πανέμορφα φροντισμένα νύχια. Ευχαριστώ για την επαγγελματική, γρήγορη και φιλική εξυπηρέτηση!",
    name: "SABINE PROKSCH-BAUER",
  },
  {
    text:
      "Είχα υπέροχη εμπειρία εδώ — mani/pedi. Ήρθα με μερικά σπασμένα νύχια σε λίγο επείγουσα κατάσταση. Η Σοφία ήταν φανταστική — τη συνιστώ ανεπιφύλακτα!",
    name: "MELINA PAPADOPOULOS",
  },
];

const hours: { day: string; time: string }[] = [
  { day: "Δευτέρα", time: "10:00 – 18:00" },
  { day: "Τρίτη", time: "09:00 – 20:00" },
  { day: "Τετάρτη", time: "09:00 – 20:00" },
  { day: "Πέμπτη", time: "09:00 – 20:00" },
  { day: "Παρασκευή", time: "08:00 – 20:00" },
  { day: "Σάββατο", time: "10:00 – 18:00" },
  { day: "Κυριακή", time: "Κλειστά" },
];

function LumierePage() {
  return (
    <div className="font-body bg-pearl text-ink">
      <Hero />
      <About />
      <Stats />
      <Booking />
      <Story />
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
    { href: "#home", label: "Αρχική" },
    { href: "#about", label: "Σχετικά" },
    { href: "#gallery", label: "Γκαλερί" },
    { href: "#booking", label: "Κλείσε Ραντεβού" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#home" aria-label="Αρχική" className="shrink-0 w-8 h-8" />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.18em] uppercase text-ink/80">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.label === "Κλείσε Ραντεβού"
                  ? "rounded-full bg-rose-gold text-ink px-4 lg:px-5 py-2 hover:bg-rose-gold/90 transition"
                  : "hover:text-rose-gold transition"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-ink shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-rose-gold/30 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                l.label === "Κλείσε Ραντεβού"
                  ? "inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-6 py-3 font-medium text-sm uppercase tracking-[0.18em]"
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
  return (
    <section
      id="home"
      className="relative bg-white text-ink overflow-hidden min-h-[100svh]"
    >
      <img
        src={heroNewBg.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-[30%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/10 md:bg-ink/5" />
      <HeroNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 min-h-[100svh] flex items-center justify-center">
        <div className="max-w-2xl pt-24 pb-16 sm:pt-28 sm:pb-20 text-center flex flex-col items-center">
          <div className="mb-8">
            <img
              src={heroLogo.url}
              alt="looks. beauty boutique"
              className="w-64 sm:w-80 lg:w-96 h-auto drop-shadow-[1px_0_0_#000] drop-shadow-[-1px_0_0_#000] drop-shadow-[0_1px_0_#000] drop-shadow-[0_-1px_0_#000] drop-shadow-[1px_1px_0_#000] drop-shadow-[-1px_1px_0_#000] drop-shadow-[1px_-1px_0_#000] drop-shadow-[-1px_-1px_0_#000]"
            />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-ink">
            Η ομορφιά είναι στη λεπτομέρεια.
            <span className="block italic text-rose-gold mt-2">
              Την κάνουμε δική σας.
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-rose-gold text-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] hover:bg-rose-gold/90 transition"
            >
              Κλείσε Ραντεβού
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-ink/40 text-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] hover:bg-ink/10 transition"
            >
              Σχετικά
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-sm border-2 border-rose-gold">
        <img src={src} alt={alt} className="block w-full h-auto" />
        <span className="absolute top-4 left-4 rounded-full bg-ink/70 text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          Πριν
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-rose-gold text-ink text-[10px] uppercase tracking-[0.25em] px-3 py-1">
          Μετά
        </span>
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
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <BeforeAfter src={beforeAfterImg.url} alt="Πριν και μετά manicure στο Looks Beauty Boutique" />
          <BeforeAfter src={beforeAfterHairImg.url} alt="Πριν και μετά θεραπεία μαλλιών στο Looks Beauty Boutique" />
        </div>
        <div>
          <SectionLabel>Το Salon μας</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            Εμπιστευτείτε το look σας σε αληθινούς καλλιτέχνες
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">
            Στο Looks Beauty Boutique πιστεύουμε ότι κάθε λεπτομέρεια μετράει. Χρησιμοποιούμε
            μόνο premium προϊόντα και τεχνικές για να σας χαρίσουμε άψογο αποτέλεσμα — κάθε φορά.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Premium Προϊόντα",
              "Πιστοποιημένες Τεχνικοί",
              "Signature Σχέδια",
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
    { n: "4.6★", l: "Αξιολόγηση Google" },
    { n: "164+", l: "Κριτικές" },
    { n: "6", l: "Μέρες Ανοιχτά" },
    { n: "Online", l: "Ραντεβού 24/7" },
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

/* -------------------- BOOKING -------------------- */
function Booking() {
  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel dark>Κλείσε Ραντεβού</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Κάντε την Κράτησή σας
          </h2>
          <p className="mt-4 text-ink/70">Κράτηση μέσω φόρμας ή εφαρμογής</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <iframe
              src={BOOKING_URL}
              title="Κράτηση στο Setmore"
              className="w-full h-[720px] border-0"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_25px_60px_-25px_rgba(194,178,128,0.35)]">
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-rose-gold" />
              <h3 className="font-display text-3xl">Ώρες Λειτουργίας</h3>
            </div>
            <ul className="mt-6 divide-y divide-rose-gold/20 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-2.5">
                  <span className="text-ink/80">{h.day}</span>
                  <span
                    className={`font-medium ${
                      h.time === "Κλειστά" ? "text-ink/40" : "text-ink"
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



/* -------------------- STORY -------------------- */
function Story() {
  return (
    <section id="story" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-rose-gold">Η Ιστορία μας</p>
        <RoseLine center />
        <div className="mt-12 text-ink/80 text-base md:text-lg leading-[1.9] space-y-6">
          <p>
            Στην καρδιά της Αθήνας στο Σύνταγμα, λίγα μόλις βήματα από το σταθμό του μετρό, το LOOKS Beauty Boutique αποτελεί εδώ και περισσότερα από 15 χρόνια έναν σταθερό προορισμό ομορφιάς όπου η ποιότητα, η αισθητική και η προσωπική φροντίδα συναντιούνται.
          </p>
          <p>
            Με ανανεωμένη φιλοσοφία και σύγχρονη προσέγγιση στην ομορφιά, εξελίσσουμε καθημερινά τον χώρο και τις υπηρεσίες μας, παραμένοντας πιστοί σε όσα έχουν αξία για εμάς: επαγγελματισμό, συνέπεια, υψηλή ποιότητα και μια εμπειρία που κάνει κάθε επίσκεψη ξεχωριστή.
          </p>
          <p>
            Για εμάς, η πραγματική ομορφιά ξεκινά από το πώς νιώθει κανείς. Γι' αυτό δημιουργήσαμε έναν ζεστό και φιλόξενο χώρο, όπου η φροντίδα, η προσοχή στη λεπτομέρεια και η προσωπική σχέση με κάθε πελάτισσα αποτελούν μέρος της καθημερινής μας φιλοσοφίας. Η εμπιστοσύνη των γυναικών που μας επιλέγουν όλα αυτά τα χρόνια είναι η μεγαλύτερη έμπνευσή μας.
          </p>
          <p>
            Η ομάδα μας, με εξειδίκευση στους τομείς Nails Hair & Beauty και συνεχή εκπαίδευση στις σύγχρονες τεχνικές, δημιουργεί εξατομικευμένες υπηρεσίες που αναδεικνύουν την ομορφιά και το προσωπικό στυλ κάθε γυναίκας.
          </p>
          <blockquote className="relative mt-10 pl-6 md:pl-8 border-l-2 border-rose-gold text-left italic text-ink">
            <p>
              «Γιατί η ομορφιά δεν είναι μόνο αυτό που βλέπουμε στον καθρέφτη. Είναι ο τρόπος που νιώθουμε όταν επιλέγουμε να φροντίσουμε τον εαυτό μας. Αυτό είναι το συναίσθημα που θέλουμε να παίρνει μαζί της κάθε γυναίκα όταν φεύγει από το κατάστημά μας.»
            </p>
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
  const slides = [
    { src: nailsBlackRed.url, alt: "Nail art με μαύρο & κόκκινο θέμα τράπουλας" },
    { src: nailsFrench.url, alt: "Τετράγωνο γαλλικό manicure με λεπτομέρεια καρδιάς" },
    { src: nailsNudeOmbre.url, alt: "Nude προς λευκό ombré μυτερά νύχια" },
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
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Η δουλειά μας μιλάει από μόνη της
          </h2>
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
            aria-label="Προηγούμενο"
            className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-4 w-11 h-11 rounded-full bg-white border border-rose-gold text-rose-gold flex items-center justify-center shadow hover:bg-rose-gold hover:text-ink transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Επόμενο"
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
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Κριτικές</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-white">
            Τι λένε οι πελάτες μας
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
          "linear-gradient(135deg, #C2B280 0%, #EFE4CE 50%, #C2B280 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          Έτοιμοι για το Τέλειο Look;
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-ink mx-auto" />
        <p className="mt-6 text-ink/80 text-lg">Κλείστε το ραντεβού σας online — 24/7</p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-rose-gold px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-ink/90 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          Κλείσε Ραντεβού <ArrowRight size={16} />
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
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              Σαλόνι νυχιών & μαλλιών στην καρδιά του Συντάγματος — μέσα στη στοά, Φιλελλήνων 3. Κάθε look είναι έργο τέχνης.
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
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Πλοήγηση</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="#home" className="hover:text-rose-gold">Αρχική</a></li>
              <li><a href="#about" className="hover:text-rose-gold">Σχετικά</a></li>
              <li><a href="#booking" className="hover:text-rose-gold">Ραντεβού</a></li>
              <li><a href="#contact" className="hover:text-rose-gold">Επικοινωνία</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Επικοινωνία</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                <span>Μέσα στη στοά, Φιλελλήνων 3, Αθήνα 105 57</span>
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
              Οδηγίες <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden border border-rose-gold/40 shadow-[0_25px_60px_-30px_rgba(194,178,128,0.6)]">
          <iframe
            title="Looks Beauty Boutique — Φιλελλήνων 3, Αθήνα"
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
          © 2026 Looks Beauty Boutique. Με επιφύλαξη κάθε δικαιώματος.
        </p>
      </div>
    </footer>
  );
}
