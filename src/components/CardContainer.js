import React from 'react'
import HogCard from './HogCard'

export default class CardContainer extends React.Component{

  handleClick = (hog) => {
    this.props.displayHog(hog)
  }

  render() {
    
    return (
    <div className="container">
  		<div className="ui link cards">
        {this.props.hogs.map(hog =>
          <HogCard hog={hog} onClick={()=>this.handleClick(hog)}/>
        )}
  		</div>
    </div>
  	)
  }
}
