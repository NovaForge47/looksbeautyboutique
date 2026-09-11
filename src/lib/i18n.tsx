import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "el" | "en";

type Dict = {
  nav: { home: string; about: string; gallery: string; events: string; book: string; menu: string };
  hero: { line1: string; line2: string; about: string; tagline: string };
  about: {
    label: string;
    title: string;
    body: string;
    chips: string[];
    before: string;
    after: string;
    altNails: string;
    altHair: string;
    carouselAlts: string[];
  };
  stats: { rating: string; reviews: string; days: string; online: string };
  hair: { label: string; title: string; alts: string[] };
  booking: {
    title: string;
    subtitle: string;
    iframeTitle: string;
    hours: string;
    closed: string;
    days: string[];
  };
  story: { label: string; paragraphs: string[]; quote: string };
  gallery: { title: string; prev: string; next: string; alts: string[] };
  reviews: { label: string; title: string; items: { text: string; name: string }[] };
  cta: { title: string; subtitle: string };
  footer: {
    blurb: string;
    nav: string;
    contact: string;
    links: { home: string; about: string; booking: string; contact: string };
    address: string;
    directions: string;
    mapTitle: string;
    rights: string;
  };
};

const el: Dict = {
  nav: { home: "Αρχική", about: "Σχετικά", gallery: "Gallery", events: "Events", book: "BOOK NOW", menu: "Μενού" },
  hero: {
    line1: "Beauty is in the details, we make it yours!",
    line2: "15+ χρόνια εμπιστοσύνης, στην καρδιά του Συντάγματος!",
    about: "Σχετικά",
    tagline: "All about Nails- Hair and more!",
  },
  about: {
    label: "Το Salon μας",
    title: "Εμπιστευτείτε το look σας σε αληθινούς καλλιτέχνες",
    body:
      "Στο Looks Beauty Boutique πιστεύουμε ότι κάθε λεπτομέρεια μετράει. Χρησιμοποιούμε μόνο premium προϊόντα και τεχνικές για να σας χαρίσουμε άψογο αποτέλεσμα — κάθε φορά.",
    chips: ["Premium Προϊόντα", "Πιστοποιημένες Τεχνικοί", "Signature Σχέδια"],
    before: "Πριν",
    after: "Μετά",
    altNails: "Πριν και μετά manicure στο Looks Beauty Boutique",
    altHair: "Πριν και μετά θεραπεία μαλλιών στο Looks Beauty Boutique",
    carouselAlts: [
      "Πριν και μετά μπλε γαλλικό manicure στο Looks Beauty Boutique",
      "Πριν και μετά nude manicure στο Looks Beauty Boutique",
      "Πριν και μετά σκούρο manicure στο Looks Beauty Boutique",
    ],
  },
  stats: {
    rating: "Αξιολόγηση Google",
    reviews: "Κριτικές",
    days: "Μέρες Ανοιχτά",
    online: "Ραντεβού 24/7",
  },
  hair: {
    label: "Μαλλιά",
    title: "Μεταμορφώσεις μαλλιών που μιλάνε από μόνες τους",
    alts: [
      "Πριν και μετά styling ξανθών μαλλιών με μπούκλες",
      "Πριν και μετά γκρι balayage μαλλιών",
      "Πριν και μετά ανταύγειες μαλλιών",
      "Πριν και μετά ash blonde βαφή μαλλιών",
    ],
  },
  booking: {
    title: "Κάντε την Κράτησή σας",
    subtitle: "Κράτηση μέσω φόρμας ή εφαρμογής",
    iframeTitle: "Κράτηση στο Setmore",
    hours: "Ώρες Λειτουργίας",
    closed: "Κλειστά",
    days: ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "Κυριακή"],
  },
  story: {
    label: "Η Ιστορία μας",
    paragraphs: [
      "Στην καρδιά της Αθήνας στο Σύνταγμα, λίγα μόλις βήματα από το σταθμό του μετρό, το LOOKS Beauty Boutique αποτελεί εδώ και περισσότερα από 15 χρόνια έναν σταθερό προορισμό ομορφιάς όπου η ποιότητα, η αισθητική και η προσωπική φροντίδα συναντιούνται.",
      "Με ανανεωμένη φιλοσοφία και σύγχρονη προσέγγιση στην ομορφιά, εξελίσσουμε καθημερινά τον χώρο και τις υπηρεσίες μας, παραμένοντας πιστοί σε όσα έχουν αξία για εμάς: επαγγελματισμό, συνέπεια, υψηλή ποιότητα και μια εμπειρία που κάνει την κάθε επίσκεψη ξεχωριστή...",
      "Για εμάς, η πραγματική ομορφιά ξεκινά από το πώς νιώθει κανείς. Γι' αυτό δημιουργήσαμε έναν ζεστό και φιλόξενο χώρο, όπου η φροντίδα, η προσοχή στη λεπτομέρεια και η προσωπική επαφή αποτελούν μέρος της καθημερινής μας φιλοσοφίας. Η εμπιστοσύνη των πελατών μας όλα αυτά τα χρόνια είναι η μεγαλύτερη έμπνευσή μας.",
      "Η ομάδα μας, με εξειδίκευση στους τομείς Nails Hair & Beauty και συνεχή εκπαίδευση στις σύγχρονες τεχνικές, δημιουργεί εξατομικευμένες υπηρεσίες που αναδεικνύουν την ομορφιά και το προσωπικό σας στυλ.",
    ],
    quote:
      "«Γιατί η ομορφιά δεν είναι μόνο αυτό που βλέπουμε στον καθρέφτη. Είναι ο τρόπος που νιώθουμε όταν επιλέγουμε να φροντίσουμε τον εαυτό μας ..»",
  },
  gallery: {
    title: "Η δουλειά μας μιλάει από μόνη της",
    prev: "Προηγούμενο",
    next: "Επόμενο",
    alts: [
      "Nail art με μαύρο & κόκκινο θέμα τράπουλας",
      "Τετράγωνο γαλλικό manicure με λεπτομέρεια καρδιάς",
      "Nude προς λευκό ombré μυτερά νύχια",
    ],
  },
  reviews: {
    label: "Κριτικές",
    title: "Τι λένε οι πελάτες μας",
    items: [
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
    ],
  },
  cta: { title: "Έτοιμοι για το Τέλειο Look;", subtitle: "Κλείστε το ραντεβού σας online — 24/7" },
  footer: {
    blurb:
      "Σαλόνι νυχιών & μαλλιών στην καρδιά του Συντάγματος — μέσα στη στοά, Φιλελλήνων 3. Κάθε look είναι έργο τέχνης.",
    nav: "Πλοήγηση",
    contact: "Επικοινωνία",
    links: { home: "Αρχική", about: "Σχετικά", booking: "Ραντεβού", contact: "Επικοινωνία" },
    address: "Μέσα στη στοά, Φιλελλήνων 3, Αθήνα 105 57",
    directions: "Οδηγίες",
    mapTitle: "Looks Beauty Boutique — Φιλελλήνων 3, Αθήνα",
    rights: "© 2026 Looks Beauty Boutique. Με επιφύλαξη κάθε δικαιώματος.",
  },
};

