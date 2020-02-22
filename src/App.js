import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";

class App extends Component {
  //lifecycle method
  //this runs when the component is loaded.
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Users />
        <UserItem />
      </div>
    );
  }
}

export default App;
