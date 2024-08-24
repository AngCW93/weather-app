import OpenWeatherAPI from "../Misc/OpenWeatherAPI";
import { useState, useEffect } from "react";

function GetDisplayFiveDayForecastbyThreeHours(search: string) {
  const [weather, setWeather] = useState({
    list: {
      ind: {
        dt_txt: "",
        main: { temp_min: 0, temp_max: 0 },
        weather: { ind: { main: "", description: "", icon: "" } },
      },
    },
  });
  //Api call to openWeatherAPI to get the 5-day forecast by 3 hrs data
  useEffect(() => {
    fetch(
      `${OpenWeatherAPI().base}forecast?q=${search}&units=mertrics&APPID=${
        OpenWeatherAPI().key
      }`
    )
      .then((res: any) => res.json())
      .then((result: any) => {
        setWeather(result);
      });
  }, []);
  return weather;
}

export default GetDisplayFiveDayForecastbyThreeHours;
