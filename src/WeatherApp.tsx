import Forecast from './components/Forecast'
import Header from './components/Header'
import Search from './components/Search'
import { useSearch, useWeather } from './hooks'

const WeatherApp = () => {
  const { city, forecast, showModal, onOptionSelect, onSubmit, setShowModal } = useWeather()
  const { inputValue, options, onInputChange } = useSearch(city)

  const temp = forecast?.list[0].main.temp

  const gradientEnd = temp
    ? temp <= 25
      ? 'from-blue-300 via-blue-400 to-blue-500'
      : 'from-orange-300 via-orange-400 to-orange-500'
    : 'from-gray-300 via-gray-400 to-gray-500'

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

      {showModal && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 mx-4 md:m-auto">
          <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 p-8 rounded-2xl shadow">
            <h2 className='mb-2 text-sm md:text-base text-center'>Has alcanzado el límite de uso gratuito</h2>
            <p className='mb-2 text-sm md:text-base text-center'>
              Para más búsquedas, por favor suscríbete a la versión
              <a href="/premium" className='text-sm md:text-base font-semibold italic tracking-wider hover:underline-offset-8 hover:text-white'> Premium</a>.
            </p>
            <div className='flex justify-center mt-4 md:mt-6'>
            <button className='border border-zinc-600 font-semibold uppercase rounded-2xl w-40 h-7 text-sm md:text-base hover:bg-zinc-500 hover:text-slate-200 hover:border-white' onClick={() => setShowModal(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
export default WeatherApp
