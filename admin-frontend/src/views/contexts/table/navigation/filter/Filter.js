import React, { Component } from 'react'
import { InputGroup, InputGroupButtonDropdown, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Filter.scss'

class Filter extends Component {
  state = {
    isSearchTag: false,
  }

  onSearchTag = () => {
    const isSearchTag = !this.state.isSearchTag;
    this.setState({ isSearchTag });
  }

  render() {
    const { onChangeKeyword, keyword, onChangeFilterQuery} = this.props
    const { isSearchTag } = this.state
    return (
      <InputGroup className="Filter__input">
          <InputGroupButtonDropdown 
            addonType="prepend" 
            isOpen={isSearchTag} 
            toggle={this.onSearchTag}
          >
            <DropdownToggle className="Filter__searchTag" caret>{keyword}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="retrive" name="검색선택" onClick={onChangeKeyword} disabled>검색선택</DropdownItem>
              <DropdownItem value="departmentName" name="본부" onClick={onChangeKeyword}>본부</DropdownItem>
              <DropdownItem value="teamName" name="팀" onClick={onChangeKeyword}>팀</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <div>
            <Input className="Filter__searchWord" onKeyPress={onChangeFilterQuery}/>
          </div>
        </InputGroup>
    )
  }
}

export default Filter
