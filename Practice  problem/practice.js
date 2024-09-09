// let word = "30 days of javascript";

// const cutWord = word.slice(3);
// console.log(cutWord);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// let sum = 0;

// ages.map((age) =>{
//     sum += age;
// })
// console.log(sum);
//  let pattern = '';
// for(let i=0; i<10; i++){
//     for(let j=1; j<=i.length; j++){
//         pattern += '*';
//     }
//     console.log(pattern);
// }

// function diamondPattern(n) {
//     // Upper part
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
//     // Lower part
//     for (let i = n - 1; i >= 1; i--) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }

// diamondPattern(5);

function pattern(n){
     
 for(let i=n; i>=1; i--){
    let row =''; 
   for(let j=1; j <= i ; j++){
    row += j;
   
   }
   console.log(row);
 }
}
pattern(5);