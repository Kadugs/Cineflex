import { useHistory} from 'react-router-dom'
import { useLocation } from 'react-router';
import './Header.css';
import imageBack from '../../assets/arrow-back-outline.svg';
export default function Header() {
    let history = useHistory();
    const location = useLocation().pathname;
    function returnPage() {
         history.goBack();
    }
    return (
        <header>
            <img src={location !== '/' ? imageBack : ''} className="image-back" alt="" onClick={returnPage} />
            <h1>CINEFLEX</h1>
        </header>
    )
}