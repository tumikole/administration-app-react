import React, { Component } from "react";
// import Navbar from './nav'


class login extends Component {
  render() {
    return (
      <div>
          {/* <Navbar
            navBar={[
            
            ]}
          /> */}
          <br/>
        <form>
          <input type="email" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default login;
