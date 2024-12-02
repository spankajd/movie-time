import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovieDetails, selectMovie } from '../../store/actions/movieActions';

import {integerToRoman} from '../../utils/helper';

import Rating from '../Rating/Rating';
import MovieDetails from '../MovieDetails/MovieDetails';

import './MovieItem.scss';

const MovieItem = ({movie, isActive=false}) => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        movie?.Title || dispatch(fetchMovieDetails(movie?.title));
    },[dispatch, movie]);
    
    const onMovieSelect = () => {
        if(isActive) {
            dispatch(selectMovie(null));
        } else {
            dispatch(selectMovie(movie));
        }
    }

    return <> 
    <div className={`movie-item ${isActive && 'active'}`} onClick={onMovieSelect} data-testid="movie-item">
        <div className="movie-id">Episode {movie?.episode_id}</div>
        <div className="movie-title">Episode {integerToRoman(movie?.episode_id)} - {movie?.title}</div>
        <div className="movie-rating"><Rating rating={parseInt(movie?.imdbRating)} /></div>
        <div className="movie-release-date">{movie?.release_date}</div>
    </div>
    {isActive && <MovieDetails />}
    </>
};

export default MovieItem;