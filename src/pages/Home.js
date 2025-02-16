import Hero from '../components/Hero';
import Features from '../components/Features';
import EventCategories from '../components/EventCategories';
import Footer from '../components/Footer';
import EventPromo from '../components/EventPromo';

const Home = () => (
  <div className=''>
    <Hero />
    <div className="container">
      <Features />
      <EventCategories />
      <EventPromo/>
    </div>
    <Footer />
  </div>
);

export default Home;