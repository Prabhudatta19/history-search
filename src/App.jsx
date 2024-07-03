import './App.css'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import logo from '/world.svg'

function App() {
  return (
    <>
      <NavBar/>
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
