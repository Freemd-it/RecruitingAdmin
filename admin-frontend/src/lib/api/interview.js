import axiosCreate from '../defaultAxios'
import queryString from 'query-string'

export const getInterviewList = (batch, ctx) => 
  axiosCreate().get(`/admin/schedule/${batch}`)
    .then(({data, status}) => {
      if(status === 200) {
        const { result } = data;
        const results = result.map((item, index) => {
          item.departments.forEach((department, departmentIndex) => {
            item[`departmentName_${departmentIndex+1}`] = department.departmentName;
            item[`teamName_${departmentIndex+1}`] = department.teamName;
            item[`medicalField_${departmentIndex+1}`] = department.medicalField;
          });
          return item;
        });
        return ctx.setState({
          rows: results
        });
      }
      return alert('데이터로드 실패');
    })
    .catch(err => err)