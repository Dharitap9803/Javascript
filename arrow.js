const user = {
    username: "Dharita",
    price: 500,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

user.welcomeMessage();
user.username = "Dharita Choudhry";
user.welcomeMessage();

console.log(this); 


const chai = () => {
    let username = "Dharita";
    console.log(this);  
}
chai();

const addTwo = (num1, num2) => ({ username: "Dharita" });
console.log(addTwo(3, 4)); 

const myArray = [2, 3, 4, 5, 6];
myArray.forEach(item => console.log(item));



// this is my updated files 

