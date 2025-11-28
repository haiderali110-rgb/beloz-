 

import React from 'react';
// import Header from '../common/Header';
// import Footer from '../common/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      
        {/* <Header /> */}
     
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-with-bg">The Bridge to</span><br />
                <span className="title-highlight">Intercultural</span><br />
                Communication Starts Here
              </h1>
              <p className="hero-description">
                We provide high-quality interpreting and translation services to ensures
                seamless and effective communication between LEP individuals and service
                providers, businesses and consumers.
              </p>
              <div className="hero-button-container">
                <button className="primary-button">Get Started</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/main 1 img.png" alt="Interpreting Services" />
            </div>
          </div>
        </div>
      </section>
       
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-card">
              <h1 className="section-title">Our Mission</h1>
              <p className="mission-description">
                With the vision of becoming the global leading company in the industry, our mission is to
                catalyze intercultural communication by offering customized language solutions that
                surpass linguistic barriers, through a global network of professional interpreters and
                translators who share a common commitment to the client-centric approach.
              </p>
            </div>
            <div className="mission-image">
              <img src="/images/Rectangle 37.png" alt="Mission" />
            </div>
          </div>
        </div>
      </section>
       
      <section className="services-section">
        <div className="container">
          <h1 className="section-title">Language Services</h1>
          
          <div className="services-grid">
            
            <div className="service-card">
              <img src="/images/Frame 1321317141.png" alt="Professional Translation" className="service-icon" />
              <h2 className="service-title">Professional <br /> Translation</h2>
              <p className="service-description">
                Our dedicated team of translators ensures precision and cultural sensitivity in all
                translations we undertake, be it documents, audios, websites, or marketing materials.
              </p>
            </div>
            
             
            <div className="service-card">
              <img src="/images/Frame 1321317140.png" alt="Interpretation Solutions" className="service-icon" />
              <h2 className="service-title">Interpretation <br /> Solutions</h2>
              <p className="service-description">
                Real-time language assistance: Our interpreters bridge communication gaps in meetings,
                conferences, and conversations with tailored on-site and remote services.
              </p>
            </div>
            
             
            <div className="service-card">
              <img src="/images/Frame 1321317143.png" alt="Localization Expertise" className="service-icon" />
              <h2 className="service-title">Localization <br /> Expertise</h2>
              <p className="service-description">
                Global Expansion Made Easy: Our localization services adapt your content, software, and
                websites to engage diverse audiences, connecting you with customers worldwide.
              </p>
            </div>
            
             
            <div className="service-card">
              <img src="/images/Frame 1321317142.png" alt="Multilingual Content Creation" className="service-icon" />
              <h2 className="service-title">Multilingual <br /> Content Creation</h2>
              <p className="service-description">
                Elevate Your Global Presence: Our multilingual content creation services craft culturally
                relevant content in multiple languages, ensuring resonance with diverse global audiences.
              </p>
            </div>
            
       
            <div className="service-card">
              <img src="/images/Frame 1321317145.png" alt="Language Consultation" className="service-icon" />
              <h2 className="service-title">Language <br /> Consultation</h2>
              <p className="service-description">
                Starting Out? Our language experts offer consultation services, guiding you through global
                communication complexities, from language strategy to market research.
              </p>
            </div>
            
             
            <div className="service-card">
              <img src="/images/Frame 1321317143.png" alt="Quality Assurance" className="service-icon" />
              <h2 className="service-title">Quality <br /> Assurance</h2>
              <p className="service-description">
                Serious About Quality: Our stringent quality assurance processes ensure the highest
                standards across all language services. Your satisfaction and success come first.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h1 className="cta-title">
                Explore Our <br /> Language Solutions
              </h1>
              <p className="cta-description">
                Discover the full range of our language services and find the perfect
                solution to meet your global communication goals.
              </p>
              <button className="secondary-button">Contact Us</button>
            </div>
            <div className="cta-image">
              <img src="/images/smiling-woman-headset-presentation-something 1.png" alt="Smiling Woman with Headset" />
            </div>
          </div>
        </div>
      </section>
      
     
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              BELOZ Impact in <br /> Our Community
            </h1>
            <p className="section-description">
              At BELOZ, we're dedicated to fostering positive community change,
              building inclusivity, and creating a thriving, stronger society.
            </p>
          </div>
          
          <div className="impact-grid">
          
            <div className="impact-card">
              <img src="/images/Frame 1321317146.png" alt="Bridging Gaps" className="impact-icon" />
              <h2 className="impact-title">Bridging Gaps, <br /> Changing Lives</h2>
              <p className="impact-description">
                With every word translated, we pave the way for understanding, inclusion, safety
                and growth within our community. Together we transcend language barriers.
              </p>
            </div>
            
            
            <div className="impact-card">
              <img src="/images/Frame 1321317148.png" alt="Inspiring Wellness" className="impact-icon" />
              <h2 className="impact-title">Inspiring Wellness <br />Through Words</h2>
              <p className="impact-description">
                Through culturally sensitive interpretations, we empower healthcare providers
                to communicate with LEP patients effectively, fostering trust and healing.
              </p>
            </div>
            
     
            <div className="impact-card">
              <img src="/images/Frame 1321317149.png" alt="Empowering LEP Students" className="impact-icon" />
              <h2 className="impact-title">Empowering <br />LEP Students</h2>
              <p className="impact-description">
                Through customized interpreting and translation services, we champion the
                potentials and amplify LEP students' developmental and academic success.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* <Footer /> */}
    </div>
  );
}

export default Home;