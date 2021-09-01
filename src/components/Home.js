import Movie from './Movie/Movie'

export default function Home({movies}) {
    return (
        <main>
            <div className="title">
                <span>Selecione o filme</span>
            </div>
            <div className="movies">
                {movies.map((item) => (
                    <Movie 
                        id={item.id}
                        title={item.title}
                        image={item.posterURL}
                        overview={item.overview}
                        releaseDate={item.releaseDate}
                    />
                ))}
            </div>

        </main>
    )
}