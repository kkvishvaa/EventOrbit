import '../styles/EventCard.css';
const EventCard = ({ title, image, description, onRegister }) => (
    <div className="event-card">
      <img src={image} className="event-image" alt={title} />
      <div className="event-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="event-btn" onClick={onRegister}>
          Register Now
        </button>
      </div>
    </div>
  );
  
  export default EventCard;