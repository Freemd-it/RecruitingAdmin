import React, { Component } from 'react'
import { MainTemplate, Sidebar, Contents } from '../../components'

class MainContainer extends Component {

  render() {
    return (
      <MainTemplate 
        sidebar={<Sidebar/>}
        contents={<Contents/>}
      />
    );
  }
}

export default MainContainer