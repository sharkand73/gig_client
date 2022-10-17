import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Edit = ()=> {

    return (
        <button className = 'crud'>
            <FontAwesomeIcon icon={faEdit} />
        </button>
    )
}

export default Edit;