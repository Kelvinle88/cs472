module.exports = (req,res)=>{
    const {name,age} = req.body
   return  res.render('output',{name:name,age:age})
}