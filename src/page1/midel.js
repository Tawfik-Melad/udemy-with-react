import React from "react";
import "./styles/midel.css";
import "https://kit.fontawesome.com/490c8b9b10.js";
export default function midel() {
  return (
    <div>
      <div className="ima">
        <div className="text_over_img">
          <h2>Learning that gets you</h2>
          <h4>
            Skills for your present (and your future). Get started with us.
          </h4>
        </div>

        <img src="imges/alarm.png" className="photo_big" />
        <img src="imges/alarm2.png" className="photo_small" />
      </div>
      <div className="text_under_img">
        <div>
          <h1>A broad selection of courses</h1>
        </div>
        <div>
          <h3>
            Choose from 185,000 online video courses with new additions
            published every month
          </h3>
        </div>
      </div>
    </div>
  );
}
