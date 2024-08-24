function FormatTemperature(Temp: number, Decimal: number) {
  return (Temp / 10).toFixed(Decimal) + "°C";
}

export default FormatTemperature;
