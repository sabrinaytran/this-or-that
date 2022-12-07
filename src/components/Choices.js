import { useState } from 'react';
import Boba from '../photos/Boba.jpeg';
import Coffee from '../photos/Coffee.jpeg';
import Hydroflask from '../photos/Hydroflask.jpeg';
import Yeti from '../photos/Yeti.jpeg';

const CHOICES_LIST = [[Boba, Coffee], [Hydroflask, Yeti]];

function Choices(props) {
    const [choiceNumber, setChoiceNumber] = useState(0);
    const next = () => {
        setChoiceNumber(choiceNumber + 1);
    }
    return (
        <div>
            <img src={CHOICES_LIST[choiceNumber][0]} alt={"xxxxx"}></img>
            <img src={CHOICES_LIST[choiceNumber][1]} alt={"xxxxx"}></img>
            <p> This or That?</p>
            {(choiceNumber < CHOICES_LIST.length - 1) &&
                <button className='Next' onClick={next}>Next</button>
            }
        </div>
    )
};

export default Choices;