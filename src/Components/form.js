import React, { Component } from "react";
import Navbar from "./nav";
import Save from "../static/SAVE.svg";
import {Link} from "react-router-dom";
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
      language,
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
              { name: "Edit", location: "/Edit" },
            ]}
          />
        </div>
        <br />
        <hr />

        <h1 style={{ color: "red", textAlign: "center" }}>Add Employee</h1>
        <div className="mainForm">
          <br />
          <form>
            <input
              class="form-control"
              style={{
                borderColor: name.length < 6 ? "red" : "green",
              }}
              type="text"
              name="name"
              value={name}
              onChange={this.props.handleChange}
              placeholder="Enter your first name"
            />
            <br />
            <input
              style={{
                borderColor: surname.length < 6 ? "red" : "green",
              }}
              class="form-control"
              type="text"
              name="surname"
              value={surname}
              onChange={this.props.handleChange}
              placeholder="Enter your last name"
            />
            <br />
            <select
              style={{
                borderColor: position.length < 6 ? "red" : "green",
              }}
              class="form-control"
              name="language"
              value={language}
              onChange={this.props.handleChange}
            >
              <option>Select Programming Language</option>
              <option>Javascript</option>
              <option>Python</option>
              <option>C#</option>
              <option>C++</option>
              <option>Java</option>
              <option>Visual Basic</option>
              <option>PHP</option>
              <option>SQL</option>
              <option>Assembly</option>
              <option>Groovy</option>
            </select>
            <br />
            
            <select
              style={{
                borderColor: position.length < 6 ? "red" : "green",
              }}
              class="form-control"
              name="position"
              value={position}
              onChange={this.props.handleChange}
            >
              <option>Select Position</option>
              <option>Senior Developer</option>
              <option>Junior Developer</option>
            </select>
            <br />
            
            <input
              style={{
                borderColor: task.length < 6 ? "red" : "green",
              }}
              class="form-control"
              type="text"
              name="task"
              value={task}
              onChange={this.props.handleChange}
              placeholder="Task"
            />
            <br />
            
            <input
              style={{
                borderColor: salary.length < 3 ? "red" : "green",
              }}
              class="form-control"
              type="number"
              name="salary"
              value={salary}
              onChange={this.props.handleChange}
              placeholder="Salary"
            />
            <br />
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
            <div className="checkbox">
              <label>
            <input
              checked={isSelectAll}
              name="checkboxAll"
              onChange={(e) => this.props.handleCheckboxAll(e)}
              type="checkbox"
            />
            SelectAll</label>
            {foodChoices.map((choice) => (
              <div>
                <label> 
                <input
                  checked={choice.status}
                  name={choice.name}
                  onChange={this.props.handleCheckboxChange}
                  type="checkbox"
                />
                {choice.name} </label>
              </div>
            ))}
            </div>
            <br />
            <Link to="/List">
            
              <img
                className="svg1"
                src={Save}
                alt=""
                onClick={this.props.handleSubmit}
              />
              
           
            </Link>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default form;
