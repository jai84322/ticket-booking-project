const mongoose = require('mongoose');
const hotelModel = require('../models/hotelModel.js');



const createRandomHotel = async function(req, res){
    try {
        const generateName = function(n=8){
    
            let name = "";
            for(let i=0; i<n; i++){
                let x = Math.floor(Math.random()*25) + 97;
                name += String.fromCharCode(x)
                // console.log(name);
            }
            return name;
        }
        const rooms = [1,2,3,4,5,6,7,8,9,10]
        
        //create proxy data
        const obj = {body : {
        
            name:         generateName(8),
            type:         generateName(4) + " type",
            city:         generateName(6) + " city",
            address:      generateName(15) + " address",
            distance:     `${Math.floor(Math.random()*100)}`,
            photos:       ["link1", "link2"],
            title:        generateName(7) + " title",
            desc:         generateName(20) + " description",
            rating:       Math.floor(Math.random()*5),
            rooms:        rooms.slice(0, Math.round(Math.random()*10)),
            cheapestPrice:Math.floor(Math.random()*999),
            featured:     Boolean(Math.round(Math.random())),
            // isDeleted: false            //changes
        }}
        
        // console.log(obj)
        const savedData = await hotelModel.create(obj.body);
        return res.status(200).send({status:true, data:savedData});
    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message:err.message});        
    }
}

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

const getHotelsByPrice = async function(req, res){
    try {
        const {min, max, ...others} = req.query;

        const hotels = await hotelModel.find({cheapestPrice : {$gt : min || 1, $lt : max || 999}}).limit(req.query.limit);
        res.status(200).send({status:true, matched:hotels.length, data:hotels});

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message:err.message});
    }
}

//---------------------------------------------------------------5. count by city---------------------------------------------------------------------



//---------------------------------------------------------------6. count by type---------------------------------------------------------------------




module.exports = {createHotel, updateHotel, deleteHotel, getHotelsByPrice, createRandomHotel};