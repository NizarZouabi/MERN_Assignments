import './App.css';
import ProductForm from './components/ProductForm';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/product/add" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
