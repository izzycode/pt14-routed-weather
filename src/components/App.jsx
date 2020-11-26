import { useState, Fragment } from 'react'
import Search from './Search'
import Results from './Results'
import Forecast from './Forecast'

import { Route } from 'react-router-dom'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  return(
    <main>

      <h1>Weather Forecast App</h1>
      <Route path="/" component={Search} />

      <Route path="/search/:query" component={Results} />
        {/*   /search/miami
              /search/something....    */}

      {/* {
        selectedId ?
          <Forecast selectedId={selectedId}/>
        :
          <Fragment>
            <h1>City Weather Search © &copy;</h1>
            <Search setSearchQuery={setSearchQuery}/>
            {
              searchQuery &&
                <Results
                  searchQuery={searchQuery}
                  setSelectedId={setSelectedId}
                />
            }
          </Fragment>
      } */}
    </main>
  )
}

export default App