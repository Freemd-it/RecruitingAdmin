import React, { Component } from 'react';
import { MainTemplate, Sidebar, Contents, LoginTemplate } from './components'
import './App.css'

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
    return <LoginTemplate onhandleLogin={this.onhandleLogin}/>
  }
}
export default App;
