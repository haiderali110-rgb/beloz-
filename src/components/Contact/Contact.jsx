import React, { useState } from 'react';
import './Contact.scss';
const MainSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    comments: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; 
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  const contactCards = [
    {
      id: 1,
      image: "images/HeadOffice1111.png",
      title: "Head Office",
      description: "Call us to speak to a member of our team. We are always happy to help."
    },
    {
      id: 2,
      image: "images/Callus22.png",
      title: "Call us",
      description: "Call us to speak to a member of our team. We are always happy to help."
    },
    {
      id: 3,
      image: "images/Emails33.png",
      title: "Email us",
      description: "Email us for general queries, including marketing and partnership opportunities."
    }
  ];

  return (
    <div className="main-section">
       
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Contact Us <br />
            </h1>
            <p className="hero-description">
              The center for certified and seasoned medical, legal, educational and community
              interpreters who prioritize adherence to standard practices, cultural sensitivity and
              customer-focus approach
            </p>
          </div>
        </div>
      </div>

     
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            
            <div className="contact-form">
              <div className="form-header">
                <h2 className="form-title">Get in Contact with Beloz</h2>
                <p className="form-subtitle">
                  Connect with Beloz today for seamless communication
                  <br />
                  solutions. Your language partner is just a click away.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-textarea">
                  <textarea
                    name="comments"
                    placeholder="Comments (Optional)"
                    value={formData.comments}
                    onChange={handleChange}
                    className="form-textarea-field"
                  ></textarea>
                </div>

                <div className="form-footer">
                  <div className="consent-container">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="consent-checkbox"
                    />
                    <label htmlFor="consent" className="consent-label">
                      I want to protect my data by signing an NDA.
                    </label>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

             
            <div className="office-hours">
              <div className="hours-content">
                <h2 className="hours-title">Our Office Hours</h2>
                <p className="hours-subtitle">When to Reach Us: Office Hours and Contact Information</p>
                
                <div className="hours-schedule">
                  <div className="hours-item">
                    <span>Monday to Friday</span>
                    <span>6:00 am – 6:00 pm</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday & Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="hours-image">
                <img src="images/businessman-his-office-holding-clock 1.png" alt="Office Hours" />
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="get-in-touch">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="contact-cards">
            {contactCards.map(card => (
              <div key={card.id} className="contact-card">
                <img src={card.image} alt={card.title} className="card-icon" />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;