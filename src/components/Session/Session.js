import './Session.css';
import '../../App.css';
import { useHistory, useParams } from "react-router";
import { useState, useEffect } from 'react';
import AddSeat from '../AddSeat.js'
import axios from 'axios';
import URL from '../URL'
import Loading from '../Loading.js';
import Footer from '../Footer/Footer';
import SeatDescription from '../SeatDescription.js'
import ClientInfos from '../ClientInfos';
import VerifySeat from '../VerifySeat'

export default function Session({setConclusionInformations}) {
    const [movieData, setMovieData] = useState([]);
    const [userSeats, setUserSeats] = useState([]);
    const [idSeats, setIdSeats] = useState([]);
    
    const sessionId = useParams().timeId;
    useEffect(() => {
        const request = axios.get(`${URL}/showtimes/${sessionId}/seats`);
        request.then(res => {
            setMovieData(res.data);
        }).catch (err => {
            alert('error: ' + err.message);
        })
    }, []);

    const [userName, setUserName] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const history = useHistory();
    function sendInformations() {
        if( userSeats.length > 0 && userName.length > 0 && userCpf.length === 11) {
            setConclusionInformations([ movieData, { seats: userSeats, userName: userName, userCpf: userCpf }]);   
        } else {
            alert('Verifique os dados!');
            return;
        }
        const infosToSend = { ids: idSeats, name: userName, cpf: userCpf };
        const request = axios.post(`${URL}/seats/book-many`, infosToSend);
        request.then(() => {
            history.push('/success');
        }).catch((error) => {
            alert('Error: ' + error);
        })
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
                        className={`seat seat-${VerifySeat(seat.name, seat.isAvailable, userSeats)}`}
                        onClick={() => AddSeat(seat, userSeats, idSeats, setUserSeats, setIdSeats)}
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
            <div className="reserve-button button" onClick={sendInformations}>
                <p>Reservar assento(s)</p>
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