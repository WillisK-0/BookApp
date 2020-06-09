import React, { Component } from "react";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    )
      .then((r) => r.json())
      .then((result) => {
        this.setState({
          books: result,
        });
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <Books listOfBooks={this.state.books} />
      </>
    );
  }
}

export default App;
