import './App.css';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="bg-light">
      <Routes>
        <Route path="/" element={<Main />} default />
        <Route path="/api/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
