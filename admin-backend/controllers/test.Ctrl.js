const Info = require('../models/testModel');

const getTestList = async(req, res) => {
    console.log(req.userdata);
    try {
        const infoList = await Info
                                .find()
                                .exec();
        
        res.json(infoList);
    }catch(e) {
        res.status(500).json({
            error : e
        });
    }
}

const makeTestList = async(req, res) => {
    const {name, email, phone} = req.body;
    const info = new Info({ name, email, phone});

    try {
        await info.save();
        res.json(info);
    }catch(e) {
        res.status(500).json({error : e});
    }
}

module.exports = {
    getInfoList : getTestList,
    makeInfo : makeTestList,
};