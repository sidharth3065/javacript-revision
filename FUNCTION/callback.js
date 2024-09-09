
// Asunchronous function with callback
function fetchData(callback){
  setTimeout(() => {
    let error = false;
    let data = {name:"sidharth singh", password:123};
    if(error){
        console.log('Error fetching data', null)
    }
    else{
        callback(null, data)
    } 
  }, 2000);
  
}

function handleResponse(error, data){
    if(error){
        console.error(error);
    }
    else{
        console.log("User data:", data);
    }
}

fetchData(handleResponse);

// nested callback 

function doTask1(callback){
    setTimeout(() => {
        console.log('task 1 completed');
        callback();
    }, 1000);
}

function doTask2(callback){
    setTimeout(() => {
        console.log('completed task 2');
        callback();
    }, 1000);
}

function doTask3(callback){
    setTimeout(()=>{
        console.log('task 3 completed');
        callback();
    },1000)
}

doTask1(() => {                       // nested callback lead to callback hell
    doTask2(() => {
      doTask3(() => {
        console.log('All tasks completed');
      });
    });
  });
 

  // To avoid callback we should promise

  const fetchDataPromises = new Promise((resolve,reject) =>{
    setTimeout(() => {
        const success = false;
        if(success){
            resolve("Data fetched successfully");
        } else{
            reject("Error fetching data");
        }
    }, 2000);
  })
  fetchDataPromises.then((data)=>{
    console.log(data)
  }).catch((error)=>{
    console.error(error);
  });

