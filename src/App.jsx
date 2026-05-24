import React from "react";
import heroVideo from "./church01/hero-video.mp4";
import { useTranslation } from "react-i18next";
import churchHero from "./church01/church01.jpg";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Play,
  Music,
  Heart,
  Users,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const images = {
  hero:
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=2400&q=80",
  experience:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  community:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80",
  sermon1:
    "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1400&q=80",
  sermon2:
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1400&q=80",
  sermon3:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
  product1:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  product2:
    "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
  product3:
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
};

const navItems = [  
  { label: "navExperience", href: "#experience" },
  { label: "navGatherings", href: "#gatherings" },
  { label: "navShop", href: "#shop" },
  { label: "navConnect", href: "#connect" }
  ,];

const communityCards = [
  {
    title: "Worship",
    text: "The sound of a generation returning home.",
    icon: Music,
  },
  {
    title: "Prayer",
    text: "Strategic silence in a world of constant noise.",
    icon: Heart,
  },
  {
    title: "Groups",
    text: "Where the crowd becomes a family.",
    icon: Users,
  },
  {
    title: "Events",
    text: "Moments curated for divine encounters.",
    icon: CalendarDays,
  },
];

const sermons = [
  {
    title: "Faith That Stands",
    meta: "Week 04 — Series: Architecture of the Soul",
    image: images.sermon1,
  },
  {
    title: "The Architecture of Peace",
    meta: "Week 03 — Series: Architecture of the Soul",
    image: images.sermon2,
  },
  {
    title: "Valleys & Visions",
    meta: "Week 02 — Series: Architecture of the Soul",
    image: images.sermon3,
  },
];

const products = [
  {
    name: "Shelter Church T-Shirt",
    price: "$35.00",
    image: images.product1,
  },
  {
    name: "Worship Journal",
    price: "$28.00",
    image: images.product2,
  },
  {
    name: "Prayer Room Tote Bag",
    price: "$22.00",
    image: images.product3,
  },
];

function SectionLabel({ children }) {
  return (
    <span className="mb-4 block text-xs font-semibold tracking-[0.03em] text-[#d4c3bb]">
      {children}
    </span>
  );
}

function Header({ t, i18n }) {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-[#141312]/80 px-6 py-5 backdrop-blur-xl md:px-16">
      <a href="#" className="font-black tracking-[0.03em] text-[#e7e1e0]">
        Shelter
      </a>

      <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item, index) => (
      <a
      key={item.label}
      href={item.href}
      className={`text-sm font-semibold tracking-[0.03em] transition-colors ${
        index === 0
          ? "border-b border-[#d4c3bb] pb-1 text-[#d4c3bb]"
          : "text-[#d1c4be] hover:text-white"
      }`}
    >
      {t(item.label)}
    </a>
  ))}
</div>

<div className="flex items-center gap-3">
  <button
    onClick={() => i18n.changeLanguage("th")}
    className="border border-[#d4c3bb] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4c3bb] transition hover:bg-[#d4c3bb] hover:text-[#382e29]"
  >
    TH
  </button>

  <button
    onClick={() => i18n.changeLanguage("en")}
    className="border border-[#d4c3bb] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4c3bb] transition hover:bg-[#d4c3bb] hover:text-[#382e29]"
  >
    EN
  </button>

  <button className="bg-[#d4c3bb] px-6 py-2 text-xs font-bold tracking-[0.03em] text-[#382e29] transition hover:opacity-80 active:scale-95">
    {t("give")}
  </button>
</div>
    </nav>
  );
}

// function Hero({ t }) {
//   return (
//     <header className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#141312]">
//       <motion.img
//         initial={{ scale: 1.12 }}
//         animate={{ scale: 1.04 }}
//         transition={{ duration: 3, ease: "easeOut" }}
//         src={churchHero}
//         alt="Warm light entering a peaceful landscape"
//         className="absolute inset-0 h-full w-full object-cover opacity-55"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-[#141312]/20 via-[#141312]/50 to-[#141312]" />

//       <motion.div
//         variants={staggerParent}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-16"
//       >
//         <motion.span variants={fadeUp} className="mb-8 block text-xs font-semibold tracking-[0.03em] text-[#d4c3bb]">
//           {t("welcome")}
//         </motion.span>

