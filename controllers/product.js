const products = require('../database')
module.exports = async (req,res)=>{
    return res.render('product',{product:products[req.query.num],i:req.query.num})
}
