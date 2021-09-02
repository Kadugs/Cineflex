import Movie from './Movie/Movie'

export default function Home({movies}) {
    return (
        <main>
            <div className="title">
                <span>Selecione o filme</span>
            </div>
            <div className="movies">
                {movies.map((item, index) => (
                    <Movie 
                        id={item.id}
                        image={item.posterURL}
                        key={index}
                    />
                ))}
            </div>

        </main>
    )
}