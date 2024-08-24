function FormatDate(dateTime: string) {
  const monthNames = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateTimeTemp = new Date(dateTime);
  const month = dateTimeTemp.getMonth();
  const date = dateTimeTemp.getDate();
  const currentDate = date + " " + monthNames[month];
  return currentDate;
}

export default FormatDate;
