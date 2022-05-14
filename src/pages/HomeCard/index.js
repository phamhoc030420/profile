import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import './homeCard.scss';
import 'swiper/css';
import logo from '../../assets/image/a.jpg';
import logo1 from '../../assets/image/b.jpg';
import logo2 from '../../assets/image/c.jpg';

function HomeCard() {
  SwiperCore.use([Autoplay]);
  const [anh, setAnh] = useState([logo, logo1, logo2]);
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
      </div>
    </>
  );
}
const About = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-fullname">Pham Viet Hoc</h1>
        <h2 className="card-jobtitle">Web Developer</h2>
      </div>
      <div className="card-main">
        <div className="card-section is-active" id="about">
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">
              Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn
              disrupt.
            </p>
          </div>
        </div>
        <div className="card-buttons">
          <button data-section="#about" className="is-active">
            ABOUT
          </button>
          <button data-section="#experience">SKILL</button>
          <button data-section="#contact">CONTACT</button>
        </div>
      </div>
    </div>
  );
};
const Skill = () => {
  return (
    <div className="card-section" id="experience">
      <div className="card-content">
        <div className="card-subtitle">SKILL</div>
        <div className="card-timeline">
          <div className="card-item" data-year="2014">
            <div className="card-item-title">
              Front-end Developer at <span>JotForm</span>
            </div>
            <div className="card-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
          </div>
          <div className="card-item" data-year="2016">
            <div className="card-item-title">
              UI Developer at <span>GitHub</span>
            </div>
            <div className="card-item-desc">Developed new conversion funnels and disrupt.</div>
          </div>
          <div className="card-item" data-year="2018">
            <div className="card-item-title">
              Illustrator at <span>Google</span>
            </div>
            <div className="card-item-desc">Onboarding illustrations for App.</div>
          </div>
          <div className="card-item" data-year="2020">
            <div className="card-item-title">
              Full-Stack Developer at <span>CodePen</span>
            </div>
            <div className="card-item-desc">Responsible for the encomposing brand expreience.</div>
          </div>
        </div>
        <div className="card-buttons">
          <button data-section="#about">ABOUT</button>
          <button data-section="#experience" className="is-active">
            SKILL
          </button>
          <button data-section="#contact">CONTACT</button>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="card-section" id="contact">
      <div className="card-content">
        <div className="card-header">
          <h1 className="card-fullname">Pham Viet Hoc</h1>
          <h2 className="card-jobtitle">Web Developer</h2>
        </div>
        <div className="card-subtitle">CONTACT</div>
        <div className="card-contact-wrapper">
          <div className="card-contact">
            <i className="fa-solid fa-location-dot"></i>
            Algonquin Rd, Three Oaks Vintage, MI, 49128
          </div>
          <div className="card-contact">
            <i className="fa-solid fa-phone"></i>
            (269) 756-9809
          </div>
          <div className="card-contact">
            <i className="fa-solid fa-envelope"></i>
            ctyhoc@gmail.com
          </div>
          <button className="contact-me">WORK TOGETHER</button>
        </div>
        <div className="card-buttons">
          <button data-section="#about">ABOUT</button>
          <button data-section="#experience">SKILL</button>
          <button data-section="#contact" className="is-active">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
