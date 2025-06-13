import React, { useEffect, useState } from "react";
import "./CV.css";
import myProfile from "../images/my-profile.jpg";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp,
  FaFacebook, FaInstagram, FaTelegram, FaPhone, FaDownload,
  FaSun, FaMoon
} from "react-icons/fa";

export default function CV() {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // الوضع الافتراضي: داكن

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Ahmed-Karam-CV.pdf";
  link.download = "Ahmed-Karam-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  };

  return (
    <div className={`cv-container ${visible ? "fade-in" : ""}`}>
      <nav className="navbar slide-up">
        <div className="nav-left">
          <img src={myProfile} alt="Ahmed Karam" className="nav-profile-pic" />
        </div>
        <div className="nav-right">
          <h1 className="nav-name">Ahmed Karam</h1>
          <p className="nav-title">Web Developer & Designer</p>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
          </div>

          <button className="download-btn" onClick={handleDownload}>
            <FaDownload /> Download CV
          </button>
        </div>
      </nav>

      <main className="cv-main">
        <section className="slide-up delay-1" id="about">
          <h2>About Me</h2>
          <p>I’m passionate about turning code into beautiful user experiences.</p>
          <p>I love building things that live on the web using modern technologies.</p>
        </section>

        <section className="slide-up delay-2" id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, TailwindCSS, Bootstrap</li>
            <li>Firebase, Firestore, Git & GitHub</li>
            <li>Google Maps API</li>
            <li>UI/UX Design Fundamentals</li>
            <li>Responsive Web Design</li>
          </ul>
        </section>

        <section className="slide-up delay-3" id="education">
          <h2>Education</h2>
          <p><strong>Arab Open University</strong> – BSc Computer Science (Expected 2026)</p>
        </section>

        <section className="slide-up delay-4" id="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Human Bonding Platform:</strong> Transparent, respectful donation system.</li>
            <li><strong>Blood Donation App:</strong> Real-time matching with Firebase and Maps API.</li>
            <li><strong>AI Recovery Calendar:</strong> Helps addicts track progress with smart reminders.</li>
            <li><strong>Food Redistribution:</strong> Technology to redirect surplus food to the needy.</li>
          </ul>
        </section>

        <section className="slide-up delay-5" id="contact">
          <h2>Contact Me</h2>
          <p>You can reach out to me through:</p>
          <div className="social-icons">
            <a href="tel:+201550901395" target="_blank" rel="noopener noreferrer">
              <FaPhone /> <span>+20 155 090 1395</span>
            </a>
            <a href="https://wa.me/201550901395" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-karam-227960241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Ahmedferon74" target="_blank" rel="noopener noreferrer">
              <FaGithub /> <span>GitHub</span>
            </a>
            <a href="mailto:ahmedelmasry5576@gmail.com">
              <FaEnvelope /> <span>Email</span>
            </a>
            <a href="https://www.facebook.com/share/16JDngMeGe/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/ahmed_adlii72?igsh=YTRqa2trZzA4azFu&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="https://t.me/ahmedferon" target="_blank" rel="noopener noreferrer">
              <FaTelegram /> <span>Telegram</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="cv-footer slide-up">
        <p>&copy; {new Date().getFullYear()} Ahmed Karam. All rights reserved.</p>
      </footer>
    </div>
  );
}
