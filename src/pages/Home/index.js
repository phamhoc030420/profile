import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import logo from '../../assets/image/a.jpg';
import logo1 from '../../assets/image/b.jpg';
import logo2 from '../../assets/image/c.jpg';
import './home.scss';
import About from '../HomeCard/about';
import Skill from '../HomeCard/skill';
import Contact from '../HomeCard/contact';
import Introduce from '../Introduce/index';
import ParticleBackground from '~/ParticleBackground';
import Project from '../Project';
import Navigation from '~/pages/Navigation';
import Footer from '~/pages/Footer';
function Home() {
  SwiperCore.use([Autoplay]);
  const [anh, setAnh] = useState([logo, logo1, logo2]);
  const [showAbout, setShowAbout] = useState(true);
  const [showSkill, setShowSkill] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const handleAbout = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowSkill(false);
  };
  const handleSkill = () => {
    setShowAbout(false);
    setShowContact(false);
    setShowSkill(true);
  };
  const handleContact = () => {
    setShowAbout(false);
    setShowContact(true);
    setShowSkill(false);
  };
  return (
    <>
      <div className="card-home">
        <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }}>
          {anh.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="img" src={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="card-buttons">
          <button className={showAbout ? 'is-active' : ''} onClick={handleAbout}>
            ABOUT
          </button>
          <button className={showSkill ? 'is-active' : ''} onClick={handleSkill}>
            SKILL
          </button>
          <button className={showContact ? 'is-active' : ''} onClick={handleContact}>
            CONTACT
          </button>
        </div>
        {showAbout && <About />}
        {showSkill && <Skill />}
        {showContact && <Contact />}
        <Introduce />
      </div>
      <div className="main">
        <ParticleBackground />
        <h1 data-text="Project..." className="name-project">
          Project...
        </h1>
      </div>
      <div className="project">
        <Project />
      </div>
      <div className="navigations">
        <Navigation />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
