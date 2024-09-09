const promiseOne =  new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Task resolved");
})

// passing data through resolve

const promiseTwo = new Promise (function(resolve,reject){
    setTimeout(() => {
        console.log("Async 2 task is complete");
    }, 1000);
    resolve({username:"sidharth", email:"sid@example.com"});
})

promiseTwo.then(function(user){
   console.log(user);
})

// chaining in promises for passing data 

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
       let error = false;
       if(!error){
        resolve({username:"sidharth", email:"sid@example.com"});
       } else{
        reject("something went wrong");
       }
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("your task is either be resolved or rejected"));

// using async await

const promiseSix = new Promise(function(resolve,reject){
    setTimeout(() => {
      let error = false;
      if(!error){
        resolve({username:"javascript",password:"123"})
      } else{
        reject("Hey something went wrong");
      }
    }, 1000);
})

async function consumePromiseSix(){
    try{
        let response = await promiseSix
        console.log(response);
    } catch{
        console.log("error");
    }
}

consumePromiseSix();

// fetch using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data) =>{
    console.log(data);
}).catch(() =>{
    console.log("error");
})


// USING ASYNC AWAIT FUNCTION

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Namaste javascript");
    },2000);
});

const p2 = ((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Namaste javascript 2");
    },3000);
});

async function handlePromise(){
    const val = await p1;
    console.log(val);
    console.log("print Namaste jii");

    const val2 = await p2;
    console.log(val2);
    console.log("Namaste Jii 2")
}
handlePromise();
 // Fetch using async await function

//  let API_URL = " ";

// async function handleFetch(){
//     const p = await fetch(API_URL);
//     const jsonValue = await p.json();
//     console.log(jsonValue);
// }

// handleFetch();


    
    const url = 'https://restcountries.com/v2/all';

//   fetch(url).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

    async function handleFetch (){
        try{const p = await url;
            const jsonValue = await p.json();
            console.log(jsonValue);
        
        }catch(error){
            console.log(error);
        }
    }
     
    handleFetch();