const User = require('../models/User')


//Get list of user

const userList = async(re,res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:error})
    }
}

const getSingleUser = async(req,res)=>{
    const userid = req.params.useId;
    try {
        const user = User.findById(userid).populate(' payments')
        
    } catch (error) {
        
    }
}

const createUser = async(req,res)=>{
    const newUser =new User( {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        mob:req.body.mob

    })

    console.log("newUser",newUser)

    try {

        
        const savedUser = await newUser.save()
        console.log("savedUser",savedUser)
        res.status(200).json(savedUser);
        
    } catch (error) {
        console.log("error",error)
        res.status(401).json({message:error})
    }
}


module.exports={
    userList,
    createUser,
    getSingleUser
}