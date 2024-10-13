import React, { useState } from 'react';
import PxgBot from '../assets/gifs/Pxgbot.gif';
import ChatBotGif from '../assets/gifs/ChatBot.gif';
import PwaGif from '../assets/gifs/Pwa.gif';
import Fabrica1 from '../assets/gifs/Fabrica1.gif';
import SeuProjeto from '../assets/gifs/Oseu.gif';
import Calculadora from '../assets/gifs/Calculadora.gif'

import './Portfolio.css';
import 'animate.css/animate.min.css';
import 'animate.css';

const projects = [
  {
    name: "Calculadora Básica",
    language: "HTML/CSS/JavaScript",
    goal: "Explorar as funcionalidades",
    description: `Com orgulho, criei minha primeira calculadora interativa utilizando HTML, CSS e JavaScript. Este projeto não apenas me proporcionou uma introdução prática ao desenvolvimento web, mas também me ensinou a importância da lógica de programação e da usabilidade. A experiência foi um marco fundamental na minha jornada de aprendizado, e a calculadora é um testemunho da minha capacidade de transformar conceitos em aplicações funcionais.`,
    video: Calculadora,
    image: Calculadora
  },
  {
    name: "Assistente de Jogo",
    language: "Python",
    goal: "Melhorar a experiência de gameplay.",
    description: `Neste projeto, criei um assistente que automatiza tarefas repetitivas em jogos, permitindo que os jogadores se concentrem na diversão e estratégia.`,
    video: PxgBot,
    image: PxgBot 
  },
  {
    name: "Cardápio Interativo",
    language: "No Code",
    goal: "Modernizar o atendimento ao cliente.",
    description: `Criei um sistema de pedidos online utilizando a plataforma Bubble.io, visando otimizar a experiência dos clientes em um restaurante local.`,
    video: Fabrica1,
    image: Fabrica1
  },
  {
    name: "Assistente Virtual Previdenciário",
    language: "Low-Code/Python/JavaScript",
    goal: "Melhorar a experiência do usuário.",
    description: `Desenvolvi um chatbot que oferece suporte em questões previdenciárias, utilizando uma combinação de tecnologias para garantir respostas precisas e rápidas.`,
    video: ChatBotGif,
    image: ChatBotGif 
  },
  {
    name: "Aplicativo Previdenciário",
    language: "React",
    goal: "Facilitar o uso de serviços previdenciários.",
    description: `Desenvolvi a interface para usuários de um aplicativo previdenciário, focando na acessibilidade e usabilidade para os cidadãos.`,
    video: PwaGif,
    image: PwaGif 
  },
  {
    name: "Desafios de Desenvolvimento",
    language: "Variado",
    goal: "Expandir conhecimentos e habilidades.",
    description: `Aceito desafios! Este projeto é um convite para mentes criativas que desejam inovar. Vamos desafiar os limites e criar algo único que impactem positivamente o mundo!`,
    video: SeuProjeto,
    image: SeuProjeto
  }
];

const Portfolio = ({ scrollToSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <h2>O que eu já fiz?</h2>
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
              <p>Linguagem: {project.language}</p>
              <p>{project.goal}</p>
            </div>
          </div>
        ))}
      </div>
      <div>


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
            <button className="close-button" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Portfolio;
