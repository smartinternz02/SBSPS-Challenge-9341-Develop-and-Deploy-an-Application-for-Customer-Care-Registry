import React, { Component } from 'react'
import Routerapp from './Router/App'
class App extends Component {
  componentDidMount() {
    Window.title = 'Helo'
  }
  render() {
    return (
      <div >

        <Routerapp />


      </div>
    )
  }
}

export default App