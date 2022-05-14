import avatar from '../../assets/image/avatar.jpg';
import './homeCard.scss';
function About() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img className="avatar" src={avatar} />
          <h1 className="card-fullname">Pham Viet Hoc</h1>
          <h2 className="card-jobtitle">Web Developer</h2>
        </div>

        <div className="card-main">
          <div>
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz
                brooklyn disrupt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
