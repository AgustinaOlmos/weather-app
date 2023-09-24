import { FC } from "react";
import { getSunTime } from "../../utils/degrees";

type SunBlockProps = {
  time: number;
  Icon: JSX.Element;
};
const SunBlock: FC<SunBlockProps> = ({ time, Icon }) => {
  return (
    <div className="w-[140px] lg:w-[45%] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-sm rounded drop-shadow-lg py-4 mb-5">
      {Icon}
      <span className="mt-2 text-base">{getSunTime(time)}</span>
    </div>
  );
};

export default SunBlock;
