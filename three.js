
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}
const greetings = "Hello World!"
for (const greet of greetings) {
    //  console.log(`Each char is ${greet}`)
}
//

maps

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);

// Iterating over the map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


map.set(IN, India)

// console.log(map);


const myObject = {
    js: "Javascript",
    py: "Python",
    rb: "ruby",
    cpp: "c++"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "py", "java"]

for (const key in programming) {
    console.log(key);
}


for (const key in map){
    console.log(key);
}

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
map.set('JP', 'Japan');
map.set('CN', 'China');

for (const [key, value] of map){
    console.log(`key :- value`);
} 


const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    cpp: "c++"
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const key in object){
    console.log(`${Key} is for ${object[key]}`);
}
function Printme (item, index, array){
    console.log(item);
}
const myCoding = [
    languageName = "javascript",
    languagename = "python",
    languageFilename = "js"
]


const myNums = [1, 2, 3, 4, 5, 6];

myNums.forEach((num) => {
    if (num > 4) {
        myNums.push(num);
    }
});
console.log(myNums);


const myNums = [1,2,3,4,5,6];

myNums.foreach((num) => {
    if (num > 4) {
        myNums.push(num);
    }
});
consle.log(myNums);


const  userBooks = books.filter(bk) => bk.genre === "fiction");
console.log(userBooks);


const Books = [
  {
    title: "The Great Gatsby",
    edition: "2004",
    genre: "fiction",
    publish: "2005"  
  }
];

const userBooks = Books.filter((bk) => {
  return bk.genre === 'fiction' && parseInt(bk.publish) >= 2000;
});

console.log(userBooks);


