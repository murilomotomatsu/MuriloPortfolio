import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';
import './Inicio.css';
import ChevronDown from '../assets/images/vectorChevronDown.svg';

// Constants
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
  VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
  new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(() => getRandChar());

const getMutatedStream = stream => {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
};

const RainStream = props => {
  const [stream, setStream] = useState(getRandStream());
  const [topPadding, setTopPadding] = useState(stream.length * -50);
  const [intervalDelay, setIntervalDelay] = useState(null);

  useEffect(() => {
    // Start the streams after a random delay
    setTimeout(() => {
      setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
    }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
  }, []);

  useInterval(() => {
    if (!props.height || !intervalDelay) return;

    const windowHeight = window.innerHeight; // Limita ao tamanho da tela

    // Verifica se atingiu o limite da primeira dobra da tela
    if (topPadding > windowHeight) {
      setStream([]);
      const newStream = getRandStream();
      setStream(newStream);
      setTopPadding(newStream.length * -44);
      setIntervalDelay(null);
      setTimeout(
        () =>
          setIntervalDelay(
            getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
          ),
        getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
      );
    } else {
      setTopPadding(topPadding + 44); // Continua descendo até atingir a dobra
    }

    setStream(getMutatedStream);
  }, intervalDelay);

  return (
    <div
      className="rain-stream"
      style={{
        marginTop: topPadding,
      }}>
      {stream.map((char, index) => (
        <a
          key={index}
          className={`rain-char ${index < 6 ? 'dimmed' : ''} ${
            index === stream.length - 1 ? 'brightened' : ''
          }`}>
          {char}
        </a>
      ))}
    </div>
  );
};
const TEXTS = [
  'Desafie o óbvio, crie o surpreendente',
  'Questione limites, reinvente o extraordinário.',
  'Quebre padrões, construa o inovador.',
  'Simplifique o complexo, conquiste o impossível.',
  'Supere expectativas, alcance o memorável.',
  'Reimagine o desconhecido, crie o inédito.',
  'Desconstrua a rotina, descubra o impressionante.',
];

// Função para obter um índice aleatório do array de textos
const getRandomIndex = (length) => Math.floor(Math.random() * length);

const CentralText = () => {
  const [displayedText, setDisplayedText] = useState(''); 
  const [textIndex, setTextIndex] = useState(getRandomIndex(TEXTS.length)); // Começa com uma frase aleatória
  const [isDeleting, setIsDeleting] = useState(false); 
  const [charIndex, setCharIndex] = useState(0); // Índice do caractere na frase
  const [intervalDelay, setIntervalDelay] = useState(60);

  useInterval(() => {
    const currentText = TEXTS[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      // Mostrar mais um caractere
      setDisplayedText((prev) => prev + currentText[charIndex]);
      setCharIndex((prev) => prev + 1);
    } else if (isDeleting && charIndex > 0) {
      // Apagar um caractere
      setDisplayedText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Quando o texto estiver completamente exibido, esperar um pouco e começar a apagar
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && charIndex === 0) {
      // Quando o texto estiver completamente apagado, passar para o próximo texto
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TEXTS.length); // Loop infinito pelas frases
    }

    // Ajustar o intervalo de acordo com a ação
    setIntervalDelay(isDeleting ? 30 : 60);
  }, intervalDelay);

  // Substituir quebras de linha por <br />
  const formattedText = displayedText.replace(/\n/g, '<br />');

  return (
    <div
      className="central-text"
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};



const getNextSection = (currentSection) => {
  const sections = ['inicio', 'sobre-mim', 'o-que-faco', 'portfolio', 'depoimentos', 'contato'];
  const currentIndex = sections.indexOf(currentSection);
  return sections[(currentIndex + 1) % sections.length];
};

const isLastSection = (currentSection) => currentSection === 'contato';

const Inicio = ({ scrollToSection }) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

  return (
    <>
      <div className="matrix-rain-container" ref={containerRef}>
        {new Array(streamCount).fill().map((_, index) => (
          <RainStream key={index} height={containerSize?.height} />
        ))}
        <div className="central-text-container">
          <CentralText />
        </div>
        <img
          src={ChevronDown}
          alt="Chevron"
          className={`chevron-icon ${isLastSection(currentSection) ? 'rotate' : ''}`}
          onClick={() => scrollToSection(getNextSection(currentSection))}
        />
      </div>
    </>
  );
};

export default Inicio;
