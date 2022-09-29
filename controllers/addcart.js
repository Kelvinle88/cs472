const products = require('../models/database')
const cartItem = require('../models/cartItem')
module.exports = (req,res)=>{
    let i = req.body.i;
    let quantity = 1;
    let product = products[i];
    let Item = new cartItem(product,quantity)
    let Cart = req.session.items;
    if(Cart){
        let productItem = Cart.find(item=>item.product.id == product.id)
        product.quantity -=quantity;
        if(productItem){
            productItem.quantity +=quantity
        }
        else {
            Cart.push(Item)
        }
    }
    else {
        Cart = [];
        Cart.push(Item);
        req.session.items = Cart;
    }
     res.redirect('/');
}
