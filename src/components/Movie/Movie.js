import './Movie.css';
import {Link} from 'react-router-dom';

export default function Movie( {id, image, setIdMovie} ) {
    return(
        <Link to={'/movie/' + id} className="movie">
            <img src={image} alt=""/>
        </Link>
    )
}