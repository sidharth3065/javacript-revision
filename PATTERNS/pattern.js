// simple right triangle
function patt(n){
    for(let i=1;i<=n;i++){
        let row = '';
        for(let j=1;j<=i;j++){
            row += '*';
        }
        console.log(row);
    }
}

patt(5);
// Inverted right triangle
function x(n){
    for(let i=n;i>=1;i--){
        let row = '';
        for(let j=1;j<=i;j++){
            row += '*';
    }
    console.log(row);
  }
}
  x(5);

  // diamond pattern

  function x2(n){
    for(let i=1;i<=n;i++){
    let upperpart = '';
    for(let j=1;j<=n-i;j++){
        upperpart += ' ';
    }
    for(let k=1;k<=2*i-1;k++){
        upperpart += '*';
    }
    console.log(upperpart);
  }
  for(let i=n-1;i>=1;i--){
    let lowerpart = '';
    for(let j=1;j<=n-i;j++){
        lowerpart += ' ';
    }
    for(let k=1;k<=2*i-1;k++){
        lowerpart += '*';
    }
    console.log(lowerpart);
  }
}
x2(5);
