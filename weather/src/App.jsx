import { useEffect } from "react";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetails from "./Components/TempAndDetails";
import Forecast from "./Components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const getWeather = async () => {
    const data = await getFormattedWeatherData({ q: "berlin" });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

 
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast />
        <Forecast />
      </div>
    </>
  );
}

export default App;
