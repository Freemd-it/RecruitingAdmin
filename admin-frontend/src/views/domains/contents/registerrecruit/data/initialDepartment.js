import { Map, List } from "immutable"

const InitialDepartment = Map({
  departmentName: "본부명을 입력해주세요",
  departmentDescription: "본부 설명을 입력해주세요",
  departmentImageUrl: "본부 이미지 URL을 입력해주세요",
  teams: List([
    Map({
      teamName: "공통 팀",
      medicalFieldOptions: List(["무료진료", "보건교육", "해외의료"])
    })
  ])
})

export default InitialDepartment;
