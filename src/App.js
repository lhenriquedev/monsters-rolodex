import React, { Component } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList";

class App extends Component {
  state = {
    monsters: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
