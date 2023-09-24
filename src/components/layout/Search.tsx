import { FC, ChangeEvent } from "react";
import { optionType } from "../../types";
import Dropdown from "../ui/Dropdown";

type Props = {
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search: FC<Props> = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}) => {
  return (
    <div className="relative flex my-3 md:my-0">
      <input
        type="text"
        value={term}
        onChange={onInputChange}
        className="text-sm px-2 py-1 rounded-l-md border-2 border-white"
      />

      <Dropdown options={options} onOptionSelect={onOptionSelect} />

      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-2 cursor-pointer uppercase"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  );
};

export default Search;
