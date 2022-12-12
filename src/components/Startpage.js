import Cutekitties from '../kitties/cutekitties.png';
import Button from '@mui/material/Button';
import '../App.css';
import Choices from './Choices';

function Startpage(props) {
    const {page, setPage} = props;
    return (
        <div>
            <img className='cutekitties' src={Cutekitties} alt="cute cat picture"></img>
            <button className='button' onClick={() => setPage('Choices')}> Start</button>
            <p className='Title'>This or That?</p>
        </div>
    )
};

export default Startpage;