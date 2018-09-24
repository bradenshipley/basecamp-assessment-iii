import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";

class Header extends React.Component{
  render() {
    return(
      <header> This is the Header </header>
    )
  }
}
class Footer extends React.Component {
  render() {
    return(
      <footer>This is the Footer</footer>
    )
  }
}

class App extends React.Component {
  render() {
    const name= "Braden";
    return (
      <div className="Body">
   
      <Header />
        <h1>Hello {name}.</h1>
      <Footer />  
      </div>
      
      
    );
  }
}


export default App;
