import { FaCalendarAlt, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
      
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          EventOrbit - Where College Life Comes Alive!
        </motion.h1>

        <motion.p 
          className="lead"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          One Platform. Endless Opportunities.
        </motion.p>

        <div className="cta-buttons">
          
          <motion.button
            className="btn"
            onClick={() => navigate('/events')}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <FaCalendarAlt /> Explore Events
          </motion.button>

        
          <motion.button
            className="btn"
            onClick={() => navigate('/host-events')}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            <FaMicrophone /> Host Event
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
