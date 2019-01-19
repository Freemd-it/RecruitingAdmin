const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  basic_info:{
    name: String,
    english: String,
    is_male: Boolean,
    birth_date: Date, 
    email: {
      type : String,
      required : true,
      unique: true
    },
    password : {
      type : String,
      required : true,
      trim : true // 공백 제거
    },
    phone_number : String,
    sns : String,
    address : String
  },
  academic_career: { // 최종 학력
    name: String, // 학교명
    location: String, // 소재지
    // 학교의 종류
    degree: {
      type : String,
      enum : ['고등학교', '대학교', '대학원']
    }, 
    major: String, // 전공
    entrance_date: Date, // 입학년도
    graduation_date: Date // 졸업년도
  },
  external_activities: [ // Array(document) 외부 활동 경력에 대한 내용 , 여러 개가 올 수 있음 
    {
      type: {
        type: String,
        enum: ['인턴', '봉사활동']
      }, // 대회 활동 타입
      organizer: String, // 소속 및 주최
      start_date: Date, // 활동을 언제부터 
      end_date: Date, // 언제까지 했나여
      content: String // 상세내용
    }
  ],
  special_info: [ // Array(document) 특기사항
    { // 특기사항 종류
      type: {
        type: String,
        enum: ['자격증', '어학능력', '기타능력']
      },
      acquisition_date: Date, // 취득 시간
      // 특기사항 종류가 어학능력인 경우에만 저장됨
      language_ability: {
        type: String,
        enum: ['상', '중', '하']
      },
      content: String // 상세내용
    }
  ],
  apply_info: { // 지원 관련 정보
    // 부서
    department: {
      type: String,
      enum: ['경영지원본부', '브랜드마케팅본부', '디자인본부','IT기획본부', '무료진료소사업본부', '보건교육산업본부', '해외의료사업본부']
    },
    secondary_department: {
      type: String,
      enum: ['경영지원본부', '브랜드마케팅본부', '디자인본부','IT기획본부', '무료진료소사업본부', '보건교육산업본부', '해외의료사업본부']
    },
    team: String, // 팀, 팀이 있는 부서에만 값이 부여됨
    secondary_team: String, // 2지망 부서 중 팀이 있는 경우에만 부여됨
    can_moved: Boolean, // 타 본부, 타 사업 이동 가능여부
    can_multiple_interview: Boolean, // 여러 부서에 면접을 볼 수 있는지 가능여부
    questions: [ // Array (document) // 질답 목록
      {
        type: Schema.Types.ObjectId,
        ref: "Question", // question document의 id
        answer: String // 그 질문에 대한 답
      }
    ],
    portfolios: [ // 포트폴리오 정보
      {
        file_path: String // 포트폴리오 파일 경로
      }
    ],
    // 토요일, 일요일
    interview_date: {
      type: String,
      enum: interview_date,
    },
    // 시간
    interview_time: {
      type: String,
      enum: interview_time
    },
  },
  publishedDate: {
    type: Date,
   default: new Date() // 현재 날짜를 기본값으로 지정
  }
})



module.exports =  mongoose.model('User', UserSchema);

// embedd or reference ? 
// enum은 어떻게 ?
// 제출하기시 제한시간 내에 제출 가능


const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuestionsSchema = new Schema({
  type: {
    type : String,
    enum : ['공통질문', '경영지원본부...', '디자인본부', 'IT기획본부']
  }, 
  // 질문 내용
  question : String,
  // 등록일자 
  registerDate: {
    type: Date,
   default: new Date() // 현재 날짜를 기본값으로 지정
  }
})

