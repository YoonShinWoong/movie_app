import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres"> 
                    {/* 장르는 array로 들어있어서 Map 통해 전부 출력 */}
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index}/>)} 
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt="alt" title={alt}/>
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}


MovieGenres.propTypes = {
    genre: propTypes.string.isRequired
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.