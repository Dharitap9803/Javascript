function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this.email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return this.password.toUpperCase();
        },
        set: function(value){
            this.password = value;
        }
    });
}

const chai = new User("dharita@45.com", "chai");
console.log(chai.email);