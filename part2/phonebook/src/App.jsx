import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Adam Zdziechowski' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName }))
    console.log("TEST")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) =>
        <div key={p.name}>{p.name}</div>
      )}
    </div>
  )
}

export default App