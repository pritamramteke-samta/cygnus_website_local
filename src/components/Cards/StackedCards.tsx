import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import person from '../../assets/images/person.png';
export default function StackedCards() {
  // Initial cards data based on the reference image with different bg colors
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Data Security & IT',
      subtitle: 'Data Security & IT Compliance Consulting',
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.",
      bulletPoints: [
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text ever",
      ],
      stats: {
        users: '120K+',
      },
      bgColor: '#DE5F1E',
      buttonLabel: 'Explore',
    },
    {
      id: 2,
      title: 'Risk Management',
      subtitle: 'Risk Assessment & Management Solutions',
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.",
      bulletPoints: [
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text ever",
      ],
      stats: {
        users: '95K+',
      },
      bgColor: '#00472F',
      buttonLabel: 'Explore',
    },
    {
      id: 3,
      title: 'Regulatory Compliance',
      subtitle: 'Industry Regulation Compliance Services',
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.",
      bulletPoints: [
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text",
        "Lorem ipsum has been the industry's standard dummy text ever",
      ],
      stats: {
        users: '80K+',
      },
      bgColor: '#2B8490',
      buttonLabel: 'Explore',
    },
  ]);
  // Function to handle card click
  const handleCardClick = () => {
    setCards((prevCards) => {
      // Remove first card and add it to the end
      const [firstCard, ...restCards] = prevCards;
      return [...restCards, firstCard];
    });
  };
  return (
    <div className='px-20'>
      <h1
        className='text-center mt-10 mb-10'
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontSize: '56px',
          lineHeight: '67px',
          color: '#001C12',
        }}
      >
        Industry Challenges in Achieving <br />
        Regulatory and Operational
        <br />
        Excellence
      </h1>
      <div className='flex items-center justify-center w-full h-screen '>
        <div className='relative w-full h-130'>
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCards((prevCards) => {
                const lastCard = prevCards[prevCards.length - 1];
                const rest = prevCards.slice(0, -1);
                return [lastCard, ...rest];
              })
            }
            className='absolute top-1/2 left-4 transform -translate-y-1/2 z-50 p-2 rounded-full text-white shadow-md transition-all hover:bg-white'
            style={{ backgroundColor: cards[0]?.bgColor }}
          >
            <IconChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleCardClick}
            className='absolute top-1/2 right-1 transform -translate-y-1/2 z-50 p-2 rounded-full text-white shadow-md transition-all hover:bg-white'
            style={{ backgroundColor: cards[0]?.bgColor }}
          >
            <IconChevronRight size={24} />
          </button>

          <AnimatePresence mode='popLayout'>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`absolute rounded-xl shadow-lg text-white w-full h-144`}
                style={{
                  backgroundColor: card.bgColor,
                  cursor: index === 0 ? 'pointer' : 'default',
                }}
                initial={
                  index === cards.length - 1
                    ? {
                        top: -100,
                        left: 0,
                        zIndex: cards.length - index,
                        scale: 1 - index * 0.05,
                        opacity: 0,
                      }
                    : {
                        top: -(index * 40),
                        left: 0,
                        zIndex: cards.length - index,
                        scale: 1 - index * 0.05,
                        opacity: 1 - index * 0.2,
                      }
                }
                animate={{
                  top: -(index * 40),
                  left: 0,
                  zIndex: cards.length - index,
                  scale: 1 - index * 0.05,
                  opacity: 1 - index * 0.2,
                }}
                exit={{
                  top: -100,
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.3 }}
                onClick={index === 0 ? handleCardClick : undefined}
              >
                <div className='flex flex-row h-full'>
                  <div className='w-1/2 p-6 relative flex items-center justify-center'>
                    <div className='absolute top-6 left-6 bg-white text-black rounded-full p-3 text-sm flex items-center z-10'>
                      <div className='flex -space-x-2 mr-2'>
                        <div className='w-8 h-8 rounded-full bg-gray-300 border border-white'></div>
                        <div className='w-8 h-8 rounded-full bg-gray-400 border border-white'></div>
                        <div className='w-8 h-8 rounded-full bg-gray-500 border border-white'></div>
                      </div>
                      <span className='font-semibold text-base'>
                        {card.stats.users}
                      </span>
                      <span className='ml-1 text-gray-500 text-sm'>
                        Active users
                      </span>
                    </div>
                    {/* Larger image centered in the left half */}
                    <div className='flex items-center justify-center w-full h-full p-8'>
                      <div className='bg-white bg-opacity-20 rounded-xl flex items-center justify-center w-full h-full max-w-md max-h-md'>
                        <img
                          src={person}
                          alt='Feature illustration'
                          className='rounded-lg w-64 h-64 object-cover'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 p-8'>
                    <div className='inline-block px-4 py-2 border-2 border-white rounded-full bg-opacity-20  text-lg mb-4'>
                      {card.title}
                    </div>
                    <h2 className='text-4xl font-bold mb-6'>{card.subtitle}</h2>
                    <p className='text-xl mb-8 text-white text-opacity-90'>
                      {card.description}
                    </p>
                    <ul className='space-y-5 mb-3'>
                      {card.bulletPoints.map((point, i) => (
                        <li key={i} className='flex items-start text-xl'>
                          <svg
                            className='w-6 h-6 mt-1 mr-4 text-white'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                          >
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button
                      className='px-8 py-4 border-2 border-white rounded-full bg-transparent hover:bg-white hover:bg-opacity-10 text-white text-xl font-medium transition-colors'
                      style={{ backgroundColor: card.bgColor }}
                    >
                      {card.buttonLabel}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
