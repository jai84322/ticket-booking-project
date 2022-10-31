const userModel = require('../models/userModel')



const createUser = async function(req, res) {

   try {

    let data = req.body;
    let savedUser = await userModel.create(data)
    return res.status(201).send({status:true, data: savedUser})

   } catch (err) {
    console.log(err)
    return res.status(500).send({status: false, message : err.message})
   }

}

const getUser = async function(req,res) {
    try {

        let userId = req.params.id
        let getData = await userModel.findById(userId)
        return res.status(400).send({status: false, data : getData})

    } catch(err) {
        console.log(err);
        return res.status(201).send({status:false, message: err.message})
    }
}

const updateUser = async function(req,res) {

    try{
        let userId = req.params.id
        let data = req.body
        let updatedUser = await userModel.findOneAndUpdate({_id : userId}, data, {new : true})
        return res.status(400).send({status:true, data : updatedUser})

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message : err.message})
    }
} 

const deleteUser = async function(req,res) {
    try{
        let userId = req.params.id
        let userDelete = await userModel.findOneAndUpdate({_id : userId}, {isDeleted : true}, {new : true})
        return res.status(400).send({status:true, message : "your account has been deleted successfully"})

    } catch(err) {
        console.log(err);
        return res.status(400).send({status: false, message : err.message})
    }
}


module.exports = {createUser, getUser, updateUser, deleteUser }