import _ from 'lodash'

export const validation = (data) => {
  let flag = true
  _.forEach(data, (v,k) => {
    if( v === '' || v === undefined) {
      flag = false
    }
  })

  return flag
}
