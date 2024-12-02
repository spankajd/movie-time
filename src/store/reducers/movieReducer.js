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

const initialState = {
    movies: [],
    selectedMovie:null,
    isLoading: false,
    error: null,
    searchQuery:"",
    sortBy:"title" //release_date , episode_id, title
};
  
const movieReducer = (state = initialState, action) => {
    let movies;
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return { ...state, isLoading: true, error: null };
        case FETCH_MOVIES_SUCCESS:
            movies = action.payload;
            movies = movies.map( movie => ({...movie, isLoading: false}));
            return { ...state, isLoading: false, movies: movies };
        case FETCH_MOVIES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case FETCH_MOVIE_DETAILS_REQUEST:
            movies = state.movies;
            movies = movies.map( movie => {
                if(movie.title === action.payload) {
                    movie = {...movie, isLoading: true}
                }
                return movie
            });
            return { ...state, movies: movies};
        case FETCH_MOVIE_DETAILS_SUCCESS:
            movies = state.movies;
            movies = movies.map( movie => {
                if(action.payload.Title.includes(movie.title)) {
                    movie = {...movie, isLoading: false, ...action.payload}
                }
                return movie
            });
            return { ...state, isLoading: false, movies: movies };
        case FETCH_MOVIE_DETAILS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case SELECTE_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case SET_SEARCH_QUERY:
            return { ...state, selectedMovie: null, searchQuery: action.payload };
        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
};
  
  export default movieReducer;