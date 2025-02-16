import { useState, useContext } from 'react';
import EventCard from '../components/EventCard';
import RegistrationForm from '../components/RegistrationForm';
import QRCode from '../components/QRCode';
import Footer from '../components/Footer';
import EventContext from '../context/EventContext';

const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const { events } = useContext(EventContext);

  return (
    <div>
      <div className="container">
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={index} {...event} 
              onRegister={() => {
                setSelectedEvent(event); 
                setShowForm(true);
              }} 
            />
          ))}
        </div>

        {showForm && (
          <RegistrationForm onSubmit={(data) => {
            setFormData({ ...data, selectedEvent }); 
            setShowQR(true);
          }} />
        )}

        {showQR && <QRCode data={formData} />}
      </div>
      <Footer />
    </div>
  );
};

export default Events;