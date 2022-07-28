// we need to import it to be able to use Classes in react
import { Component } from 'react';
import Search from './components/search-box/search-box.component.jsx';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const cleanData = await data.json();
    this.setState(() => {
      return {monsters: cleanData}
    },
    () => {
      console.log(this.state);
    }
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }



  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsters =monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return(
    <div className='App'>
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search className="monsters-search-box" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;