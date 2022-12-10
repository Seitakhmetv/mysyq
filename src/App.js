import './App.css';
import Playground from './components/Playground/Playground';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { UserContext } from './components/UserContext';
import { useState } from 'react';

function App() {
  const gridGen = (width, height) => {
    const pregrid = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(0);
        }
        pregrid.push(row);
    }
    pregrid[7][7] = 2
    return pregrid
  }

  const [User, setUser] = useState({"name": "Guest", "score": 0, "history": []})
  
  return (
    <Router>
      <UserContext.Provider value={[User, setUser]}>
      <div className="navbar">
        <Navbar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='game' element={<Playground grid={gridGen(15, 15)}/>}/>
      </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
