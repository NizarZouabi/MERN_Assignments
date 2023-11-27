import Home from "./components/Home";
import Number from "./components/Number";
import String from "./components/String";
import Custom from "./components/Custom";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Number />} />
        <Route path="/:str" element={<String />} />
        <Route path="/:str/:clr" element={<Custom />} />
        <Route path="/:str/:clr/:bg" element={<Custom />} />
      </Routes>
    </div>
  );
}

export default App;
