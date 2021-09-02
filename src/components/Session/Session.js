import { useParams } from "react-router";
import Days from "../Days/Days.js";
import Footer from "../Footer/Footer";
import './Session.css';
import "../../App.css";
export default function Session({ movies }) {
    const moviePage = Number(useParams().idMovie);
    const selectedMovie = movies.filter((movie) => {
        if(movie.id === moviePage) {
            return true;
        }
        return false;
    })
    console.log(selectedMovie[0])
    return (
        <>
            <div className="title">
                <span>Selecione o horário</span>
            </div>

            <div className="option-of-days">
            {selectedMovie[0].days.map((day, index) => (
                <Days 
                id={day.id}
                weekday={day.weekday}
                date={day.date}
                showtimes={day.showtimes}
                key={index}
                />
                ))}
                <Footer 
                    image={selectedMovie[0].posterURL}
                    title={selectedMovie[0].title}
                />
            </div>
        </>
    )
}