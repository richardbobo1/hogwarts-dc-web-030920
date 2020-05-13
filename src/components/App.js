import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {

  constructor(){
    super()
    this.state = {
     hogs: hogs 
    }
  }

  sortByGreased = () => {
    console.log("sorting by greased")
    let resetHogs = hogs 
    let greasedArr = []
    let checkForGreased = this.state.hogs.map(hog => {
      if (hog.greased === true){
        greasedArr.push(hog)
        // return hog
      }
    })
    this.setState({hogs: greasedArr})
  }


  sortByName = () => {
    console.log("sort by name")
    let resetHogs = hogs 
    let sortedNameArr = resetHogs.sort((a, b) => (a.name > b.name)? 1 : (a.name === b.name) ? ((a.name > b.name) ? 1:-1) : -1 )
    this.setState({hogs: sortedNameArr})
  }

  sortByWeight = () =>{
    console.log("hit sort by weight")
    let resetHogs = hogs 
    let sortedWeightArr = resetHogs.sort((a, b) => (a.weight > b.weight)? 1 : (a.weight === b.weight) ? ((a.weight > b.weight) ? 1:-1) : -1 )
    this.setState({hogs: sortedWeightArr})
  }


  render() {
    return (
      <div className="App">
        <Nav sortByGreased={this.sortByGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
        <HogsContainer allHogs={this.state.hogs} clickHog={this.handleClick}/>
      </div>
    );
  }
  
}

export default App;

// * create an index displaying all hog tiles
// * render each hog name and picture in a tile
// * show the hog's details upon a user's click
// * filter the hogs that are greased
// * sort the hogs based on name
// * sort the hogs based on weight 