import React, { useState } from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Inputs({ setQuery, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search...."
            className="text-xl text-black font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            onKeyPress={handleKeyPress}
          ></input>

          <MagnifyingGlassIcon
            size={25}
            className="h-6 w-6 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <MapPinIcon
            size={25}
            className="h-6 w-6 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-2xl font-light transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>

          <p className="text-xl mx-1">|</p>
          <button
            name="imperial"
            className="text-2xl font-light transition ease-out hover:scale-125"
            onClick={() => setUnits("imperial")}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
}

export default Inputs;
