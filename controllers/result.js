module.exports = (req,res)=>{
    const {name,age} = req.body
   return  res.redirect(`/output?name=${name}&age=${age}`)
}