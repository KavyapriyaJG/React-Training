import React from 'react';
import getImage from '../services/places.services';
import '../assets/styles/DetailedPlace.scss';
import PropTypes from 'prop-types';

DetailedPlace.propTypes = {
    keyProp : PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
};

function DetailedPlace(props){
    const place = props.keyProp.place;

    return(
        <>
            <div className="detailed-page-PromoAndExplore">

                <div className="detailed-page-header">
                    <h2 className="detailed-page-title">{place.city}</h2>
                    <h3 className="detailed-page-description">{place.place}</h3>
                    <h2 className="detailed-page-temperature">32&#xb0;C</h2>
                </div>
                
                <div className="detailed-page-image">
                    <img src={getImage(place.city)} alt={place.city} />
                </div>
            </div>
            <div className="detailed-page-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. Vivamus at augue eget arcu dictum. Cras semper auctor neque vitae. Amet aliquam id diam maecenas ultricies mi eget. Facilisis leo vel fringilla est ullamcorper eget nulla. Velit aliquet sagittis id consectetur purus ut. Eget nullam non nisi est. Ullamcorper dignissim cras tincidunt lobortis. Consequat id porta nibh venenatis cras sed felis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tellus orci ac auctor augue mauris augue. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. Vivamus at augue eget arcu dictum. Cras semper auctor neque vitae. Amet aliquam id diam maecenas ultricies mi eget. Facilisis leo vel fringilla est ullamcorper eget nulla. Velit aliquet sagittis id consectetur purus ut. Eget nullam non nisi est. Ullamcorper dignissim cras tincidunt lobortis. Consequat id porta nibh venenatis cras sed felis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tellus orci ac auctor augue mauris augue. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus mus. Vivamus at augue eget arcu dictum. Cras semper auctor neque vitae. Amet aliquam id diam maecenas ultricies mi eget. Facilisis leo vel fringilla est ullamcorper eget nulla. Velit aliquet sagittis id consectetur purus ut. Eget nullam non nisi est. Ullamcorper dignissim cras tincidunt lobortis. Consequat id porta nibh venenatis cras sed felis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Tellus orci ac auctor augue mauris augue. </p>
            </div>
        </>
    );
}

export default DetailedPlace;