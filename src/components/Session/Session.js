import { useParams } from "react-router";
import Days from "../Days/Days.js";
import Footer from "../Footer/Footer";
import URL from '../URL'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Session.css';
import "../../App.css";
export default function Session({ movies }) {
    const moviePage = Number(useParams().idMovie);
    const selectedMovie = movies.filter((movie) => {
        if(Number(movie.id) === moviePage) {
            return true;
        }
        return false;
    })
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const request = axios.get(`${URL}/${selectedMovie[0].id}/showtimes`);
        request.then(res => {
            console.log(res.data);
            setSessions(res.data);
        }).catch (err => {
            console.log(err);
            alert('error: ' + err.message);
        })
    }, []);
    if (sessions.length === 0) {
        return (<p>Loading...</p>)
    }
    return (
        <>
            <div className="title">
                <span>Selecione o horário</span>
            </div>

            <div className="option-of-days">
                {sessions.days.map((day, index) =>(
                    <Days 
                    id={day.id}
                    weekday={day.weekday}
                    date={day.date}
                    showtimes={day.showtimes}
                    key={index}
                    />
                ))}
                <Footer 
                    image={sessions.posterURL}
                    title={sessions.title}
                />
            </div>
        </>
    )
}