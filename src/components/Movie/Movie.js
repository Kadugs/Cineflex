import './Movie.css';

export default function Movie({
    id,
    title,
    image,
    overview,
    releaseDate,
}) {
    return(
        <div className="movie">
            <img src={image} alt="" />
        </div>
    )
}