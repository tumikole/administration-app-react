import React, { Component } from "react";
import Navbar from "./nav";
import Delete from "../static/delete.svg";
import EditSvg from "../static/edit.svg";
import '../CSS/table.css'

class table extends Component {
  render() {
    var txt;
    if (this.props.isChecked) {
      txt = "Complete";
    } else {
      txt = "Not completed";
    }
    {
      console.log(this.props.isChecked ? "complete" : "not complete");
    }
    return (
      <div>
        <Navbar
          navBar={[
            { name: "Home", location: "/Home" },
            { name: "Add", location: "/Form" },
            { name: "Edit", location: "/Edit" },
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
              <th scope="col">Programming Language</th>
              <th scope="col">Task</th>
              <th scope="col">Salary</th>
              <th scope="col">Food</th>
              <th scope="col">Date</th>
              <th scope="col">Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>
                  <td>{person.position}</td>
                  <td>{person.language}</td>
                  <td>{person.task}</td>
                  <td>{person.salary}</td>
                  <td>{this.props.displayCheckedItems()}</td>
                  <td>{person.date}</td>

                  <td>
                    <input type="checkbox" onChange={this.props.handleCheck} />
                    {txt}
                  </td>
                  <td>
                    <div
                      className="delete-container"
                      
                    >
                      <img className="svg" onDelete={this.props.onDelete} src={Delete} alt="" />
                    </div>
                    <div className="edit-container">
                      <img className="svg" src={EditSvg} alt="" />
                    </div>
                   
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

export default table;
