import cutekitties from '../cutekitties.png';
import '../App.css';

function Startpage(props) {
    return (
        <div>
            <img className='cutekitties' src={cutekitties} alt="cute cat picture"></img>
            <button className='Start' onClick={() => props.setClicked(!props.clicked)}> Start</button>
            <p className='Title'>This or That?</p>
        </div>
    )
};

export default Startpage;