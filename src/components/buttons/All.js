import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const All = ()=> {

    return (
        <button className = 'crud'>
            <FontAwesomeIcon icon={faList} />
        </button>
    )
}

export default All;