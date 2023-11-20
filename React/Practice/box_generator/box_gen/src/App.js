import BoxForm from './components/BoxForm'
import Box from './components/Box';
import './App.css';
import { useState } from 'react';

function App() {
  const [ boxList, setBoxList ] = useState([])
  return (
    <div>
      <BoxForm boxList={boxList} setBoxList={setBoxList} />
      <Box boxList={boxList} />
    </div>
  );
}

export default App;
