const Countries = ({ names, handleShowCountry }) => {
  if (names.length > 20) {
    return (
      <>
        <p>Too many matches, please narrow down your search.</p>
      </>
    )
  }

  return (
    <>
      {
        names.map(n =>
          <div key={n}>
            {n} &nbsp;
            <button onClick={() => handleShowCountry(n)}>show</button>
          </div>
        )
      }
    </>
  )
}

export default Countries