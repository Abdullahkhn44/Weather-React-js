import React from "react";
import "../Components/Weather.css";


function Weather({inputText}) {
  return (
    <div>
      <div className="container">
        <div className="temp-container">
          <div className="temp">
            <h1 className="temp-text">23</h1><p className="centi">&deg;C</p>
            <img
              className="temp-logo"
              src={require("../Assets/Images/cloud.png")}
              alt="rain logo"
            />
          </div>

          <div className="city">
            <h1 className="city-text">Islamabad</h1>
          </div>

          <div className="details">
            <h3>10:43 </h3>
            <p> | | </p>
            <h3>H:32*</h3>
          </div>
        </div>

        <div className="forecast">
          <h1 className="forecast-text">FORECAST</h1>
          <div className="forecast-container">
            <div className="days">
              <p>Today</p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
              <p>Fri</p>

            </div>

            <div className="forecast-logo">
              <img
                className="Flogo"
                src={require("../Assets/Images/Frain.png")}
                alt="rain logo"
              />
              <img
                className="Flogo"
                src={require("../Assets/Images/Fcloudy.png")}
                alt="Cloudy logo"
              />
              <img
                className="Flogo"
                src={require("../Assets/Images/Lightining.png")}
                alt="Lightning logo"
              />
              <img
                className="Flogo"
                src={require("../Assets/Images/Sunny.png")}
                alt="Sunny logo"
              />
              <img
                className="Flogo"
                src={require("../Assets/Images/Windy.png")}
                alt="Windy logo"
              />
            </div>

            <div className="forecast-temp">
              <p className="f-text">20 &deg;C</p>
              <p className="f-text">16 &deg;C</p>
              <p className="f-text">25 &deg;C</p>
              <p className="f-text">22 &deg;C</p>
              <p className="f-text">19 &deg;C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
