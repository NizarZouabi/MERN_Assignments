import './App.css';
import Dashboard from './components/Dashboard';
import AuthorForm from './components/AuthorForm';
import Update from './components/Update';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [authors, setAuthors] = useState([]);
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<Dashboard authors={authors} setAuthors={setAuthors} />} default />
        <Route path="/api/author/new" element={<AuthorForm authors={authors} setAuthors={setAuthors} />} />
        <Route path="/api/author/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
