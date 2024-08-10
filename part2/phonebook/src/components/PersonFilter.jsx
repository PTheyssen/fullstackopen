const PersonFilter = ({filterString, handleFilterChange}) => {
    return (
        <div>filter by name:
            <input
                value={filterString}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default PersonFilter