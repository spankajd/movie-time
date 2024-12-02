import React from 'react';
import './Rating.scss';

const Rating = ({rating}) => {
    const totalRating = 10;
    const EmptyStar = '/assets/Empty_Star.png';
    const FullStar = '/assets/Full_Star_Yellow.png';
        
    const starArray = [];

    for(let i = 0; i < totalRating; i++) {
        starArray.push(<img 
            className="star"
            src={ i < rating ? FullStar : EmptyStar} key={i}
            alt={ i < rating ? "full star" : "empty star"}
        />);
    }

    return <div className='rating' >
        {rating ? starArray : 'N/A'}
    </div>
};

export default Rating;