import movieReducer from "../movieReducer";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
  SELECTE_MOVIE,
  SET_SEARCH_QUERY,
  SET_SORT_BY,
} from "../../constants/movieConstant";

describe("movieReducer", () => {
  const initialState = {
    movies: [],
    selectedMovie:null,
    isLoading: false,
    error: null,
    searchQuery:"",
    sortBy:"title" //release_date , episode_id, title
  };

  it("should return the initial state when no action is provided", () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_MOVIES_REQUEST", () => {
    const action = { type: FETCH_MOVIES_REQUEST };
    const expectedState = { ...initialState, isLoading: true };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_MOVIES_SUCCESS", () => {
    const action = { type: FETCH_MOVIES_SUCCESS, payload: [{ "isLoading": false, title: "A New Hope" }] };
    const expectedState = { ...initialState, isLoading: false, movies: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_MOVIES_FAILURE", () => {
    const action = { type: FETCH_MOVIES_FAILURE, payload: "API error" };
    const expectedState = { ...initialState, isLoading: false, error: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_MOVIE_DETAILS_REQUEST", () => {
    const action = { type: FETCH_MOVIE_DETAILS_REQUEST };
    const expectedState = { ...initialState, isLoading: false };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_MOVIE_DETAILS_SUCCESS", () => {
    const action = { type: FETCH_MOVIE_DETAILS_SUCCESS, payload: { Title: "A New Hope" } };
    const expectedState = { ...initialState, movies:[{title:"A New Hope",Title: "A New Hope", isLoading: false}] };
    expect(movieReducer({...initialState, movies:[{title:"A New Hope"}] }, action)).toEqual(expectedState);
  });

  it("should handle FETCH_MOVIE_DETAILS_FAILURE", () => {
    const action = { type: FETCH_MOVIE_DETAILS_FAILURE, payload: "Error loading details" };
    const expectedState = { ...initialState, isLoading: false, error: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SELECTE_MOVIE", () => {
    const action = { type: SELECTE_MOVIE, payload: { title: "A New Hope" } };
    const expectedState = { ...initialState, selectedMovie: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_SEARCH_QUERY", () => {
    const action = { type: SET_SEARCH_QUERY, payload: "Star Wars" };
    const expectedState = { ...initialState, searchQuery: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_SORT_BY", () => {
    const action = { type: SET_SORT_BY, payload: "release_date" };
    const expectedState = { ...initialState, sortBy: action.payload };
    expect(movieReducer(initialState, action)).toEqual(expectedState);
  });
});
