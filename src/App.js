import cutekitties from './cutekitties.png';
import { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={cutekitties} className="App-logo" alt="logo" />
        <button 
          className='Start-button'
          onClick={() => setClicked(!clicked)}
        >Start
        </button>
        <p className='Title'>This or That</p>
        {clicked && <p>YAY</p>}
      </header>
    </div>
  );
}

export default App;
