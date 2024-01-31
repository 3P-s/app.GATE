const CustomAPIError = require('../errors/custom-error')
const JWT = require('jsonwebtoken')


const login= async(req, res)=>{
    // console.log(req.body);
    const {username, password} = req.body
    console.log(username, password);

    if(!username || !password ){
        throw new CustomAPIError('Please Provide somethings',400)
    }

    const id = new Date().getDate()

    const token = JWT.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}

const dashboard = async(req, res)=>{

    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token Founds',401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = JWT.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        const luckyNum = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${decoded.username}`, secret:`Here is your lucky number is ${luckyNum}`})
    
    } catch (error) {
        throw new CustomAPIError('Not Authorized to access this route',401)
    }


}

module.exports = {
    login, dashboard
}