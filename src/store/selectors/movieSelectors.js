export const selectMovies = (state) => state.moviesState.movies;
export const selectMovieByTitle = (state,title) => state.moviesState.movies?.filter((movie) => movie.title === title);
export const selectMoviesIsLoading = (state) => state.moviesState.isLoading;
export const selectMoviesError = (state) => state.moviesState.error;
export const selectSelectedMovie = (state) => state.moviesState.selectedMovie;
export const selectSearchQuery = (state) => state.moviesState.searchQuery;
export const selectSortBy = (state) => state.moviesState.sortBy;