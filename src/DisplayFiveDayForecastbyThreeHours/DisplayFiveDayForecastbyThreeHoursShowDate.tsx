import { Grid } from "@mui/material";
import FormatDate from "../Misc/FormatDate";

function DisplayFiveDayForecastbyThreeHoursShowDate(day: string) {
  const today = new Date().getDate();
  const dayRecieved = new Date(day).getDate();

  //check if the day received it the same as today
  const dayFormatted: string = today == dayRecieved ? "Today" : FormatDate(day);

  return (
    <Grid container spacing={2}>
      <Grid item sm={3} md={3} lg={3} xl={3}>
        {dayFormatted}
      </Grid>
      <Grid item sm={9} md={9} lg={9} xl={9}></Grid>
    </Grid>
  );
}

export default DisplayFiveDayForecastbyThreeHoursShowDate;
