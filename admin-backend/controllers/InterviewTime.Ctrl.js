const InterviewSchedule = require('../models/InterviewTimeModel');
const moment = require('moment');

const registInterviewSchedule = async(req, res) => {
    const {batch, date, time} = req.body;
    const interviewSchedule = new InterviewSchedule();
    console.log(time);
    interviewSchedule.batch = batch;
    interviewSchedule.interviewDate = moment(date).format('YYYY-MM-DD');
    interviewSchedule.interviewTime = time;

    try {
        const savedSchedule = await interviewSchedule.save();
        res.status(201).json({message: "Success", result: savedSchedule});
    } catch(e) {
        res.status(500).json({message: JSON.stringify(e), result: null});
    }
}

const makeScheduleForm = (scheduleObjList) => {
    const scheduleForm = {};
    scheduleObjList.map(obj => {
        scheduleForm[obj.interviewDate] = [];
    });
    scheduleObjList.map(obj => {
        scheduleForm[obj.interviewDate].push(obj.interviewTime);
    });
    return scheduleForm;
}

const getInterviewSchedule = async(req, res) => {
    const searchingBatch = Number(req.params.batch);
    console.log(searchingBatch);
    try {
        const interviewTimeList = await InterviewSchedule
                                            .find({batch: searchingBatch})
                                            .exec();
        console.log(interviewTimeList);
        const responseData = makeScheduleForm(interviewTimeList);
        res.status(200).json({message: "Success", result: responseData});
    } catch(e) {
        res.status(500).json({message: JSON.stringify(e), result: null});
    }
}

module.exports = {
    getInterviewSchedule: getInterviewSchedule,
    registInterviewSchedule: registInterviewSchedule,
}