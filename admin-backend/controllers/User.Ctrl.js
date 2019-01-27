const User = require('../models/UserModel');

const getUserList = async(req, res) => {
    try {
        const userList = await User
                                .find()
                                .select("basic_info apply_info")
                                .sort({_id: -1})
                                .exex();
        res.status(200).json({data: userList});
    } catch(e) {
        res.status(500).json({error : e});
    }
}

const getUser = async(req, res) => {
    const id = req.params.userId;
    try {
        const user = await User
                            .findById(id)
                            .exec();
        res.status(200).json({data: user});
    } catch(e) {
        res.status(500).json({error: e});
    }
}

module.exports = {
    getUserList : getUserList,
    getUser : getUser,
}
