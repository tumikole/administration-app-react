import React, { Component } from 'react';
import Navbar from './nav';
import '../CSS/home.css';


class Home extends Component {
  render() {
      console.log('Home', this.props)
        return (
            <div className="homeBody">
                <Navbar navBar={[{name:'Add',location:"/Form"},
                {name:'View List',location:"/List"},
                { name: "Edit", location: "/Edit" }]} />
           
            <br/>
            
            <div>
            <h1 style={{ fontSize:80, color:'red', textAlign:'center',}}><u>Admin <span style={{ color:'blue',}}>App</span></u></h1>
            </div>
            </div>
        );
    }
}

export default Home;