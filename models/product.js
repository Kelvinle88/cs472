module.exports = class Product{
    constructor(name,price,description,id,quantity) {
        this.name = name;
        this.price = price;
        this.description= description;
        this.id = id;
        this.quantity = quantity;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getPrice(){
        return this.price
    }
    setPrice(price){
        this.price = price;
    }
    getDescription(){
        return this.description
    }
    setDescription(description){
        this.description = description;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(quantity){
        this.quantity = quantity
    }

}