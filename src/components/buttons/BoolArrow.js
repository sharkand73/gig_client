import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';


const BoolArrow = ({ value, setValue })=> {

    if (value){

        return (
            <button className = 'crud' onClick={() => setValue(false)}>
                <FontAwesomeIcon icon={faCaretUp} />
            </button>
        )
    }

    return (
        <button className = 'crud' onClick={() => setValue(true)}>
            <FontAwesomeIcon icon={faCaretDown} />
        </button>
        )
        
}

export default BoolArrow;