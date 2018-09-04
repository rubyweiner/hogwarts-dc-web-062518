import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import CardContainer from './CardContainer'
import hogs from '../porkers_data';
import ShowPanel from './ShowPanel'
import Filters from './Filters'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      currentHog: null,
      sort: null,
      filter: null

    }
  }

  displayHog = (hog) => {
    this.setState({
      currentHog: hog
    })
  }


  render() {
    return (
      <div className="body">
        <div className="App">
            <Nav />
            <Filters sortByName={this.sortByName}/>
            {this.state.currentHog ? <ShowPanel currentHog={this.state.currentHog}/> : ""}
            <CardContainer hogs={this.state.hogs} displayHog={this.displayHog}/>
        </div>
      </div>

    )
  }
}

export default App;
