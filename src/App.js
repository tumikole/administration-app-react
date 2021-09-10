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
      isSelectAll: false,
      foodChoices: [{ status: false, name: 'pizza' },
      { status: false, name: 'burger' }] 
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.displayCheckedItems = this.displayCheckedItems.bind(this)
    this.handleCheckboxAll = this.handleCheckboxAll.bind(this)
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleCheckboxChange (e) {
    const newCheckBoxes = this.state.foodChoices
      .map(choice => {
        
        if (choice.name === e.target.name) {
          return { ...choice, status: e.target.checked }
        }

        return choice
      })
     
    this.setState({ foodChoices: newCheckBoxes })
  }

  handleCheckboxAll (e) {
    const newCheckBoxs = this.state.foodChoices
      .map(choice => {
        return { ...choice, status: e.target.checked }
      }
      )

    this.setState({ foodChoices: newCheckBoxs, isSelectAll: e.target.checked })
  }

  displayCheckedItems () {
    var selectedItems = this.state.foodChoices.filter(choice => choice.status == true)
    return (<div>
      {selectedItems.map(item => <div> {item.name} </div>)}
    </div>)

  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { name, surname, position, task, salary, date } =
      this.state;
    let newState = {
      id: uuidv4(),
      name,
      surname,
      position,
      task,
      salary,
      date,
      
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

          <Route path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Form">
            <Form
              mainState={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCheckboxChange={this.handleCheckboxChange}
              handleCheckboxAll={this.handleCheckboxAll}
            />
          </Route>
          <Route path="/List">
          <Table list={this.state.list} displayCheckedItems={this.displayCheckedItems}
/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
