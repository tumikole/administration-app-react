import React, { Component } from "react";
import Navbar from "./nav";


class Edit extends Component {
  render() {
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

        <h1 style={{ color:'red', textAlign: "center" }}>Update/Edit Employee</h1>

        <hr />
        <table class="table">
          <thead class="thead-light">
            <tr key="">
              <th scope="col">name</th>
              <th scope="col">surname</th>

              <th scope="col">Position</th>
              <th scope="col">Programming Language</th>
              <th scope="col">Task</th>
              <th scope="col">Salary</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((person) => {
              return (
                <tr key={person}>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>

                  <td onDoubleClick={this.props.handleEdit}>
                    {this.props.update ? (
                      <input type="text" value={person.position} />
                    ) : (
                      person.position
                    )}
                  </td>
                  <td onDoubleClick={this.props.handleEdit}>
                    {this.props.update ? (
                      <input type="text" value={person.language} />
                    ) : (
                      person.language
                    )}
                  </td>
                  <td onDoubleClick={this.props.handleEdit}>
                    {this.props.update ? (
                      <input type="text" value={person.task} />
                    ) : (
                      person.task
                    )}
                  </td>
                  <td onDoubleClick={this.props.handleEdit}>
                    {this.props.update ? (
                      <input type="text" value={person.salary} />
                    ) : (
                      person.salary
                    )}
                  </td>
                  <td>{person.food}</td>

                  <td onDoubleClick={this.props.handleEdit}>
                    Updated Date:
                    {this.props.update ? (
                      <input type="text" value={person.date} />
                    ) : (
                      person.date
                    )}
                  </td>
                  <td>
                   
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
