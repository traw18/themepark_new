import React from 'react';
import { robots } from '../../data';
import "../../css/facilitiesrobots.css";

const FacilitiesRobots = () => {
  return (
    <div className="facilitiesrobots-page-container">
      <h1>Cyber Blade Challenge</h1>
      
{/* Video Section with iframe */}
      <section className="video-section">
        <h2>Robots Battling</h2>
        <iframe className="battle-video" width="1120" height="630" src="https://www.youtube.com/embed/5PYtNzRTjKM?si=-0nrwdudbs4vbkc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      {/* Robots Introduction Section */}
      <section className="robots-section">
        <h2>Meet the Robot Fighters</h2>
        <div className="robots-grid">
          {robots.map((robot, index) => (
            <div key={index} className="robot-card">
              <img src={robot.profilePic} alt={robot.name} className="profile-pic" />
              <h3>{robot.name}</h3>
              <p><strong>Personality:</strong> {robot.personality}</p>
              <p><strong>Strengths:</strong> {robot.strengths}</p>
              <p><strong>Weaknesses:</strong> {robot.weaknesses}</p>
            </div>
          ))}
        </div>
      </section>
      <button className="facilities-tickets-button"> Get Tickets</button>
    </div>
  );
};

export default FacilitiesRobots;