import React, { Component } from 'react';
import Sidebar from './views/domains/sidebar'
import MainTemplate from './views/contexts/templates/mainTemplate'
import Contents from './views/domains/contents'
import Login from './views/domains/login'

import './App.scss'

class App extends Component {
  state = {
    onLogin: false
  }

  onhandleLogin = (e) => {
    const { onLogin } = this.state
    this.setState({
      onLogin: !onLogin,
    });
  }

  render() {
    const { onLogin } = this.state
    if (onLogin) {
      return (
        <MainTemplate
          sidebar={<Sidebar/>}
          contents={<Contents/>}
        />
      ) 
    }
    return <Login onhandleLogin={this.onhandleLogin}/>
  }
}
export default App;
