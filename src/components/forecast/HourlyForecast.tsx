import { FC, Fragment } from 'react'
import { forecastType } from '../../types'
import { formatDate } from '../../utils/formatDate'

const WEATHER_ICON_BASE_URL = 'http://openweathermap.org/img/wn/'

type Props = {
  data: forecastType
}

const HourlyForecast: FC<Props> = ({ data }) => {
  let previousDate = ''

  return (
    <section className="flex overflow-x-scroll mt-4 pb-2 mb-5 items-center">
      {data.list.map((item, i) => {
        const currentFormattedDate = formatDate(item.dt).formattedDate
        const isNewDay = currentFormattedDate !== previousDate
        previousDate = currentFormattedDate

        return (
          <Fragment key={i}>
            {isNewDay && i !== 0 && (
              <div>
                <p className="text-sm font-bold">{currentFormattedDate}</p>
              </div>
            )}
            <div className="inline-block text-center w-[50px] flex-shrink-0">
              <p className="text-sm">
                {i === 0 ? 'Now' : formatDate(item.dt).hour}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`${WEATHER_ICON_BASE_URL}${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                {Math.round(item.main.temp)}&deg;
              </p>
            </div>
          </Fragment>
        )
      })}
    </section>
  )
}

export default HourlyForecast
