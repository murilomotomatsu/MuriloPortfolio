import React from 'react';
import './Sobre.css';

const TEXTS = {
  'pt-br': {
    title: 'Quem sou eu?',
    backgroundText: 'SOBRE MIM', // Background text in Portuguese
    paragraphs: [
      'Meu nome é <span class="bold">Murilo Motomatsu</span>, tenho <span class="bold">26 anos</span> e sou <span class="highlight">apaixonado por tecnologia e inovação</span>. Venho aprimorando minhas habilidades para tornar a <span class="highlight">experiência do usuário</span> mais <span class="highlight">simples e eficiente</span>. Cada problema é uma <span class="highlight">oportunidade</span> de encontrar <span class="highlight">uma solução</span>. Do interior de <span class="bold">São Paulo</span>, buscando o <span class="highlight">mundo</span>.',
      'Quer saber como posso ajudar seu projeto? Explore meu portfólio e vamos <span class="highlight">transformar ideias em soluções!</span>',
    ],
  },
  eng: {
    title: 'Who am I?',
    backgroundText: 'ABOUT ME', // Background text in English
    paragraphs: [
      'My name is <span class="bold">Murilo Motomatsu</span>, I am <span class="bold">26 years old</span> and I am <span class="highlight">passionate about technology and innovation</span>. I have been improving my skills to make the <span class="highlight">user experience</span> more <span class="highlight">simple and efficient</span>. Every problem is an <span class="highlight">opportunity</span> to find <span class="highlight">a solution</span>. From the countryside of <span class="bold">São Paulo</span>, seeking the <span class="highlight">world</span>.',
      'Want to know how I can help your project? Explore my portfolio and let’s <span class="highlight">turn ideas into solutions!</span>',
    ],
  },
};

const SobreMim = ({ language }) => {
  const { title, backgroundText, paragraphs } = TEXTS[language];

  return (
    <div className="sobre-mim-container">
      <div className="sobre-mim-content">
        {/* Add a data attribute for the background text */}
        <h1 data-background={backgroundText}>{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
  );
};

export default SobreMim;
