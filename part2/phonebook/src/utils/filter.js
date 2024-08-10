export function applyFilter(filterString, persons) {
    if (filterString === '') {
        return persons
    }
    return persons.filter((p) =>
        p.name.toLowerCase().includes(filterString) ||
        p.name.includes(filterString))
}