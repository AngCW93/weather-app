function FormatTime(dateTime: string) {
  let time: string = new Date(dateTime).getHours().toString();
  return time + ":00";
}

export default FormatTime;
