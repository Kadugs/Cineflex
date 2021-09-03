import './reset.css';
import './App.css';
import {BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Home from './components/Home';
import Session from './components/Session/Session';
import URL from './components/URL'


export default function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get(URL);
        request.then(res => {
            setMovies(res.data)
        }).catch(err => {
            console.log(err);
            alert('error: ' + err.message);
        })
    }, [])
    if (movies.length === 0) {
        return (<p>Loading...</p>)
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
                    <Session 
                        movies={movies}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
