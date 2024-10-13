import React, { useState } from 'react';
import PxgBot from '../assets/gifs/Pxgbot.gif';
import ChatBotGif from '../assets/gifs/ChatBot.gif';
import PwaGif from '../assets/gifs/Pwa.gif';
import Fabrica1 from '../assets/gifs/Fabrica1.gif';
import SeuProjeto from '../assets/gifs/Oseu.gif';
import Calculadora from '../assets/gifs/Calculadora.gif';

import './Portfolio.css';
import 'animate.css/animate.min.css';
import 'animate.css';

const PROJECTS_CONTENT = {
  'pt-br': [
    {
      name: "Calculadora Básica",
      language: "HTML/CSS/JavaScript",
      goal: "Explorar as funcionalidades",
      description: `Com orgulho, criei minha primeira calculadora interativa utilizando HTML, CSS e JavaScript. Este projeto não apenas me proporcionou uma introdução prática ao desenvolvimento web, mas também me ensinou a importância da lógica de programação e da usabilidade.`,
      video: Calculadora,
      image: Calculadora,
    },
    {
      name: "Assistente de Jogo",
      language: "Python",
      goal: "Melhorar a experiência de gameplay.",
      description: `Neste projeto, criei um assistente que automatiza tarefas repetitivas em jogos, permitindo que os jogadores se concentrem na diversão e estratégia.`,
      video: PxgBot,
      image: PxgBot,
    },
    {
      name: "Cardápio Interativo",
      language: "No Code",
      goal: "Modernizar o atendimento ao cliente.",
      description: `Criei um sistema de pedidos online utilizando a plataforma Bubble.io, visando otimizar a experiência dos clientes em um restaurante local.`,
      video: Fabrica1,
      image: Fabrica1,
    },
    {
      name: "Assistente Virtual Previdenciário",
      language: "Low-Code/Python/JavaScript",
      goal: "Melhorar a experiência do usuário.",
      description: `Desenvolvi um chatbot que oferece suporte em questões previdenciárias, utilizando uma combinação de tecnologias para garantir respostas precisas e rápidas.`,
      video: ChatBotGif,
      image: ChatBotGif,
    },
    {
      name: "Aplicativo Previdenciário",
      language: "React",
      goal: "Facilitar o uso de serviços previdenciários.",
      description: `Desenvolvi a interface para usuários de um aplicativo previdenciário, focando na acessibilidade e usabilidade para os cidadãos.`,
      video: PwaGif,
      image: PwaGif,
    },
    {
      name: "Desafios de Desenvolvimento",
      language: "Variado",
      goal: "Expandir conhecimentos e habilidades.",
      description: `Aceito desafios! Este projeto é um convite para mentes criativas que desejam inovar. Vamos desafiar os limites e criar algo único que impacte positivamente o mundo!`,
      video: SeuProjeto,
      image: SeuProjeto,
    },
  ],
  eng: [
    {
      name: "Basic Calculator",
      language: "HTML/CSS/JavaScript",
      goal: "Explore functionalities.",
      description: `I proudly created my first interactive calculator using HTML, CSS, and JavaScript. This project not only provided me with practical web development experience but also taught me the importance of programming logic and usability.`,
      video: Calculadora,
      image: Calculadora,
    },
    {
      name: "Game Assistant",
      language: "Python",
      goal: "Improve gameplay experience.",
      description: `In this project, I created an assistant that automates repetitive tasks in games, allowing players to focus on fun and strategy.`,
      video: PxgBot,
      image: PxgBot,
    },
    {
      name: "Interactive Menu",
      language: "No Code",
      goal: "Modernize customer service.",
      description: `I developed an online ordering system using the Bubble.io platform, aiming to enhance the customer experience at a local restaurant.`,
      video: Fabrica1,
      image: Fabrica1,
    },
    {
      name: "Previdential Virtual Assistant",
      language: "Low-Code/Python/JavaScript",
      goal: "Improve user experience.",
      description: `I developed a chatbot that provides support for previdential issues, using a combination of technologies to ensure fast and accurate responses.`,
      video: ChatBotGif,
      image: ChatBotGif,
    },
    {
      name: "Previdential App",
      language: "React",
      goal: "Make previdential services easier to use.",
      description: `I developed the user interface for a previdential app, focusing on accessibility and usability for citizens.`,
      video: PwaGif,
      image: PwaGif,
    },
    {
      name: "Development Challenges",
      language: "Varied",
      goal: "Expand knowledge and skills.",
      description: `I accept challenges! This project is an invitation for creative minds who want to innovate. Let’s challenge the limits and create something unique that positively impacts the world!`,
      video: SeuProjeto,
      image: SeuProjeto,
    },
  ],
};

const HEADINGS = {
  'pt-br': {
    title: 'O que eu já fiz?',
    background: 'PORTFÓLIO', // Background text for Portuguese
  },
  eng: {
    title: 'What have I done?',
    background: 'PORTFOLIO', // Background text for English
  },
};

const Portfolio = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects = PROJECTS_CONTENT[language]; // Select content based on the language
  const heading = HEADINGS[language].title; // Dynamic heading based on the language
  const background = HEADINGS[language].background; // Background text for the heading

  return (
    <div className="portfolio-container">
      {/* Add the data-background attribute to dynamically set the background text */}
      <h2 data-background={background}>{heading}</h2>
      <div className="cards-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card animate__animated animate__flipInY" 
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={`${project.name} logo`} />
            <div className="card-content">
              <h3>{project.name}</h3>
              <p><strong>Linguagem:</strong> {project.language}</p>
              <p>{project.goal}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-container">
              <iframe
                width="100%"                
                height="100%"
                src={selectedProject.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Video"
              ></iframe>
            </div>
            <div className="description-container">
              <h3>{selectedProject.name}</h3>
              <p><strong>Linguagem:</strong> {selectedProject.language}</p>
              <p><strong>Objetivo:</strong> {selectedProject.goal}</p>
              <p>{selectedProject.description}</p>
            </div>
            <button className="close-button" onClick={handleCloseModal}>
              {language === 'pt-br' ? 'Fechar' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
