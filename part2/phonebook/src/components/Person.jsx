const Person = ({ person, handleDelete }) =>
    <div key={person.name}>
        {person.name} {person.number} &nbsp;
        <button onClick={() => handleDelete(person)}>delete</button>
    </div>


export default Person