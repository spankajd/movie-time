import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import './SearchBox.scss';
import { setSearchQuery } from "../../store/actions/movieActions";

const SearchBox = ({movies}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions , setSuggestions] = useState([]);
    
    useEffect( () => {
        let tempTitle = [];
        movies?.map( movie => {
            tempTitle.push(movie.title);
        })
        setSuggestions(tempTitle);
    },[movies]);


    const handleInputChange = (e) => {
        const userInput = e.target.value;
        setQuery(userInput);
        if (userInput) {
          const filtered = suggestions.filter((item) =>
            item.toLowerCase().includes(userInput.toLowerCase())
          );
          setFilteredSuggestions(filtered);
          setShowSuggestions(true);
        } else {
          setFilteredSuggestions([]);
          setShowSuggestions(false);
        }
        dispatch(setSearchQuery(""));
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        dispatch(setSearchQuery(suggestion));
    };
    const renderSuggestions = () => {
        if (!showSuggestions || filteredSuggestions.length === 0) {
        return null;
    }

    return (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

    return <div className="SearchBox">
        <input
        data-testid="SearchBox"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search movie..."
        />
        {renderSuggestions()}
    </div>
}

export default SearchBox;