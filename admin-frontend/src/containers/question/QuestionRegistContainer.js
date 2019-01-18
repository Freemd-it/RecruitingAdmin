import React, { Component } from 'react'
import { QuestionTable } from '../../components'

const user = {
  id: '1',
  name: 'dongsu',
  gender: 'M',
}

class QuestionRegistContainer extends Component {
  state = {
    rows: [user].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 10,
  };

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { match } = this.props
    const { page, rows, rowsPerPage} = this.state
    return (
      <div>
        {
          match.params.type === 'info' ||
          <QuestionTable
            page={page}
            rows={rows}
            rowsPerPage={rowsPerPage}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage} />
        }
      </div>
    )
  }
}

export default QuestionRegistContainer