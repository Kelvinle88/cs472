const products = require('../models/database')
module.exports = async (req,res)=>{
    return res.render('product',{product:products[req.query.num],i:req.query.num,lengthOfItems:req.session.items?req.session.items.length:0})
}
