import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone, faCommentSms } from '@fortawesome/free-solid-svg-icons';
import Messenger from './messenger-24.svg';
import Whatsapp from './whatsapp-30.svg';

export const comms = {
 EMAIL: <FontAwesomeIcon icon={faEnvelope} style={{color:"#0DF"}} />, 
 MESSENGER:  <img src={Messenger} height={20}/>,
 SMS: <FontAwesomeIcon icon={faCommentSms} style={{color:"#FD0"}} />,
 PHONE: <FontAwesomeIcon icon={faSquarePhone} style={{color:"#F0D"}}/>,
 WHATSAPP:  <img src={Whatsapp} height={20}/>
}
