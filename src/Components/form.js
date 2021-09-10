import React, { Component } from "react";
import Navbar from "./nav";
import "../CSS/form.css";
class form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      surname,
      position,
      task,
      salary,
      date,
      isSelectAll,
      foodChoices,
    } = this.props.mainState;

    return (
      <div>
        <div>
          <Navbar
            navBar={[
              { name: "home", location: "/Home" },
              { name: "View List", location: "/List" },
            ]}
          />
        </div>
        <form onSubmit={this.props.handleSubmit}>
          First name:
          <input
            class="form-control"
            style={{
              borderColor: name.length < 6 ? "red" : "green",
            }}
            type="text"
            name="name"
            value={name}
            onChange={this.props.handleChange}
          />
          <br />
          Last name:
          <input
            style={{
              borderColor: surname.length < 6 ? "red" : "green",
            }}
            class="form-control"
            type="text"
            name="surname"
            value={surname}
            onChange={this.props.handleChange}
          />
          <br />
          Position:
          <select
            style={{
              borderColor: position.length < 6 ? "red" : "green",
            }}
            class="form-control"
            name="position"
            value={position}
            onChange={this.props.handleChange}
          >
            <option></option>
            <option>Manager</option>
            <option>Senior Developer</option>
            <option>Junior Developer</option>
          </select>
          <br />
          Task:
          <input
            style={{
              borderColor: task.length < 6 ? "red" : "green",
            }}
            class="form-control"
            type="text"
            name="task"
            value={task}
            onChange={this.props.handleChange}
          />
          <br />
          Salary:
          <input
            style={{
              borderColor: salary.length < 3 ? "red" : "green",
            }}
            class="form-control"
            type="number"
            name="salary"
            value={salary}
            onChange={this.props.handleChange}
          />
          <br />
          Date:
          <input
            style={{
              borderColor: date.length < 6 ? "red" : "green",
            }}
            class="form-control"
            type="date"
            name="date"
            value={date}
            onChange={this.props.handleChange}
          />
          <br />
          {/* <input
            checked={isSelectAll}
            name="checkboxAll"
            onChange={(e) => this.props.handleCheckboxAll(e)}
            type="checkbox"
          /> */}
          {/* {foodChoices.map((choice) => (
            <div>
              <label> {choice.name} </label>
              <input
                checked={choice.status}
                name={choice.name}
                onChange={this.props.handleCheckboxChange}
                type="checkbox"
              />
            </div>
          ))} */}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default form;
