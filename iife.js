// global scope k pollution se problem hoti hai kai baar ,to global scope k declaration ko hatane k liye IIFE ka use kiya hai 

// immediately invoked function expressions = IIFE


(function chai() {
     console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log( `DB CONNECTED TWO ${name}`);

})('Dharita');







