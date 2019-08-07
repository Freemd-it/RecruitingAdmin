import { Map, List } from "immutable"

const InitialTeam = Map({
  teamName: "팀 명을 입력해주세요",
  medicalFieldOptions: List(["무료진료소", "보건교육", "해외의료"])
})

export default InitialTeam;
