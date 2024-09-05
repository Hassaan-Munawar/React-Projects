import "./App.css";
import { useState } from "react";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(["breakfast", "workout"]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [theme, setTheme] = useState('white');

  const addItem = () => {
    if (inputText.trim() === "") return;

    setList([...list, inputText]);
    setInputText("");
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const delItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const editItem = (index) => {
    setInputText(list[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateItem = () => {
    if (inputText.trim() === "") return;

    const updatedList = list.map((item, index) =>
      index === currentIndex ? inputText : item
    );
    setList(updatedList);
    setInputText("");
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white'));
  };

  return (
    <div className={`main ${theme}`}>
      <nav className="nav"
        style={{
          width: "100vw",
          height: "12vh",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ float: "right" }}>
          <input 
            onClick={toggleTheme} 
            id="toggle" 
            type="checkbox" 
            className="toggle-input" 
          />
          <label htmlFor="toggle" className="toggle-label">
            <span className="toggle-slider"></span>
          </label>
        </div>
      </nav>

      <center>
        <div className="todo">
          <h1>Todo Application</h1>
          <div className="input">
            <input
            id="get"
              value={inputText}
              onChange={handleInput}
              type="text"
              placeholder="Enter item"
            />
            {isEditing ? (
              <button onClick={updateItem}>Update</button>
            ) : (
              <button onClick={addItem}>Add</button>
            )}
          </div>

          <div className="list-container">
            <ul>
              {list.map((data, index) => (
                <li key={index}>
                  <span>{data}</span>
                  <div className="actions">
                    <button onClick={() => editItem(index)}>Edit</button>
                    <button onClick={() => delItem(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;

