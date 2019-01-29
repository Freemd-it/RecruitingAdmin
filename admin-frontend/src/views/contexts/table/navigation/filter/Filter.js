import React, { Component } from 'react'
import { InputGroup, InputGroupButtonDropdown, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Filter extends Component {
  state = {
    isSearchTag: false,
    keyword: "검색 선택",
  }

  onSearchTag = () => {
    const isSearchTag = !this.state.isSearchTag;
    this.setState({ isSearchTag });
  }

  onChangeKeyword = (e) => {
    this.setState({
      keyword: e.target.name
    })
  }

  render() {
    const { isSearchTag } = this.state

    return (
      <InputGroup>
          <InputGroupButtonDropdown 
            addonType="prepend" 
            isOpen={isSearchTag} 
            toggle={this.onSearchTag}
          >
            <DropdownToggle className="CustomTable__searchTag" caret>{this.state.keyword}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="retrive" name="" onClick={this.onChangeKeyword}>검색</DropdownItem>
              <DropdownItem value="department" name="본부" onClick={this.onChangeKeyword}>본부</DropdownItem>
              <DropdownItem value="team" name="팀" onClick={this.onChangeKeyword}>팀</DropdownItem>
              <DropdownItem value="age" name="나이" onClick={this.onChangeKeyword}>나이</DropdownItem>
              <DropdownItem value="unit" name="기수" onClick={this.onChangeKeyword}>기수</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <div>
            <Input className="CustomTable__searchWord"/>
          </div>
        </InputGroup>
    )
  }
}

export default Filter