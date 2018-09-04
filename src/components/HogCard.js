import React from 'react'


export default class HogCard extends React.Component{


  render() {
    return (
      <div className="card" onClick={(e) => this.props.onClick(this.props.hog)}>
          <div className="image">
            <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)}/>
          </div>
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            <div className="meta">
            </div>
            <div className="description">
            </div>
          </div>
          <div className="extra content">

          </div>


      </div>
  	)
  }
}

  // <button className="ui button" onClick={()=>this.displayDetails}>Details</button>
//
// <div class="content">
//   <div class="header">{this.props.name}</div>
//   <div class="meta">
//     <a>Friends</a>
//   </div>
//   <div class="description">
//     Matthew is an interior designer living in New York.
//   </div>
// </div>
// <div class="extra content">
//   <span class="right floated">
//     Joined in 2013
//   </span>
//   <span>
//     <i class="user icon"></i>
//     75 Friends
//   </span>
