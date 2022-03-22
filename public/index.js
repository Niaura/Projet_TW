import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const container = document.getElementById('root');

//const MyComponent = () => {
//  return (
//    <button variant ="contained">
//      Bonjour
//    </button>
//  );
//};

function Test(){
  return (
    <Button variant ="contained">
      Bonjour
    </Button>
  );
};


//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<Test />, document.querySelector('#root'));


