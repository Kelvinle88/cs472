module.exports = (req,res)=>{
    let name = req.query.name;
    let age = req.query.age
    return res.render("output",{name,age})
}