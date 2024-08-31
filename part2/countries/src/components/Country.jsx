import { useEffect, useState } from "react"
import axios from "axios"
import Weather from "./Weather"

const Country = ({ countryNames }) => {
  const [country, SetCountry] = useState(null)

  useEffect(() => {
    if (countryNames && countryNames.length === 1) {
      console.log(import.meta.env.VITE_OPEN_WEATHER_API_KEY)
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryNames[0]}`)
        .then(response => {
          SetCountry(response.data)
        })
        .catch(error => {
          console.log("Error while requesting single country")
        })
    }
  }, [countryNames])

  // TODO: some countries like macau do not have capital set in json object
  if (country !== null && countryNames.length === 1) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>official name: {country.name.official}</p>

        <p>capital: {country.capital[0]}</p>
        <p>area: {country.area}</p>

        <h3>Flag:</h3>
        <img src={country.flags.png} style={{maxHeight: '150px'}} ></img>
        <p>{country.flags.alt}</p>

        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages)
            .map((l) =>
              <li key={l}>{l}</li>
            )}
        </ul>

        <Weather country={country} />
      </div>
    )
  }
}

export default Country