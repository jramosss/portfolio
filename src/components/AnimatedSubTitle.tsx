import { useEffect, useState } from 'react';

const TAILWIND_TRANSITION_DURATION = 500;
const ADJECTIVE_SWAP_INTERVAL = 10000;

function Adjective() {
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');
  const adjectives = [
    'Fullstack Software Engineer',
    'Great guy',
    'Testing Enthusiast',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentAdjectiveIndex(prev => (prev + 1) % adjectives.length);
        setFadeClass('opacity-100');
      }, TAILWIND_TRANSITION_DURATION); // Match this duration with the Tailwind transition duration
    }, ADJECTIVE_SWAP_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-3xl font-bold text-center text-blue-400/90 transition-opacity duration-${TAILWIND_TRANSITION_DURATION} ease-in-out ${fadeClass}`}>
      {adjectives[currentAdjectiveIndex]}
    </h2>
  );
}

export default function AnimatedSubTitle() {
  return (
    <section className='absolute left-1/2 transform -translate-x-1/2 top-32 -translate-y-1/2 transition-all duration-1000 ease-in-out'>
      <h2 className='flex gap-2 text-3xl font-bold text-center text-gray-400 break-words'>
        And i'm a
        <h2 className='text-3xl font-bold text-center text-blue-400/90'>
          Ssr Fullstack Software Engineer
        </h2>
      </h2>
    </section>
  );
}
