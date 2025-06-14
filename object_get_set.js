const User = {
    _email: 'dharit@.com',
    _password: "345",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        thi._email = value 
    }
} 

const tea = Object.create(User)
console.log(tea.email);