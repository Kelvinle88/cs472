const products = require('../database')
module.exports = (req,res)=>{
    const date = new Date()
   return  res.render("index",{products:products});
}