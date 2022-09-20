class SavingsAccount extends Account{
    constructor(number,interest) {
        super(number);
        this._interest = interest ;
    }
    get interest(){
        return this._interest;
    }
    set interest(newinterest){
        this._interest = newinterest;
    }
    addInterest = ()=>{
        return this.deposit((this.getBalance()*this._interest)/100);
    }
    toString() {
        return "Account " + this._number + ": Interest " + this._interest;
    }
    endOfMonth() {
        this.addInterest();
        return this.toString()

    }

}


