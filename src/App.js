import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 1 },
        { name: 'Dracula', id: 2 },
        { name: 'Zombie', id: 3 },

      ]
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));


  }
  render() {
    return (
      <div className="App">
        <CardList name="moz111can" >
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
        ))}

        </CardList>
      </div>
    );
  }

}

export default App;
