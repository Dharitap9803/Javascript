for ( let j = 0; i <= 15; i ++) {
    const element = i;
    if ( element == 5) {
        console.log ("5 is the best number ");
    } 
    console.log(element);
}
console.log(element);

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
       console.log(`Inner loop value: ${j} and inner loop value ${i}`)
        console.log(i + '*' + j + ' = ' + i*j)
    }
}

console.log(myArray.length);
let myArray = [ "superman", "batman", "flash"]
console.log("myArray.length");
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

break and continue 
for 
(let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log(`Detected 5 `);
        continue
    }
    console.log(`value of index is ${index}`);
    index = index + 2
    
    
}
