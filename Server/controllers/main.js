const CustomAPIError = require('../errors/custom-error')
const JWT = require('jsonwebtoken')


const login= async(req, res)=>{
    // console.log(req.body);
    const {username, password} = req.body
}



module.exports = {
    login
}