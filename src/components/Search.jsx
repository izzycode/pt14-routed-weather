const Search = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    let temp = event.target.query.value
    props.history.push(`/search/${temp}`)
    event.target.query.value = ''
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