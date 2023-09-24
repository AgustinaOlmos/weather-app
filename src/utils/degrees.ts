export const getWindDirection = (deg: number): string => {
  if (deg <= 75) return "NE";
  if (deg <= 105) return "E";
  if (deg <= 165) return "SE";
  if (deg <= 195) return "S";
  if (deg <= 255) return "SW";
  if (deg <= 285) return "W";
  if (deg <= 345) return "NW";
  return "N";
};

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return "Dry and comfortable";
  if (level <= 65) return "A bit uncomfortable, sticky feeling";
  return "Lots of moisture, uncomfortable air";
};

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return "Dangerously foggy";
  if (number <= 500) return "Expect heavy fog";
  if (number <= 2000) return "Expect some fog";
  if (number <= 9000) return "Expect some haze";
  return "Very clear day";
};

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  // el método padStart de JavaScript para el formato de las horas y los minutos.
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const getPop = (value: number): string => {
  if (value <= 0.33) return "Low probability";
  if (value <= 0.66) return "Moderate probability";
  return "High probability";
};
