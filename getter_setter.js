class User {
    constructor(email, password){
        this.email = email;
        this.password = password; 
    }

    get password() {
        return this._password;    
    }

    set password(value) {
        this._password = value.toUpperCase();  
    }
}

const dharita = new User("dharita234.ai", "567");
console.log(dharita.password);  
