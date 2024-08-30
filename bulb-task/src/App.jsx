import './App.css';

function App() {
   function change() {
    const bulb = document.getElementById('bulb');
    if (document.getElementById('toggle').checked) {
      bulb.src = 'https://www.freeiconspng.com/uploads/bulb-off-icon-3.png';
    } else {
      bulb.src = 'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png';
    }
}
  return (
    <body>
    <div className="toggle-container">
        <img id='bulb' className='bulb' src="https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png" alt="Bulb" />
        <input onClick={change} id='toggle' type="checkbox" className="toggle-input" />
        <label for="toggle" className="toggle-label">
            <span className="toggle-slider"></span>
        </label>
    </div>
</body>

  );
}

export default App;
