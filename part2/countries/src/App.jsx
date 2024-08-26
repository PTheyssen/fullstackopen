import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


function App() {
  const [countryNames, setCountryNames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const filteredNames = countryNames.filter(n =>
    n.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        const names = response.data.map(c => c.name.common)
        setCountryNames(names.sort())
      })
  }, [])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <h2>Countries</h2>
      <div>
        Filter countries: &nbsp;
        <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <Countries names={filteredNames} />
    </>
  )
}

export default App
