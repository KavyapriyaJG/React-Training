import React from 'react';
import '../assets/styles/ContactUs.scss';

function ContactUs() {
    return (
        <section className="contact-wrapper">
            <div className="contact-header">
                <h2 className="contact-title">Contact Us</h2>
                <h3>Our Sales Team will reach out to you ASAP!</h3>
            </div>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required></input>

                <label htmlFor="hometown">Your Home Town</label>
                <select id="hometown" name="hometown">
                    <option value="pollachi">Pollachi</option>
                    <option value="thanjavur">Thanjavur</option>
                    <option value="chidambaram">Chidambaram</option>
                    <option value="masinagudi">Masinagudi</option>
                    <option value="kumbakkonam">Kumbakkonam</option>
                    <option value="tirunelveli">Tirunelveli</option>
                </select>

                <label htmlFor="destination">Where would you like to go ?</label>
                <select className="destination" name="destination">
                    <option value="pollachi">Pollachi</option>
                    <option value="thanjavur">Thanjavur</option>
                    <option value="chidambaram">Chidambaram</option>
                    <option value="masinagudi">Masinagudi</option>
                    <option value="kumbakkonam">Kumbakkonam</option>
                    <option value="tirunelveli">Tirunelveli</option>
                </select>

                <label htmlFor="phone">Contact Number</label>
                <input type="number" name="phone" id="phone" required></input>
            
                <button id="contact-button">SUBMIT INTEREST</button>
            </form>
        </section>
    );
}

export default ContactUs;