const Countries = ({ names }) => {
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
          <div key={n}> {n}</div>
        )
      }
    </>
  )
}

export default Countries