import React, { Component } from "react";

class Books extends Component {
  constructor() {
    super();
  }

  render() {
    let bookItems = this.props.listOfBooks.map((book) => {
      let url =
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" +
        book.imageLink;
      return (
        <>
          <div className="displayBookCards">
            <a href="#">
              <img src={url} className="bookimg"></img>
            </a>
            <label>{book.title}</label>
          </div>
        </>
      );
    });
    return <>{bookItems}</>;
  }
}
export default Books;
