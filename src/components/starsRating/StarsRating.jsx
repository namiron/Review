import React, { useState } from 'react';
import ratingStyle from '../modules/rating.module.scss';
import { FaStar } from "react-icons/fa6";

const StarsRating = ({ count, rating, id, }) => {
    const [currentItem, setCurrentItem] = useState(rating);

    const handleRating = (selectedRating) => {
        setCurrentItem(selectedRating);

    };

    const ratingArray = Array(count).fill().map((_, i) => (
        <div
            onClick={() => handleRating(i + 1)}
            key={i}
            className={ratingStyle.iconElement}
            style={i < currentItem ? { color: '#F79E1B', overflow: 'hidden' } : {}}
        >
            <FaStar className={ratingStyle.iconStar} />
        </div>
    ));

    return (
        <div className={ratingStyle.contentBox}>
            <div className={ratingStyle.contentInner}>
                {ratingArray}
                <span className={ratingStyle.quantityRating}>{currentItem} Stars</span>
            </div>
        </div>
    );
};

export default StarsRating;
