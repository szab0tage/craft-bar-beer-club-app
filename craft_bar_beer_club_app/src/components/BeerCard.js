import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BeerCard = (props) => {
    const beer = props.beer;

    return (
        <div className="card-container">
            <Link to={`/show-beer/${beer._id}`}>
                <img src="../img/beer-blank.png" alt="Craft Bar Beer Club" />
                </Link>
            <div className="desc">
                <h2>
                    <Link to={`/show-beer/${beer._id}`}>
                        {beer.name}
                    </Link>
                </h2>
                <h3>{beer.brewery}</h3>
                <p>{beer.description}</p>
            </div>
        </div>
    )
};

export default BeerCard;