import avatar from '../../assets/image/avatar.jpg';
import './homeCard.scss';
function About() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img alt="avatar" className="avatar" src={avatar} />
          <h1 className="card-fullname">Pham Viet Hoc</h1>
          <h2 className="card-jobtitle">Web Developer</h2>
        </div>

        <div className="card-main">
          <div>
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an
                invincible host against difficulties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
