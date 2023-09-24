import { useSearch, useWeather } from "./hooks";
import { getGradient } from "./utils/getGradient";
import Forecast from "./components/forecast/Forecast";
import Header from "./components/layout/Header";
import Search from "./components/layout/Search";
import LimitModal from "./components/ui/LimitModal";

const WeatherApp = () => {
  const { city, forecast, showModal, onOptionSelect, onSubmit, setShowModal } =
    useWeather();
  const { inputValue, options, onInputChange } = useSearch(city);

  const gradientEnd = getGradient(forecast?.list[0].main.temp);

  return (
    <main
      className={`flex justify-center md:justify-evenly items-center bg-gradient-to-br ${gradientEnd} min-h-screen w-full`}
    >
      {forecast ? (
        <Forecast
          data={forecast}
          term={inputValue}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      ) : (
        <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg text-zinc-700">
          <Header />
          <Search
            term={inputValue}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        </section>
      )}

      {showModal && <LimitModal setShowModal={setShowModal} />}
    </main>
  );
};
export default WeatherApp;
