import DisplayCurrentDate from "../Misc/DisplayCurrentDate";
import DisplayWeatherDecriptionIcon from "../DisplayIcons/DisplayWeatherDescriptionIcon";
import { Box, Grid } from "@mui/material";
import FormatTemperature from "../Misc/FormatTemperature";
import ConvertDistanceMtoKM from "../Misc/FormatDistanceMtoKM";

interface weatherInfo {
  name: string;
  visibility: number;
  main: { temp: number; humidity: string };
  weather: { 0: { main: string; description: string; icon: string } };
  wind: { deg: number; speed: string };
}

function DisplayCurrentWeather(weatherInfo: weatherInfo) {
  //Get all the informations and set it to their respective variable
  const currentWeatherInfo: weatherInfo = weatherInfo;
  const weatherDescription: string = currentWeatherInfo.weather[0].description;
  const temp: string = FormatTemperature(currentWeatherInfo.main.temp, 0);
  const humidity: string = currentWeatherInfo.main.humidity + " %";
  const windSpeed: string = currentWeatherInfo.wind.speed + " m/s";
  const visibility: string = ConvertDistanceMtoKM(
    currentWeatherInfo.visibility
  );
  const icon: string = currentWeatherInfo.weather[0].icon;
  //Return the current weather information
  return (
    <Box
      sx={{
        height: "100%",
        width: {
          sm: 400,
          md: 500,
          lg: 500,
          xl: 600,
        },

        border: "2px solid grey",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          className="boldFont"
        >
          {DisplayCurrentDate()}
        </Grid>
        <Grid item sm={6} md={6} lg={6} xl={6}></Grid>
        <Grid item sm={6} md={6} lg={6} xl={6}>
          <img src={DisplayWeatherDecriptionIcon(icon)} />
        </Grid>
        <Grid item sm={6} md={6} lg={6} xl={6}>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            <div
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              {temp}
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            {weatherDescription}
          </Grid>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xl={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            Humidity
          </Grid>
          <Grid item sm={12} md={12} lg={12} xl={12} className="boldFont">
            {humidity}
          </Grid>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xl={4}>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            Wind
          </Grid>
          <Grid item sm={12} md={12} lg={12} xl={12} className="boldFont">
            {windSpeed}
          </Grid>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xl={4}>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            Visibility
          </Grid>
          <Grid item sm={12} md={12} lg={12} xl={12} className="boldFont">
            {visibility}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DisplayCurrentWeather;
