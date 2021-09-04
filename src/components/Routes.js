import Success from './Success/Success';
import Home from './Home';
import MoviePage from './MoviePage/MoviePage';
import Session from './Session/Session';
import { Route } from 'react-router-dom';

export default function Routes (
    {
        movies,
        setConclusionInformations,
        conclusionInformations
    }) {
    return (
        <>
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
            <Route path="/session/:sessionId/time/:timeId" exact>
                <Session 
                    setConclusionInformations={setConclusionInformations}
                />
            </Route>
            <Route path="/success" exact>
                <Success 
                    informations={conclusionInformations}
                />
            </Route>
        </>
    )
}