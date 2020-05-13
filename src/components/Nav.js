import piggy from "../porco.png";
import React from "react";
import App from './App';

const Nav = (props) => {

  
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br></br>
      <br></br>
      <div className="menu">
      <button onClick={props.sortByGreased}>Sort by Greased</button>
      <button onClick={props.sortByName}>Sort by Name</button>
      <button onClick={props.sortByWeight}>Sort by Weight</button>
      </div>
    </div>
  );
};

export default Nav;
