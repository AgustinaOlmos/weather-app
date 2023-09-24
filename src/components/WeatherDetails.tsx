import { FC } from 'react'
import {
  getHumidityValue,
  getPop,
  getWindDirection,
  getVisibilityValue,
} from '../utils/degrees'
import { forecastType } from '../types'
import WeatherCard from './WeatherCard'

type Props = {
  data: forecastType
}

const WeatherDetails: FC<Props> = ({ data }) => {
  const today = data.list[0]

  return (
    <section className="flex flex-wrap justify-between md:justify-items-center md:grid md:grid-cols-3 md:gap-4 text-zinc-700">
      {/* Wind */}
      <WeatherCard
        icon="wind"
        title="Wind"
        info={`${Math.round(today.wind.speed)} km/h`}
        description={`${getWindDirection(
          Math.round(today.wind.deg)
        )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
      />

      {/* Feels Like */}
      <WeatherCard
        icon="feels"
        title="Feels Like"
        info={`${Math.round(today.main.feels_like)} °`}
        description={`Feels ${
          Math.round(today.main.feels_like) < Math.round(today.main.temp)
            ? 'colder'
            : 'warmer'
        }`}
      />

      {/* Humidity */}
      <WeatherCard
        icon="humidity"
        title="Humidity"
        info={`${today.main.humidity} %`}
        description={`${getHumidityValue(today.main.humidity)}`}
      />

      {/* Precipitation */}
      <WeatherCard
        icon="pop"
        title="Precipitation"
        info={`${Math.round(today.pop * 1000)}%`}
        description={`${getPop(today.pop)}, clouds at ${
          today.clouds.all
        }%`}
      />

      {/* Pressure */}
      <WeatherCard
        icon="pressure"
        title="Pressure"
        info={`${today.main.pressure} hPa`}
        description={`${
          Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
        } than standard`}
      />

      {/* Visibility */}
      <WeatherCard
        icon="visibility"
        title="Visibility"
        info={`${(today.visibility / 1000).toFixed(1)} km`}
        description={`${getVisibilityValue(today.visibility)}`}
      />
    </section>
  )
}

export default WeatherDetails
