import React, { Component } from "react";
import Navbar from "./nav";

class Edit extends Component {
  render() {
  const {mainState} = this.props
    return (
      <div>
        <Navbar
          navBar={[
            { name: "Home", location: "/Home" },
            { name: "Add", location: "/Form" },
            { name: "View List", location: "/List" },
          ]}
        />

        <br />
        <hr />

        <h1 style={{ textAlign: "center" }}>Update Employee</h1>


        <hr />
        <table class="table">
          <thead class="thead-light">
            <tr key="">
            
              <th scope="col">Position</th>
              <th scope="col">Task</th>
              <th scope="col">Salary</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>

            </tr>
           
          </thead>
          <tbody>
            {this.props.list.map((person) => {
              return (
                <tr key={person}>
                 
                  <td>{person.position}</td>
                  <td>{person.task}</td>
                  <td>{person.salary}</td>
                  <td>Updated Date:{person.date}</td>
                  <td>
                  <input type="submit" onClick={this.props.handleEdit} value="Edit" />
                  {/* <input type="submit" value="Save" /> */}
                  {/* <input type="submit" value="Cancel" /> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Edit;
