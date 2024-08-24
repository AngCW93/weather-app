import { Box } from "@mui/material";
import GetDisplayFiveDayForecastbyThreeHours from "./GetDisplayFiveDayForecastbyThreeHours";
import DisplayFiveDayForecastbySingleInformation from "./DisplayFiveDayForecastbyThreeHoursSingleInformation";
import DisplayFiveDayForecastbyThreeHoursShowDate from "./DisplayFiveDayForecastbyThreeHoursShowDate";

interface FiveDayForecastbyThreeHoursListInterface {
  list: {
    ind: {
      dt_txt: string;
      main: { temp_min: number; temp_max: number };
      weather: {
        ind: { main: string; description: string; icon: string };
      };
    };
  };
}
//function for generating the 5 day forecast by 3 hrs list
function DisplayFiveDayForecastbyThreeHoursList() {
  const fiveDayForecastbyThreeHoursList: FiveDayForecastbyThreeHoursListInterface =
    GetDisplayFiveDayForecastbyThreeHours("Singapore");
  let fiveDayForecastList: any[] = [];
  let previousDate: number = new Date().getDate() + 1;
  // loop through the object taken from the API
  for (const [key, value] of Object.entries(
    fiveDayForecastbyThreeHoursList.list
  )) {
    const dateTime: string = value.dt_txt;
    let compareDate: number = new Date(value.dt_txt).getDate();
    //check the date if it the same or not
    if (previousDate != compareDate) {
      //create a grid to display the date
      fiveDayForecastList.push(
        DisplayFiveDayForecastbyThreeHoursShowDate(dateTime)
      );
      previousDate = compareDate;
    }
    const tempMin = value.main.temp_min;
    const tempMax = value.main.temp_max;
    //Create a list to be displayed
    for (const [key2, value2] of Object.entries(value.weather)) {
      const description = value2.description;
      const icon = value2.icon;

      fiveDayForecastList.push(
        DisplayFiveDayForecastbySingleInformation(
          dateTime,
          tempMin,
          tempMax,
          description,
          icon
        )
      );
    }
  }

  return (
    <div>
      <p className="boldFont">5-day Forecast (3 Hours)</p>
      <Box
        className="sizeFontList"
        sx={{
          height: "100%",
          border: "2px solid grey",
        }}
      >
        {fiveDayForecastList}
      </Box>
    </div>
  );
}

export default DisplayFiveDayForecastbyThreeHoursList;
