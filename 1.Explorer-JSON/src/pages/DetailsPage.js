import React from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../assets/data/places.json';
import DetailedPlace from '../components/DetailedPlace';
import Destination from '../components/Destination';


function DetailsPage(){

    const params = useParams();
    const placeName = (params.placeName);
    const place = placesData.find((place)=> { return place.city === placeName });

    const recommendedPlacesNames = place.relatedPlaces;
    const data = placesData.filter( (destination)=>{ return recommendedPlacesNames.includes(destination.city) });

    return (
        <>
            <DetailedPlace keyProp={{place}} />
            <Destination title={'Similiar Destinations'} description={'Because you liked '+place.city} places={{data}}/>
        </>
    );
}

export default DetailsPage;