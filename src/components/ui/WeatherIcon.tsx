import { FC } from "react";

const WEATHER_ICON_BASE_URL = "http://openweathermap.org/img/wn/";

type Props = {
  icon: string;
  description: string;
};

const WeatherIcon: FC<Props> = ({ icon, description }) => {
  return (
    <img
      alt={`weather-icon-${description}`}
      src={`${WEATHER_ICON_BASE_URL}${icon}@2x.png`}
    />
  );
};

export default WeatherIcon;
