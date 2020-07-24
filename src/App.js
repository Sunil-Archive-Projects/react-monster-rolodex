import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      string: 'My name is Sunil L'
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'My name is Sunil Nayak'})}>Change Text</button>
        </header>
      </div>
    );
  }
}
export default App;
