const Razorpay = require('razorpay')



const checkout = async function(req,res) {
    
    let {amount} = req.body

    var instance = new Razorpay({ key_id: 'rzp_test_htPYNUH1bEsG6Q', key_secret: 'ru1heUEHHmlYJpYm3ISCyBOk' })
    
    let order = await instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
    
    })
    
    return res.status(201).send({status:true, order, amount})
    
}

module.exports = {checkout }