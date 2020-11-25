import { Fragment, useState, useEffect } from 'react'

// const cities = [
//   {
//     id: 44418,
//     "name": "London"
//   },
//   {
//     "id": 2442047,
//     "name": "Los Angeles"
//   },
//   {
//     "id": 455827,
//     "name": "São Paulo"
//   }
// ]

const Results = ({searchQuery, setSelectedId}) => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${searchQuery}`)
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.log(error))
  }, [searchQuery])

  const handleClick = event => {
    event.preventDefault()
    setSelectedId(event.target.dataset.id)
  }

  return(
    <Fragment>
      <h2>Results for {searchQuery}</h2>
      <ul>
        {
          cities.map(({id, name}) => {
            return (
            <li key={id}>
              <a href="#" onClick={handleClick} data-id={id}>{name}</a>
            </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

export default Results

let user = {
  name: 'Izzy',
  email: 'izzy@email.com'
}

// let { email } = user
// let email = user.email