import React, { Component } from "react";
import HogsContainer from './HogsContainer'
//
// import AugustusGloop from '../hog-imgs/augustus_gloop.jpg'
// // import BayOfPigs from '../bay_of_pigs.jpg'
// // import Cherub from '../cherub.jpg'
// // import GalaxyNote from '../galaxy_note.jpg'

class Hog extends Component{

    constructor(){
        super()
        this.state = {
            detailsDisplayed: false, 
            hogCardDisplayed: true 
        }
    }

    handleClick = () => {
   
        this.setState({detailsDisplayed: true})
        console.log(this.state.detailsDisplayed)
    }

    setToFalse = () => {
        this.setState({detailsDisplayed: false})
        console.log("set to false")
    }

    getImage = hogImage =>{
        let formattedName = this.props.hog.name.replace(/ /g, "_").toLowerCase() 
        let imgUrl = require(`../hog-imgs/${formattedName}.jpg`)
        return imgUrl      
    }

    toggleDisplay = () => {
        if(this.state.hogCardDisplayed === true){
            this.setState({hogCardDisplayed: false})
        }else if(this.state.hogCardDisplayed === false){
            this.setState({hogCardDisplayed: true})
            // renderCard()
        }

        console.log(this.state.hogCardDisplayed)
    }

    // renderCard = () => {
    //     <div className="inner-card">
    //     <div className="image"><img src= {this.getImage()} /></div>
    //     <div className="name"> Name: {this.props.hog.name} </div>
    // {this.state.detailsDisplayed === true ? <div onClick={this.setToFalse}><p>Specialty: {this.props.hog.specialty}</p> <p>Greased: {this.props.hog.greased ? "True" : "False"} </p> <p>Weight: {this.props.hog.weight}</p> <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p> </div> : <div onClick={this.handleClick}>Show details </div>}
    //     </div>
    // }
    

    render() {

        // console.log(formattedName)
        return (
        <div className="card" >
            <button onClick={this.toggleDisplay}>Hide or Show this hog</button>
            { this.state.hogCardDisplayed ? 

            <div className="ui card">
            <div className="image"><img src= {this.getImage()} /></div>
            <div className="content"></div>
            <a className="header"> Name: {this.props.hog.name} </a>

        {this.state.detailsDisplayed === true ? <div onClick={this.setToFalse} className="content"><p>Specialty: {this.props.hog.specialty}</p> <p>Greased: {this.props.hog.greased ? "True" : "False"} </p> <p>Weight: {this.props.hog.weight}</p> <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p> </div> : <div onClick={this.handleClick} className="content">Show details </div>}
            </div>
            : "" }



        </div>
        )
    }
}

export default Hog
{/* name: 'Mudblood',
specialty: 'Mediocre magic',
greased: false,
weight: 2.0,
'highest medal achieved': 'bronze' 
*/}