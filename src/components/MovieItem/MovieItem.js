import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {integerToRoman} from '../../utils/helper';
import Rating from '../Rating/Rating';

import './MovieItem.scss';

import { fetchMovieDetails, selectMovie } from '../../store/actions/movieActions';
import { selectMovieByTitle } from '../../store/selectors/movieSelectors';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieItem = React.memo(({movie, isActive=false}) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => selectMovieByTitle(state,movie?.title))[0];

    useEffect( () => {
        data?.Title || dispatch(fetchMovieDetails(movie?.title));
    },[]);
    
    const onMovieSelect = (event) => {
        if(isActive) {
            dispatch(selectMovie(null));
        } else {
            dispatch(selectMovie(data));
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
});

export default MovieItem;