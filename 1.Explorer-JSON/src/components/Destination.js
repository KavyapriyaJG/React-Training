import React from 'react';
import getImage from '../services/places.services';
import '../assets/styles/Destination.scss';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

Destination.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    places: PropTypes.object.isRequired,
};

function Destination(props) {
    const title = props.title;
    const description = props.description;
    const data = props.places.data;

    const goto = useNavigate();
    return (
        <div className="explorer-wrapper">
            <div className="explorer-header">
                <h2 className="explorer-title">{title}</h2>
                <h3>{description}</h3>
            </div>
            <section className="explorer-content">
                {
                    data.map((card, index) => {
                        let placeRoute = "/details/:" + card.city;

                        return (<div className="explorer-card" key={index}>
                            <img src={getImage(card.city)} alt={card.city} />
                            <h2>{card.place}</h2>
                            <h3>{card.city}</h3>
                            <p>{card.shortDescription}</p>
                            <button onClick={() =>{ 
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
                                goto(placeRoute, { replace: true })} }> READ MORE</button>
                        </div>);
                    })
                }
            </section>
        </div>
    );
}

export default Destination;