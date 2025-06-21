
var c =300
let a = 300

 console.log(b);
 console.log(c);

 if (true) {
     let a= 100
     const b= 200
     console.log("INNER: ", a)
  var c= 300  
 }

 console.log(a);


 function one(){
    const username = "Dharita"

    function two(){

        const website = "youtube"
        console.log(username);

    }

    console.log(website);
 }


if (true) {
    const username = "Dharita"
    if (username === "Dharita") 
        {
        const website = "youtube"
        console.log(username + website);
    }

    console.log(website);
}
console.log(username);

const addone = function addone(num) {
    return num + 1 
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)



