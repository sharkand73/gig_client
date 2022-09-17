import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const New = ()=> {

    return (
        <button className = 'crud'>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default New;