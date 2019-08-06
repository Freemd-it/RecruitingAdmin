import React, { Component } from 'react'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';
import { addPermissionCheck, updatePermissionCheck} from 'modules/permission'
import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'
import { validation } from 'lib/service/validation'

import * as axios from 'lib/api/question';
import moment from 'moment'

import './QuestionManageContainer.scss';
import organization from 'lib/service/organization';


// Table관련
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';


const QUESTION = [{
  key: 'departmentName',
  value: '본부',
}, {
  key: 'teamName',
  value: '팀명',
}, {
  key: 'contents',
  value: '질문내용',
  width: '300px',
}, {
  key: 'batch',
  value: '기수',
}, {
  key: 'register',
  value: '등록자',
}, {
  key: 'registerDate',
  value: '등록일자', 
}, {
  key: 'type',
  value: '유형'
}]

const Body = (props) => {
  const { 
    items, 
    columns, 
    attributeData = [],
    onClick = () => {}, 
    onChangeCheck = () => {}, 
  } = props;

  const rows = items.map((item, itemIndex) => {
    const dataSet = {};
    attributeData.forEach((attribute) => {
      dataSet[attribute.key] = item[attribute.value];
    });
    return (
      <TableRow 
        key={`rows__${itemIndex}`}
        onClick={onClick}
        {...dataSet}
        hover
      >
        <TableCell key={`rows__${itemIndex}__checkBox`}>
          <Checkbox onChange={onChangeCheck}/>
        </TableCell>
        {
          columns.map((column, columnIndex) => {
            return (
              <TableCell 
                key={`${itemIndex}__${columnIndex}`}
              >
                {item[column.key]}
              </TableCell>
              );
            }
          )
        }
      </TableRow>
    );
  });
  return rows;
}

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    batch: 0,
    addModal: false,
    updateModal: false,
    keyword: '검색선택',
    query: '',
    questions: [],
    registedData: {
      questionId: '',
      department: '',
      team: '',
      departments: [], // '본부 선택'
      teams: {}, // '팀 선택'
      contents: '',
      type: null,
      types: [101, 102, 103], // [101, 102, 103]
      register: '',
    },
  };

  componentDidMount() {
    const { batch, departments } = JSON.parse(localStorage.getItem('recruitMeta'));
    axios.getQuestionList(batch, this);
  }

  onChangeKeyword = async (e) => {
    console.log('onChangeKeyword');
  }
  
  onChangeFilterQuery = async (e) => {
    console.log('onChangeFilterQuery');
  }

  onCloseModal = () => {
    this.setState((prevState) => {
      const { registedData } = prevState;
      registedData.questionId = '';
      registedData.department = '';
      registedData.team = '';
      registedData.contents = '';
      registedData.type = '';

      return {
        registedData,
        updateModal: false,
        addModal: false,
      }
    });
  }

  onAddModal = (index) => {
    const { departments } = JSON.parse(localStorage.getItem('recruitMeta'));
    this.setState((prevState) => {
      const { registedData } = prevState;
      const departmentData = [];
      const teamData = {};
      departments.forEach(department => {
        const {  departmentName, _id, teams } = department;
        departmentData.push({
          id: _id,
          name: departmentName,
        });
        teamData[departmentName] = [{_id: '', name: '팀 선택'}];
        teams.forEach(team => {
          teamData[departmentName].push({
            id: team._id,
            name: team.teamName
          });
        });
      });
      registedData.departments = [ 
        { id: 'null', name: '본부 선택' }, 
        ...departmentData 
      ];
      registedData.teams = { 
        default: [{ _id: "", name: '팀 선택' }],
        ...teamData 
      };
      return { 
        registedData,
        addModal: true,
      }
    });
  }

  onRegistedData = (e) => {
    const { target } = e;
    const { value, name } = target;
    this.setState((prevState) => {
      const { registedData } = prevState;
      registedData[name] = value;
      return registedData;
    })
  }

  onAddModalConfirm = async (e) => {
    const { batch, registedData } = this.state;
    const { 
      department,
      team,
      contents,
      type
    } = registedData;
    if (!department || !team || !contents || !type) alert('모든 항목을 작성해주세요.');

    const result = await axios.setQuestionInfomation({ 
      batch,
      teamName: team,
      departmentName: department,
      questions: {
        contents,
        type,
        teamName: team,
        register: '안알랴줌',
      }
    }, this);
    if (result.status === 201) {
      console.log(result);
    } else {
      alert('질문 추가하기 실패');
    }
  }

  render() {  
    const questionAddBtn = (
      <Button 
        className={`btn QuestionRegisContainer__addBtn`}
        color="secondary"
        outline
        size={`sm`}
        onClick={this.onAddModal}> 
        질문 추가하기
      </Button>
    )

    const body = (
      <TableBody>
        <Body 
          items={this.state.questions}
          attributeData={[{
            key: "department-id",
            value: "departmentId" 
          }, {
            key: "team-id",
            value: "teamId"
          }, {
            key: "question-id",
            value: "questionId"
          }]}
          columns={QUESTION}
        />
      </TableBody>
    );

    const questionDetail = (
      <QuestionDetail
        registedData={this.state.registedData}
        onRegistedData={this.onRegistedData}
      />
    );

    const AddModalFooter = (
      <ModalCommonFooter
        onConfirmModal={this.onAddModalConfirm}
        onCancelModal={this.onCloseModal}
      />
    )

    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          type={'question'}
          title={'질문 관리'}
          rows={this.state.rows}
          questionAddBtn={questionAddBtn}
          onClickRow={() => console.log('onClickRow')}
          onSearchTag={this.onSearchTag}
          onChangeKeyword={this.onChangeKeyword}
          onChangeFilterQuery={this.onChangeFilterQuery}
          keyword={this.state.keyword}
          body={body}
          cursor
        />

        <Modal
          open={this.state.addModal}
          onClose={this.onCloseModal}
          title={'본부질문 추가하기'}
          contents={questionDetail}
          footer={AddModalFooter}
        />

        <Modal
          open={this.state.updateModal}
          onClose={this.onCloseModal}
          title={'본부질문 수정하기'}
          contents={''}
          footer={''}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer
// import React, { Component } from 'react'
// import Table from 'views/contexts/table'
// import QuestionDetail from '../questionModal/QuestionModal'
// import Modal from 'views/contexts/modal'
// import { Button } from 'reactstrap';
// import { addPermissionCheck, updatePermissionCheck} from 'modules/permission'
// import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'
// import { validation } from 'lib/service/validation'

// import * as axios from 'lib/api/question';
// import moment from 'moment'

// import './QuestionManageContainer.scss';
// import organization from 'lib/service/organization';

// class QuestionRegistContainer extends Component {
//   state = {
//     rows: [],
//     isAddModal: false,
//     isUpdateModal: false,
//     keyword: '검색선택',
//     query: '',
//     registedData: {
//       id: '',
//       department_name: '본부 선택',
//       department_code: '',
//       team: '팀 선택',
//       question: '',
//       used: false,
//       type: '유형 선택',
//       register: '',
//     }
//   };

//   componentDidMount() {
//     const { department } = JSON.parse(localStorage.getItem('user_session'))
//     axios.getQuestionList({q: department === '900' ? '' : organization[department].name, type: 'department' }, this)
//   }

//   onCloseModal = () => {
//     this.setState(prevState => {
//       const data = {
//         isUpdateModal: false,
//         isAddModal: false,
//       }
//       return data;
//     });
//   }

//   onClickToAddModal = (index) => {
//     const { rows } = this.state
//     if(addPermissionCheck(rows)) {
//       const { department, team } = JSON.parse(localStorage.getItem('user_session'))
//       this.setState(prevState => {
//         const data = {
//           registedData: {
//             department_name: organization[department].name,
//             department, 
//             team: team ? team : '팀 선택',
//             question: '질문을 작성해주세요 :)',
//             used: false,
//             type: 'text',
//             id: rows.length,
//           },
//           isAddModal: true,
//         }
//         return data
//       })
//     } else {
//       alert('당신은 권한이 없어요\n상관에게 문의하세요 :(')
//     }
    
//   }

//   onClickToUpdateModal = (e, index) => {
//     const { id } = e.currentTarget
//     const { rows } = this.state
//     if(updatePermissionCheck(rows, id)) {
//       axios.getQuestionDetail(id, this)
//     } else {
//       alert('수정할 수 있는 권한이 없는 질문입니다 :(')
//     }
//   }

//   onRegistedData = (e) => {
//     const { name, value } = e.target
//     const mvalue = (name !== 'used' ? value : value === 'true');

//     this.setState(prevState => {
//       const registedData = { ...prevState.registedData};
//       registedData[name] = mvalue;
//       return { registedData };
//     });
//   }

//   onClickModalToAddConfirm = async () => {
//     const { registedData } = this.state
//     if (validation(registedData)) {
//       const result = await axios.setQuestionInfomation(registedData, this)
//       if (result.status === 201) {
//         this.setState((prevState) => {
//           const { username } = JSON.parse(localStorage.getItem('user_session'))
//           const { registedData } = this.state
          
//           const rowsData = prevState.rows
          
//           registedData['batch'] = 20
//           registedData['registedDate'] = moment().format('YYYY-MM-DD HH:mm:ss')
//           registedData['register'] = username
  
//           rowsData.push(registedData)
//           const newData = {
//             rowsData,
//             isAddModal: !prevState.isAddModal,
//           } 
//           return newData
//         })
//       } else {
//         alert('질문 추가하기 오류 났어욥')
//       }
//     }
//     else {
//       alert('누락된 항복이 있습니다.\n다시 확인해 주세요.')
//     }
//   }

//   onClickModalToUpdateConfirm = (event) => {
//     const { registedData } = this.state
//     if(registedData.team === '팀 선택') {
//       alert('누락된 항목이 있습니다.')
//     } else {
//       axios.modifyQuestionInfomation(registedData, this)
//     }
//   }

//   onClickModalToClose = () => {
//     this.setState({
//       isUpdateModal: false,
//       isAddModal: false,
//     })
//   }
  
//   onChangeKeyword = async (e) => {
//     this.setState({
//       keyword: e.target.name,
//       type: e.target.value,
//     })
//   }
  
//   onChangeFilterQuery = async (e) => {
//     const { type } = this.state
//     if(e.key === 'Enter') {
//       if(!type) {
//         alert('검색 조건을 선택해 주세요.')
//       } else {
//         axios.getQuestionList({ type, q: e.target.value}, this)
//       }
//     } else {
//       this.setState({
//         query: e.target.value
//       })
//     }
//   }

//   render() {  
//     const questionAddBtn = (
//       <Button 
//         className={`btn QuestionRegisContainer__addBtn`}
//         color="secondary"
//         outline
//         size={`sm`}
//         onClick={this.onClickToAddModal}> 
//         질문 추가하기
//       </Button>
//     )

//     const questionDetail = (
//       <QuestionDetail
//         registedData={this.state.registedData}
//         onRegistedData={this.onRegistedData}
//       />
//     )

//     const AddModalFooter = (
//       <ModalCommonFooter
//         onConfirmModal={this.onClickModalToAddConfirm}
//         onCancelModal={this.onClickModalToClose}
//       />
//     )
//     const UpdateModalFooter = (
//       <ModalCommonFooter
//         onConfirmModal={this.onClickModalToUpdateConfirm}
//         onCancelModal={this.onClickModalToClose}
//       />
//     )

//     return (
//       <div className={`QuestionRegisContainer__addBox`}>
//         <Table
//           type={'question'}
//           title={'질문 관리'}
//           rows={this.state.rows}
//           questionAddBtn={questionAddBtn}
//           onClickRow={this.onClickToUpdateModal}
//           onSearchTag={this.onSearchTag}
//           onChangeKeyword={this.onChangeKeyword}
//           onChangeFilterQuery={this.onChangeFilterQuery}
//           keyword={this.state.keyword}
//           cursor
//         />

//         <Modal
//           open={this.state.isUpdateModal}
//           onClose={this.onCloseModal}

//           title={'본부질문 수정하기'}
//           contents={questionDetail}

//           footer={UpdateModalFooter}
//         />

//         <Modal
//           open={this.state.isAddModal}
//           onClose={this.onCloseModal}

//           title={'본부질문 추가하기'}
//           contents={questionDetail}

//           footer={AddModalFooter}
//         />
//       </div>
//     )
//   }
// }

// export default QuestionRegistContainer