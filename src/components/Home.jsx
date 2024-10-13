// src/components/Home.js
import React, { useState } from 'react';
import '../styles.css';
import 'animate.css';
import Depoimentos from './Depoimentos';
import Inicio from './Inicio';
import SobreMim from './Sobre';
import Services from './Services';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contato from './Contato';
import Footer from './Footer';

const Home = () => {
  const [language, setLanguage] = useState('pt-br');

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // duração da animação em milissegundos
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt-br' ? 'eng' : 'pt-br'));
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} toggleLanguage={toggleLanguage} currentLanguage={language} />

      {/* Sections */}
      <div className='mainBoard'>
        <section id="inicio">
          <Inicio scrollToSection={scrollToSection} language={language}/>
        </section>

        <section id="sobre-mim">
          <SobreMim scrollToSection={scrollToSection} language={language}/>
        </section>

        <section id="o-que-faco">
          <Services scrollToSection={scrollToSection} language={language}/>
        </section>

        <section id="portfolio">
          <Portfolio scrollToSection={scrollToSection} language={language}/>
        </section>

        <section id="depoimentos">
          <Depoimentos scrollToSection={scrollToSection} language={language}/>
        </section>

        <section id="contato">
          <Contato language={language}/>
        </section>
        
        <Footer language={language}/>
      </div>
    </>
  );
};

export default Home;
