import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Inputs() {
  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Search...."
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          ></input>

          <MagnifyingGlassIcon
            size={25}
            className="h-6 w-6 cursor-pointer transition ease-out hover:scale-125"
          />
          <MapPinIcon
            size={25}
            className="h-6 w-6 cursor-pointer transition ease-out hover:scale-125"
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button name="metric" className="text-2xl font-light">
            °C
          </button>

          <p className=" text-xl mx-1">|</p>
          <button name="imperial" className="text-2xl font-light">
            °F
          </button>
        </div>
      </div>
    </>
  );
}

export default Inputs;
