import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import MovieList from '../../components/MovieList/MovieList';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { fetchMovies } from '../../store/actions/movieActions';
import { selectMovies, selectMoviesError, selectMoviesIsLoading } from "../../store/selectors/movieSelectors";
import SearchBox from '../../components/SearchBox/SearchBox';
import SortByComp from '../../components/SortByComp/SortByComp';
import LoaderScreen from '../../components/LoaderScreen/LoaderScreen';
import Header from '../../components/Header/Header';
function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectMoviesIsLoading);
  const error = useSelector(selectMoviesError);
  
  useEffect( () => {
    dispatch(fetchMovies());
  },[dispatch]);
  
  return (
    <div className="Home">
      <Header></Header>
      <div className="container">
        <div className='top-section'>
          <SortByComp />
          <SearchBox movies={movies} />
        </div>
        <div className='movie-wrapper'>
          <MovieList movies={movies}/>
          <MovieDetails ></MovieDetails>
          </div>
      </div>

      {isLoading && <LoaderScreen imgPath="/assets/loader.gif" msg="Hold On!"/> }
      <LoaderScreen imgPath="/assets/loader.gif" msg={error}/>
    </div>
  );
}

export default Home;
