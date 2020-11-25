import { useState, Fragment } from 'react'
import Search from './Search'
import Results from './Results'
import Forecast from './Forecast'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  // const conditionallyRender = () => {
  //   if ('condition') {
  //     return <XComponent/>
  //   }
  //   else {
  //     return <YComponent/>
  //   }
  // }

  return(
    <main>
      {
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

              // conditionallyRender()
            }
          </Fragment>
      }
    </main>
  )
}

export default App