import { useState } from "react";
import { OptionType, ForecastType } from "../interfaces";

export const useWeather = () => {
  const [city, setCity] = useState<OptionType | null>(null);
  const [forecast, setForecast] = useState<ForecastType | null>(null);
  const [searchCount, setSearchCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onOptionSelect = (option: OptionType) => {
    setCity(option);
  };

  const getForecast = (city: OptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
        city.lon
      }&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data,
          ...data.city,
        };
        setForecast(forecastData);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = () => {
    if (!city) return;

    if (searchCount < 5) {
      getForecast(city);
      setSearchCount((prevCount) => prevCount + 1);
    } else {
      setShowModal(true);
    }
  };

  return {
    city,
    forecast,
    searchCount,
    showModal,
    onOptionSelect,
    onSubmit,
    setShowModal,
  };
};
