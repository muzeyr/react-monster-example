import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));


  }
  handleChange(e) {
    this.setState({searchField: e.target.value});

  } 
  render() {
    const { monsters, searchField } = this.state;
    const filterMonters = monsters.filter(monster =>{
      return  monster.name.toLowerCase().includes(searchField.toLowerCase()); 
    });
    return (
      <div className="App">
        <br/>
        <input type='search' 
        onChange={e=>{this.setState({searchField:e.target.value})

        }} placeholder="Search Monters" />
        <br/>
        <SearchBox 
          placeholder="Search Monster"
          handleChange={this.handleChange}
          />
        <CardList monsters={filterMonters} >
        </CardList>
      </div>
    );
  }

}

export default App;
