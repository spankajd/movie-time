import React from 'react';

import { useSelector } from 'react-redux';

import { integerToRoman } from "../../utils/helper";

import './MovieDetails.scss';
import { selectSelectedMovie } from '../../store/selectors/movieSelectors';
import Rating from '../Rating/Rating';

const MovieDetails = () => {
    const selectedMovie = useSelector(selectSelectedMovie);

    return <div className="movie-details">
        { selectedMovie ? <>
            <div className="movie-title">Episode {integerToRoman(selectedMovie?.episode_id)} - {selectedMovie?.title}</div>
            <div className='movie-section'>
                <img className='movie-poster' src={selectedMovie?.Poster}/>
                
                <ul className='movie-properties'>
                    <li>
                        <strong>Director:</strong> { selectedMovie?.Director}
                    </li>
                    <li>
                        <strong>Language:</strong> { selectedMovie?.Language}
                    </li>
                    <li>
                        <strong>Genre:</strong> { selectedMovie?.Genre}
                    </li>
                    <li>
                        <strong>Country:</strong> { selectedMovie?.Country}
                    </li>
                    <li>
                        <strong>Average rating:</strong> <Rating rating={parseInt(selectedMovie?.imdbRating)} />
                    </li>
                </ul>
                
            </div>
            <div className='movie-footer'>
                <p>
                    {selectedMovie?.opening_crawl}
                </p>
            </div>
            </> : <div className='message'>
                Please select movie from the list
            </div> }
    </div>
}

export default MovieDetails;