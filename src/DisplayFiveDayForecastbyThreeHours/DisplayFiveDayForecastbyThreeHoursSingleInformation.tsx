import DisplayWeatherDecriptionIcon from "../DisplayIcons/DisplayWeatherDescriptionIcon";
import { Box, Grid } from "@mui/material";
import FormatTime from "../Misc/FormatTime";
import FormatTemperature from "../Misc/FormatTemperature";

function DisplayFiveDayForecastbyThreeHourSingleInformation(
  time: string,
  temp_min: number,
  temp_max: number,
  weatherDescription: string,
  icon: string
) {
  const timeFormatted: string = FormatTime(time);
  const temp_minFormatted = FormatTemperature(temp_min, 2);
  const temp_maxFormatted = FormatTemperature(temp_max, 2);

  return (
    <Grid container spacing={0} id={time}>
      <Grid
        item
        sm={2}
        md={2}
        lg={2}
        xl={2}
        className="boldFont"
        marginTop="20px"
      >
        {timeFormatted}
      </Grid>
      <Grid item sm={1} md={1} lg={1} xl={1}>
        {
          <img
            className="iconSizeList"
            src={DisplayWeatherDecriptionIcon(icon)}
          />
        }
      </Grid>
      <Grid item sm={5} md={5} lg={5} xl={5} marginTop="20px">
        {temp_minFormatted + " / " + temp_maxFormatted}
      </Grid>
      <Grid
        item
        sm={4}
        md={4}
        lg={4}
        xl={4}
        className="boldFont"
        marginTop="20px"
      >
        {weatherDescription}
      </Grid>
    </Grid>
  );
}

export default DisplayFiveDayForecastbyThreeHourSingleInformation;
