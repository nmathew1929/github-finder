import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";

class App extends Component {
  //lifecycle method
  //this runs when the component is loaded.
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Users />
      </div>
    );
  }
}

export default App;
