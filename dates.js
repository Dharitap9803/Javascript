let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
 myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());
// for the second time do not use let again ,reassign the value  


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDate());


let newDate = new Date()
console.log(newDate.getDay() + 1);
console.log(newDate.getDay());
console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`);
this is how the time is been print in this format 


newDate = toLocaleString('default', { weekDay: "long",})





