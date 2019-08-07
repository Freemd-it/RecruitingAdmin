import { Map, List } from "immutable"

const InitialDepartmentList = List([
    Map({
      departmentName: "경영 지원 본부",
      departmentDescription: "경영 지원 본부에 대한 설명입니다.",
      departmentImageUrl: "s3 URL이 들어가지 않을까요",
      teams: List([
        Map({
          teamName: "인사 조직팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "재무 관리팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "기획 지원팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "IT기획팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "디자인팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        })
      ])
    }),
    Map({
      departmentName: "브랜드 마케팅 본부",
      departmentDescription: "브랜드 마케팅 본부에 대한 설명입니다.",
      departmentImageUrl: "s3 URL이 들어가지 않을까요",
      teams: List([
        Map({
          teamName: "홍보 기획팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "대외 협력팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        }),
        Map({
          teamName: "후원 전략팀",
          medicalFieldOptions: List(["무료진료소", "보건교육"])
        })
      ])
    }),
    Map({
      departmentName: "무료진료소사업 본부",
      departmentDescription: "무료진료소사업 본부에 대한 설명입니다.",
      departmentImageUrl: "s3 URL이 들어가지 않을까요",
      teams: List([
        Map({
          teamName: "진료소 운영팀",
          medicalFieldOptions: List(["무료진료소"])
        }),
        Map({
          teamName: "약무팀",
          medicalFieldOptions: List(["무료진료소"])
        }),
        Map({
          teamName: "의무기록팀",
          medicalFieldOptions: List(["무료진료소"])
        })
      ])
    }),
    Map({
      departmentName: "보건교육사업 본부",
      departmentDescription: "보건교육사업 본부에 대한 설명입니다.",
      departmentImageUrl: "s3 URL이 들어가지 않을까요",
      teams: List([
        Map({
          teamName: "보건교육 운영팀",
          medicalFieldOptions: List(["보건교육"])
        }),
        Map({
          teamName: "교육 연구팀",
          medicalFieldOptions: List(["보건교육"])
        })
      ])
    }),
    Map({
      departmentName: "해외의료사업 본부",
      departmentDescription: "해외의료사업 본부에 대한 설명입니다.",
      departmentImageUrl: "s3 URL이 들어가지 않을까요",
      teams: List([
        Map({
          teamName: "공통 팀",
          medicalFieldOptions: List(["해외의료"])
        })
      ])
    })
  ]);

export default InitialDepartmentList;
