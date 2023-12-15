import './App.css';
import PlayerList from './views/PlayerList';
import PlayerForm from './components/PlayerForm';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <div className="App">
      <div className="Nav">
        <Link to={'/'} className='fw-bolder'>Manage Players</Link><p> | </p><Link to={'/'} className='fw-bolder'>Manage Player Status</Link>
      </div>
      <Routes>
        <Route path="/" element={<PlayerList players={players} setPlayers={setPlayers} />} default />
        <Route path="/api/players/addplayer" element={<PlayerForm players={players} setPlayers={setPlayers} />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
