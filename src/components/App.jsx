import { useState } from 'react'
import Search from './Search'
import Results from './Results'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')

  return(
    <main>
      <h1>City Weather Search © &copy;</h1>
      <Search setSearchQuery={setSearchQuery}/>
      <Results/>
    </main>
  )
}

export default App