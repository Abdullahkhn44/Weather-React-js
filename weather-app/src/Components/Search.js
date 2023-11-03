import React, { useState } from "react";
import "../Components/Search.css";

function Search() {
  const [data, setData] = useState("");

  const [inputText, setInputText] = useState(""); // Initialize a state variable for the input text

  // Function to handle the button click
  const handleButtonClick = () => {
    console.log(inputText);

    // Weather API
    fetch(`
     `).then(
      (result) => {
        result.json().then((res) => {
          setData(res);
          console.log(data);
        });
      }
    );
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <div className="input">
        <label className="label">Search by city : </label>
        <input
          className="input-bar"
          placeholder="e.g Islamabad"
          onChange={handleInputChange}
        />
        <br></br>
        <button className="search-button" onClick={handleButtonClick}>
          Get Weather
        </button>
      </div>
      <div className="Check">
        {data  && data.timelines && data.timelines.length > 0 ? (
          <>
  
            <h2>{data.timelines[1].values.temperature}</h2>
          </>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    </div>
  );
}

export default Search;
