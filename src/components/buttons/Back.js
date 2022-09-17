import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Back = ()=> {
    const navigate = useNavigate();

    return (
        <button className = 'back' onClick = {() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} /> back
        </button>
    )
}

export default Back;