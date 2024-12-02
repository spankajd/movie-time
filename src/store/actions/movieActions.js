// import axios from 'axios';
import { 
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS,
    FETCH_MOVIE_DETAILS_FAILURE,
    SELECTE_MOVIE,
    SET_SEARCH_QUERY,
    SET_SORT_BY
     } from '../constants/movieConstant.js';

// Fetch movies list
export const fetchMovies = () => async (dispatch) => {
    console.log('fetchMovies called' );
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await fetch('http://swapi.dev/api/films/?format=json');
    if (!response.ok) {
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: `HTTP error! status: ${response.status}` });
    }
    const data = await response.json();
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data.results });
    console.log(data);
} catch (error) {
        dispatch({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: error.message });
      }
};

// Fetch movie details
export const fetchMovieDetails = (title) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_DETAILS_REQUEST, payload: title});
  try {
    const response = await fetch('http://www.omdbapi.com/?apiKey=b9a5e69d&t='+title?.trim().replaceAll(' ' ,'+'));
    if (!response.ok) {
    dispatch({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: `HTTP error! status: ${response.status}` });
    }
    const data = await response.json();
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: data });  
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: error.message });
  }
};

export const selectMovie = (movie) => async (dispatch) => {
    dispatch({ type: SELECTE_MOVIE, payload: movie });
};


export const setSearchQuery = (query) => async (dispatch) => {
    dispatch({ type: SET_SEARCH_QUERY, payload: query });
};

export const setSortBy = (str) => async (dispatch) => {
    dispatch({ type: SET_SORT_BY, payload: str });
};