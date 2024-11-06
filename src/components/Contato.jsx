import React from 'react';
import './Contato.css';
import Linkedin from '../assets/images/vectorLinkedin.svg';
import GitHub from '../assets/images/vectorGitHub.svg';
import WhatsLogo from '../assets/images/vectorWhats.svg';
import CVImg from '../assets/images/vectorCurriculum.svg';
import CV from '../assets/files/CV - MURILO MOTOMATSU - DEV FULL STACK.pdf';

/* Conteúdo de contato com suporte a múltiplos idiomas */
const CONTACT_CONTENT = {
  'pt-br': {
    title: 'Como me encontrar?', // Título em português
    background: 'CONTATO', // Texto de fundo em português
    addressTitle: 'ENDEREÇO:',
    address: 'Jardim Canaã, São José do Rio Preto.',
    phoneTitle: 'Telefones de contato:',
    phones: ['(18) 9 8115-6739', '(11) 9 4803-3730'],
    emailTitle: 'Email:',
    email: 'muri.turi95@gmail.com',
    whatsappButton: 'Me chame no WhatsApp Agora!',
  },
  eng: {
    title: 'How to reach me?', // Título em inglês
    background: 'CONTACT', // Texto de fundo em inglês
    addressTitle: 'ADDRESS:',
    address: 'Jardim Canaã, São José do Rio Preto.',
    phoneTitle: 'Contact Phones:',
    phones: ['+55 (18) 9 8115-6739', '+55 (11) 9 4803-3730'],
    emailTitle: 'Email:',
    email: 'muri.turi95@gmail.com',
    whatsappButton: 'Message me on WhatsApp now!',
  },
};

/* Componente principal do contato */
const Contato = ({ language }) => {
  /* Função para abrir o link do WhatsApp quando o botão for clicado */
  const handleWhatsappClick = () => {
    window.open(
      'https://wa.me/18981156739?text=Ol%C3%A1%20Murilo,%20vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os',
      '_blank'
    );
  };

  /* Seleciona o conteúdo com base na linguagem escolhida */
  const content = CONTACT_CONTENT[language];

  return (
    <div className="contato-container">
      {/* Adiciona o texto de fundo dinamicamente com base no idioma */}
      <h2 data-background={content.background}>{content.title}</h2>

      <div className="contato-grid">
        <div className="contato-info">
          <h3>{content.addressTitle}</h3>
          <p>{content.address}</p>

          <h3>{content.phoneTitle}</h3>
          {content.phones.map((phone, index) => (
            <p key={index}>{phone}</p>
          ))}

          <h3>{content.emailTitle}</h3>
          <p><a href={`mailto:${content.email}`}>{content.email}</a></p>
        </div>

        <div className="social-icons">
          {/* Links para as redes sociais */}
          <a href="https://www.linkedin.com/in/murilo-motomatsu-88077826a" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/murilomotomatsu" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
          <a href={CV} download="CV - MURILO MOTOMATSU - DEV FULL STACK.pdf">
            <img src={CVImg} alt="Curriculum" />
          </a>
        </div>

        <button className="whatsappButtonCta" onClick={handleWhatsappClick}>
          {content.whatsappButton}
          <img src={WhatsLogo} alt="WhatsApp" className="whatsIcon" />
        </button>
      </div>
    </div>
  );
};

export default Contato;
