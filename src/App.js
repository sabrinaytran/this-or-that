import { useState } from 'react';
import './App.css';
import Choices from './components/Choices';
import Startpage from './components/Startpage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyAEZB2QdYSXtufV-6QwKCC8VBarb7_DlEM",
  authDomain: "this-or-that-4a63c.firebaseapp.com",
  projectId: "this-or-that-4a63c",
  storageBucket: "this-or-that-4a63c.appspot.com",
  messagingSenderId: "730589566561",
  appId: "1:730589566561:web:6c3c53b6f4143229f2fc20",
  measurementId: "G-N9MYNGC5KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const addData = async (choiceOne, choiceTwo) => {
  // Add a new document in collection "responses"
  await setDoc(doc(db, "responses", uuidv4()), {
    option1: choiceOne,
    option2: choiceTwo,
  });
}


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
