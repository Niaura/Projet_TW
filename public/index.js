import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

const MyComponent = () => {
  return (
    <h2>This is my first component !!!</h2>
  )
};

ReactDOM.render(<MyComponent />, container);
