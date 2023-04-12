import {Component} from 'react'

import Welcome from './components/Welcome/index'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
      </div>
    )
  }
}
Welcome.defaultProps = {
  greeting: 'Hi',
  name: 'Kaladhar',
}

export default App
