import { FC } from "react";
import { Sunrise, Sunset } from "../shared";
import SunBlock from "../ui/SunBlock";

type Props = {
  sunrise: number;
  sunset: number;
};

const SunDetails: FC<Props> = ({ sunrise, sunset }) => {
  return (
    <section className="flex flex-wrap justify-between md:justify-around text-zinc-700">
      <SunBlock time={sunrise} Icon={<Sunrise />} />
      <SunBlock time={sunset} Icon={<Sunset />} />
    </section>
  );
};

export default SunDetails;
