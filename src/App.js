import React, { Component } from 'react';
// import WeatherLocation from './components/WeatherLocation';
import DynamicForm from './components/DynamicForm';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicForm></DynamicForm>
      </div>
    );
  }
}

export default App;
