import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Components/home";
import Form from "./Components/form";
import Table from "./Components/table";
// import Edit from './Components/edit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
list: [],
person:{
        name: "",
        surname: "",
        position: "",
        task: "",
        salary: "",
        date: "",
        isChecked: true,
}
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
    const { name, surname, position, task, salary, date, isChecked } =
      this.state;
      event.preventDefault();
      this.setState({
name: name,
surname:surname,
position:position,
task:task,
salary:salary,
date:date,
isChecked:isChecked

      })
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
              handleToggle={this.toggleChange}
            />
          </Route>
          <Route path="/List" component={Table} />
          {/* <Route path="/Edit" component={Edit} /> */}
        </Switch>
      </Router>
    );
  }
}


export default App;
