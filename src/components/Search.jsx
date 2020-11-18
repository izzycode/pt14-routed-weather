const Search = ({setSearchQuery}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchQuery(event.target.query.value)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        aria-label="City name"
        name="query"
        placeholder="e.g.: Miami"
        type="search"
      />
      <input type="submit"/>
    </form>
  )
}

export default Search