import { useState, useEffect } from "react";
import { OptionType } from "../interfaces";

export const useSearch = (city: OptionType | null) => {
  const [term, setTerm] = useState<OptionType | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<OptionType[]>([]);

  const getSearchOptions = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => console.log(err));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") return;
    getSearchOptions(value);
  };

  useEffect(() => {
    if (city) {
      const formattedCity = `${city.name}, ${
        city.state ? `${city.state}` : ""
      }, ${city.country}`;
      setInputValue(formattedCity);
      setTerm(city);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    inputValue,
    options,
    onInputChange,
  };
};
