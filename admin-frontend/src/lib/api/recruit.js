import axiosCreate from '../defaultAxios'
import queryString from 'query-string'

export const getRecruitList = (batch, ctx) => {
  return axiosCreate().get(`/admin/applicant2/${batch}?`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result, isDetailModal: false}))
    .catch(err => err)
}

export const getRecruitDetail = ({id, batch},ctx) => {
  // return axiosCreate().get(`/admin/applicant2/${batch}/${id}`)
  //   .then(res => ctx.setState({
  //     selectedRow: res.data.result,
  //     isDetailModal: true,
  //   }))
  //   .catch(err => err)
}

export const setApplicantRank = (data, ctx) => {
  // return axiosCreate().put(`/admin/applicant/21/${data.userId}/rank`, data)
  // .then(res => alert('지원서 평가가 완료 되었습니다.'))
  // .catch(err => err)
}

export const setMemo = (data, ctx) => {
  return axiosCreate().post(`/admin/memo/${data.userId}`, data)
  .then(({ data }) => {
    if (data && data.result) {
      ctx.setState(prevState => {
        const { memoList } = prevState;
        memoList.push(data.result);
        return memoList;
      }, () => {
        ctx.onChangeMemo();
      });
    } else {
      alert('메모 작성에 실패하였습니다.');
    }
  })
  .catch(err => err);
}

export const getMemoList = (id, ctx) => {
  return axiosCreate().get(`/admin/memo/${id}`)
  .then(({ data }) => {
    if (data && data.result) {
      ctx.setState({memoList: data.result})
    }
  })
  .catch(err => err);
}
