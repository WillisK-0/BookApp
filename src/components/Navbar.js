import React, { Component } from "react";

class NavbarPage extends Component {
  render() {
    return (
      <nav role="navigation" className="primary-navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Books</a>
            <ul className="dropdown">
              <li>
                <a href="#">Random</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarPage;
