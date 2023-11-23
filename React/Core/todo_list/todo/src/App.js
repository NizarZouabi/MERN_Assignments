import './App.css';
import List from './components/List';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {
  const [ taskList, setTaskList ] = useState([])
  return (
    <div className="App">
      <Todo taskList={taskList} setTaskList={setTaskList} />
      <List taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
