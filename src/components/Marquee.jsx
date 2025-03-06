import React from 'react';
import '../App.css';

const Marquee = () => {
    return (
        <div className="marquee-container" style={{ backgroundColor: 'rgb(189, 45, 8)', color: 'white', padding: '10px 0' }}>
            <div className="marquee">
                24/7 Emergency Ambulance Service | Fast & Reliable | Call Now: +91 96194 00500  
                <span className="separator"></span>
                Serving Mumbai, Navi Mumbai & Thane | ICU, BLS & Dead Body Ambulance Available  
                <span className="separator"></span>
                Get 20% OFF on All Services! | Limited Time Offer | Book Your Ambulance Now!  
                <span className="separator"></span>
                Quick Response Time | Affordable & Trusted Service | Call Now: +91 96194 00500  
            </div>
        </div>
    );
};

export default Marquee;
 