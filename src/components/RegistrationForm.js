import { useState } from 'react';
import '../styles/RegistForm.css';

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    usn: '',
    college: '',
    department: '',
    selectedEvent: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({  
      name: '',
      email: '',
      phone: '',
      usn: '',
      college: '',
      department: '',
      selectedEvent: ''
    });
  };

  return (
    <div className="form-container">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit} className="form-grid">
        <input type="text" id="name" placeholder="Full Name" required 
          value={formData.name} onChange={handleInputChange} />
        <input type="email" id="email" placeholder="Email Address" required 
          value={formData.email} onChange={handleInputChange} />
        <input type="text" id="phone" placeholder="Phone Number" required 
          value={formData.phone} onChange={handleInputChange} />
        <input type="text" id="usn" placeholder="University Seat Number (USN)" required 
          value={formData.usn} onChange={handleInputChange} />
        <input type="text" id="college" placeholder="College Name" required 
          value={formData.college} onChange={handleInputChange} />
        <input type="text" id="department" placeholder="Department" required 
          value={formData.department} onChange={handleInputChange} />
        <button type="submit">Generate QR Code</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
