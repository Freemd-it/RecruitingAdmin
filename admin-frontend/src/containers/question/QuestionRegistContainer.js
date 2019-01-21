import React, { Component } from 'react'
import { Table, Modal, QuestionDetail } from '../../components'
import { Button } from 'reactstrap';
import './QuestionRegistContainer.scss';

const mocData = [{
  question: { id: 1, department: '1_IT', team: '1_팀', question: '1_질문함?', cardinality: '1', writer: '작성자1', create: '2019-01-01', use_question: true}},{
  question: { id: 2, department: '2_IT', team: '2_팀', question: '2_질문함?', cardinality: '2', writer: '작성자2', create: '2019-01-01', use_question: true}},{
  question: { id: 3, department: '3_IT', team: '3_팀', question: '3_질문함?', cardinality: '3', writer: '작성자3', create: '2019-01-01', use_question: true}},{
  question: { id: 4, department: '4_IT', team: '4_팀', question: '4_질문함?', cardinality: '4', writer: '작성자4', create: '2019-01-01', use_question: true}},{
  question: { id: 5, department: '5_IT', team: '5_팀', question: '5_질문함?', cardinality: '5', writer: '작성자5', create: '2019-01-01', use_question: true}},{
  question: { id: 6, department: '6_IT', team: '6_팀', question: '6_질문함?', cardinality: '6', writer: '작성자6', create: '2019-01-01', use_question: true}},{
  question: { id: 7, department: '7_IT', team: '7_팀', question: '7_질문함?', cardinality: '7', writer: '작성자7', create: '2019-01-01', use_question: true}},{
  question: { id: 8, department: '8_IT', team: '8_팀', question: '8_질문함?', cardinality: '8', writer: '작성자8', create: '2019-01-01', use_question: true}},{
  question: { id: 9, department: '9_IT', team: '9_팀', question: '9_질문함?', cardinality: '9', writer: '작성자9', create: '2019-01-01', use_question: true}},{
  question: { id: 10, department: '10_IT', team: '10_팀', question: '10_질문함?', cardinality: '10', writer: '작성자10', create: '2019-01-01', use_question: true}},{
  question: { id: 11, department: '11_IT', team: '11_팀', question: '11_질문함?', cardinality: '11', writer: '작성자11', create: '2019-01-01', use_question: true}},{
  question: { id: 12, department: '12_IT', team: '12_팀', question: '12_질문함?', cardinality: '12', writer: '작성자12', create: '2019-01-01', use_question: true}},{
  question: { id: 13, department: '13_IT', team: '13_팀', question: '13_질문함?', cardinality: '13', writer: '작성자13', create: '2019-01-01', use_question: true}},{
  question: { id: 14, department: '14_IT', team: '14_팀', question: '14_질문함?', cardinality: '14', writer: '작성자14', create: '2019-01-01', use_question: true}},{
  question: { id: 15, department: '15_IT', team: '15_팀', question: '15_질문함?', cardinality: '15', writer: '작성자15', create: '2019-01-01', use_question: true}},{
  question: { id: 16, department: '16_IT', team: '16_팀', question: '16_질문함?', cardinality: '16', writer: '작성자16', create: '2019-01-01', use_question: true}},{
  question: { id: 17, department: '17_IT', team: '17_팀', question: '17_질문함?', cardinality: '17', writer: '작성자17', create: '2019-01-01', use_question: true}},{
  question: { id: 18, department: '18_IT', team: '18_팀', question: '18_질문함?', cardinality: '18', writer: '작성자18', create: '2019-01-01', use_question: true}},{
  question: { id: 19, department: '19_IT', team: '19_팀', question: '19_질문함?', cardinality: '19', writer: '작성자19', create: '2019-01-01', use_question: true}},{
  question: { id: 20, department: '20_IT', team: '20_팀', question: '20_질문함?', cardinality: '20', writer: '작성자20', create: '2019-01-01', use_question: true}},{
  question: { id: 21, department: '21_IT', team: '21_팀', question: '21_질문함?', cardinality: '21', writer: '작성자21', create: '2019-01-01', use_question: true}},{
  question: { id: 22, department: '22_IT', team: '22_팀', question: '22_질문함?', cardinality: '22', writer: '작성자22', create: '2019-01-01', use_question: true}},{
  question: { id: 23, department: '23_IT', team: '23_팀', question: '23_질문함?', cardinality: '23', writer: '작성자23', create: '2019-01-01', use_question: true}},{
  question: { id: 24, department: '24_IT', team: '24_팀', question: '24_질문함?', cardinality: '24', writer: '작성자24', create: '2019-01-01', use_question: true}},{
  question: { id: 25, department: '25_IT', team: '25_팀', question: '25_질문함?', cardinality: '25', writer: '작성자25', create: '2019-01-01', use_question: true}},{
  question: { id: 26, department: '26_IT', team: '26_팀', question: '26_질문함?', cardinality: '26', writer: '작성자26', create: '2019-01-01', use_question: true}},{
  question: { id: 27, department: '27_IT', team: '27_팀', question: '27_질문함?', cardinality: '27', writer: '작성자27', create: '2019-01-01', use_question: true}},{
  question: { id: 28, department: '28_IT', team: '28_팀', question: '28_질문함?', cardinality: '28', writer: '작성자28', create: '2019-01-01', use_question: true}},{
  question: { id: 29, department: '29_IT', team: '29_팀', question: '29_질문함?', cardinality: '29', writer: '작성자29', create: '2019-01-01', use_question: true}},{
  question: { id: 30, department: '30_IT', team: '30_팀', question: '30_질문함?', cardinality: '30', writer: '작성자30', create: '2019-01-01', use_question: true}},{
  question: { id: 31, department: '31_IT', team: '31_팀', question: '31_질문함?', cardinality: '31', writer: '작성자31', create: '2019-01-01', use_question: true}},{
  question: { id: 32, department: '32_IT', team: '32_팀', question: '32_질문함?', cardinality: '32', writer: '작성자32', create: '2019-01-01', use_question: true}},{
  question: { id: 33, department: '33_IT', team: '33_팀', question: '33_질문함?', cardinality: '33', writer: '작성자33', create: '2019-01-01', use_question: true}},{
  question: { id: 34, department: '34_IT', team: '34_팀', question: '34_질문함?', cardinality: '34', writer: '작성자34', create: '2019-01-01', use_question: true}},{
  question: { id: 35, department: '35_IT', team: '35_팀', question: '35_질문함?', cardinality: '35', writer: '작성자35', create: '2019-01-01', use_question: true}},{
  question: { id: 36, department: '36_IT', team: '36_팀', question: '36_질문함?', cardinality: '36', writer: '작성자36', create: '2019-01-01', use_question: true}},{
  question: { id: 37, department: '37_IT', team: '37_팀', question: '37_질문함?', cardinality: '37', writer: '작성자37', create: '2019-01-01', use_question: true}},{
  question: { id: 38, department: '38_IT', team: '38_팀', question: '38_질문함?', cardinality: '38', writer: '작성자38', create: '2019-01-01', use_question: true}},{
  question: { id: 39, department: '39_IT', team: '39_팀', question: '39_질문함?', cardinality: '39', writer: '작성자39', create: '2019-01-01', use_question: true}},{
  question: { id: 40, department: '40_IT', team: '40_팀', question: '40_질문함?', cardinality: '40', writer: '작성자40', create: '2019-01-01', use_question: true}},{
  question: { id: 41, department: '41_IT', team: '41_팀', question: '41_질문함?', cardinality: '41', writer: '작성자41', create: '2019-01-01', use_question: true}},{
  question: { id: 42, department: '42_IT', team: '42_팀', question: '42_질문함?', cardinality: '42', writer: '작성자42', create: '2019-01-01', use_question: true}},{
  question: { id: 43, department: '43_IT', team: '43_팀', question: '43_질문함?', cardinality: '43', writer: '작성자43', create: '2019-01-01', use_question: true}},{
  question: { id: 44, department: '44_IT', team: '44_팀', question: '44_질문함?', cardinality: '44', writer: '작성자44', create: '2019-01-01', use_question: true}},{
  question: { id: 45, department: '45_IT', team: '45_팀', question: '45_질문함?', cardinality: '45', writer: '작성자45', create: '2019-01-01', use_question: true}},{
  question: { id: 46, department: '46_IT', team: '46_팀', question: '46_질문함?', cardinality: '46', writer: '작성자46', create: '2019-01-01', use_question: true}},{
  question: { id: 47, department: '47_IT', team: '47_팀', question: '47_질문함?', cardinality: '47', writer: '작성자47', create: '2019-01-01', use_question: true}},{
  question: { id: 48, department: '48_IT', team: '48_팀', question: '48_질문함?', cardinality: '48', writer: '작성자48', create: '2019-01-01', use_question: true}},{
  question: { id: 49, department: '49_IT', team: '49_팀', question: '49_질문함?', cardinality: '49', writer: '작성자49', create: '2019-01-01', use_question: true}},{
  question: { id: 50, department: '50_IT', team: '50_팀', question: '50_질문함?', cardinality: '50', writer: '작성자50', create: '2019-01-01', use_question: true}},{
  question: { id: 51, department: '51_IT', team: '51_팀', question: '51_질문함?', cardinality: '51', writer: '작성자51', create: '2019-01-01', use_question: true}},{
  question: { id: 52, department: '52_IT', team: '52_팀', question: '52_질문함?', cardinality: '52', writer: '작성자52', create: '2019-01-01', use_question: true}},{
  question: { id: 53, department: '53_IT', team: '53_팀', question: '53_질문함?', cardinality: '53', writer: '작성자53', create: '2019-01-01', use_question: true}},{
  question: { id: 54, department: '54_IT', team: '54_팀', question: '54_질문함?', cardinality: '54', writer: '작성자54', create: '2019-01-01', use_question: true}},{
  question: { id: 55, department: '55_IT', team: '55_팀', question: '55_질문함?', cardinality: '55', writer: '작성자55', create: '2019-01-01', use_question: true}},{
  question: { id: 56, department: '56_IT', team: '56_팀', question: '56_질문함?', cardinality: '56', writer: '작성자56', create: '2019-01-01', use_question: true}},{
  question: { id: 57, department: '57_IT', team: '57_팀', question: '57_질문함?', cardinality: '57', writer: '작성자57', create: '2019-01-01', use_question: true}},{
  question: { id: 58, department: '58_IT', team: '58_팀', question: '58_질문함?', cardinality: '58', writer: '작성자58', create: '2019-01-01', use_question: true}},{
  question: { id: 59, department: '59_IT', team: '59_팀', question: '59_질문함?', cardinality: '59', writer: '작성자59', create: '2019-01-01', use_question: true}},{
  question: { id: 60, department: '60_IT', team: '60_팀', question: '60_질문함?', cardinality: '60', writer: '작성자60', create: '2019-01-01', use_question: true}},{
  question: { id: 61, department: '61_IT', team: '61_팀', question: '61_질문함?', cardinality: '61', writer: '작성자61', create: '2019-01-01', use_question: true}},{
  question: { id: 62, department: '62_IT', team: '62_팀', question: '62_질문함?', cardinality: '62', writer: '작성자62', create: '2019-01-01', use_question: true}},{
  question: { id: 63, department: '63_IT', team: '63_팀', question: '63_질문함?', cardinality: '63', writer: '작성자63', create: '2019-01-01', use_question: true}},{
  question: { id: 64, department: '64_IT', team: '64_팀', question: '64_질문함?', cardinality: '64', writer: '작성자64', create: '2019-01-01', use_question: true}},{
  question: { id: 65, department: '65_IT', team: '65_팀', question: '65_질문함?', cardinality: '65', writer: '작성자65', create: '2019-01-01', use_question: true}},{
  question: { id: 66, department: '66_IT', team: '66_팀', question: '66_질문함?', cardinality: '66', writer: '작성자66', create: '2019-01-01', use_question: true}},{
  question: { id: 67, department: '67_IT', team: '67_팀', question: '67_질문함?', cardinality: '67', writer: '작성자67', create: '2019-01-01', use_question: true}},{
  question: { id: 68, department: '68_IT', team: '68_팀', question: '68_질문함?', cardinality: '68', writer: '작성자68', create: '2019-01-01', use_question: true}},{
  question: { id: 69, department: '69_IT', team: '69_팀', question: '69_질문함?', cardinality: '69', writer: '작성자69', create: '2019-01-01', use_question: true}},{
  question: { id: 70, department: '70_IT', team: '70_팀', question: '70_질문함?', cardinality: '70', writer: '작성자70', create: '2019-01-01', use_question: true}},{
  question: { id: 71, department: '71_IT', team: '71_팀', question: '71_질문함?', cardinality: '71', writer: '작성자71', create: '2019-01-01', use_question: true}},{
  question: { id: 72, department: '72_IT', team: '72_팀', question: '72_질문함?', cardinality: '72', writer: '작성자72', create: '2019-01-01', use_question: true}},{
  question: { id: 73, department: '73_IT', team: '73_팀', question: '73_질문함?', cardinality: '73', writer: '작성자73', create: '2019-01-01', use_question: true}},{
  question: { id: 74, department: '74_IT', team: '74_팀', question: '74_질문함?', cardinality: '74', writer: '작성자74', create: '2019-01-01', use_question: true}},{
  question: { id: 75, department: '75_IT', team: '75_팀', question: '75_질문함?', cardinality: '75', writer: '작성자75', create: '2019-01-01', use_question: true}},{
  question: { id: 76, department: '76_IT', team: '76_팀', question: '76_질문함?', cardinality: '76', writer: '작성자76', create: '2019-01-01', use_question: true}},{
  question: { id: 77, department: '77_IT', team: '77_팀', question: '77_질문함?', cardinality: '77', writer: '작성자77', create: '2019-01-01', use_question: true}},{
  question: { id: 78, department: '78_IT', team: '78_팀', question: '78_질문함?', cardinality: '78', writer: '작성자78', create: '2019-01-01', use_question: true}},{
  question: { id: 79, department: '79_IT', team: '79_팀', question: '79_질문함?', cardinality: '79', writer: '작성자79', create: '2019-01-01', use_question: true}},{
  question: { id: 80, department: '80_IT', team: '80_팀', question: '80_질문함?', cardinality: '80', writer: '작성자80', create: '2019-01-01', use_question: true}},{
  question: { id: 81, department: '81_IT', team: '81_팀', question: '81_질문함?', cardinality: '81', writer: '작성자81', create: '2019-01-01', use_question: true}},{
  question: { id: 82, department: '82_IT', team: '82_팀', question: '82_질문함?', cardinality: '82', writer: '작성자82', create: '2019-01-01', use_question: true}},{
  question: { id: 83, department: '83_IT', team: '83_팀', question: '83_질문함?', cardinality: '83', writer: '작성자83', create: '2019-01-01', use_question: true}},{
  question: { id: 84, department: '84_IT', team: '84_팀', question: '84_질문함?', cardinality: '84', writer: '작성자84', create: '2019-01-01', use_question: true}},{
  question: { id: 85, department: '85_IT', team: '85_팀', question: '85_질문함?', cardinality: '85', writer: '작성자85', create: '2019-01-01', use_question: true}},{
  question: { id: 86, department: '86_IT', team: '86_팀', question: '86_질문함?', cardinality: '86', writer: '작성자86', create: '2019-01-01', use_question: true}},{
  question: { id: 87, department: '87_IT', team: '87_팀', question: '87_질문함?', cardinality: '87', writer: '작성자87', create: '2019-01-01', use_question: true}},{
  question: { id: 88, department: '88_IT', team: '88_팀', question: '88_질문함?', cardinality: '88', writer: '작성자88', create: '2019-01-01', use_question: true}},{
  question: { id: 89, department: '89_IT', team: '89_팀', question: '89_질문함?', cardinality: '89', writer: '작성자89', create: '2019-01-01', use_question: true}},{
  question: { id: 90, department: '90_IT', team: '90_팀', question: '90_질문함?', cardinality: '90', writer: '작성자90', create: '2019-01-01', use_question: true}},{
  question: { id: 91, department: '91_IT', team: '91_팀', question: '91_질문함?', cardinality: '91', writer: '작성자91', create: '2019-01-01', use_question: true}},{
  question: { id: 92, department: '92_IT', team: '92_팀', question: '92_질문함?', cardinality: '92', writer: '작성자92', create: '2019-01-01', use_question: true}},{
  question: { id: 93, department: '93_IT', team: '93_팀', question: '93_질문함?', cardinality: '93', writer: '작성자93', create: '2019-01-01', use_question: true}},{
  question: { id: 94, department: '94_IT', team: '94_팀', question: '94_질문함?', cardinality: '94', writer: '작성자94', create: '2019-01-01', use_question: true}},{
  question: { id: 95, department: '95_IT', team: '95_팀', question: '95_질문함?', cardinality: '95', writer: '작성자95', create: '2019-01-01', use_question: true}},{
  question: { id: 96, department: '96_IT', team: '96_팀', question: '96_질문함?', cardinality: '96', writer: '작성자96', create: '2019-01-01', use_question: true}},{
  question: { id: 97, department: '97_IT', team: '97_팀', question: '97_질문함?', cardinality: '97', writer: '작성자97', create: '2019-01-01', use_question: true}},{
  question: { id: 98, department: '98_IT', team: '98_팀', question: '98_질문함?', cardinality: '98', writer: '작성자98', create: '2019-01-01', use_question: true}},{
  question: { id: 99, department: '99_IT', team: '99_팀', question: '99_질문함?', cardinality: '99', writer: '작성자99', create: '2019-01-01', use_question: true}}]

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    isAddModal: false,
    isDetailModal: false,
    registData: {
      department: 'IT',
      team: '',
      question: '',
      useQuestion: false,
    }
  };

  componentDidMount() {
    this.setState({ 
      rows: mocData
    });
  }

  onClick = value => {
    this.onDetailModal(value);
  }

  onAddModal = value => {
    this.setState(prevState => {
      const data = {
        isAddModal: !prevState.isAddModal
      }
      if (!prevState.isAddModal) {
      } else {
      }
      return data;
    });
  }

  onDetailModal = value => {
    this.setState(prevState => {
      const data = {
        isDetailModal: !prevState.isDetailModal,
        registData: { ...prevState.registData }
      }
      if (!prevState.isDetailModal && value && value.question) {
        const { question } = value;
        data.registData.useQuestion = question.use_question;
        data.registData.team = question.team;
        data.registData.question = question.team.question;
      } else {
        data.registData.useQuestion = '';
        data.registData.team = '';
        data.registData.question = '';
      }
      return data;
    });
  }

  onRegistData = e => {
    const name = e.target.name;
    const value = name !== 'useQuestion' ? e.target.value : e.target.value === 'true';
    this.setState(prevState => {
      const registData = { ...prevState.registData };
      registData[name] = value;
      return { registData };
    });
  }

  render() {
    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          title={'본부 질문 관리'}
          titleNav={
            <Button 
              className={`QuestionRegisContainer__addBtn`}
              color="dark"
              outline
              size={`sm`}
              onClick={e => this.onAddModal(<div>추가하기당</div>)}
            >
              질문 추가하기
            </Button>
          }
          columns={this.props.columns}
          data={this.state.rows}
          totalLength={1000}
          onClick={this.onClick}
          cursor={true}
        />
        <Modal
          title={'본부질문 수정하기'}
          contents={
            <QuestionDetail
              registData={this.state.registData}
              onRegistData={this.onRegistData}
            />
          }
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />
        <Modal
          title={'본부질문 추가하기'}
          contents={
            <QuestionDetail
              registData={this.state.registData}
              onRegistData={this.onRegistData}
            />
          }
          open={this.state.isAddModal}
          onModal={this.onAddModal}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer