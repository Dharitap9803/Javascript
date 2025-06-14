let myname = "dharita"
let mydance = "dharita   "

console.log(myname.length);

console.log(mydance.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`dharita is present in all objects`);
}
heroPower.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Dharita is playing`);
}

myHeroes.heyHitesh()


const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'Ja assignment',
    fulltime: true,

    __proto__: TeachingSupport
}

function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername(username)


    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);


