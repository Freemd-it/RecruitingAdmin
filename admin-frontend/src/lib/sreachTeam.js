import organization from 'lib/service/organization'

const searchTeam = (department, team) => {
  let result;
  
  if(department === undefined) return;

  organization[department]['team'].forEach(v => {
    result = v[team] !== undefined && v[team]
  })
  return result
}

export default searchTeam