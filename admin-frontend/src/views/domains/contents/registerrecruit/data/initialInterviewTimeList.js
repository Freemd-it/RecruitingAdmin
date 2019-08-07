import { Map, List } from "immutable"

const InitialInterviewTimeList = List([
    Map({
      date: new Date("2019-09-15"),
      time: "11:00 ~ 12:00"
    }),
    Map({
      date: new Date("2019-09-15"),
      time: "13:00 ~ 14:00"
    }),
    Map({
      date: new Date("2019-09-16"),
      time: "11:00 ~ 12:00"
    }),
    Map({
      date: new Date("2019-09-16"),
      time: "13:00 ~ 14:00"
    })
  ]);

export default InitialInterviewTimeList;
