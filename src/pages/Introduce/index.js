import './introduce.scss';
import logohtml from '../../assets/image/html.jpg';
import logocss from '../../assets/image/css.png';
import logojs from '../../assets/image/js.png';
import logoreact from '../../assets/image/react.png';
import logobootstrap from '../../assets/image/bootstrap.png';
import logojava from '../../assets/image/java.jpg';
import logonodejs from '../../assets/image/node.png';
import logosql from '../../assets/image/sql.png';
import logomongdb from '../../assets/image/mong.jpg';
import Tilt from 'react-vanilla-tilt';
function Introduce(props) {
  const dark = props.dark;
  return (
    <>
      <div className="introduce">
        <Tilt
          options={{ scale: 10, max: 50 }}
          style={{
            backgroundColor: 'transparent',
            width: '680px',
            opacitt: '0.1',
          }}
        >
          <div className={dark === '#000' ? 'about' : 'aboutLight'}>
            <h3 className="name">About Me</h3>

            <p>I am a final year student transferring information security and I have a passion for programming.</p>
            <p>Looking for a professional and dynamic working environment to promote my skills.</p>
            <p>Try to study and work to become a frontend or backend developer.</p>
            <p>In the future, have the orientation to become a Full-stack developer</p>
          </div>
        </Tilt>
        <Tilt
          options={{ scale: 10, max: 50 }}
          style={{
            backgroundColor: 'transparent',
            width: '680px',
            opacitt: '0.1',
          }}
        >
          <div className={dark === '#000' ? 'about' : 'aboutLight'}>
            <div className="content">
              <h3>Front End</h3>
              <div className="ho">
                <img alt="anh" src={logohtml} />
                <span>HTML</span>
              </div>
              <div className="ho">
                <img alt="anh" src={logocss} />
                <span>CSS</span>
              </div>
              <div className="ho">
                <img alt="anh" src={logojs} />
                <span>JavaScript</span>
              </div>
              <br></br>
              <div className="ho">
                <img alt="anh" src={logobootstrap} />
                <span>Bootstrap</span>
              </div>
              <div className="ho">
                <img alt="anh" src={logoreact} />
                <span>ReactJS</span>
              </div>
              <br></br>

              <h3>Back End</h3>
              <div className="ho">
                <img alt="anh" src={logojava} />
                <span>Java</span>
              </div>
              <div className="ho">
                <img alt="anh" src={logonodejs} />
                <span>NodeJS</span>
              </div>
              <br></br>
              <div className="ho">
                <img alt="anh" src={logosql} />
                <span>MS SQL</span>
              </div>
              <div className="ho">
                <img alt="anh" src={logomongdb} />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default Introduce;
