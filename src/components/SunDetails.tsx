import { FC } from 'react'
import { Sunrise, Sunset } from '../shared'
import { getSunTime } from '../utils/degrees'

type Props = {
  sunrise: number
  sunset: number
}

const SunDetails: FC<Props> = ({ sunrise, sunset }) => {
  return (
    <section className="flex flex-wrap justify-between md:justify-around text-zinc-700">
      <div className="w-[140px] lg:w-[45%] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-sm rounded drop-shadow-lg py-4 mb-5">
        <Sunrise />
        <span className="mt-2 text-base">{getSunTime(sunrise)}</span>
      </div>

      <div className="w-[140px] lg:w-[45%] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-sm rounded drop-shadow-lg py-4 mb-5">
        <Sunset />
        <span className="mt-2 text-base">{getSunTime(sunset)}</span>
      </div>
    </section>
  )
}

export default SunDetails
