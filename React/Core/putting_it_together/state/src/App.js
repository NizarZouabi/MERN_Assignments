import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='Card'>
      <Card name={'Doe, Jane'} currentAge={45} color={'Black'} />
      <Card name={'Smith, John'} currentAge={88} color={'Brown'} />
      <Card name={'Fillmore, Millard'} currentAge={50} color={'Brown'} />
      <Card name={'Smith, Maria'} currentAge={62} color={'Brown'} />
    </div>
  );
}

export default App;
