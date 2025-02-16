import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FaCalendarAlt, FaPhoneAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  return(
    <footer>
            <p>
        <FaCalendarAlt className="footer-icon" /> <a onClick={() => navigate('/events')}> Upcoming Events</a> | 
        <FaPhoneAlt className="footer-icon" /> <a> Contact Us</a>   
       
      </p>

      <p>© 2025 EventOrbit. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook"><FaFacebookF /></a>
        <a href="https://www.twitter.com"  target="_blank" rel="noopener noreferrer" className="icon twitter"><FaXTwitter /></a>
        <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer" className="icon instagram"><FaInstagram /></a>
      </div>
    </footer>
    );
};

export default Footer;
