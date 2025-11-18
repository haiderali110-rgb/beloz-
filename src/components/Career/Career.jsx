import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Career.scss';

const Career = () => {
  return (
    <div className="career-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Join Our Team <br />
              </h1>
              <p className="hero-description">
                Reliable and instant language solutions at your fingertips that ensure seamless
                communication for healthcare, businesses, and more.
              </p>
              <button className="primary-button">Get Started</button>
            </div>
          </div>
        </section>
        
        {/* Why Join Section */}
        <section className="why-join-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Why Join Us?</h1>
            </div>
            
            <div className="benefits-grid">
              {/* Benefit Card 1 */}
              <div className="benefit-card">
                <img src="/images/Inclusive Workplace111.png" alt="Inclusive Workplace" className="benefit-icon" />
                <h2 className="benefit-title">
                  Inclusive <br />Workplace
                </h2>
                <p className="benefit-description">
                  We boast an inclusive <br />
                  workplace culture that <br /> celebrates diversity and <br /> values each
                  individual's <br /> unique perspectives and <br /> contributions.
                </p>
              </div>
              
              {/* Benefit Card 2 */}
              <div className="benefit-card">
                <img src="/images/Ample Growth Opportunities22.png" alt="Ample Growth Opportunities" className="benefit-icon" />
                <h2 className="benefit-title">
                  Ample Growth <br /> Opportunities
                </h2>
                <p className="benefit-description">
                  We foster professional <br />
                  development and personal <br /> advancement <br /> opportunities
                  through <br /> training programs and <br /> mentorship initiatives.
                </p>
              </div>
              
              {/* Benefit Card 3 */}
              <div className="benefit-card">
                <img src="/images/Community Impact33.png" alt="Community Impact" className="benefit-icon" />
                <h2 className="benefit-title">
                  Community <br /> Impact
                </h2>
                <p className="benefit-description">
                  We promote <br /> understanding and
                  unity <br /> through effective <br /> communication, which <br />
                  leaves a tangible impact on <br /> communities we serve
                </p>
              </div>
              
              {/* Benefit Card 4 */}
              <div className="benefit-card">
                <img src="/images/Frame 1321317155.png" alt="Client Focus" className="benefit-icon" />
                <h2 className="benefit-title">
                  Client <br /> Focus
                </h2>
                <p className="benefit-description">
                  Our unwavering client <br /> focus
                  ensures that every <br /> interaction is tailored to <br /> meet their
                  needs, <br /> fostering strong <br /> relationships and trust
                </p>
              </div>
            </div>
          </div>
        </section>
        
       
        <section className="application-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">
                Streamlined <br /> Application Procedure
              </h1>
              <p className="section-description">Please share your contact information with us so we can get in touch with you promptly</p>
            </div>
            
            <div className="application-content">
           
              <div className="application-form">
                <form>
                  <div className="form-row">
                    <input type="text" placeholder="First Name" required className="form-input" />
                    <input type="email" placeholder="Email" required className="form-input" />
                  </div>
                  
                  <div className="form-row">
                    <input type="tel" placeholder="Phone Number" required className="form-input full-width" />
                  </div>
                  
                  <div className="form-row">
                    <textarea placeholder="Comments (Optional)" className="form-textarea"></textarea>
                  </div>
                  
                  <div className="form-row">
                    <label htmlFor="cv" className="file-label">Attach your CV</label>
                    <input type="file" id="cv" accept=".doc,.docx,.pdf,.ppt,.pptx" className="file-input" />
                    <p className="file-note">File Size: max 3 MB</p>
                  </div>
                  
                  <div className="form-row checkbox-row">
                    <input type="checkbox" id="consent" required className="checkbox" />
                    <label htmlFor="consent" className="checkbox-label">I agree to the analysis of my personal data.</label>
                  </div>
                  
                  <div className="form-row">
                    <button className="submit-button">Send Your CV</button>
                  </div>
                </form>
              </div>
              
             
              <div className="contact-info">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-description">
                  We're here to answer your questions and assist you in any way we can. Feel
                  free to reach out to us through the following channels.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">info@beloz.net</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4 className="contact-label">Phone Number</h4>
                    <p className="contact-value">+1 (502) 333-2475</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4 className="contact-label">Our Address</h4>
                    <p className="contact-value">4801 Southside Dr. Louisville, KY 40214</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;