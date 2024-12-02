import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../store/actions/movieActions";

import './SortByComp.scss';

const SortByComp = () => {

    const dispatch = useDispatch();

    const [sortOption, setSortOption] = useState("");
  
    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortOption(selectedOption);
        dispatch(setSortBy(selectedOption));
    }

    return <div className="SortByComp">
        <label htmlFor="sortBy">Sort By: </label>
        <select id="sortBy" value={sortOption} onChange={handleSortChange} data-testid="sortBy">
            <option value="">Select</option>
            <option value="episode_id">Episode</option>
            <option value="release_date">Release Date</option>
            <option value="title">Title</option>
            <option value="imdbRating">Rating</option>
        </select>
    </div>
}

export default SortByComp;