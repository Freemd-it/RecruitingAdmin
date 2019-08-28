import React, { Component } from 'react';
import { Radar, Pie } from 'react-chartjs-2';
import './DashBoard.scss'

class DashBoard extends Component {
  render() {
    const applierStat = this.props.applierStat;
    // const { pie, radar } = this.props.chartData;
    // const pieChart = (
    //   <div className="item" key={1}>
    //     <Pie
    //       height={150}
    //       data={pie.data}
    //       options={pie.options}
    //       legend={pie.legend}
    //     />
    //   </div>
    // )

    // const radarChart = (
    //   <div className="item" key={2}>
    //       <Radar
    //         height={150}
    //         data={radar.data}
    //         options={radar.options}
    //         legend={radar.legend}
    //       />
    //   </div>
    // )
    // const barChart = (
    //   <div className="item" key={3}>
    //     <Bar
    //       className='bar'
    //       data={bar.data}
    //       options={bar.options}
    //       height={150}
    //       legend={bar.legend}
    //     />
    //   </div>
    // );
    const currentDate = new Date();
    const dateStr = `${currentDate.getFullYear()}. ${currentDate.getMonth()+1}-${currentDate.getDate()}`;
    return (
        <div className="chart-wrapper">
          <div className="title"> 지원자 현황 - ({dateStr} 기준)</div>
          <div className="chart-container">
          {applierStat ? <ApplierStatTable applierStat={applierStat} />:""}:
          </div>
        </div>
      );
  }
}

const ApplierStatTable = ({applierStat}) => {
  return (
    <div className="applier-stat-container">
      <div className="total-count-container">
        <span className="total-count">전체 1지망 지원 : {applierStat.totalFirst} 명</span>
        <span className="total-count">전체 2지망 지원 : {applierStat.totalSecond} 명</span>
      </div>
      <table>
      <thead>
        <tr>
          <th>본부명</th>
          <th>본부 1지망</th>
          <th>본부 2지망</th>
          <th>팀 명</th>
          <th>팀 1지망</th>
          <th>팀 2지망</th>
        </tr>
      </thead>
      <tbody>
        {applierStat.stats.map(stat => {
          const teamCount = stat.teams.length;
          return(
            <>
            <tr>
              <td rowSpan={teamCount}>{stat.departmentName}</td>
              <td rowSpan={teamCount}>{stat.first}</td>
              <td rowSpan={teamCount}>{stat.second}</td>
              <td>{stat.teams[0].teamName}</td>
              <td>{stat.teams[0].first}</td>
              <td>{stat.teams[0].second}</td>
            </tr>
            { teamCount > 1 ? <ApplierStatRows teams={stat.teams.splice(1, stat.teams.length)}/> : ""}
            </>
          )
        })}
      </tbody>
      </table>
    </div>
  )
}

const ApplierStatRows = ({teams}) => {
  return (
    <>
      {teams.map(team => {
        return (
          <tr>
            <td>{team.teamName}</td>
            <td>{team.first}</td>
            <td>{team.second}</td>
          </tr>
        )
      })}
    </>
  )
}

export default DashBoard
