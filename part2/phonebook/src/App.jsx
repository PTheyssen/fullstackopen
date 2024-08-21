import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'
import Persons from './components/Persons'
import personService from './services/persons'
import Notfication from './components/Notification'


const App = () => {
  const [notification, setNotification] = useState(null)
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
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService.deleteEntry(person.id)
        .then(p => {
          console.log(`Deleted: entry ${p.name}`)
        })
      setPersons(persons.filter(p => p.id != person.id))
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      if (window.confirm(`${newName} already has an entry, do you want to update the number?`)) {
        const oldEntry = persons.find(p => p.name === newName)
        const newEntry = { ...oldEntry, number: newNumber }
        personService.updateEntry(newEntry)
          .then(returnedEntry => {
            setPersons(persons.map(p => p.id === newEntry.id ? newEntry : p))
            setNotification(`Updated number for ${newName} with ${newNumber}`)
            setTimeout(() => setNotification(null), 5000)            
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .createEntry({ name: newName, number: newNumber })
        .then(returnedEntry => {
          setPersons(persons.concat(returnedEntry))
          setNotification(`Created new entry for ${newName}`)
          setTimeout(() => setNotification(null), 5000)
          setNewName('')
          setNewNumber('')
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notfication message={notification} />
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