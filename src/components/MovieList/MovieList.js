import React, { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import './MovieList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery, selectSelectedMovie, selectSortBy } from "../../store/selectors/movieSelectors";
import { selectMovie } from "../../store/actions/movieActions";


const MovieList = ({movies}) => {
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const sortBy = useSelector(selectSortBy);
    const searchQuery = useSelector(selectSearchQuery);
    const selectedMovie = useSelector(selectSelectedMovie);

    useEffect( () => {
        let tempList = [...movies];

        if(searchQuery) {
            tempList = tempList.filter( movie => movie.title.includes(searchQuery));
            dispatch(selectMovie(tempList[0]));
        }

        if(sortBy) {
            tempList = tempList.sort((a, b) => {
                if (a[sortBy] === "N/A" && b[sortBy] === "N/A") return 0;
                if (!a[sortBy]) return 1;
                if (!b[sortBy]) return -1;
                return isNaN(a[sortBy]) || isNaN(b[sortBy]) ? a[sortBy].localeCompare(b[sortBy]) : parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
              });
        }
        setList(tempList);

    },[movies, sortBy, searchQuery, dispatch]);

    return <div className="movie-list"> 
        {
            list?.map( movie => <MovieItem movie={movie} isActive={movie.title === selectedMovie?.title} key={movie.episode_id} />)
            }
    </div>
}

export default MovieList;