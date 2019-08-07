const Memo = require('../models/MemoModel');

const registMemo = async (req, res) => {
  const { contents, writer } = req.body;
  const { userId } = req.params;
  
  try {
    const memo = new Memo({ userId, contents, writer });
    const savedMemo = await memo.save();

    res.status(201).json({ message : "Success", result: savedMemo});
  } catch (e) {
    res.status(500).json({ message: JSON.stringify(e) , result: null,});
  }
}

const getMemo = async (req, res) => {
  const { userId } = req.params;
  try {
    const memoList = await Memo.find({userId: userId}).sort("_id").exec();
    res.status(200).json({ message : "Success", result: memoList});
  } catch(e) {
    res.status(501).json({ message: JSON.stringify(e) , result: null,});
  }
}

module.exports = {
  registMemo,
  getMemo,
}