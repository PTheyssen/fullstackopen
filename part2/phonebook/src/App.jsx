import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const getPersonsHook = () => {
    personService.getPersons()
      .then(p => {
        console.log("received ", p.length, " persons")
        setPersons(p)
      })
  }


  useEffect(getPersonsHook, [])
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

  const handleDelete = (person) => {
    window.confirm(`Are you sure you want to delete ${person.name}?`)
    personService.deleteEntry(person.id)
      .then(p => {
        console.log(`Deleted: entry ${p.name}`)
      })
    setPersons(persons.filter(p => p.id != person.id))
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    personService
      .createEntry({ name: newName, number: newNumber })
      .then(returnedEntry => {
        setPersons(persons.concat(returnedEntry))
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter
        filterString={filterString}
        handleFilterChange={handleFilterChange}
      />
      <h3>add a new entry</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString} handleDelete={handleDelete} />
    </div>
  )
}

export default App