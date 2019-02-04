/*
  classify = 101, 102, 103
  101 => 공통질문, 102 => 본부질문 103 => 팀질문
  301 => 대표권한 , 302 => 본부장계정 , 303 => 팀장계정
*/

// Check permissions when modal is opened

export const addPermissionCheck = ({classify}) => {
  const { permission } = JSON.parse(localStorage.getItem('user_session'))
  if(permission === 301) {
    return true
  } else if (permission === 302) {
    if(classify !== 101) return true
    return false
  }
}

export const updatePermissionCheck = () => {
  const { permission } = JSON.parse(localStorage.getItem('user_session'))
  if(permission > 302) {
    return false
  }
  return true
}