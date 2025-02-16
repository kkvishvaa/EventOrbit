import { FaCalendarAlt, FaTrophy, FaUsers } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Features.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="section">
      <h2 data-aos="fade-up">Why Choose EventOrbit?</h2>
      <div className="features-grid">
        <FeatureCard 
          icon={<FaCalendarAlt />} 
          title="Track Every Event" 
          text="Never miss important updates with our centralized event calendar" 
          animation="fade-right"
        />
        <FeatureCard 
          icon={<FaTrophy />} 
          title="Earn Rewards" 
          text="Build your profile with certificates and achievement badges" 
          animation="zoom-in"
        />
        <FeatureCard 
          icon={<FaUsers />} 
          title="Connect & Collaborate" 
          text="Find teammates and create unforgettable memories" 
          animation="fade-left"
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, text, animation }) => (
  <div className="feature-card" data-aos={animation}>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Features;
