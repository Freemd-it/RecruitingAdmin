const Statistics = require('../models/StatisticsModel');

const getStat = async(req, res) => {
    try {
        const stat = await Statistics
                                .findOne({batch: 20});
        res.status(200).json({message: "Successful get statistics", result: stat});
    } catch(e) {
        res.status(500).json({message : JSON.stringify(e), result: null, });
    }
}

module.exports = {
    getStat: getStat
};