import './App.css'
import SearchBar from './Components/SearchBar'
import logo from '/world.svg'

function App() {
  return (
    <>
      <div>
        <a href="/">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>All Global History</h1>
      <SearchBar/>
    </>
  )
}

export default App
