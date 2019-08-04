import organization from 'lib/service/organization'

const searchTeam = (department, team) => {
  if(department === undefined) return;

  // let result;
  // organization[department]['team'].some(v => {
  //   result = v[team];
  //   return v[team];
  // });

  return department + ' ' + team
}

export default searchTeam