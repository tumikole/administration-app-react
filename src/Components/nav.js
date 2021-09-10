import React, { Component } from "react";
import "../CSS/nav.css";
import { Link } from "react-router-dom";



class nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul>
            {this.props.navBar.map((item, index) => {
              
              return (
                <li key={index}>
                  <Link to={item.location}>
                    <button type="button" className="btn btn-primary">
                      {item.name}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default nav;
