const RecruitMeta = require('../models/RecruitMetaModel');

const registRecruitMeta = async (req, res) => {
  const { 
    batch, 
    period, 
    announceDate, 
    recruitStatus,
    medicalFeilds,
    departments,
    interviewTimes,
  } = req.body;

  if (!batch || !period || !announceDate || !recruitStatus || !medicalFeilds || !departments || !interviewTimes)
    return res.status(500).json({
      message: 'invalied value',
      result: null,
    });

  try {
    const recruitMeta = new RecruitMeta({ 
      batch, 
      period, 
      announceDate, 
      recruitStatus,
      medicalFeilds,
      departments,
      interviewTimes,
    });

    const savedRecruitMeta = await recruitMeta.save();
    res.status(201).json({ message : "Success", result: savedRecruitMeta});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const getRecruitMeta = async (req, res) => {
  const { batch } = req.params;
  try {
    const recruitMetaData = await RecruitMeta
      .find({ batch })
      .select("batch period announceDate recruitStatus medicalFeilds departments interviewTimes")
      .exec();
    res.status(200).json({ message : "Success", result: recruitMetaData});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const modifyRecruitMeta = async (req, res) => {
  const { batch } = req.params;
  const { 
    period, 
    announceDate, 
    recruitStatus,
    medicalFeilds,
    departments,
    interviewTimes,
  } = req.body;
  if (!batch) 
    return res.status(500).json({
      message: 'invalied value',
      result: null,
    });

  try {
    const update = await RecruitMeta.findOneAndUpdate(batch, {
      period, 
      announceDate, 
      recruitStatus,
      medicalFeilds,
      departments,
      interviewTimes,
    }, { 
      new: true 
    }).exec();
    res.status(200).json({ message : "Success", result: update});
  } catch(e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

module.exports = {
  registRecruitMeta,
  getRecruitMeta,
  modifyRecruitMeta,
}