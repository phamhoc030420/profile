import { useState } from 'react';
import './sendMail.scss';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
function SendMail(props) {
  const dark = props.dark;
  const [name, setName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendMail = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('Please enter your name');
    } else if (!yourEmail) {
      toast.error('Please enter your email');
    } else if (!message) {
      toast.error('Please enter message');
    } else {
      emailjs
        .sendForm('service_0tbc1lr', 'template_jtazal6', e.target, 'OznUpm-2zWwxXXpcd')
        .then((res) => {
          toast.success('Successful mailing');
        })
        .catch((err) => {
          toast.error('Error');
        });
    }
  };
  const handleClear = () => {
    setName('');
    setYourEmail('');
    setMessage('');
  };
  return (
    <>
      <div className={dark === '#000' ? 'table-contact' : 'dark-table-contact'}>
        <h1 className="text1"> Contact By Email</h1>

        <p className="text2">ctyhoc@gmail.com</p>
      </div>
      <div className="formMail">
        <form onSubmit={sendMail}>
          <label className={dark === '#000' ? '' : 'dark-name'}>Name</label>
          <br />
          <input
            className={dark === '#000' ? '' : 'dark-name'}
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className={dark === '#000' ? '' : 'dark-name'}>Your Email</label>
          <br />
          <input
            className={dark === '#000' ? '' : 'dark-name'}
            type="email"
            name="your_email"
            placeholder="Your Email"
            autoComplete="off"
            value={yourEmail}
            onChange={(e) => setYourEmail(e.target.value)}
          />
          <br />
          <label className={dark === '#000' ? '' : 'dark-name'}>Message</label>
          <br />
          <textarea
            className={dark === '#000' ? '' : 'dark-name'}
            value={message}
            id="textarea_id"
            name="message"
            rows="5"
            placeholder="Message"
            autoComplete="off"
            var={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button className={dark === '#000' ? 'send' : 'dark-send'} type="submit" value="send">
            Send
          </button>
          <span className="distance"></span>
          <button className={dark === '#000' ? 'clear' : 'dark-clear'} type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
}

export default SendMail;
