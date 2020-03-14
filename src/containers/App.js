import React, { Component } from 'react'
import Cardlist from '../components/CardList';
import { SearchBox } from '../components/Searchbox'
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './app.css';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
          <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App