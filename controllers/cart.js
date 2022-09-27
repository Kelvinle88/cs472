module.exports = (req,res)=>{
    let total = 0;
    const cartItems = req.session.items;
    if(cartItems) {
        for(const cartItem of cartItems)
        {
          total += parseInt(cartItem.product.price)*parseInt(cartItem.quantity);
        }
    }
    res.render('cart',{items: cartItems, total: total})

}