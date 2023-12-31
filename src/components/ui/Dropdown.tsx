import { FC } from "react";
import { OptionType } from "../../interfaces";

type Props = {
  options: OptionType[];
  onOptionSelect: (option: OptionType) => void;
};

const Dropdown: FC<Props> = ({ options, onOptionSelect }) => {
  return (
    <ul className="absolute top-9 ml-1 bg-white rounded-md w-64 shadow-lg">
      {options.map((option: OptionType, i: number) => (
        <li key={i}>
          <button
            className="text-left text-sm w-full  px-4 py-2 cursor-pointer select-none hover:bg-indigo-500 hover:text-white"
            onClick={() => onOptionSelect(option)}
          >
            {option.name} {option.state && `, ${option.state}`},{" "}
            {option.country}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
