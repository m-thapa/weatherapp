import React from "react";
import { SunIcon } from "@heroicons/react/24/solid";

function TimeLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6 "></div>
      <p className="text-white text-xl font-extralight">
        Tuesday, 5 Oct 2023 | Local Time 12:00 PM
      </p>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl ">London, GB</p>
      </div>
    </div>
  );
}

export default TimeLocation;
