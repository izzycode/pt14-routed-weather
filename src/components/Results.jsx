import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${props.match.params.query}`)
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.log(error))
  }, [props.match.params.query])

  return(
    <Fragment>
      <h2>Results for {props.match.params.query}</h2>
      <ul>
        {
          cities.map(({id, name}) => {
            return (
            <li key={id}>
              <Link to={`/result/${id}`}>
                {name}
              </Link>
            </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

export default Results