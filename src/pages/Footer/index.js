import './footer.scss';
function Footer(props) {
  const dark = props.dark;
  const handleFacebook = () => {
    window.location = 'https://www.facebook.com/phamhoc.cty';
  };
  const handleGithub = () => {
    window.location = 'https://github.com/phamhoc030420';
  };
  return (
    <>
      <div className={dark === '#000' ? 'main-footer' : 'main-footer-light'}>
        <div className="footer">
          <h3>Pham Viet Hoc</h3>
          {/* icon */}
          <div className="wrapper">
            <div className="button" onClick={handleFacebook}>
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <span>Facebook</span>
            </div>
            <div className="button" onClick={handleGithub}>
              <div className="icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <span>GitHub</span>
            </div>
            <div className="button">
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div>
            <div className="button">
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </div>
            <div className="button">
              <div className="icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <span>Youtube</span>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="content-footer">
              <h4>Contact</h4>
              <ul className="list">
                <li>+(84) 378443310</li>
                <li>Ho Chi Minh, Viet Nam</li>
                <li>230 Man Thien Street, Thu Duc </li>
              </ul>
            </div>

            <div className="content-footer">
              <h4>Information</h4>
              <ul className="list">
                <li>ctyhoc@gmail.com</li>
                <a href="https://www.facebook.com/phamhoc.cty">facebook.com/phamhoc.cty </a>
                <br />
                <a href="https://github.com/phamhoc030420">github.com/phamhoc030420</a>
              </ul>
            </div>
            <hr />
          </div>
          <p>&copy; {new Date().getFullYear()} Pham Viet Hoc | All right reserved | Terms of Serivce | Privacy</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
