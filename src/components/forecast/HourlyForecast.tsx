import { FC, Fragment, useMemo, useRef } from "react";
import { ForecastType } from "../../interfaces";
import { formatDate } from "../../utils/formatDate";
import WeatherIcon from "../ui/WeatherIcon";

type Props = {
  data: ForecastType;
};

const HourlyForecast: FC<Props> = ({ data }) => {
  const previousDateRef = useRef("");

  const forecastList = useMemo(
    () =>
      data.list.map((item) => {
        const currentFormattedDate = formatDate(item.dt).formattedDate;
        const isNewDay = currentFormattedDate !== previousDateRef.current;
        previousDateRef.current = currentFormattedDate;

        return {
          item,
          isNewDay,
          currentFormattedDate,
          hour: formatDate(item.dt).hour,
        };
      }),
    [data.list]
  );

  return (
    <section className="flex overflow-x-scroll mt-4 pb-2 mb-5 items-center">
      {forecastList.map(({ item, isNewDay, currentFormattedDate, hour }, i) => (
        <Fragment key={i}>
          {isNewDay && i !== 0 && (
            <div>
              <p className="text-sm font-bold">{currentFormattedDate}</p>
            </div>
          )}
          <div className="inline-block text-center w-[50px] flex-shrink-0">
            <p className="text-sm">{i === 0 ? "Now" : hour}</p>
            <WeatherIcon
              icon={item.weather[0].icon}
              description={item.weather[0].description}
            />
            <p className="text-sm font-bold">
              {Math.round(item.main.temp)}&deg;
            </p>
          </div>
        </Fragment>
      ))}
    </section>
  );
};

export default HourlyForecast;
