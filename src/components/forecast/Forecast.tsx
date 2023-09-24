import { FC, ChangeEvent } from "react";
import { forecastType, optionType } from "../../types";
import HourlyForecast from "./HourlyForecast";
import SunDetails from "./SunDetails";
import WeatherDetails from "./WeatherDetails";
import Search from "../layout/Search";

type Props = {
  data: forecastType;
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Forecast: FC<Props> = ({
  data,
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}) => {
  if (!data) return <div>No data available!</div>;

  const { main, weather } = data.list[0];

  return (
    <div className="w-full md:max-w-[80%] py-2 md:py-0 px-2 md:px-4 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">
      <div className="mx-auto w-[300px] md:w-[80%]">
        {/* py-4 md:px-4  // py-2 md:py-4 px-2 md:px-4 */}
        <nav className="flex justify-center md:justify-end mt-2 mb-1 md:mb-0">
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        </nav>
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name}
            <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            {Math.round(main.temp)}&deg;
          </h1>
          <p className="text-sm">
            {weather[0].main} {weather[0].description}
          </p>
          <p className="text-sm">
            Max:{Math.ceil(main.temp_max)}&deg; - Min:
            {Math.floor(main.temp_min)}&deg;
          </p>
        </section>

        <HourlyForecast data={data} />

        <SunDetails sunrise={data.sunrise} sunset={data.sunset} />

        <WeatherDetails data={data} />
      </div>
    </div>
  );
};

export default Forecast;