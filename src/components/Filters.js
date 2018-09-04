import FilterButton from './FilterButton'
import React from 'react'


export default class Filters extends React.Component{

handleButtonClick = (buttonType) => {
  debugger
  console.log("buttonType")
  this.props.sortByName
}


  render() {
    return (
      <div className="ui three item menu">
        <FilterButton buttonType="Name" onClick={() => this.handleButtonClick}/>
        <FilterButton buttonType="Weight"/>
        <FilterButton buttonType="Greased"/>
      </div>
  	)
  }
}
