const promiseOne = new Promise(function(resolve, reject){
    // Do an async tesk
    // Db calls, cryptography and network
    setTimeout(function(){
        console.log('Async is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise is consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 2 is complete');
        resolve()
    }, 1000)
}).then (function(){
    console.log("Promise 2 will also be executed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Dharita', email: "dharita203@gmail.com"})

    }, 1000)

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "dharita", password: "dhar896"})
        }else {
            reject ('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; 
  }).then((username) => {
    console.log(username); 
  }).catch(function(error){
    console.log(error);   
  }).finally(() => console.log("The promise is either resolve or rejected"))

  const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "dhar896"})
        }else {
            reject ('ERROR: JS went wrong')
        }
    }, 1000)
  })

  async function consumePromiseFive(){
        const response = await promiseFive
        console.log(response);
        try{
            const response = await promiseFive
            console.log(response);
        }catch (error) {
            console.log(error);
        }
  }
  consumePromiseFive()

  async function getAllusers() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')


    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(" E: ", error);
  }
}
  getAllusers();

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {console.log(data);

  })
  .catch((error) => console.log(error))