//         <motion.h1
//           variants={fadeUp}
//           className="mb-10 text-[54px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e7e1e0] md:text-[105px]"
//         >
//          {t("heroTitle1")} <br />
//           <span className="text-[#d4c3bb]">{t("heroTitle2")}</span>
//         </motion.h1>

//         <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-4 md:flex-row">
//           <button className="border border-[#d4c3bb] px-10 py-4 text-xs font-bold  tracking-[0.03em] text-[#d4c3bb] transition hover:bg-[#d4c3bb] hover:text-[#382e29] hover:shadow-[0_0_40px_rgba(212,195,187,0.18)]">
//             {t("new")}
//           </button>
//           <button className="bg-[#4b403a] px-10 py-4 text-xs font-bold  tracking-[0.03em] text-[#f0dfd7] transition hover:opacity-90 hover:shadow-[0_0_40px_rgba(212,195,187,0.18)]">
//             {t("join")}
//           </button>
//           <button className="group flex items-center gap-2 text-xs font-bold tracking-[0.03em] text-[#e7e1e0]">
//             <PlayCircle size={20} />
//             {t("watch")}
//             <span className="h-px w-0 bg-[#d4c3bb] transition-all group-hover:w-8" />
//           </button>
//         </motion.div>
//       </motion.div>

//       <p className="absolute bottom-10 left-6 max-w-xs font-serif italic text-[#d1c4be]/70 md:left-16">
//         “He makes me lie down in green pastures, he leads me beside quiet waters...”
//       </p>
//     </header>
//   );
// }

function Hero({ t }) {
  return (
    <header className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#141312]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#141312]/20 via-[#141312]/50 to-[#141312]" />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-16"
      >
        <motion.span
          variants={fadeUp}
          className="mb-8 block text-xs font-semibold tracking-[0.03em] text-[#d4c3bb]"
        >
          {t("welcome")}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mb-10 text-[54px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e7e1e0] md:text-[105px]"
        >
          {t("heroTitle1")} <br />
          <span className="text-[#d4c3bb]">{t("heroTitle2")}</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <button className="border border-[#d4c3bb] px-10 py-4 text-xs font-bold tracking-[0.03em] text-[#d4c3bb] transition hover:bg-[#d4c3bb] hover:text-[#382e29] hover:shadow-[0_0_40px_rgba(212,195,187,0.18)]">
            {t("new")}
          </button>

          <button className="bg-[#4b403a] px-10 py-4 text-xs font-bold tracking-[0.03em] text-[#f0dfd7] transition hover:opacity-90 hover:shadow-[0_0_40px_rgba(212,195,187,0.18)]">
            {t("join")}
          </button>

          <button className="group flex items-center gap-2 text-xs font-bold tracking-[0.03em] text-[#e7e1e0]">
            <PlayCircle size={20} />
            {t("watch")}
            <span className="h-px w-0 bg-[#d4c3bb] transition-all group-hover:w-8" />
          </button>
        </motion.div>
      </motion.div>

      <p className="absolute bottom-10 left-6 max-w-xs font-serif italic text-[#d1c4be]/70 md:left-16">
        “He makes me lie down in green pastures, he leads me beside quiet waters...”
      </p>
    </header>
  );
}

