const express = require("express")
const router = express.Router()
const {createUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/userController')
const {createHotel, updateHotel, deleteHotel, createRandomHotel, getHotelsByPrice} = require('../controllers/hotelController.js');
const {checkout} = require('../controllers/checkoutController')

// users routes
router.post('/createUser', createUser)
router.post('/loginUser', loginUser)
router.get('/getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

// hotels routes
router.post('/createHotel', createHotel);
router.put('/updateHotel', updateHotel);
router.delete('/deleteHotel', deleteHotel);
router.get('/getHotelsByPrice', getHotelsByPrice);

router.post('/createRandomHotel', createRandomHotel);


// rooms routes

// checkout route
router.post('/checkout', checkout)

module.exports = router;