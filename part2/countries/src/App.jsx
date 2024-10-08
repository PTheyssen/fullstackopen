import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'


function App() {
  const [displayedCountry, setDisplayedCountry] = useState(null)
  const [countryNames, setCountryNames] = useState([])
  const [filteredNames, setFilteredNames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        const names = response.data.map(c => c.name.common)
        setCountryNames(names.sort())
      })
  }, [])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    const newFilteredNames =
      countryNames.filter(n =>
        n.toLowerCase().includes(searchTerm.toLowerCase())
      )
    setFilteredNames(newFilteredNames)
    if (newFilteredNames.length === 1) {
      setDisplayedCountry(newFilteredNames[0])
    }
  }

  const handleShowCountry = (countryName) => {
    setDisplayedCountry(countryName)
  }

  return (
    <>
      <h2>Countries</h2>
      <div>
        Filter countries: &nbsp;
        <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <Countries names={filteredNames} handleShowCountry={handleShowCountry} />
      <CountryDetails countryName={displayedCountry} />
    </>
  )
}

export default App
