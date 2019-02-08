import _ from 'lodash'
/*
  classify = 101, 102, 103
  101 => 공통질문, 102 => 본부질문 103 => 팀질문
  301 => 대표권한 , 302 => 본부장계정 , 303 => 팀장계정
*/

// Check permissions when modal is opened

// 팀 구별
export const addPermissionCheck = ({classify}) => {
  const { permission } = JSON.parse(localStorage.getItem('user_session'))
  if(permission === 301) {
    return true
  } else if (permission === 302) {
    if(classify !== 101) return true
    return false
  } else {
    return false
  }
}

export const updatePermissionCheck = (rows, id) => {
  let flag = true
  const { department, permission } = JSON.parse(localStorage.getItem('user_session'))
  
  if (permission === 301) flag = true
  else if (permission === 302) {
    _.forEach(rows, (v, k) => {
      if(v._id === id) {
        if(v.department !== department) flag = false
      }
    })
  } else flag = false
  return flag
}