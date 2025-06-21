const userEmail = "dharita@gmail.com"

if (userEmail) {
    console.log("Got user Email");
}else {
    console.log("Don't have user Email");
}

if (userEmail.length === 0 ) {
    console.log("Array is empty");
}

const emptyObject = {}

if (Object.Keys(emptyObject)).length === 0 {
    console.log("Object is empty ");
}

let val1;

val1 = 5 ?? 10
val1 = null ?? 10;         
val1 = undefined ?? 10 ?? 20; 

console.log(val1); 

const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80");  



