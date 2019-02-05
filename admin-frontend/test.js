const _ = require('lodash')

const mocData =  [
  {
      "registedDate": "2019-01-25T21:35:10.479Z",
      "_id": "5c4b82396b23e2bdbf3747ac",
      "classify": 101,
      "department": "",
      "team": "",
      "batch": 20,
      "register": "대표",
      "question": 'asedfasefaesfasef',
      "used": false,
      "__v": 0
  },{
    "registedDate": "2019-01-25T21:35:10.479Z",
    "_id": "5c4b82396b23e2bdbf3747ac",
    "classify": 101,
    "department": "",
    "team": "",
    "batch": 20,
    "register": "대표",
    "question": 'asedfasefaesfasef',
    "used": false,
    "__v": 0
  },
  {
    "registedDate": "2019-01-25T21:35:10.479Z",
    "_id": "5c4b82396b23e2bdbf3747ac",
    "classify": 101,
    "department": "",
    "team": "",
    "batch": 20,
    "register": "대표",
    "question": 'asedfasefaesfasef',
    "used": false,
    "__v": 0
  }
]

const m = {
  "registedDate": "2019-01-25T21:35:10.479Z",
  "_id": "5c4b82396b23e2bdbf3747ac",
  "classify": 101,
  "department": "",
  "team": "",
  "batch": 20,
  "register": "대표",
  "question": ['asedfasefaesfasef', '123123123', '123123213123'],
  "used": false,
  "__v": 0
}

const tttt = function deactivateResponse(data) {
  
  return _.map(data, (value, key) => {
    if (typeof value === 'object') {
      return deactivateResponse(value)
    } else {
      return value
    }
  }).reduce(((acc,value, {}) => Object.assign(acc, value)))
}

const mm = tttt(mocData)