import React, { Component } from 'react';
import Navbar from './nav';
import '../CSS/home.css';


class Home extends Component {
  render() {
      console.log('Home', this.props)
        return (
            <div>
                <Navbar navBar={[{name:'Add',location:"/Form"},{name:'View List',location:"/List"}]} />
           
            <br/>
            
            <div>
            <h1 style={{ textAlign:'center',}}>Employee Administrator</h1>
            </div>
            </div>
        );
    }
}

export default Home;