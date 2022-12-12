import { useState, useEffect } from 'react';
import './App.css';
import Choices from './components/Choices';
import Startpage from './components/Startpage';
import Resultspage from './components/Resultspage';
import Datapage from './components/Datapage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, query, collection, getDocs } from "firebase/firestore";
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
export const db = getFirestore(app);

const addData = async (choiceOne, choiceTwo) => {
  // Add a new document in collection "responses"
  await setDoc(doc(db, "responses", uuidv4()), {
    option1: choiceOne,
    option2: choiceTwo,
  });
}

function App() {
  const [page, setPage] = useState('Startpage');
  const [selections, setSelections] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        {(page === 'Startpage' &&
          <Startpage page={page} setPage={setPage}></Startpage>) ||
          (page === 'Choices' &&
            <Choices selections={selections} setSelections={setSelections} page={page} setPage={setPage}></Choices>) ||
          (page === 'Resultspage' && 
            <Resultspage setPage={setPage} selections={selections}/>) ||
          (page === 'Datapage' &&
            <Datapage />)}
      </header>
    </div>
 );
}

export default App;