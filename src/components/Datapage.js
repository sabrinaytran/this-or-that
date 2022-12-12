import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import { doc, setDoc, query, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from '../App.js'

function Datapage(props) {

    const [responses, setResponses] = useState(new Map());
    const [option1Total, setOption1Total] = useState(0);
    const [option2Total, setOption2Total] = useState(0);

    const getData = async () => {
        // Update the document title using the browser API
        const q = query(collection(db, "responses"));
        const querySnapshot = await getDocs(q);
        let newArr = [];
        const map1 = new Map();
        map1.set('boba', 0);
        map1.set('coffee', 0);
        map1.set('hydroflask', 0);
        map1.set('yeti', 0);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

            let currOption1 = map1.get(doc.data().option1);
            map1.set(doc.data().option1, currOption1 + 1);
            setOption1Total(option1Total + 1);

            let currOption2 = map1.get(doc.data().option2);
            map1.set(doc.data().option2, currOption2 + 1);
            setOption2Total(option2Total + 1);
        });
    
        console.log("The map value is: ", map1);
        setResponses(map1);
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        [...responses.entries()].map(responseEntry =>
            <div>{responseEntry[1]} for {responseEntry[0]}</div>
        )
    );
}

export default Datapage;