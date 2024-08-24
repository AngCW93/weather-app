import "./css/App.css";
import OpenWeatherAPI from "./Misc/OpenWeatherAPI";
import { useState, useEffect } from "react";
import DisplayCurrentWeather from "./DisplayCurrentWeather/DisplayCurrentWeather";
import DisplayFiveDayForecastbyThreeHoursList from "./DisplayFiveDayForecastbyThreeHours/DisplayFiveDayForecastbyThreeHoursList";

function App() {
  const [search, setSearch] = useState("Singapore");
  const [results, setResults] = useState([""]);
  const [hidden, setHidden] = useState(true);
  const [weather, setWeather] = useState({
    name: "",
    visibility: 0,
    main: { temp: 0, humidity: "" },
    sys: { country: "" },
    weather: { 0: { main: "", description: "", icon: "" } },
    wind: { deg: 0, speed: "" },
  });

  //function when search button is pressed
  function searchPressed() {
    //get the history
    getHistory();
    //hide the suggesetion
    setHidden(true);
    //API call to OpenWeatherAPI
    fetch(
      `${OpenWeatherAPI().base}weather?q=${search}&units=mertrics&APPID=${
        OpenWeatherAPI().key
      }`
    )
      .then((res: any) => res.json())
      .then((result: any) => {
        //Set the result into weather
        setWeather(result);
        //Check if the the result is valid
        if (typeof result.main != "undefined") {
          //add in to the history
          addHistory(result.name + ", " + result.sys.country);
        }
      });
  }
  //Onload trigger search press once for first data "Singapore"
  useEffect(() => {
    searchPressed();
  }, []);

  //Get the history from localStorage
  function getHistory() {
    if (localStorage.getItem("history")) {
      setResults(JSON.parse(localStorage.getItem("history") || "''"));
    }
  }
  //Add into history
  function addHistory(dataToSave: string) {
    //check if the search info does not exist in the current string or is not empty
    if (results.indexOf(dataToSave) === -1 && dataToSave !== "") {
      if (results[0] === "") {
        results.splice(0, 1);
      }
      //push the search info in to results
      results.push(dataToSave);
      localStorage.setItem("history", JSON.stringify(results));
      console.log(results);
    }
  }
  //Remove history element
  function removeFromHistory(index: number) {
    //remove the chosen element
    results.splice(index, 1);
    //set back to the localStorage
    localStorage.setItem("history", JSON.stringify(results));
    //hide the search history
    setHidden(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-wrapper">
          {/* search bar input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => setHidden(false)}
            onClick={(e) => setHidden(false)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {hidden ? (
          <div></div>
        ) : (
          <div className="result-list">
            {
              //Show history result
              results.map((result, id) => {
                return (
                  <div
                    className="search-result"
                    onClick={(e) => setSearch(result)}
                    onMouseDown={(e) => setSearch(result)}
                    key={id}
                  >
                    {result}
                    {/* button to remove the element from history */}
                    <button onClick={(e) => removeFromHistory(id)}>
                      remove
                    </button>
                  </div>
                );
              })
            }
          </div>
        )}
        {/* check if the search country is valid */}
        {typeof weather.main != "undefined" ? (
          <div>
            {weather.name + ", " + weather.sys.country}
            {DisplayCurrentWeather(weather)}
          </div>
        ) : (
          //Display error message if it is invalid country or city
          <div className="ErrorMsg">Invalid country or city</div>
        )}
        {/* Show the 5-day forecast by 3 hrs */}
        {DisplayFiveDayForecastbyThreeHoursList()}
      </header>
    </div>
  );
}

export default App;
