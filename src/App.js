import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./Components/home";
import Form from "./Components/form";
import Table from "./Components/table";
// import Edit from './Components/edit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
      surname: "",
      position: "",
      task: "",
      salary: "",
      date: "",
      isChecked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, surname, position, task, salary, date, isChecked } =
      this.state;
    let newState = {
      id: uuidv4(),
      name,
      surname,
      position,
      task,
      salary,
      date,
      isChecked,
    };
    if (name && surname && position && task && salary && date) {
      this.setState({
        ...this.state,
        list: [...this.state.list, newState],
      });
      this.setState({
        name: "",
        surname: "",
        position: "",
        task: "",
        salary: "",
        date: "",
      });
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Form">
            <Form
              mainState={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Route>
          <Route path="/List">
            <Table list={this.state.list} handleToggle={this.toggleChange}
 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
