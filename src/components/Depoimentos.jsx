import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Depoimentos.css';

/* Conteúdo dos depoimentos em diferentes idiomas */
const TESTIMONIALS_CONTENT = {
  'pt-br': [
    {
      name: "RevisaPrev",
      rating: "★★★★★",
      text: "Murilo é um verdadeiro gênio! Sua abordagem inovadora e criativa para resolver problemas complexos fez uma grande diferença no meu projeto. Ele sempre traz soluções inesperadas que superam as expectativas. Estou completamente satisfeito com o resultado!",
    },
    {
      name: "Fabrica 1",
      rating: "★★★★★",
      text: "Desde o primeiro contato, ficou claro que Murilo não é apenas um excelente profissional, mas também uma pessoa empática e atenciosa. Ele se dedicou a entender as minhas necessidades e ofereceu um serviço personalizado que realmente fez a diferença. Sou muito grato!",
    },
    {
      name: "Usuários Pxg BOT",
      rating: "★★★★★",
      text: "Murilo é um exemplo de comprometimento e profissionalismo. Ele realmente se importa com o sucesso de seus clientes e faz questão de entregar resultados de alta qualidade. A dedicação que ele demonstrou neste projeto foi inspiradora e valeu cada segundo investido. Muito obrigado!",
    },
    {
      name: "Jetchat",
      rating: "★★★★★",
      text: "Recomendo com paz de espírito e confiança. Murilo é maravilhoso, no carinho do atendimento, na didática das explicações, na rapidez impressionante com que meus projetos foram entregues. Valeu cada centavo pago pelo serviço dele! Deus abençoe a sua jornada!",
    },
  ],
  'eng': [
    {
      name: "RevisaPrev",
      rating: "★★★★★",
      text: "Murilo is a true genius! His innovative and creative approach to solving complex problems made a huge difference in my project. He always brings unexpected solutions that exceed expectations. I am completely satisfied with the result!",
    },
    {
      name: "Fabrica 1",
      rating: "★★★★★",
      text: "From the first contact, it was clear that Murilo is not only an excellent professional, but also an empathetic and attentive person. He was dedicated to understanding my needs and offered a personalized service that truly made a difference. I am very grateful!",
    },
    {
      name: "Pxg BOT Users",
      rating: "★★★★★",
      text: "Murilo is an example of commitment and professionalism. He genuinely cares about his clients' success and ensures high-quality results. The dedication he showed on this project was inspiring and worth every second invested. Thank you so much!",
    },
    {
      name: "Jetchat",
      rating: "★★★★★",
      text: "I recommend him with peace of mind and confidence. Murilo is wonderful, from his attentive service, the clarity of his explanations, and the impressive speed with which my projects were delivered. Every cent paid for his service was worth it! God bless your journey!",
    },
  ],
};

/* Cabeçalhos para diferentes idiomas */
const HEADINGS = {
  'pt-br': {
    title: 'O que dizem sobre?', // Título em português
    background: 'DEPOIMENTOS', // Texto de fundo em português
  },
  eng: {
    title: 'What do they say?', // Título em inglês
    background: 'TESTIMONIALS', // Texto de fundo em inglês
  },
};

/* Componente principal dos depoimentos */
const Depoimentos = ({ language }) => {
  /* Configurações do carrossel de depoimentos */
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  /* Seleciona os depoimentos e cabeçalho com base no idioma */
  const testimonials = TESTIMONIALS_CONTENT[language]; 
  const heading = HEADINGS[language].title; 
  const background = HEADINGS[language].background; 

  return (
    <>
      <div className='ContainerDepoimentos'>
        {/* Adiciona o texto de fundo dinamicamente com base no idioma */}
        <h2 data-background={background}>{heading}</h2>
        <div className='Carrossel'>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='reviewContainer'>
                <h3>{testimonial.name}</h3>
                <div className="stars">{testimonial.rating}</div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>        
      </div>
    </>
  );
};

export default Depoimentos;
