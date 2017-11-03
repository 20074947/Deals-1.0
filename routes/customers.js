var customers = require('../models/customers');
var express = require('express');
var router = express.Router();

router.findAllC = function(req, res) {
    res.json(customers);
}

function getByValue(arr, id) {
    var result = arr.filter(function(o) {
        return o.id == id;
    });

    return result ? result[0] : null;
}
router.findOneC = function(req, res) {

    var customer = getByValue(customers, req.params.id);

    if (customer != null)
        res.json(customer);
    else{
        res.json({
            message: 'customer NOT Found!'
        });}
}
router.addC = function(req, res) {
    var id = Math.floor((Math.random() * 1000000) + 1);
    //parameters to store
    c = req.body.firstName;
    b = req.body.secondName;
    d = req.body.email;
    e = req.body.password;
    f = req.body.phone;
    h = req.body.address;
    var currentSize = customers.length;

    customers.push({
        "id": id,
        "firstName": c,
        "secondName": b,
        "email": d,
        "password": e,
        "phone": f,
        "address": h
    });

    if ((currentSize + 1) == customers.length)
        res.json({
            message: 'customer Added!'
        });
    else
        res.json({
            message: 'customer Added!'
        });
}
router.deleteC = function(req, res) {
    var customer = getByValue(customers, req.params.id);
    var index = customers.indexOf(customer);

    var currentSize = customers.length;
    customers.splice(index, 1);

    if ((currentSize - 1) == customers.length)
        res.json({
            message: 'customer Deleted!'
        });
    else
        res.json({
            message: 'customer NOT Deleted!'
        });
}
module.exports = router;