import { useState, useEffect } from 'react';
import { FcHome } from 'react-icons/fc';
import { AiOutlineProfile, AiOutlineContacts, AiOutlineInfoCircle, AiOutlineProject } from 'react-icons/ai';
import './navigation.scss';
import PDF from '~/assets/file/PHAM_VIET_HOC.pdf';
function Navigation() {
  const [active, setActive] = useState('');
  useEffect(() => {
    let nav = document.querySelector('.nav');
    nav.querySelectorAll('li button').forEach((button, i) => {
      button.onclick = (e) => {
        if (button.classList.contains('nav-item-active')) return;

        nav.querySelector('li button.nav-item-active').classList.remove('nav-item-active');
        button.classList.add('nav-item-active');
        let nav_indicator = nav.querySelector('.nav-indicator');
        nav_indicator.style.left = `calc(${i * 80 + 60}px - 25px)`;
      };
    });
  });
  const handleHome = () => {
    setActive('activeHome');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleAbout = () => {
    setActive('activeAbout');
    document.body.scrollTop = 900;
    document.documentElement.scrollTop = 900;
  };
  const handleProject = () => {
    setActive('activeProject');
    document.body.scrollTop = 1450;
    document.documentElement.scrollTop = 1450;
  };
  const handleContact = () => {
    setActive('activeContact');
    document.body.scrollTop = 2200;
    document.documentElement.scrollTop = 2200;
  };
  const handleCV = () => {
    setActive('activeCV');
  };
  return (
    <>
      <div className="navigation">
        <ul className="nav">
          <span className="nav-indicator"></span>
          <li>
            <button className={active === 'activeHome' ? 'nav-item-active' : ''} onClick={handleHome}>
              <FcHome />
              <span className="title">Home</span>
            </button>
          </li>
          <li>
            <button className={active === 'activeAbout' ? 'nav-item-active' : ''} onClick={handleAbout}>
              <AiOutlineInfoCircle />
              <span className="title">About</span>
            </button>
          </li>
          <li>
            <button className={active === 'activeProject' ? 'nav-item-active' : ''} onClick={handleProject}>
              <AiOutlineProject />
              <span className="title">Project</span>
            </button>
          </li>
          <li>
            <button className={active === 'activeContact' ? 'nav-item-active' : ''} onClick={handleContact}>
              <AiOutlineContacts />
              <span className="title">Contact</span>
            </button>
          </li>
          <li>
            <a href={PDF} target="_blank">
              <button className={active === 'activeCV' ? 'nav-item-active' : ''} onClick={handleCV}>
                <AiOutlineProfile />
                <span className="title">My CV</span>
              </button>
            </a>
          </li>
        </ul>
        <svg version="1.1" id="filter-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Navigation;
