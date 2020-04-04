const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderStatus: { 
        type: Boolean,
        default: true
    },
    item: {
        type: String,
        require: true
    },
    customer_name: {
        type: String,
        require: true
    }
});

const Order = mongoose.model('Order', orderSchema, 'Orders');
module.exports = Order;