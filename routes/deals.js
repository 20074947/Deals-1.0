var deals = require('../models/deals');
var express = require('express');
var router = express.Router();

router.findAll = function(req, res) {
    res.json(deals);
}
function getByValue(arr, id) {
    var result  = arr.filter(function(o){return o.id == id;} );

    return result ? result[0] : null;
}
router.findOne = function(req, res) {

    var deal = getByValue(deals,req.params.id);

    if(deal != null)
        res.json(deal);
    else{
            res.status(404);
        res.json({ message: 'Deal NOT Found!'});
    }
}
router.addDeal = function(req, res) {
    var id = Math.floor((Math.random() * 1000000) + 1);
    //parameters to store
    c =  req.body.name ;
    b = req.body.location ;
    d = req.body.category;
    e = req.body.startdate;
    f = req.body.expirydate;
    h = req.body.information;
    p = req.body.price;
    var currentSize = deals.length;

    deals.push({"id":id,"name":c,"location":b,"category": d,"startdate":e,"expirydate":f,"information":h,"price":p});

    if((currentSize + 1) == deals.length)
        res.json({ message: 'Deal Added!'});
    else
        res.json({ message: 'Deal NOT Added!'});
}
router.incrementPrice = function(req, res) {
        //Add 1 to upvotes property of the selected donation based on its id
        var deal = getByValue(deals,req.params.id);
        if (deal) {
            deal.price += 20;
            router.findAll(req,res); 
        } else {
            res.status(404);
            res.json({ message: 'Invalid Deal Id!'});
        }     
    };
router.deleteDeal = function(req, res) {
    var deal = getByValue(deals,req.params.id);
    var index = deals.indexOf(deal);

    var currentSize = deals.length;
    deals.splice(index, 1);

    if((currentSize - 1) == deals.length)
        res.json({ message: 'Deal Deleted!'});
    else{
        res.json({ message: 'Deal NOT Deleted!'});
    }
}
module.exports = router;