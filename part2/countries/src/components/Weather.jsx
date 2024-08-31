import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ country }) => {
  const [weather, SetWeather] = useState(null)

  useEffect(() => {
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lon=${lng}&lat=${lat}&appid=${API_KEY}&units=metric`)
      .then(response => {
        console.log(response.data)
        SetWeather(
          {
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon
          })
      })
      .catch(error => {
        console.log("Error while retrieving weather")
      })

  }, [country])

  if (weather !== null) {
    return (
      <div>
        <h2>Weather in {country.capital[0]}</h2>

        <p>temperature: {weather.temperature} Celcius</p>

        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
        <p>wind: {weather.wind} m/s</p>
      </div>
    )
  }
}

export default Weather