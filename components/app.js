import React, { Component } from 'react'

class App extends Component {
  render () {
    const {state: {user, larps, characters}} = this.props
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>

        <h2>You are logged in as {user.name}</h2>

        <h2>There are {larps.length} larps</h2>
        <ul>
          {larps.map(larp => (
            <li key={larp.id}>{larp.name}</li>
          ))}
        </ul>
      </div>

    )
  }
}

export default App
