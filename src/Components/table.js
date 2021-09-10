import React, { Component } from "react";
import Navbar from "./nav";

class table extends Component {
  render() {
    console.log("tumi", this.props);

    return (
      <div>
        <Navbar
          navBar={[
            { name: "Home", location: "/Home" },
            { name: "Add", location: "/Form" },
          ]}
        />

        <br />
        <hr />

        <h1 style={{ textAlign: "center" }}>Employee List</h1>
        <hr />
        <table class="table">
          <thead class="thead-light">
            <tr key="">
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Position</th>
              <th scope="col">Task</th>
              <th scope="col">Salary</th>
              {/* <th scope="col">Food</th> */}
              <th scope="col">Date</th>
              <th scope="col">Food</th>
            </tr>
          </thead>
          {/* <tbody>
            {this.props.list.map((person) => {
              return (
                <tr key={person}>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>
                  <td>{person.position}</td>
                  <td>{person.salary}</td>
                  <td>{person.date}</td>
                  <td>{person.task}</td>
                  <td>{this.props.displayCheckedItems()}</td>

                  <td></td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    );
  }
}

export default table;
