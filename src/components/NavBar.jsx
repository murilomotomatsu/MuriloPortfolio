// src/components/NavBar.js
import React, { useState } from 'react';
import perfil from '../assets/images/perfil.png';
import WhatsLogo from '../assets/images/vectorWhats.svg';
import './NavBar.css';

const NavBar = ({ scrollToSection, toggleLanguage, currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleWhatsappClick = () => {
    window.open(
      'https://wa.me/18981156739?text=Ol%C3%A1%20Murilo,%20vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os',
      '_blank'
    );
  };

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
  };

  const handleSectionClick = (section) => {
    scrollToSection(section);
    setIsVisible(false); // Hide navbar after section is clicked
  };

  return (
    <div>
      {/* Toggle button for smaller screens */}
      <button className={`toggleButton ${isVisible ? 'open' : ''}`} onClick={toggleNavBar}>
        {!isVisible && (
          <img src={perfil} alt="Perfil" className="toggleProfileIcon" />
        )}
        {isVisible && '-'}
      </button>

      {/* Language Toggle Button (Always visible) */}
      <button className={`languageButton ${isVisible ? 'open' : ''}`} onClick={toggleLanguage}>
        {currentLanguage === 'pt-br' ? 'EN' : 'PT'}
      </button>

      {/* NavBar content */}
      <div className={`NavBar ${isVisible ? 'visible' : ''}`}>
        <img src={perfil} alt='Perfil' />
        <h1>Murilo Motomatsu</h1>
        <nav>
          <ul>
            <li onClick={() => handleSectionClick('inicio')}>{currentLanguage === 'pt-br' ? 'Início' : 'Home'}</li>
            <li onClick={() => handleSectionClick('sobre-mim')}>{currentLanguage === 'pt-br' ? 'Sobre mim' : 'About me'}</li>
            <li onClick={() => handleSectionClick('o-que-faco')}>{currentLanguage === 'pt-br' ? 'O que eu faço' : 'What I do'}</li>
            <li onClick={() => handleSectionClick('portfolio')}>{currentLanguage === 'pt-br' ? 'Portfólio' : 'Portfolio'}</li>
            <li onClick={() => handleSectionClick('depoimentos')}>{currentLanguage === 'pt-br' ? 'Depoimentos' : 'Testimonials'}</li>
            <li onClick={() => handleSectionClick('contato')}>{currentLanguage === 'pt-br' ? 'Contato' : 'Contact'}</li>
          </ul>
        </nav>
        <button className="whatsappButton" onClick={handleWhatsappClick}>
          {currentLanguage === 'pt-br' ? 'Me chame no WhatsApp' : 'Contact me on WhatsApp'}
          <img src={WhatsLogo} alt="WhatsApp" className="whatsIcon" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
