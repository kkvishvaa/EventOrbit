import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventContext from '../context/EventContext';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HostEvents.css';

const HostEvents = () => {
  const navigate = useNavigate();
  const { addEvent } = useContext(EventContext);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    category: '',
    organizer: '',
    contactEmail: '',
    image: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: formData.title,
      description: formData.description,
      image: formData.image || `${process.env.PUBLIC_URL}/default-event.jpg`,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      category: formData.category,
      organizer: formData.organizer,
      contactEmail: formData.contactEmail,
    };

    addEvent(newEvent);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/events');
    }, 3000);
  };

  return (
    <div>
      <div className="host-events-page">
        <div className="container" data-aos="fade-up">
          <h1 data-aos="zoom-in">Host a New Event</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="event-form">
              <div className="form-group" data-aos="fade-right">
                <label>Event Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>

              <div className="form-group" data-aos="fade-left">
                <label>Event Description:</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} required rows="4" />
              </div>

              <div className="form-row">
                <div className="form-group" data-aos="fade-right">
                  <label>Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                </div>

                <div className="form-group" data-aos="fade-left">
                  <label>Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="form-group" data-aos="zoom-in">
                <label>Venue</label>
                <input type="text" name="venue" value={formData.venue} onChange={handleInputChange} required />
              </div>

              <div className="form-row">
                <div className="form-group" data-aos="fade-right">
                  <label>Category:</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} required>
                    <option value="">Select Category</option>
                    <option value="tech">Tech</option>
                    <option value="cultural">Cultural</option>
                    <option value="workshop">Workshop</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>

                <div className="form-group" data-aos="fade-left">
                  <label>Organizer Name</label>
                  <input type="text" name="organizer" value={formData.organizer} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="form-group" data-aos="flip-up">
                <label>Contact Email</label>
                <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} required />
              </div>

              <div className="form-group" data-aos="flip-down">
                <label>Event Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>

              <button type="submit" className="btn" data-aos="zoom-in">
                Submit Event
              </button>
            </form>
          ) : (
            <div className="submission-success" data-aos="fade-up">
              <h2>🎉 Event Submitted Successfully!</h2>
              <p>You'll be redirected to the events page shortly...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostEvents;