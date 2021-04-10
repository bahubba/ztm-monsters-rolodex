import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {Searchbox} from './components/searchbox/searchbox.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  filterFreaks = ({target: {value}}) => {
    this.setState({searchField: value});
  }

  render = () => {
    const {monsters:freaks, searchField:searchTxt} = this.state;
    const filteredFreaks = freaks.filter(freak => 
      freak.name.toLowerCase().includes(searchTxt.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
          placeholder="search monsters"
          changeHandler={this.filterFreaks}
        />
        <CardList monsters={filteredFreaks}></CardList>
      </div>
    );
  }
}

export default App;
