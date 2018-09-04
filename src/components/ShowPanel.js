import React from 'react'

export default class ShowPanel extends React.Component{


  render() {
    return (
  	  <div className="show">
       <div className="ui card">
       <div className="image">
        <img src={require(`../hog-imgs/${this.props.currentHog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
       </div>
       <div className="content">
         <span className="header">{this.props.currentHog.name}</span>
         <div className="meta">
           <span className="date">{this.props.currentHog.specialty}</span>
         </div>
         <div className="description">
           Greased: {this.props.currentHog.greased === true ? "Yes" : "No"}<br/>
           Weight: {this.props.currentHog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}<br/>
           Highest Medal Achieved: {this.props.currentHog["highest medal achieved"]}
         </div>
       </div>
       </div>
      </div>
  	)
  }
}
