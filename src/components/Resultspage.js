import Kitty from '../kitties/Kitty_1.png';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../App.js'
import { doc, setDoc} from "firebase/firestore";


function Resultspage(props) {
    const {setPage, selections} = props;
    function handleClick() {
        setPage('Datapage');
        addData(selections);
    }
    const addData = async (selections) => {
        await setDoc(doc(db, "responses", uuidv4()), {
            option1: selections[0],
            option2: selections[1],
        });
    }

    return (
        <div>
            <img 
                className='Kitty'
                src={Kitty}
                alt="cute cat reaching for butterfly picture"
                onClick={() => handleClick()}></img>
            <p>Click on Kitty for Results!</p>
        </div>
    )
}

export default Resultspage;