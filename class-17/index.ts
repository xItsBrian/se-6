/*const title:string = 'John';
const description: string = 'Hello, my name is ' + title+ ' and i am learning typescript'
console.log(title)
console.log(description)*/

class Counter {
    count: number = 0;
    countlimit: number = 100;
    constructor(count: number) {
        this.count = count;
    }
    increment() {
        this.count = this.count +1
        if (this.count > this.countlimit) this.count = 100
    }
    decrement() {
        this.count = this.count - 1
    }
    reset() {
        this.count = 0
    }
}
class BankAccount {
    balance: number = 0;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance = this.balance + amount
    }
    withdraw(amount: number) {
        if( amount <= this.balance) {// if the money your are going to withdraw  is less than or equal to the balance withdraw, else dont do anything

            this.balance = this.balance - amount
        }
        
    }
    transfer(amount: number, toaccount: BankAccount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount
            toaccount.deposit(amount)
        }
    }
}
const mybankaccount = new BankAccount(100)
const yourbankaccount = new BankAccount(1000)
mybankaccount.deposit(100);
mybankaccount.withdraw(50)
mybankaccount.transfer(50, yourbankaccount)
console.log(mybankaccount.balance)
console.log(yourbankaccount.balance)

class customer {
    firstname:string = ''
    lastname:string = ''
    accounts: BankAccount[]

    constructor(firstname:string, lastname:string, accounts:BankAccount[]) {
        this.firstname = firstname
        this.lastname = lastname
        this.accounts = accounts
    }
    openaccount(initialBalance: number) {
        const newaccount = new BankAccount(initialBalance)
        this.accounts.push(newaccount)
    }
    transfermoney(amount:number, fromaccount:BankAccount, toaccount:BankAccount) {
        fromaccount.transfer(amount, toaccount)
    }
    getNetWorth() {
        let total = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            total = total + this.accounts[i].balance;
        }
        return total;
    }
}
/*Class Bank
Properties:
- name (string) - can be initialized from the constructor
- customers (Customer[]) - can be initialized from the constructor. This is an array of Customer objects.
- allAccounts (BankAccount[]) - this is an array of all accounts of all customers. This should be computed from the customers array.

Methods:
- addCustomer(firstName, lastName) - creates a new Customer object and adds it to the customers array
- getCustomerByFullName(fullName) - returns the first customer object whose full name matches the given full name
- getCustomerAccounts(customer) - returns an array of accounts of the given customer
- getCustomerNetWorth(customer) - returns the net worth (sum of balances) of the given customer
- getBankNetWorth() - returns the net worth (sum of balances) of all customers of the bank
- addAccount(customer, initialBalance) - creates a new account and adds it to the given customer's accounts array
- transferMoney(amount, fromAccount, toAccount) - transfers money from one account to another
*/
class Bank {
    name: string = ''
    customer: customer[] = []
    allaccounts: BankAccount[] = []
    constructor(name:string, customer:customer[], allaccounts: BankAccount[]) {
        this.name = name
        this.customer = customer
        this.allaccounts = allaccounts
    }
    addCustomer(firstName: string, lastName: string, accounts:BankAccount[]) {
        const newCustomer = new customer(firstName, lastName,accounts);
        this.customer.push(newCustomer);
    }
    getCustomerByFullName(name: string) {
        return this.customer.find(customer => customer.name === name);
    }
    getCustomerAccount(customers:customer[]){
        return customers
    }
    getCustomerNetWorth(customers:[]){
        const sum = customers.reduce((acc, curr) => {
            return acc + curr;
           }, 0);
        return sum
    }
    getBankNetWorth(){
        let total = 0;
        for (let i = 0; i < this.customer.length; i++) {
            total = total + this.customer[i].customer;
        }
        return total;
    }
    addAccount(customer:customer,initialBalance:number){
        const newcustomer = new BankAccount(initialBalance)
        this.customer.push(newcustomer)
    }
    transfermoney(amount:number,fromaccount:BankAccount,toaccount:BankAccount){
        fromaccount.transfer(amount, toaccount)
    }

}