import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='Card'>
      <Card name={'Doe, Jane'} age={45} color={'Black'} />
      <Card name={'Smith, John'} age={88} color={'Brown'} />
      <Card name={'Fillmore, Millard'} age={50} color={'Brown'} />
      <Card name={'Smith, Maria'} age={62} color={'Brown'} />
    </div>
  );
}

export default App;
