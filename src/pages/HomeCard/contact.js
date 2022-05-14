import './homeCard.scss';
import avatar from '../../assets/image/avatar.jpg';
function Contact() {
  return (
    <div className="card-section" id="contact">
      <div className="card-content">
        <img className="avatar" src={avatar} />
        <div className="card-header">
          <h1 className="card-fullname">Pham Viet Hoc</h1>
          <h2 className="card-jobtitle">Web Developer</h2>
        </div>
        <div className="card-subtitle">CONTACT</div>
        <div className="card-contact-wrapper">
          <div className="card-contact">
            <i className="fa-solid fa-location-dot"></i>
            HO CHI MINH, VIET NAM
          </div>
          <div className="card-contact">
            <i className="fa-solid fa-phone"></i>
            (+84) 378443310
          </div>
          <div className="card-contact">
            <i className="fa-solid fa-envelope"></i>
            ctyhoc@gmail.com
          </div>
          <button className="contact-me">WORK TOGETHER</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
