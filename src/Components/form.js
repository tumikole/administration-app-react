import React, { Component } from 'react';
import Navbar from './nav'
import '../CSS/form.css'
class form extends Component {

  
  render() {
    const {name, surname, position, task, salary, date, isChecked } = this.props.mainState;
    console.log(this.props.mainState )
    return (
<div>
  <div>
      <Navbar
      navBar={[{name:'home',location:"/Home"},{name:'View List',location:"/List"}]} />
</div>
<form>
  <label 
  for="name">
    First name:
  <input 
  type="text" 
  name="name" 
  value={name}
  onChange={this.props.handleChange}
  />
  </label>
  <br/>
  <label 
  for="surname">
    Last name:
  <input 
  type="text" 
  name="surname" 
  value={surname} 
  onChange={this.props.handleChange}

  />
  </label>
  <br/>
  <label 
  for="position">Position:
  <input 
  type="text" 
  name="position"
  value={position} 
  onChange={this.props.handleChange}
  />
  </label>
  <br/>
  <label 
  for="tsk">Task:
  <input 
  type="text" 
  name="Task" 
  value={task} 
  onChange={this.props.handleChange}
  />
  </label>
  <br/>
  <label 
  for="salary">Salary:
  <input 
  type="number" 
  name="salary" 
  value={salary} 
  onChange={this.props.handleChange}
  />
  </label>
  <br/>
  <label 
  for="date">Date:
  <input type="date"
   name="date" 
  value={date} 
  onChange={this.props.handleChange}
  />
  </label>
    <br/>
    <label 
  for="complete">
  <input 
  name={isChecked}
   type="checkbox"
   defaultChecked={isChecked}
   onChange={this.props.toggleChange}
   />Completed
  </label>
  <br/>
  <input type="submit" value="Submit" onSubmit={this.props.handleSubmit}/>
</form>
    </div>
    );
  }
}

export default form;