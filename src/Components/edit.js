import React, { Component } from "react";
import Navbar from "./nav";
import '../CSS/edit.css'

class Edit extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="editBody">
        <Navbar
          navBar={[
            { name: "Home", location: "/Home" },
            { name: "Add", location: "/Form" },
            { name: "View List", location: "/List" },
          ]}
        />

        <br />
        <hr />

        <h1 style={{ color: "red", textAlign: "center" }}>
          Update/Edit Employee
        </h1>

        <div>
          {this.props.list.map((person) => {
            return (
              <li key={person}>
                First name: {person.name}
                <input type="text" onChange="this.props.handleInput"/>
                <button type="submit" onClick="thi.props.handleUpdate">Update</button>
              </li>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}
export default Edit;
