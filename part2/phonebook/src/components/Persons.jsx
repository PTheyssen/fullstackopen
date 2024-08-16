import { applyFilter } from "../utils/filter"
import Person from "./Person"

const Persons = ({ filterString, persons, handleDelete }) => {
    const filteredPersons = applyFilter(filterString, persons)
    return (
        <div>
            {filteredPersons.map((p) =>
                <Person key={p.name} person={p} handleDelete={handleDelete} />
            )}
        </div>
    )
}

export default Persons