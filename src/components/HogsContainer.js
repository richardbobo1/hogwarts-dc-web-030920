import React, { Fragment } from "react";
import App from './App'
import Hog from './Hog'

class HogsContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="ui cards">
          {this.props.allHogs.map(hog => <Hog hog={hog} key={hog.id} clickHog={this.props.clickHog}/>)}
      </div>
    );
  }
}

export default HogsContainer;
