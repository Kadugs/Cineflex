import './reset.css';
import './App.css';
import {BrowserRouter,
  Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import URL from './components/URL'
import Loading from './components/Loading'
import Routes from './components/Routes';


export default function App() {
    const [movies, setMovies] = useState([]);
    const [conclusionInformations, setConclusionInformations] = useState([]);
    useEffect(() => {
        const request = axios.get(`${URL}/movies`);
        request.then(res => {
            setMovies(res.data)
        }).catch(err => {
            alert('error: ' + err.message);
        })
    }, [])
    if (movies.length === 0) {
        return <Loading />;
    }
    return (
        <BrowserRouter>
            <Header />
            <Switch> 
                <Routes 
                    movies={movies} 
                    setConclusionInformations={setConclusionInformations} 
                    conclusionInformations={conclusionInformations} 
                />   
            </Switch>
        </BrowserRouter>
    )
}
