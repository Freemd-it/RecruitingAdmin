const Statistics = require('../models/StatisticsModel');

const getStat = async(req, res) => {
    try {
        const stat = await Statistics
                                .findOne({batch: 20});
        res.status(200).json({data: stat});
    } catch(e) {
        res.status(500).json({error : JSON.stringify(e)});
    }
}

module.exports = {
    getStat: getStat
};