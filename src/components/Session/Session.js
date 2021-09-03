import './Session.css';
import '../../App.css';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import URL from '../URL'
import Loading from '../Loading.js';
import Footer from '../Footer/Footer';

export default function Session() {
    const [movieData, setMovieData] = useState([]);
    const sessionId = useParams().timeId;
    useEffect(() => {
        const request = axios.get(`${URL}/showtimes/${sessionId}/seats`);
        request.then(res => {
            setMovieData(res.data);
        }).catch (err => {
            alert('error: ' + err.message);
        })
    }, []);

    if(movieData.length === 0) {
        return <Loading />;
    }
    console.log(movieData);
    return (
        <>
            <div className="title">
                <span>Selecione o horário</span>
            </div>
            <div className="seats">
                {movieData.seats.map((seat => (
                    <span key={seat.id} className={seat.isAvailable ? 'seat seat-available' : 'seat seat-unavailable'}>{seat.name}</span>
                )))}
            </div>
            <div className="seats-description">
                <div>
                    <span className="seat seat-selected"></span>
                    <span>Selecionado</span>
                </div>
                <div>
                    <span className="seat seat-available"></span>
                    <span>Disponível</span>
                </div>
                <div>
                    <span className="seat seat-unavailable"></span>
                    <span>Indisponível</span>
                </div>
            </div>
            <div>
                <span>Nome do comprador</span>
                <input type="text" placeholder="Digite seu nome..."></input>
                <span>CPF do comprador</span>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>
            <Link to="/success">
                <span>Reservar assento(s)</span>
            </Link>
            <Footer 
                title={movieData.movie.title}
                image={movieData.movie.posterURL}
                day={movieData.day.weekday}
                hour={movieData.name}       
            />
        </>
    )
}