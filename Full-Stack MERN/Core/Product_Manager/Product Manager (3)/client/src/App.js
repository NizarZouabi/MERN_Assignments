import './App.css';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="bg-light">
      <div className="bg-white navbar border border-2 shadow-sm">
        <p className="fw-bold ms-2">Product Manager</p>
      </div>
      <Routes>
        <Route path="/" element={<Main />} default />
        <Route path="/api/product/:id" element={<ProductDetails />} />
        <Route path="/api/product/edit/:id" element={<ProductUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
