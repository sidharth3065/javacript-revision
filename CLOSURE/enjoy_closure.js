
// document.getElementById('orange').onClick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById('green').onClick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color){
  return function(){              // Here closure comes into real existence where there is the requirement of mass number of the
                                  // thing into picture
    document.body.style.backgroundColor = `${color}`;
  }
}
  //   Here we make function as if there is requirement to change backgroung in a mass number.
document.getElementById('orange').onclick = clickHandler('orange');

document.getElementById('green').onclick = clickHandler('green');

// setTimeout and closure
// print 1,2,3,4,5 after each second
function x(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(() => {
                console.log(i)
            },i * 1000);
        }
      close(i);
    }
}
x();

// Another method of doing this is that we can use let instead of var

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
        console.log(i);
        },1000)
    }
}

x();