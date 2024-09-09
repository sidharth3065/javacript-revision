// using all promise API 
// here all three are settled successful
//Note:- in all promise api if all the settled result is successful then it will throw or give you an array of object. but if 
// any of the promise is rejected then it will throw an error. so we need to handle it

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p1 success");
    }, 3000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve("p2 success");
        reject("p2 failed");
    }, 2000);
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p3 success");
    }, 5000);
})
 
Promise.all([p1,p2,p3]).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err)
});

// Note:- In allsettled either it is fail or success, it will give you all result after parallel found.
Promise.allSettled([p1,p2,p3]).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err)
});

//promise.race API takes the first promise either it is failed or success, it will return that value of the promises.

Promise.race([p1,p2,p3]).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err)
});

// promise.any 
// it will return the first promise that is resolved, if all the promises are rejected then it will
// throw an error. so we need to handle it. it is not a standard method of promise
// if all the promises is fail then it will give you aggregate error.
Promise.any([p1,p2,p3]).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err)
});