import { createContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      title: 'Tech Conference 2023',
      image: `${process.env.PUBLIC_URL}/tconf.jpg`,
      description: 'Join industry leaders for cutting-edge tech discussions. Topics include AI, Blockchain, and Quantum Computing.',
    },
    {
      title: 'Code Masters Hackathon',
      image: `${process.env.PUBLIC_URL}/hack.jpg`,
      description: '24-hour coding marathon. Develop innovative solutions for real-world problems. ₹50,000 in prizes!',
    },
    {
      title: 'AI Masterclass Workshop',
      image: `${process.env.PUBLIC_URL}/ai.jpg`,
      description: 'Hands-on sessions on Machine Learning and Neural Networks. Perfect for beginners to advanced learners.',
    },
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;