import './homeCard.scss';
function Skill() {
  return (
    <div className="card-section" id="experience">
      <div className="card-content">
        <div className="card-subtitle">SKILL</div>
        <div className="card-timeline">
          <div className="card-item" data-skill="FE">
            <div className="card-item-title">HTML, CSS, SCSS, Bootstrap, JavaScript, ReactJS.</div>
            <div className="card-item-desc">
              <br></br>
            </div>
          </div>
          <div className="card-item" data-skill="BE">
            <div className="card-item-title">Java (Sping MVC, Sping Boot), MS SQL, NodeJS (ExpressJS).</div>
            <div className="card-item-desc">
              <br></br>
            </div>
          </div>
          <div className="card-item" data-skill="Tool">
            <div className="card-item-title">VSCode, Eclipse IDE, NetBeans IDE, Github.</div>
            <div className="card-item-desc">
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
