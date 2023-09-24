import { FC } from "react";
import {
  getHumidityValue,
  getPop,
  getWindDirection,
  getVisibilityValue,
} from "../../utils/degrees";
import { ForecastType } from "../../interfaces";
import WeatherCard from "../ui/WeatherCard";

type Props = {
  data: ForecastType;
};

const WeatherDetails: FC<Props> = ({ data }) => {
  const { main, wind, pop, clouds, visibility } = data.list[0];

  return (
    <section className="flex flex-wrap justify-between md:justify-items-center md:grid md:grid-cols-3 md:gap-4 text-zinc-700">
      <WeatherCard
        icon="wind"
        title="Wind"
        info={`${Math.round(wind.speed)} km/h`}
        description={`${getWindDirection(
          Math.round(wind.deg)
        )}, gusts ${wind.gust.toFixed(1)} km/h`}
      />

      <WeatherCard
        icon="feels"
        title="Feels Like"
        info={`${Math.round(main.feels_like)} °`}
        description={`Feels ${
          Math.round(main.feels_like) < Math.round(main.temp)
            ? "colder"
            : "warmer"
        }`}
      />

      <WeatherCard
        icon="humidity"
        title="Humidity"
        info={`${main.humidity} %`}
        description={`${getHumidityValue(main.humidity)}`}
      />

      <WeatherCard
        icon="pop"
        title="Precipitation"
        info={`${Math.round(pop * 1000)}%`}
        description={`${getPop(pop)}, clouds at ${clouds.all}%`}
      />

      <WeatherCard
        icon="pressure"
        title="Pressure"
        info={`${main.pressure} hPa`}
        description={`${
          Math.round(main.pressure) < 1013 ? "Lower" : "Higher"
        } than standard`}
      />

      <WeatherCard
        icon="visibility"
        title="Visibility"
        info={`${(visibility / 1000).toFixed(1)} km`}
        description={`${getVisibilityValue(visibility)}`}
      />
    </section>
  );
};

export default WeatherDetails;
