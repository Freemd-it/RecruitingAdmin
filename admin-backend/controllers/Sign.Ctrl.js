const Admin = require('../models/AdminModel');
const jwt = require('jsonwebtoken');
const key = require('../config/jwt.key.json').key;
const bcrypter = require('../modules/Bcrypter');


const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email }).exec();
    
    if (!admin) {
        console.log('no admin');
        res.status(400).json({
            message: "Signin fail",
            result: null,
        });
        return;
    }
    if (!(await bcrypter.compare(password, admin.hash))) {
        console.log('pw not match');
        res.status(400).json({
            message: "Signin fail",
            result: null,
        });
        return;
    }

    const payload = {
        permission: admin.permission,
        department: admin.department,
        team: admin.team,
        name: admin.name,
        email: admin.email,
    }

    jwt.sign(payload, key, { expiresIn: '12h' }, (err, token) => {
      if (err) {
        res.status(500).json({
            message: JSON.stringify(err),
            result: null,
        });
      } else {
        res.status(200).json({
          message: "Successful sign in & Get JWT",
          result : {
            token: token,
            ...payload,
          },
        })
      }
    })
  } catch (e) {
    res.status(500).json({
      message: JSON.stringify(e),
      result: null,
    });
  }
}

const signup = async (req, res) => {
    const { permission, department, team, name, email, password } = req.body;

    try {
        const hash = await bcrypter.hash(password);
        const admin = new Admin({ permission, department, team, name, email, hash });
        const savedAdmin = await admin.save();

        res.status(201).json({ message : "Success", result: savedAdmin});
    } catch (e) {
        res.status(500).json({ message: JSON.stringify(e) , result: null,});
    }
}

module.exports = {
    signin,
    signup,
};
