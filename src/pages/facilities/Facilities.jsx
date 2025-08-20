import React from 'react';
import { zones } from '../../data';
import "../../css/facilities.css";

const Facilities = () => {
  return (
    <div className="facilities" style={{ padding: '20px'}}>
      <h1 className="hero-title">Attractions</h1>
      <p>Welcome to the electrifying world of Cyberpunk Hong Kong, where the neon-drenched streets collide with futuristic innovation to create an unforgettable adventure. Get ready and explore the cyberpunk world with our signature experiences.</p>
      {zones.map((zone, index) => (
        <div className="facilities-cards" key={index} style={{ marginBottom: '40px' }}>
          <h2>{zone.name}</h2>
          <p>{zone.description}</p>
          <div className="facilities-card">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {zone.attractions.map((attraction, attrIndex) => (
              <li key={attrIndex} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h3>{attraction.name}</h3>
                <img className="facilities-img" src={attraction.image} alt={attraction.name} />
                <p>{attraction.description}</p>
                <p><strong>Thrill Level:</strong> {attraction.thrill}</p>
                {/* <p><strong>Height Requirement:</strong> {attraction.heightReq}</p> */}
              </li>
            ))}
          </ul>
          </div>
        </div>
      ))}
      <img className="facilities-mapimage" src="/image/adventure_map.webp" alt="" style={{ widtht: '50%', alignItems: 'center' }}/>
      <button className="facilities-tickets-button"> Get Tickets</button>
    </div>
  );
};

export default Facilities;