import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navExperience: "Experience",
      navGatherings: "Gatherings",
      navShop: "Shop",
      navConnect: "Connect",
      give: "Give",

      welcome: "WELCOME TO THE ARCHITECTURE OF PEACE",
      heroTitle1: "A PLACE TO REST",
      heroTitle2: "IN HIS PRESENCE",
      new: "I'M NEW",
      join: "JOIN US",
      watch: "WATCH SERMONS",
      psalm: "“He makes me lie down in green pastures, he leads me beside quiet waters...”",

      experienceTitle1: "The",
      experienceTitle2: "Experience",
      experienceText1:
        "We believe in a faith that breathes. Shelter is not just a destination; it is a recalibration of the soul through light, sound, and stillness.",
      experienceText2:
        "Architecture meets spirit in our weekend gatherings, designed to help you disconnect from the noise and reconnect with the Eternal.",
      immersive: "Immersive",
      sensory: "Sensory Worship",

      common1: "Common",
      common2: "Ground",
      worship: "Worship",
      worshipText: "The sound of a generation returning home.",
      prayer: "Prayer",
      prayerText: "Strategic silence in a world of constant noise.",
      groups: "Groups",
      groupsText: "Where the crowd becomes a family.",
      events: "Events",
      eventsText: "Moments curated for divine encounters.",

      latestTeachings: "Latest Teachings",
      voices1: "Voices from",
      voices2: "the Shadow",

      sermon1Title: "Faith That Stands",
      sermon1Meta: "Week 04 — Series: Architecture of the Soul",
      sermon2Title: "The Architecture of Peace",
      sermon2Meta: "Week 03 — Series: Architecture of the Soul",
      sermon3Title: "Valleys & Visions",
      sermon3Meta: "Week 02 — Series: Architecture of the Soul",

      manifestoLabel: "Our Manifesto",
      manifestoText:
        "“We are not a club for the perfect. We are a sanctuary for the weary. A place where the architecture of the building meets the architecture of the heart.”",

      shopTitle1: "Shelter",
      shopTitle2: "Goods",
      shopText:
        "Tactile reminders of spiritual truths. Premium quality, curated for the modern pilgrim.",
      product1: "Shelter Church T-Shirt",
      product2: "Worship Journal",
      product3: "Prayer Room Tote Bag",
      addToBag: "Add to Bag",

      footerQuote:
        "“Faith is the formless made tangible. A quiet space where tired souls can breathe again.”",
      navigation: "Navigation",
      serviceTimes: "Service Times",
      contact: "Contact",
      locations: "Locations",
      privacy: "Privacy",
      newsletter: "Newsletter",
      email: "Email Address",
      copyright: "© 2026 Shelter Church. Architects of Light.",
    },
  },

  th: {
    translation: {
      navExperience: "ประสบการณ์",
      navGatherings: "กิจกรรม",
      navShop: "ร้านค้า",
      navConnect: "ติดต่อ",
      give: "ถวาย",

      welcome: "ยินดีต้อนรับสู่ คริสตจักรที่พักพิง",
      heroTitle1: "สถานที่พักสงบ",
      heroTitle2: "ในการทรงสถิต",
      new: "มาใหม่",
      join: "เข้าร่วม",
      watch: "รับชมคำเทศนา",
      psalm: "“พระองค์ทรงให้ข้าพเจ้านอนลงที่ทุ่งหญ้าเขียวสด และทรงนำข้าพเจ้าไปริมน้ำแดนสงบ...”",

      experienceTitle1: "ประสบการณ์",
      experienceTitle2: "การนมัสการ",
      experienceText1:
        "เราเชื่อว่าความเชื่อคือชีวิตที่มีลมหายใจ Shelter ไม่ใช่เพียงสถานที่ แต่เป็นพื้นที่ที่ช่วยให้จิตใจได้กลับมาพัก สงบ และเข้าใกล้พระเจ้าอีกครั้ง",
      experienceText2:
        "ทุกการรวมตัวของเราถูกออกแบบเพื่อช่วยให้คุณถอยออกจากเสียงรบกวนของโลก และกลับมาเชื่อมต่อกับพระเจ้านิรันดร์",
      immersive: "ลึกซึ้ง",
      sensory: "การนมัสการด้วยใจทั้งหมด",

      common1: "พื้นที่",
      common2: "แห่งชุมชน",
      worship: "นมัสการ",
      worshipText: "เสียงของผู้คนที่กลับมาหาพระเจ้า",
      prayer: "อธิษฐาน",
      prayerText: "ความสงบท่ามกลางโลกที่เต็มไปด้วยเสียงรบกวน",
      groups: "กลุ่มสัมพันธ์",
      groupsText: "จากคนจำนวนมาก กลายเป็นครอบครัวฝ่ายวิญญาณ",
      events: "กิจกรรม",
      eventsText: "ช่วงเวลาที่จัดเตรียมไว้เพื่อพบพระเจ้า",

      latestTeachings: "คำเทศนาล่าสุด",
      voices1: "เสียงแห่ง",
      voices2: "ความหวัง",

      sermon1Title: "ความเชื่อที่ยืนหยัด",
      sermon1Meta: "สัปดาห์ที่ 04 — ชุด: โครงสร้างของจิตวิญญาณ",
      sermon2Title: "สถาปัตยกรรมแห่งสันติสุข",
      sermon2Meta: "สัปดาห์ที่ 03 — ชุด: โครงสร้างของจิตวิญญาณ",
      sermon3Title: "หุบเขาและนิมิต",
      sermon3Meta: "สัปดาห์ที่ 02 — ชุด: โครงสร้างของจิตวิญญาณ",

      manifestoLabel: "หัวใจของเรา",
      manifestoText:
        "“เราไม่ใช่กลุ่มสำหรับคนสมบูรณ์แบบ แต่เป็นที่พักพิงสำหรับผู้เหน็ดเหนื่อย เป็นพื้นที่ที่พบกับการสร้างใหม่ภายในหัวใจ”",

      shopTitle1: "สินค้า",
      shopTitle2: "Shelter",
      shopText:
        "ของใช้ที่ช่วยเตือนใจถึงความจริงฝ่ายวิญญาณ คัดสรรด้วยคุณภาพและความหมาย",
      product1: "เสื้อ Shelter Church",
      product2: "สมุดบันทึกนมัสการ",
      product3: "กระเป๋า Prayer Room",
      addToBag: "เพิ่มลงตะกร้า",

      footerQuote:
        "“ความเชื่อคือสิ่งที่มองไม่เห็น แต่กลายเป็นจริงได้ในชีวิต เป็นพื้นที่สงบที่ให้จิตใจที่เหนื่อยล้าได้หายใจอีกครั้ง”",
      navigation: "เมนู",
      serviceTimes: "เวลานมัสการ",
      contact: "ติดต่อ",
      locations: "สถานที่",
      privacy: "นโยบายความเป็นส่วนตัว",
      newsletter: "รับข่าวสาร",
      email: "อีเมล",
      copyright: "© 2026 Shelter Church. สงวนลิขสิทธิ์",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;