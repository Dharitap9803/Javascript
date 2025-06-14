class User {
    constructor(username, email, password){
        this.username = username;
        this.emai = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUppercase()}`
    }
}
const chai = new User("chai", "chai@gmail.com ", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
addCourse(){
    console.log(`A new course was added by ${this.username}`);
}