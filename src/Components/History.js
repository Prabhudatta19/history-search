import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Home from './Pages/Home/Home';
import Events from "./Pages/Events/Events";
import Figures from "./Pages/Figures/Figures";

const History = () => {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/history-search" element={<Home />}/>
                <Route path="/history-search/events" element={<Events />}/>
                <Route path="/history-search/figures" element={<Figures />}/>
            </Routes>
        </Router>
    </>
  )
}

export default History;