import React from 'react'


export default class FilterButton extends React.Component{

  render() {
    return (
        <a className="item" onClick={(e) => this.props.onClick(this.props.buttonType)}>{this.props.buttonType}</a>
  	)
  }
}
