import React from 'react';
import { zones } from '../../data';
import "../../css/facilities.css";

const Facilities = () => {
  return (
    <div className="facilities" style={{ padding: '20px'}}>
      <h1>Attractions</h1>
      <p>Get ready and explore the cyberpunk world with our signature experiences.</p>
      <img src="/image/adventure_map.png" alt="" />

      {zones.map((zone, index) => (
        <div className="facilities-cards" key={index} style={{ marginBottom: '40px' }}>
          <h2>{zone.name}</h2>
          {/* <p>{zone.description}</p> */}
          <div className="facilities-cards">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {zone.attractions.map((attraction, attrIndex) => (
              <li key={attrIndex} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h3>{attraction.name}</h3>
                <img src={attraction.image} alt={attraction.name} style={{ width: '100%' }} />
                <p>{attraction.description}</p>
                <p><strong>Thrill Level:</strong> {attraction.thrill}</p>
                <p><strong>Height Requirement:</strong> {attraction.heightReq}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;