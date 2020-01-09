import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Input from './components/Input';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Input />
        
          <Sidebar />
        
          <Counter />
        </div> 
      </Provider>
    );
  }
}

export default App;
