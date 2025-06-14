// const newuser = {
//     name: "Dharita",
//     age: 18,
//     location: "New Ranip",
//     email: "dharita@gmail.com",
//     LoggedIn: false
// };

// console.log(newuser.email);           // Access using dot notation
// console.log(newuser["email"]);        // Access using bracket notation

// const mySym = Symbol("Key1");

// const regularuser = {
//     email: "dharita@gmail.com",
//     fullname: {
//         userfullname: {
//             firstName: "Dharita",
//             lastName: "choudhry"
//         }
//     }
// };

// console.log(regularuser.fullname.userfullname.firstName); 

// users[1].email
// console.log(tinderuser);

const tinderUser = {
    id: "123abc",
    name: "Dharita",
    isLoggedIn: false
};

console.log(Object.keys(tinderUser));          
console.log(Object.values(tinderUser));         
console.log(Object.entries(tinderUser));       

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


const course = {
    name: "Computer",
    id: "45",
    courseInstructor: "Dharita",
    price: "455"
}

const { courseInstructor: instructor} = course 
console.log(instructor);
// {
//     name: "Dharita"
//     coursename: "Js in hindi"
//     price: "free"
// }

// const navbar = (PaymentResponse.company) 

