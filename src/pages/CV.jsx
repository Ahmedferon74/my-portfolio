import React, { useEffect, useState } from "react";
import "./CV.css";
import myProfile from "../images/my-profile.jpg";

import {
  FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp,
  FaFacebook, FaInstagram, FaTelegram, FaPhone, FaDownload,
  FaSun, FaMoon, FaMobileAlt, FaDesktop
} from "react-icons/fa";

export default function CV() {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  const [mobilePreview, setMobilePreview] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    document.body.classList.add("dark-mode");

    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Ahmed-Karam-CV.pdf";
    link.download = "Ahmed-Karam-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const launchFireworks = () => {
    const container = document.createElement("div");
    container.className = "fireworks-container";
    document.body.appendChild(container);

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "firework";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      container.appendChild(particle);
    }

    setTimeout(() => container.remove(), 3000);
  };

  return (
    <div className={`cv-container ${visible ? "fade-in" : ""} ${mobilePreview ? "mobile-preview" : ""}`} dir={language === "ar" ? "rtl" : "ltr"}>
      <nav className="navbar slide-up">
        <div className="nav-left">
          <img src={myProfile} alt="Ahmed Karam" className="nav-profile-pic" />
        </div>
        <div className="nav-right">
          <h1 className="nav-name">{language === "ar" ? "أحمد كرم" : "Ahmed Karam"}</h1>
          <p className="nav-title">
            {language === "ar" ? "مطور ومصمم ويب" : "Web Developer & Designer"}
          </p>
          <ul className="nav-links">
            <li><a href="#about">{language === "ar" ? "من أنا" : "About"}</a></li>
            <li><a href="#skills">{language === "ar" ? "المهارات" : "Skills"}</a></li>
            <li><a href="#education">{language === "ar" ? "التعليم" : "Education"}</a></li>
            <li><a href="#projects">{language === "ar" ? "المشاريع" : "Projects"}</a></li>
            <li><a href="#contact">{language === "ar" ? "تواصل معي" : "Contact"}</a></li>
          </ul>

          <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? (language === "ar" ? "الوضع الفاتح" : "Light Mode") : (language === "ar" ? "الوضع الداكن" : "Dark Mode")}
          </div>

          <button className="lang-toggle-btn" onClick={toggleLanguage} style={{ marginLeft: "10px" }}>
            {language === "ar" ? "EN" : "AR"}
          </button>

          <button className="fireworks-toggle-btn" onClick={launchFireworks} style={{ marginLeft: "10px" }}>
            🎆 {language === "ar" ? "تشغيل التأثير" : "Launch Effect"}
          </button>

          <button className="device-toggle-btn" onClick={() => setMobilePreview(!mobilePreview)} style={{ marginLeft: "10px" }}>
            {mobilePreview ? <FaDesktop /> : <FaMobileAlt />} {language === "ar" ? (mobilePreview ? "وضع الكمبيوتر" : "وضع الهاتف") : (mobilePreview ? "Desktop View" : "Mobile View")}
          </button>

          <button className="download-btn" onClick={handleDownload}>
            <FaDownload /> {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
          </button>
        </div>
      </nav>

      <main className="cv-main">
        {/* About */}
        <section className="slide-up delay-1" id="about">
          <h2>{language === "ar" ? "من أنا" : "About Me"}</h2>
          {language === "ar" ? (
  <>
    <p>أنا أحمد كرم، شاب طموح من محافظة سوهاج، عمري 24 سنة ومواليد 25 مارس 2001.</p>
    <p>أعشق تطوير واجهات المستخدم وتحويل الأفكار إلى تجارب رقمية مميزة ومبهرة.</p>
    <p>أمتلك شغفاً كبيراً ببناء مواقع وتطبيقات ويب تفاعلية باستخدام أحدث التقنيات مثل React، JavaScript، HTML5، وCSS3.</p>
    <p>أعمل دائماً على تحسين مهاراتي وتعلم كل جديد في عالم البرمجة، وأسعى إلى تقديم حلول رقمية ذكية وسلسة تخدم المستخدم وتحقق تجربة مثالية.</p>
    <p>هدفي أن أكون جزءًا من مشاريع تقنية مميزة تترك أثراً وتُحدث فرقاً حقيقياً في حياة الناس.</p>
  </>
) : (
  <>
    <p>I’m Ahmed Karam, a passionate and ambitious developer from Sohag, Egypt. I’m 24 years old, born on March 25, 2001.</p>
    <p>I love crafting clean and engaging user interfaces and turning creative ideas into beautiful digital experiences.</p>
    <p>I specialize in building responsive and modern web applications using technologies like React, JavaScript, HTML5, and CSS3.</p>
    <p>I’m always eager to learn and grow, constantly expanding my skills and staying updated with the latest trends in web development.</p>
    <p>My goal is to contribute to impactful tech projects that make a real difference in people’s lives.</p>
  </>
)}

        </section>

        {/* Skills */}
        <section className="slide-up delay-2" id="skills">
          <h2>{language === "ar" ? "المهارات" : "Skills"}</h2>
          <ul className="skills-list">
            <li>{language === "ar" ? "HTML5, CSS3, جافاسكريبت (ES6+)" : "HTML5, CSS3, JavaScript (ES6+)"}</li>
            <li>{language === "ar" ? "React.js, TailwindCSS, Bootstrap" : "React.js, TailwindCSS, Bootstrap"}</li>
            <li>{language === "ar" ? "Firebase, Firestore, Git & GitHub" : "Firebase, Firestore, Git & GitHub"}</li>
            <li>{language === "ar" ? "Google Maps API" : "Google Maps API"}</li>
            <li>{language === "ar" ? "أساسيات تصميم UI/UX" : "UI/UX Design Fundamentals"}</li>
            <li>{language === "ar" ? "تصميم مواقع متجاوبة" : "Responsive Web Design"}</li>
          </ul>
        </section>

        {/* Education */}
        <section className="slide-up delay-3" id="education">
          <h2>{language === "ar" ? "التعليم" : "Education"}</h2>
          <p><strong>{language === "ar" ? "الجامعة العربية المفتوحة" : "Arab Open University"}</strong> – {language === "ar" ? "بكالوريوس علوم الحاسب (متوقع 2026)" : "BSc Computer Science (Expected 2026)"}</p>
        </section>

        {/* Projects */}
        <section className="slide-up delay-4" id="projects">
          <h2>{language === "ar" ? "المشاريع" : "Projects"}</h2>
          <ul>
            <li><strong>{language === "ar" ? "منصة الربط الإنساني:" : "Human Bonding Platform:"}</strong> {language === "ar" ? "نظام تبرعات شفاف ومحترم." : "Transparent, respectful donation system."}</li>
            <li><strong>{language === "ar" ? "تطبيق التبرع بالدم:" : "Blood Donation App:"}</strong> {language === "ar" ? "مطابقة في الوقت الحقيقي مع Firebase وMaps API." : "Real-time matching with Firebase and Maps API."}</li>
            <li><strong>{language === "ar" ? "تقويم التعافي بالذكاء الاصطناعي:" : "AI Recovery Calendar:"}</strong> {language === "ar" ? "يساعد المدمنين على تتبع التقدم مع تذكيرات ذكية." : "Helps addicts track progress with smart reminders."}</li>
            <li><strong>{language === "ar" ? "إعادة توزيع الغذاء:" : "Food Redistribution:"}</strong> {language === "ar" ? "تكنولوجيا لإعادة توجيه فائض الطعام للمحتاجين." : "Technology to redirect surplus food to the needy."}</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="slide-up delay-5" id="contact">
          <h2>{language === "ar" ? "تواصل معي" : "Contact Me"}</h2>
          <p>{language === "ar" ? "يمكنك التواصل معي من خلال:" : "You can reach out to me through:"}</p>
          <div className="social-icons">
            <a href="tel:+201550901395" target="_blank" rel="noopener noreferrer"><FaPhone /> <span>+20 155 090 1395</span></a>
            <a href="https://wa.me/201550901395" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> <span>WhatsApp</span></a>
            <a href="https://www.linkedin.com/in/ahmed-karam-227960241" target="_blank" rel="noopener noreferrer"><FaLinkedin /> <span>LinkedIn</span></a>
            <a href="https://github.com/Ahmedferon74" target="_blank" rel="noopener noreferrer"><FaGithub /> <span>GitHub</span></a>
            <a href="mailto:ahmedelmasry5576@gmail.com"><FaEnvelope /> <span>Email</span></a>
            <a href="https://www.facebook.com/share/16JDngMeGe/" target="_blank" rel="noopener noreferrer"><FaFacebook /> <span>Facebook</span></a>
            <a href="https://www.instagram.com/ahmed_adlii72" target="_blank" rel="noopener noreferrer"><FaInstagram /> <span>Instagram</span></a>
            <a href="https://t.me/ahmedferon" target="_blank" rel="noopener noreferrer"><FaTelegram /> <span>Telegram</span></a>
          </div>
        </section>
      </main>

      <footer className="cv-footer slide-up">
        <p>&copy; {new Date().getFullYear()} Ahmed Karam. {language === "ar" ? "كل الحقوق محفوظة." : "All rights reserved."}</p>
      </footer>
    </div>
  );
}
