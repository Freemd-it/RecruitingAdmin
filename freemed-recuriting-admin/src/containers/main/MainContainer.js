import React, { Component } from 'react'
import { MainTemplate, Sidebar, Contents, LoginTemplate } from '../../components'

class MainContainer extends Component {
  state = {
    onLogin: true
  }

  onhandleLogin = (e) => {
    const { onLogin } = this.state
    this.setState({
      onLogin: !onLogin,
    })
  }

  render() {
    const { onLogin, contents } = this.state
    if (onLogin) {
      return (
        <MainTemplate
          sidebar={<Sidebar/>}
          contents={<Contents/>}
        />
      ) 
    }
    return <LoginTemplate
      checkLoginState={this.onhandleLogin}
    />
  }
}

export default MainContainer