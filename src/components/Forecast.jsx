import { useState, useEffect, Fragment } from 'react'

const Forecast = (props) => {

  const [forecast, setForecast] = useState({ forecasts: [] })

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${props.match.params.cityId}`)
      .then(response => response.json())
      .then(data => setForecast(data))
      .catch(error => console.log(error))
  }, [])

  const formattedDay = (date) => {
    return `${new Date(date).toLocaleDateString('en-US', {weekday: 'long'})} `
  }

  return(
    <Fragment>
      <h1>{ forecast.name && `This is ${forecast.name}` }</h1>
      <ul>
        {
          forecast.forecasts.map(day => {
            return (
              <li key={day.date}>
                <ul>
                  <li>
                    <img src={day.image} alt={day.weather} height="100"/>
                  </li>
                  <li>
                    <strong>{ formattedDay(day.date) }</strong>
                  </li>
                  <li>
                    <strong>Weather </strong>
                    <span>{day.weather}</span>
                  </li>
                  <li>
                    <strong>Humidity </strong>
                    <span>{day.humidity}</span>
                  </li>
                </ul>
                <br/>
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

export default Forecast