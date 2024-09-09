const radius = [2,3,4,6];

let area = function(radius){
    return Math.floor(Math.PI * radius* radius);
};

let circumferenceArea = (radius) =>{
    return Math.floor(2 * Math.PI * radius);
}

const calculate = (radius, callback) =>{      // Higher order function
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(callback(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumferenceArea));


let arr =[1,2,3,4,5];
const sumArr = (arr) =>{                     // Higher Order function 
    let sum = 0;
    arr.forEach(function(element){
        sum += element;
    })
    return sum;
}
console.log(sumArr(arr));

// Make a higher order function in which you can double, triple the value of the array 

const arr1 = [2,4,5,6,32,52,23];

const double = (arr1) =>{
    return 2 * arr1;
}

const triple = (arr1) => {
    return 3 * arr1;
}
const doubleTriple = (arr1, logic) => {
     let newArr = [];
     for(let i=0; i<arr1.length; i++){
         newArr.push(logic(arr1[i]));
     }
     return newArr;
}

console.log(doubleTriple(arr1,double));
console.log(doubleTriple(arr1,triple));

// using reduce find sum of the array

const arr2 = [2,4,5,6,32,52,23];

const sum = arr2.reduce((acc, current) => {
    return acc + current;
},0);
console.log(sum);

// Find most populated countries

const countries = [
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 }
];

function mostPopulatedCountries (countries, n){
  const sortedCountries = countries.sort((a,b) => b.population - a.population);
  return sortedCountries.slice(0,n);
}

console.log(mostPopulatedCountries(countries,10));