const en: Dict = {
  nav: { home: "Home", about: "About", gallery: "Gallery", events: "Events", book: "BOOK NOW", menu: "Menu" },
  hero: {
    line1: "Beauty is in the details, we make it yours!",
    line2: "15+ χρόνια εμπιστοσύνης, στην καρδιά του Συντάγματος!",
    about: "About",
    tagline: "All about Nails- Hair and more!",
  },
  about: {
    label: "Our Salon",
    title: "Trust your look to true artists",
    body:
      "At Looks Beauty Boutique we believe every detail matters. We use only premium products and techniques to give you a flawless result — every single time.",
    chips: ["Premium Products", "Certified Technicians", "Signature Designs"],
    before: "Before",
    after: "After",
    altNails: "Before and after manicure at Looks Beauty Boutique",
    altHair: "Before and after hair treatment at Looks Beauty Boutique",
    carouselAlts: [
      "Before and after blue French manicure at Looks Beauty Boutique",
      "Before and after nude manicure at Looks Beauty Boutique",
      "Before and after dark manicure at Looks Beauty Boutique",
    ],
  },
  stats: {
    rating: "Google Rating",
    reviews: "Reviews",
    days: "Days Open",
    online: "Booking 24/7",
  },
  hair: {
    label: "Hair",
    title: "Hair transformations that speak for themselves",
    alts: [
      "Before and after blonde curls styling",
      "Before and after grey balayage hair",
      "Before and after hair highlights",
      "Before and after ash blonde hair colour",
    ],
  },
  booking: {
    title: "Make Your Booking",
    subtitle: "Book via form or app",
    iframeTitle: "Book on Setmore",
    hours: "Opening Hours",
    closed: "Closed",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  story: {
    label: "Our Story",
    paragraphs: [
      "In the heart of Athens at Syntagma, just a few steps from the metro station, LOOKS Beauty Boutique has been a lasting beauty destination for more than 15 years — a place where quality, aesthetics and personal care meet.",
      "With a renewed philosophy and a modern approach to beauty, we evolve our space and our services every day, staying true to what matters to us: professionalism, consistency, high quality and an experience that makes every visit special...",
      "For us, real beauty starts with how you feel. That is why we created a warm and welcoming space, where care, attention to detail and personal connection are part of our daily philosophy. The trust of our clients over all these years is our greatest inspiration.",
      "Our team, specialised in Nails, Hair & Beauty and continuously trained in modern techniques, creates personalised services that bring out your beauty and your personal style.",
    ],
    quote:
      "\u201CBecause beauty is not only what we see in the mirror. It is the way we feel when we choose to take care of ourselves ..\u201D",
  },
  gallery: {
    title: "Our work speaks for itself",
    prev: "Previous",
    next: "Next",
    alts: [
      "Nail art with a black & red card theme",
      "Square French manicure with heart detail",
      "Nude to white ombré almond nails",
    ],
  },
  reviews: {
    label: "Reviews",
    title: "What our clients say",
    items: [
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
    ],
  },
  cta: { title: "Ready for the Perfect Look?", subtitle: "Book your appointment online — 24/7" },
  footer: {
    blurb:
      "Nail & hair salon in the heart of Syntagma — inside the arcade, Filellinon 3. Every look is a work of art.",
    nav: "Navigation",
    contact: "Contact",
    links: { home: "Home", about: "About", booking: "Booking", contact: "Contact" },
    address: "Inside the arcade, Filellinon 3, Athens 105 57",
    directions: "Directions",
    mapTitle: "Looks Beauty Boutique — Filellinon 3, Athens",
    rights: "© 2026 Looks Beauty Boutique. All rights reserved.",
  },
};

const dictionaries: Record<Lang, Dict> = { el, en };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "el",
  setLang: () => {},
  t: el,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("el");

  useEffect(() => {
    const stored = window.localStorage.getItem("lbb-lang");
    if (stored === "el" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lbb-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}
