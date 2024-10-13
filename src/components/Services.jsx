import React, { useState } from 'react';
import './Services.css';

const SERVICES_CONTENT = {
  'pt-br': [
    {
      title: "Soluções de Automação",
      description: "Eficiência automatizada total",
      progress: 100,
    },
    {
      title: "Assistente Virtual",
      description: "Fluxos automáticos instantâneos",
      progress: 100,
    },
    {
      title: "Desenvolvimento de Apps",
      description: "Funcionalidade ágil e acessível",
      progress: 90,
    },
    {
      title: "Design de Sites",
      description: "Estética simples e eficaz",
      progress: 80,
    },
    {
      title: "Experiência do Usuário",
      description: "Interface intuitiva e envolvente",
      progress: 75,
    },
    {
      title: "Inteligência Artificial",
      description: "Algoritmos de aprendizado profundo",
      progress: 70,
    },
  ],
  eng: [
    {
      title: "Automation Solutions",
      description: "Total automated efficiency",
      progress: 100,
    },
    {
      title: "Virtual Assistant",
      description: "Instant automated workflows",
      progress: 100,
    },
    {
      title: "App Development",
      description: "Agile and accessible functionality",
      progress: 90,
    },
    {
      title: "Website Design",
      description: "Simple and effective aesthetics",
      progress: 80,
    },
    {
      title: "User Experience",
      description: "Intuitive and engaging interface",
      progress: 75,
    },
    {
      title: "Artificial Intelligence",
      description: "Deep learning algorithms",
      progress: 70,
    },
  ],
};

const HEADINGS = {
  'pt-br': {
    title: 'O que eu posso fazer?',
    background: 'SERVIÇOS', // Background text for Portuguese
  },
  eng: {
    title: 'What can I do?',
    background: 'SERVICES', // Background text for English
  },
};

const Services = ({ language }) => {

  const services = SERVICES_CONTENT[language]; // Select content based on the language
  const heading = HEADINGS[language].title;
  const background = HEADINGS[language].background;

  return (
    <div className="services-container">
      <h2 data-background={background}>{heading}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <div
              className="service-progress-fill"
              style={{ width: `${service.progress}%` }}
            ></div>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-progress-text">{service.progress}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
