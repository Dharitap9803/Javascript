const userEmail = "dharita@gmail.com"

if (userEmail) {
    console.log("Got user Email");
}else {
    console.log("Don't have user Email");
}

// list of falsy values : false, 0, -0, BigintOn, "", null, undefined, NaN.
// truthy values are : 0 , 'false', " ",[], {}, function(){}

if (userEmail.length === 0 ) {
    console.log("Array is empty");
}

const emptyObject = {}

if (Object.Keys(emptyObject)).length === 0 {
    console.log("Object is empty ");
}



// Nullish coalescing operator (??): returns the first defined (not null/undefined) value
let val1;

val1 = 5 ?? 10          // Would return 5
val1 = null ?? 10;         // Returns 10 because null is nullish
val1 = undefined ?? 10 ?? 20; // Returns 10 (first non-null/undefined)

console.log(val1); // Output: 10


// Ternary operator: condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80");  



