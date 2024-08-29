import { useEffect, useState } from "react"
import axios from "axios"

const Country = ({ countryNames }) => {
  if (countryNames === null || countryNames.length !== 1) {
    return
  }
  const [country, SetCountry] = useState(null)

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryNames[0]}`)
      .then(response => {
        SetCountry(response.data)
      })
      .catch(error => {
        console.log("Error while requesting single country")
      })
  }, [countryNames])

  if (country !== null) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>official name: {country.name.official}</p>

        <p>capital: {country.capital[0]}</p>
        <p>area: {country.area}</p>

        <h3>Flag:</h3>
        <img src={country.flags.png}></img>
        <p>{country.flags.alt}</p>

        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages)
            .map((l) =>
              <li key={l}>{l}</li>
            )}
        </ul>



        <h3>Weather in </h3>
      </div>
    )
  }
}

export default Country