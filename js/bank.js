class Bank {
    static nextNumber = 0;

    constructor() {
        this.accounts = [];
    }

    addAccount = (number) => {
        let acc = new Account(number)
        this.accounts.push(acc);
        return acc;
    };

    addSavingsAccount = (number, interest) => {
        let savingacc = new SavingsAccount(number, interest)
        this.accounts.push(savingacc)
        return savingacc;
    };

    addcheckingAccount = (number, overdraft) => {
        let checkingacc = new CheckingAccount(number, overdraft)
        this.accounts.push(checkingacc)
        return checkinngacc;
    }

    closeAccount = (number) => {
        let index = this.accounts.findIndex(number)
        this.accounts.splice(index, 1)
    };

    accountReport = () => {
        let result = " ";
        for (const account of this.accounts) {
            result += account.toString() + "\n"
        }
        return result;
    }

    endOfMonth = ()=> {
        for (const account of this.accounts) {
            return account.endOfMonth()
        }
    }
}
