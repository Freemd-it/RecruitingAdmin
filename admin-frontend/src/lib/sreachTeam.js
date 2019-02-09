import organization from 'lib/service/organization'
import _ from 'lodash'

const searchTeam = (department, team) => {
  let result;
  if(department === undefined) return 0;
  organization[department]['team'].forEach(v => {
    if(v[team] !== undefined) result = v[team]
  })
  return result
}

export default searchTeam