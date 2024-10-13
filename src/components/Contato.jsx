import React from 'react';
import './Contato.css';
import Linkedin from '../assets/images/vectorLinkedin.svg'
import GitHub from '../assets/images/vectorGitHub.svg'
import WhatsLogo from '../assets/images/vectorWhats.svg';


const Contato = ({ scrollToSection }) => {
const handleWhatsappClick = () => {
    window.open(
       'https://wa.me/18981156739?text=Ol%C3%A1%20Murilo,%20vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os',
        '_blank'
    );
    };

  return (
    <div className="contato-container">
        <h2>Como me encontrar?</h2>

        <div className='contato-grid'>
            <div className="contato-info">
                <h3>ENDEREÇO:</h3>
                <p>Jardim Canaã, São José do Rio Preto.</p>

                <h3>Telefones de contato:</h3>
                <p>(18) 9 8115-6739</p>
                <p>(11) 9 4803-3730</p>

                <h3>Email:</h3>
                <p><a href="mailto:muri.turi95@gmail.com">muri.turi95@gmail.com</a></p>
          
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/murilo-motomatsu-88077826a" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/murilo-revisaprev" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
            </div>
            <button className="whatsappButtonCta" onClick={handleWhatsappClick}>
                Me chame no WhatsApp Agora!
                <img src={WhatsLogo} alt="WhatsApp" className="whatsIcon" />
            </button>
            
        </div>
    </div>
  );
};

export default Contato;
