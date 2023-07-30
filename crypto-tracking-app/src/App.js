import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Cards from './components/Cards'

function App() {
  const [currencyList, setCurrencyList] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((Response) => setCurrencyList(Response.data))
  }, [])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <header className="header p-2">
        <h2>Crypto Tracking</h2>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 mt-3 mb-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleSearch}
              ref={inputRef}
            />
          </div>
        </div>
      </header>
      <div className="p-5 content d-flex flex-wrap justify-content-center my-1">
        {currencyList
          .filter((currency) =>
            currency.name
              .toLowerCase()
              .includes(search.toString().toLowerCase())
          )
          .map((currency) => (
            <Cards {...currency} />
          ))}
      </div>
    </div>
  )
}

export default App
