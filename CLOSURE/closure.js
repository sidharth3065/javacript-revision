// here we understand about lexical scoping

function outerFunc(){
  let username = "Sidharth Singh";
  function innerFunc(){
    console.log(username); // here we use the variable's reference of the outer function inside the inner function, this is 
                           // lexical scoping.
  }
  innerFunc();
}

outerFunc();

// Note:- We cannot take reference of the inner function into outer function.
// example is given below

function outerFunc2 (){
  console.log("Outer function secret is",secret); // Here its show error as this cannot be access by the outer function
  function innerFunc2(){
    let secret = "my123";
    console.log(secret); // it doesn't show the result as because above it gives error and we know that javascript is a single threaded language.
  }
  
  innerFunc2();
}
outerFunc2();

// Closure 

function user(){
    const name = "Sidharth Singh";
    function greet(){
        console.log(`Hello ${name}`);
    }
    return greet;  // Here, this return keyword return the whole function inside the function along with outer function. 
                   // this return the reference of the function.
}
const myFunc =  user();
myFunc();