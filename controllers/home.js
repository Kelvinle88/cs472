const products = require('../models/database')
module.exports = (req,res)=>{
    const date = new Date()
   return  res.render("index",{products:products,lengthOfItems:req.session.items?req.session.items.length:0});
}