import "../../css/facilities1.css";
import { attractionsData } from "../../data.js";

const Facilities1 = () => {
  return (
    <div className="facilities1" id="facilities1">
        <h2>Robotic Ride</h2>
          <div className="facilities1-content">
              <div className="facility-card-img"><img src="/image/attraction_1.png" alt="" /></div>
                <p>Ride Now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                  </p>
                <a href="Tickets" class="facilities1-button">Get Tickets</a>
        </div>
    </div>
  );
};

export default Facilities1;