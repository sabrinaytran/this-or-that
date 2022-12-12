import { useState } from 'react';
import Boba from '../photos/Boba.jpeg';
import Coffee from '../photos/Coffee.jpeg';
import Hydroflask from '../photos/Hydroflask.jpeg';
import Yeti from '../photos/Yeti.jpeg';

const CHOICES_LIST = [[{image: Boba, name: "boba"}, 
                        {image: Coffee, name: "coffee"}], 
                        [{image: Hydroflask, name: "hydroflask"},
                         {image: Yeti, name: "yeti"}]];

function Choices(props) {
    const {selections, setSelections, setPage} = props;
    const [choiceNumber, setChoiceNumber] = useState(0);
    const next = () => {
        if (choiceNumber === CHOICES_LIST.length - 1) {
            setPage('Resultspage');
        }
        setChoiceNumber(choiceNumber + 1);
    }

    const makeSelection = (selection) => {
        const newSelections = selections;
        newSelections.push(selection);
        setSelections(newSelections);
        next();
    }

    return (
        <div>
            <img 
                className="choices"
                src={CHOICES_LIST[choiceNumber][0].image}
                onClick={() => makeSelection(CHOICES_LIST[choiceNumber][0].name)} 
                alt={CHOICES_LIST[choiceNumber][0].name}></img>

            <img 
                className="choices"
                src={CHOICES_LIST[choiceNumber][1].image}
                onClick={() => makeSelection(CHOICES_LIST[choiceNumber][1].name)}
                alt={CHOICES_LIST[choiceNumber][1].name}></img>

            <p> This or That?</p>
        </div>
    )
};

export default Choices;