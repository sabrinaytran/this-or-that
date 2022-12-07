import { useState } from 'react';
import './App.css';
import Choices from './components/Choices';
import Startpage from './components/Startpage';

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {clicked ?
        <Choices name={"This or That?"}></Choices>
        :
        <Startpage clicked={clicked} setClicked={setClicked}></Startpage>}
      </header>
    </div>
  );
}

export default App;
