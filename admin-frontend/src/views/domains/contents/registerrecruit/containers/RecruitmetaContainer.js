import React, { Component } from 'react';
import { TitleAndAddButton } from '../components/common';
import RecruitmetaList from '../components/recruitmetaList/recruitmetaList';
import { Map, List } from 'immutable';
import './RecruitmetaContainer.scss';
import { getRecruitmeta } from 'lib/api/recruitmeta'

class RecruitmetaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitmetas: [],
    };
  }

  componentDidMount() {
    console.log('did mount')
    getRecruitmeta(this);
  }

  handleAddProject = () => {
    console.log('프로젝트 수정 페이지 이동');
  }

  handleAddRecruitmeta = () => {
    console.log('리크루트 메타 추가 페이지 이동');
  }

  handleEditRecruitmeta = () => {
    console.log('리크루트 메타 수정 페이지 이동');
  }

  render() {
    console.log(this.state);
    return (
      <div className="root_container">
        <h2>사업 및 리크루팅 등록</h2>
        <div className="project_container">
          <TitleAndAddButton title="사업 목록" handleAdd={this.handleAddProject} />
        </div>
        <div className="recruitmeta_container">
          <TitleAndAddButton title="리크루팅 목록" handleAdd={this.handleAddRecruiting} />
          <RecruitmetaList recruitmetas={this.state.recruitmetas}/>
        </div>
      </div>
    );
  }
}

export default RecruitmetaContainer;
