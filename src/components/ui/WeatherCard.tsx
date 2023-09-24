import { FC } from 'react'
import { IconType, Icon } from '../shared'

type Props = {
  icon: IconType
  title: string
  info: string
  description: string
}

const WeatherCard: FC<Props> = ({ icon, title, info, description }) => {
  return (
    <article className="w-[140px] h-[130px] md:w-[140px] lg:w-full lg:p-4 text-zinc-700 bg-white/20 backdrop-blur-sm rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between hover:bg-white/40">
      <div className="flex items-center text-sm font-bold">
        <Icon type={icon} /> <h4 className="ml-1 lg:text-base">{title}</h4>
      </div>
      <h3 className="mt-2 lg:text-lg">{info}</h3>
      <p className="font-bold text-sm lg:text-base">{description}</p>
    </article>
  )
}

export default WeatherCard
