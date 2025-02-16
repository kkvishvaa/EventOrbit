import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiCheckCircle } from 'react-icons/bi';
import '../styles/EventPromo.css';

const EventPromo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-900 to-teal-900 p-6">
      <div className="promo-container glass-card max-w-2xl text-center p-8 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-extrabold" data-aos="fade-down">
          Hosting an Event? We’ve Got You Covered!
        </h2>
        <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
          Make your event big, bold, and unforgettable with our smart event management system.
        </p>
        <ul className="mt-6 space-y-4 text-lg text-left mx-auto max-w-lg">
          {[
            {
              text: 'Easy Event Listings',
              desc: 'Post your event in minutes & attract more participants.',
              delay: '300'
            },
            {
              text: 'Automated Registrations',
              desc: 'No manual tracking, no last-minute stress.',
              delay: '400'
            },
            {
              text: 'Real-Time Insights',
              desc: 'Know who’s in, track engagement, and maximize attendance.',
              delay: '500'
            }
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-md"
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <BiCheckCircle className="text-green-400 text-3xl" />
              <span className="font-medium">
                {item.text} – <span className="text-gray-300">{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-semibold text-2xl italic" data-aos="zoom-in">
          More Reach. More Fun. Less Work.
        </p>
      </div>
    </div>
  );
};

export default EventPromo;