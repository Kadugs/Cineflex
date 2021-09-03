import './reset.css';
import './App.css';
import {BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Home from './components/Home';
import MoviePage from './components/MoviePage/MoviePage';
import Session from './components/Session/Session';
import URL from './components/URL'
import Loading from './components/Loading'

export default function App() {
    const [movies, setMovies] = useState([]);

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
                <Route path="/" exact>
                    <Home
                        movies={movies}
                    />
                </Route>
                <Route path="/movie/:idMovie" exact>
                    <MoviePage 
                        movies={movies}
                    />
                </Route>
                <Route path="/session/:sessionId/time/:timeId">
                    <Session />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
