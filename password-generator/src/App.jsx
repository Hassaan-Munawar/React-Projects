import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSync, faCheck } from '@fortawesome/free-solid-svg-icons'; // Add faCheck for copied state
import './App.css';

function App() {
  const [password, setPassword] = useState('abcd');
  const [length, setLength] = useState(12);
  const [num, setNum] = useState(true);
  const [sym, setSym] = useState(true);
  const [coppy, setCoppy] = useState('Copy');
  const [copiedIcon, setCopiedIcon] = useState(faCopy);

 

  function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';

    if (num) {
      str += '0123456789';
    }

    if (sym) {
      str += '~!@#$%^&*()_+[]{}|<>\\/';
    }

    for (let i = 0; i < length; i++) {
      let getPasss = Math.floor(Math.random() * str.length);
      let getChar = str.charAt(getPasss);
      pass += getChar;
    }

    setPassword(pass);
    setCoppy('Copy'); 
    setCopiedIcon(faCopy); 
  }

  useEffect(() => {
    generatePassword();
    document.querySelector('input[type="range"]').style.setProperty('--val', `${(length - 6) / (20 - 6) * 100}%`);
  }, [length, sym, num]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCoppy('Copied');
    setCopiedIcon(faCheck); 
  };

  const handleLengthChange = (e) => {
    const newValue = e.target.value;
    setLength(newValue);
    e.target.style.setProperty('--val', `${(newValue - 6) / (20 - 6) * 100}%`); 
    setCoppy('Copy'); 
  };

  const handleNumChange = (e) => {
    setNum(e.target.checked);
    setCoppy('Copy');
    setCopiedIcon(faCopy); 
  };

  const handleSymChange = (e) => {
    setSym(e.target.checked);
    setCoppy('Copy');
    setCopiedIcon(faCopy); 
  };

  return (
    <div className="password-generator">
      <div className="password-display">
        <h2>{password}</h2>
        <div className="icons">
          <FontAwesomeIcon
            icon={copiedIcon}
            onClick={copyPassword}
            title={coppy}
            className="icon copy-icon"
          />
          <FontAwesomeIcon
            icon={faSync}
            onClick={generatePassword}
            title="Regenerate Password"
            className="icon"
          />
        </div>
      </div>

      <div className="customize-section">
        <h3>Customize your password</h3>

        <div style={{marginTop:'30px'}} className="slider-container">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={handleLengthChange}
          />
        </div>

        <div className="checkboxes">
  <div style={{marginTop:'20px'}}>
    <input
      type="checkbox"
      checked={num}
      onChange={handleNumChange}
    />
    <label>Numbers</label>
  </div>

  <div style={{marginTop:'20px'}}>
    <input
      type="checkbox"
      checked={sym}
      onChange={handleSymChange}
    />
    <label>Symbols</label>
  </div>
</div>

        <button style={{marginTop:'20px'}} className="copy-btn" onClick={copyPassword}>
          Copy password
        </button>
      </div>
    </div>
  );
}

export default App;


