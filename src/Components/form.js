import React, { Component } from "react";
import Navbar from "./nav";
import Save from '../static/SAVE.svg'
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

        <h1 style={{ color:'red', textAlign: "center" }}>Add Employee</h1>
        <div className="mainForm">
          <br/>
        <form >
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
          Programming Language:
          <select
            style={{
              borderColor: position.length < 6 ? "red" : "green",
            }}
            class="form-control"
            name="language"
            value={language}
            onChange={this.props.handleChange}
          >
            <option></option>
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
          <input
            checked={isSelectAll}
            name="checkboxAll"
            onChange={(e) => this.props.handleCheckboxAll(e)}
            type="checkbox"
          />
          {foodChoices.map((choice) => (
            <div>
              <label> {choice.name} </label>
              <input
                checked={choice.status}
                name={choice.name}
                onChange={this.props.handleCheckboxChange}
                type="checkbox"
              />
            </div>
          ))}
          <br />
         
          <div className="edit-container">
                      <img className="svg1" src={Save} alt="" onClick={this.props.handleSubmit}/>
                    </div>
                   
        </form>
        <br/>
        </div>
      </div>
    );
  }
}

export default form;
