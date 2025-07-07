import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const[page,setPage]=useState(1)

    const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:  `Bearer ${import.meta.env.MOVIE_API}` // Replace with actual token
        }
    };

    useEffect(() => {
        // console.log(useEffect);  
        
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setMovies((prev)=>[...prev, ...data.results]);
                setLoading(false);
                console.log(data);

            })
            .catch(error => {
                console.error('Fetch error:', error);
                setLoading(false);
            });
    }, [page]);
    const targetRef=useRef(null,)
    if(targetRef.current){
        console.log('targetrRef.current', targetRef.current)
    }
    const observer=new IntersectionObserver(entries=>{
        if (entries[0].isIntersecting) {
            console.log('inersecting')
            setPage(page+1)
        }

    })

    if(targetRef.current){
        observer.observe(targetRef.current)
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <button onClick={()=>setPage(page+1)}>page++</button>
            <button onClick={()=>setPage(page-1)}>page--</button>

            <h1 style={{ textAlign: 'center' }}>Popular TV movies {page}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {movies.map((movie, i) => (
                    <MovieCard key={movie.id +i } movie={movie} />
                ))}
            </div>

            <div ref={targetRef} id='loading'>
                loading...
            </div>
        </div>
    );
};

const MovieCard = ({ movie }) => {
    return (
        <div style={{ width: '200px' }}>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={movie.name}
                style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>{movie.name}</h3>
            <p>⭐ {movie.vote_average.toFixed(1)} / 10</p>
            <p>{movie.first_air_date}</p>
            <p>{movie.overview.slice(0, 100)}...</p>
            <p>Language: {movie.original_language.toUpperCase()}</p>
            <p>Country: {movie.origin_country.join(', ')}</p>
            <p>Vote Count:{movie.vote_count}</p>

        </div>
    );
};

export default App;
