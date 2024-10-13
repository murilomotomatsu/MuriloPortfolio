import React, { useState } from 'react';
import './Services.css';


const services = [
  {
    title: "Soluções de Automação",
    description: "Eficiência automatizada total",
    progress: 100
  },
  {
    title: "Assistente Virtual",
    description: "Fluxos automáticos instantâneos",
    progress: 100
  },
  {
    title: "Desenvolvimento de Apps",
    description: "Funcionalidade ágil e acessível",
    progress: 90
  },
  {
    title: "Design de Sites",
    description: "Estética simples e eficaz",
    progress: 80
  },
  {
    title: "Experiência do Usuário",
    description: "Interface intuitiva e envolvente",
    progress: 75
  },
  {
    title: "Inteligência Artificial",
    description: "Algoritmos de aprendizado profundo",
    progress: 70
  }
];
const Services = ({ scrollToSection }) => {
  const [selectedService, setSelectedService] = useState(null);


  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h2>O que eu posso fazer?</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" >
            <div
              className="service-progress-fill"
              style={{ width: `${service.progress}%` }}
            ></div>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-progress-text">
              {service.progress}%
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="description-container">
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
            </div>
            <button className="close-button" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
      
    </div>
  );
};


export default Services;
