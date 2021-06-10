import React, { Component } from 'react';
import './App.css';
import Block1 from './components/Block1';
import Button from './components/Button';
import Block3 from './components/Block3';

const buttonList = [
  {text: "Button №1", className: 'red'},
  {text: "Button №2", className: 'darkgreen'},
  {text: "Button №3", className: 'yellow'},
  {text: "Button №4", className: 'blueviolet'},
  {text: "Button №5", className: 'chocolate'}
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <Block1 />
        <ul className="block2">
          {
            buttonList.map( (button, index) => <li key={index}><Button className={button.className}>{button.text}</Button></li>)
          }
        </ul>
        <Button />
        <Block3 />
      </div>
    </div>
  );
}

export default App;
