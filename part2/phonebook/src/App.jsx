import { useState } from 'react'

function applyFilter(filterString, persons) {
  if (filterString === '') {
    return persons
  }
  return persons.filter((p) =>
    p.name.toLowerCase().includes(filterString) ||
    p.name.includes(filterString))
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dxan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewEntry = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    // reset form
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter by name:
        <input
          value={filterString}
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new entry</h2>
      <form onSubmit={addNewEntry}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {applyFilter(filterString, persons).map((p) =>
        <div key={p.name}>{p.name} {p.number}</div>
      )}
    </div>
  )
}

export default App