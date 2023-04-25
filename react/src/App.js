import './App.css';
import React from 'react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import CreateItem from './pages/CreateItem';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MakeBid from './pages/MakeBid';
import Announcements from './pages/Announcements';
import EarnCoins from './pages/EarnCoins';

function App() {
  const [itemToEdit, setItemToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory Manager App</h1>
        <p>Alpha Build - Limited Functionality</p>
        <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={ <HomePage setItemToEdit={setItemToEdit}/>}></Route>
              <Route path="/announcements" element= { <Announcements />}></Route>
              <Route path="/earn-coins" element= { <EarnCoins />}></Route>
              <Route path="/make-bid" element = { <MakeBid itemToEdit={itemToEdit} />}></Route>
              <Route path="/add-item" element={ <CreateItem />}></Route>
            </Routes>
          </Router>
      </header>
      <footer className="App-footer">
        © 2023 Jesse Soliman
      </footer>
    </div>
  );
}

export default App;