function Experience({ t }) {
  return (
    <section id="experience" className="bg-[#141312] px-6 py-32 md:px-16 md:py-40">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 md:col-span-5"
        >
          <h2 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-[#e7e1e0] md:text-7xl">
            {t("experienceTitle1")} <br /> {t("experienceTitle2")}
          </h2>

          <div className="space-y-6 font-serif text-xl leading-8 text-[#d1c4be]">
            <p>{t("experienceText1")}</p>
            <p>{t("experienceText2")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-7"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images.experience}
              alt="Light and peaceful architecture mood"
              className="h-full w-full object-cover transition duration-1000 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-10 -left-10 hidden border border-[#4e4540]/40 bg-[#211f1f] p-10 md:block">
            <span className="absolute -right-4 -top-10 text-[80px] font-black text-[#d4c3bb]/10">
              01
            </span>

            <h3 className="mb-2 text-3xl font-bold uppercase tracking-widest text-[#d4c3bb]">
              {t("immersive")}
            </h3>

            <p className="text-xs font-semibold  tracking-[0.03em] text-[#d1c4be]">
              {t("sensory")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Community({ t }) {

  const communityCards = [
    {
      title: t("worship"),
      text: t("worshipText"),
      icon: Music,
    },
    {
      title: t("prayer"),
      text: t("prayerText"),
      icon: Heart,
    },
    {
      title: t("groups"),
      text: t("groupsText"),
      icon: Users,
    },
    {
      title: t("events"),
      text: t("eventsText"),
      icon: CalendarDays,
    },
  ];

  return (
    <section id="gatherings" className="bg-[#0f0e0d]">
      <div className="flex flex-col md:h-screen md:flex-row">

        <div className="relative h-[55vh] w-full overflow-hidden md:h-full md:w-1/2">
          <img
            src={images.community}
            alt="People gathered together"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-[#141312]/50">
            <h2 className="text-center text-5xl font-black leading-tight tracking-[0.02em] text-[#e7e1e0] md:text-7xl">
              {t("common1")} <br /> {t("common2")}
            </h2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 md:w-1/2 md:grid-cols-2">

          {communityCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="group flex min-h-[280px] cursor-pointer flex-col justify-between border-b border-r border-white/5 p-10 transition-colors hover:bg-[#211f1f]"
              >
                <Icon className="text-[#d4c3bb]" size={40} />

                <div>
                  <h4 className="mb-2 text-3xl font-bold uppercase tracking-widest text-[#e7e1e0]">
                    {card.title}
                  </h4>

                  <p className="font-serif text-lg text-[#d1c4be]">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

function Sermons({ t }) {

  const sermons = [
    {
      title: t("sermon1Title"),
      meta: t("sermon1Meta"),
      image: images.sermon1,
    },
    {
      title: t("sermon2Title"),
      meta: t("sermon2Meta"),
      image: images.sermon2,
    },
    {
      title: t("sermon3Title"),
      meta: t("sermon3Meta"),
      image: images.sermon3,
    },
  ];

  return (
    <section className="overflow-hidden bg-[#141312] py-32 md:py-40">

      <div className="mb-14 flex items-end justify-between px-6 md:px-16">

        <div>
          <SectionLabel>
            {t("latestTeachings")}
          </SectionLabel>

          <h2 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-[#e7e1e0] md:text-7xl">
            {t("voices1")} <br /> {t("voices2")}
          </h2>
        </div>

        <div className="mb-3 hidden gap-4 md:flex">
          <button className="border border-[#4e4540] p-4 text-[#e7e1e0] transition hover:bg-[#4b403a]">
            <ArrowLeft />
          </button>

          <button className="border border-[#4e4540] p-4 text-[#e7e1e0] transition hover:bg-[#4b403a]">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-10 [scrollbar-width:none] md:px-16 [&::-webkit-scrollbar]:hidden">

        {sermons.map((sermon) => (
          <article
            key={sermon.title}
            className="group w-[360px] flex-none cursor-pointer md:w-[600px]"
          >

            <div className="relative mb-6 aspect-video overflow-hidden">

              <img
                src={sermon.image}
                alt={sermon.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/5" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/20 backdrop-blur-md">
                  <Play className="text-white" />
                </div>
              </div>

            </div>

            <h3 className="text-2xl font-bold uppercase tracking-widest text-[#e7e1e0] transition group-hover:text-[#d4c3bb] md:text-3xl">
              {sermon.title}
            </h3>

            <p className="mt-2 font-serif text-[#d1c4be]">
              {sermon.meta}
            </p>

          </article>
        ))}

      </div>
    </section>
  );
}

function Manifesto({ t }) {
  return (
    <section className="bg-[#141312] px-6 py-32 text-center md:px-16">

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl border-y border-white/5 py-20"
      >

        <SectionLabel>
          {t("manifestoLabel")}
        </SectionLabel>

        <p className="font-serif text-3xl italic leading-snug text-[#e7e1e0] md:text-[42px]">
          {t("manifestoText")}
        </p>

        <div className="mx-auto mt-12 h-16 w-px bg-[#d4c3bb]" />

      </motion.div>

    </section>
  );
}

function Shop({ t }) {

  const products = [
    {
      name: t("product1"),
      price: "$35.00",
      image: images.product1,
    },
    {
      name: t("product2"),
      price: "$28.00",
      image: images.product2,
    },
    {
      name: t("product3"),
      price: "$22.00",
      image: images.product3,
    },
  ];

  return (
    <section
      id="shop"
      className="bg-[#1d1b1b] px-6 py-32 md:px-16 md:py-40"
    >

      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

        <h2 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-[#e7e1e0] md:text-7xl">
          {t("shopTitle1")} <br /> {t("shopTitle2")}
        </h2>

        <p className="max-w-sm font-serif text-lg leading-7 text-[#d1c4be]">
          {t("shopText")}
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {products.map((product) => (
          <article
            key={product.name}
            className="group cursor-pointer"
          >

            <div className="relative mb-5 aspect-square overflow-hidden bg-[#141312]">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110"
              />

              <button className="absolute bottom-0 left-0 w-full translate-y-full bg-[#d4c3bb] py-4 text-xs font-bold  tracking-[0.03em] text-[#382e29] transition-transform group-hover:translate-y-0">
                {t("addToBag")}
              </button>

            </div>

            <h5 className="text-xl font-bold tracking-wider text-[#e7e1e0]">
              {product.name}
            </h5>

            <p className="mt-1 text-xs font-bold  tracking-[0.03em] text-[#d4c3bb]">
              {product.price}
            </p>

          </article>
        ))}

      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer
      id="connect"
      className="bg-[#0f0e0d] px-6 py-32 md:px-16"
    >

      <div className="mx-auto grid max-w-screen-2xl gap-10 md:grid-cols-12">

        <div className="md:col-span-6">

          <div className="mb-6 text-5xl font-black leading-tight tracking-[-0.02em] text-[#e7e1e0] md:text-7xl">
            Shelter
          </div>

          <p className="mb-10 max-w-md font-serif italic leading-7 text-[#d1c4be]">
            {t("footerQuote")}
          </p>

          <div className="flex gap-6 font-serif text-[#d1c4be]">
            <a href="#" className="transition hover:text-[#d4c3bb]">
              Instagram
            </a>

            <a href="#" className="transition hover:text-[#d4c3bb]">
              YouTube
            </a>

            <a href="#" className="transition hover:text-[#d4c3bb]">
              Spotify
            </a>
          </div>

        </div>

        <div className="md:col-span-2">

          <h6 className="mb-5 text-xs font-bold tracking-[0.03em] text-[#e7e1e0]">
            {t("navigation")}
          </h6>

          <ul className="space-y-3 font-serif text-[#d1c4be]">

            <li>
              <a href="#" className="transition hover:text-[#d4c3bb]">
                {t("serviceTimes")}
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#d4c3bb]">
                {t("contact")}
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#d4c3bb]">
                {t("locations")}
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#d4c3bb]">
                {t("privacy")}
              </a>
            </li>

          </ul>

        </div>

        <div className="md:col-span-4">

          <h6 className="mb-5 text-xs font-bold  tracking-[0.03em] text-[#e7e1e0]">
            {t("newsletter")}
          </h6>

          <div className="relative border-b border-white/20 py-3 transition focus-within:border-[#d4c3bb]">

            <input
              className="w-full bg-transparent pr-10 font-serif text-[#e7e1e0] outline-none placeholder:text-white/30"
              placeholder={t("email")}
              type="email"
            />

            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#d4c3bb]" />

          </div>

          <p className="mt-12 text-[10px] tracking-[0.03em] text-[#d1c4be]/50">
            {t("copyright")}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default function ShelterChurchLanding() {
  const { t, i18n } = useTranslation();

  return (
     <main className="min-h-screen bg-[#141312] font-sans text-[#e7e1e0] selection:bg-[#4b403a] selection:text-[#f0dfd7]">
      <Header t={t} i18n={i18n} />
      <Hero t={t} />
      <Experience t={t} />
      <Community t={t} />
      <Sermons t={t} />
      <Manifesto t={t} />
      <Shop t={t} />
      <Footer t={t} />
    </main>
  );
}
