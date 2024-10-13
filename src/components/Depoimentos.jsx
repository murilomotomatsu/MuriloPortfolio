import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Depoimentos.css'

const Depoimentos = () => {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,


  };

  return (
    <>
      <div className='ContainerDepoimentos'>
        <h2 style={{marginTop:'15%'}}>O que dizem sobre?</h2>
        <div className='Carrossel'>
          <Slider {...settings}>
            <div className='reviewContainer'>
              <h3>RevisaPrev</h3>
              <div className="stars">★★★★★</div>
              <p>Murilo é um verdadeiro gênio! Sua abordagem inovadora e criativa para resolver problemas complexos fez uma grande diferença no meu projeto. Ele sempre traz soluções inesperadas que superam as expectativas. Estou completamente satisfeito com o resultado!</p>
            </div>
            <div className='reviewContainer'>
              <h3>Fabrica 1</h3>
              <div className="stars">★★★★★</div>
              <p>Desde o primeiro contato, ficou claro que Murilo não é apenas um excelente profissional, mas também uma pessoa empática e atenciosa. Ele se dedicou a entender as minhas necessidades e ofereceu um serviço personalizado que realmente fez a diferença. Sou muito grato!</p>
            </div>
            <div className='reviewContainer'>
              <h3>Usuários Pxg BOT</h3>
              <div className="stars">★★★★★</div>
              <p>Murilo é um exemplo de comprometimento e profissionalismo. Ele realmente se importa com o sucesso de seus clientes e faz questão de entregar resultados de alta qualidade. A dedicação que ele demonstrou neste projeto foi inspiradora e valeu cada segundo investido. Muito obrigado!</p>
            </div>
            <div className='reviewContainer'>
              <h3>Jetchat</h3>
              <div className="stars">★★★★★</div>
              <p>Recomendo com paz de espírito e confiança. Murilo é maravilhoso, no carinho do atendimento, na didática das explicações, na rapidez impressionante com que meus projetos foram entregue. Valeu cada centavo pago pelo serviço dele! Deus abençoe a sua jornada!</p>
            </div>
          </Slider>
        </div>        
      </div>
    </>
  );
};

export default Depoimentos;
