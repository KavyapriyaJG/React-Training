import React from 'react';
import cover from '../assets/images/cover.png';
import '../assets/styles/PromoAndExplore.scss';
import { useNavigate } from "react-router-dom";

let selectedPlace = "Pollachi";

function PromoAndExplore() {
    // Handles state change
    function handleChange(event){
        selectedPlace = event.target.value;
    } 
    const goto = useNavigate();

    return (
        <main>
            <div className="PromoAndExplore-wrapper">
                <div className="PromoAndExplore-title">Welcome to Explorer</div>
                <div className="PromoAndExplore-description">Your Adventure Travel Expert in the <span>SOUTH</span></div>
                <select className="destination" name="destination" onChange={handleChange}>
                    <option value="Pollachi">Pollachi</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Chidambaram">Chidambaram</option>
                    <option value="Masinagudi">Masinagudi</option>
                    <option value="Kumbakkonam">Kumbakkonam</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                </select>
                <button onClick={() =>{ 
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
                    goto(`/details/${selectedPlace}`, { replace: true })} }>EXPLORE</button>
            </div>
            <div className="PromoAndExplore-img">
                <img src={cover} alt="Cover pic" />
            </div>
        </main>
    );
}

export default PromoAndExplore;