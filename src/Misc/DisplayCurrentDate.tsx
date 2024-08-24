function DisplayCurrentDate() {
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

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = monthNames[month] + " " + date + ", " + year;
  return currentDate;
}

export default DisplayCurrentDate;
