import { FaTheaterMasks, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/EventCatg.css';

const EventCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="section">
      
      <h2 data-aos="fade-up">Event Categories</h2>

      <div className="event-categories">
        <CategoryCard 
          icon={<FaTheaterMasks />} 
          title="Cultural Fiestas" 
          text="Dance, music, and artistic competitions"
          animation="fade-right"
        />
        <CategoryCard 
          icon={<FaLaptopCode />} 
          title="Tech Showdowns" 
          text="Hackathons, coding challenges, AI battles"
          animation="zoom-in"
        />
        <CategoryCard 
          icon={<FaBrain />} 
          title="Skill Workshops" 
          text="Career talks, expert sessions, bootcamps"
          animation="fade-left"
        />
      </div>
    </section>
  );
};

const CategoryCard = ({ icon, title, text, animation }) => (
  <div className="category-card" data-aos={animation}>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default EventCategories;
