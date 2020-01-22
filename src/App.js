import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));


  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonters = monsters.filter(monster =>{
      return  monster.name.toLowerCase().includes(searchField.toLowerCase()); 
    });
    return (
      <div className="App">
        <br/>
        <input type='search' onChange={e=>{this.setState({searchField:e.target.value})

        }} placeholder="Search Monters" />
        <br/>
        <CardList monsters={filterMonters} >
        </CardList>
      </div>
    );
  }

}

export default App;
