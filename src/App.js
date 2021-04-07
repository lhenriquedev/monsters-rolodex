import React, { Component } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    this.setState({ monsters: data });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search humans or monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
