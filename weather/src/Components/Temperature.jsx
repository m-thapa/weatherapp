import {
  FaTemperatureHigh,
  FaWind,
  FaWater,
  FaSun,
  FaTemperatureLow,
} from "react-icons/fa";

function Temperature() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Clear</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="weather-condition"
          className="w-20"
        ></img>

        <p className="text-5xl"> 18°</p>

        <div className="flex flex-col space-y-2">
          <div className="flex  font-light text-sm items-center justify-center">
            <FaTemperatureHigh size={18} className="mr-1" />
            Feels:
            <span className="font-medium ml-1">15°</span>
          </div>

          <div className="flex  font-light text-sm items-center justify-center">
            <FaWater size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">15%</span>
          </div>

          <div className="flex  font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">15 m/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-white text-sm items-center justify-center space-x-2 py-3">
        <FaSun size={18} />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:00</span>
        </p>
        <p className="font-light">|</p>

        <FaSun size={18} />
        <p className="font-light">
          Set: <span className="font-medium ml-1">7:00 pm</span>
        </p>
        <p className="font-light">|</p>

        <FaTemperatureHigh size={18} />
        <p className="font-light">
          High: <span className="font-medium ml-1">06:00</span>
        </p>
        <p className="font-light">|</p>
        <FaTemperatureLow size={18} />
        <p className="font-light">
          Low: <span className="font-medium ml-1">06:00</span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;
