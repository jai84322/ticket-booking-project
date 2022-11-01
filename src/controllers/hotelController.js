const mongoose = require('mongoose');
const hotelModel = require('../models/hotelModel.js');


//---------------------------------------------------------------1. create hotel---------------------------------------------------------------------
const createHotel = async function(req, res){
    try {
        const data = req.body;

        const savedData = await hotelModel.create(data);
        return res.status(201).send({status:true, data:savedData}); 

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message:err.message});
    }
}


//---------------------------------------------------------------2. update hotel by hotelId---------------------------------------------------------------------
const updateHotel = async function(req, res){
    try {
        const data = req.body;
        const hotelId = req.params.id;       //id=hotel id

        // const updated = await hotelModel.findByIdAndUpdate(hotelId, {$set:data}, {new:true});

        const updated = await hotelModel.findOneAndUpdate({_id : hotelId, isDeleted:true}, {$set:data}, {new:true});
        if(!updated) return res.status(404).send({status:false, message:"hotel not found or deleted"});

        return res.status(200).send({status:true, message:"data updated successfully", data:updated})

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message:err.message});
    }
}



//---------------------------------------------------------------3. delete hotel by hotel id---------------------------------------------------------------------
const deleteHotel = async function(req, res){
    try {
        const data = req.body;
        const hotelId = req.params.id;       //id=hotel id

        // const deleted = await hotelModel.findByIdAndDelete(hotelId);    //permanent deletion

        const deleted = await hotelModel.findOneAndUpdate({_id:hotelId, isDeleted:true}, {$set:{isDeleted : true}});    //flag -  deletion
        if(!deleted) return res.status(404).send({status:false, message:"hotel not found or already deleted"});


        return res.status(200).send({status:true, message:"data deleted successfully", data:deleted})

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message:err.message});
    }
}



//---------------------------------------------------------------4. get hotels by price range min and max---------------------------------------------------------------------



//---------------------------------------------------------------5. count by city---------------------------------------------------------------------



//---------------------------------------------------------------6. count by type---------------------------------------------------------------------




module.exports = {createHotel, updateHotel, deleteHotel};
