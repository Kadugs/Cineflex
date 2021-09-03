import './Session.css';
import '../../App.css';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import URL from '../URL'
import Loading from '../Loading.js';
import Footer from '../Footer/Footer';
import SeatDescription from '../SeatDescription.js'
import ClientInfos from '../ClientInfos';

export default function Session({setConclusionInformations}) {
    const [movieData, setMovieData] = useState([]);
    const [userSeats, setUserSeats] = useState([]);
    const [userName, setUserName] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const sessionId = useParams().timeId;
    useEffect(() => {
        const request = axios.get(`${URL}/showtimes/${sessionId}/seats`);
        request.then(res => {
            setMovieData(res.data);
        }).catch (err => {
            alert('error: ' + err.message);
        })
    }, [sessionId]);
    
    function addSeat(seat, isAvailable) {
        let isNew = true;
        userSeats.forEach((item) => {
            if(item === seat) {
                isNew = false;
            }
        })
        const auxSeats = [...userSeats];
        
        setUserSeats(auxSeats.filter((item) => {
            if(item !== seat) {
                return true;
            }
            return false;
        }))
        if(isNew && isAvailable) {
            setUserSeats([...userSeats, seat]);
        }
    } 
    function verifySeat(seat, isAvailable) {
        let isSelected = false;
        userSeats.forEach((item) => {
            if(item === seat) {
                isSelected = true;
            }
        })
        if(isAvailable && !isSelected) {
            return 'available';
        } else if(isSelected) {
            return 'selected';
        }
        return 'unavailable';
    }
    
    if(movieData.length === 0) {
        return <Loading />;
    }
    return (
        <>
            <div className="title">
                <span>Selecione o horário</span>
            </div>
            <div className="seats">
                {movieData.seats.map((seat => (
                    <span key={seat.id}
                        className={`seat seat-${verifySeat(seat.name, seat.isAvailable)}`}
                        onClick={() => addSeat(seat.name, seat.isAvailable)}
                    >
                        {seat.name}
                    </span>
                )))}
            </div>
            <div className="seats-description">
                <SeatDescription classSeat='seat-selected' type='Selecionado' />
                <SeatDescription classSeat='seat-available' type='Disponível' />
                <SeatDescription classSeat='seat-unavailable' type='Indisponível' />
            </div>
            <div>
                <ClientInfos type='Nome' setUserInfo={setUserName} />
                <ClientInfos type='CPF' setUserInfo={setUserCpf} />
            </div>
            <div className="reserve-button button" onClick={() => setConclusionInformations(
                [
                    movieData,
                    {
                        seats: userSeats,
                        userName: userName, 
                        userCpf: userCpf,
                    }])}>
                <Link to="/success">Reservar assento(s)</Link>
            </div>
            <Footer 
                title={movieData.movie.title}
                image={movieData.movie.posterURL}
                day={movieData.day.weekday}
                hour={movieData.name}       
            />
        </>
    )
}