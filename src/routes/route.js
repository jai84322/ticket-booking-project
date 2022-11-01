const express = require("express")
const router = express.Router()
const {createUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/userController')
const {createHotel, updateHotel, deleteHotel} = require('../controllers/hotelController/js');

// users routes
router.post('/createUser', createUser)
router.post('/loginUser', loginUser)
router.get('/getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

// hotels routes
router.post('/createHotel', createHotel);
router.put('/updateHotel', updateHotel);
router.delete('deleteHotel', deleteHotel);




// rooms routes


module.exports = router; 