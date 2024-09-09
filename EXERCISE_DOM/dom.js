// const paragraphs = document.querySelectorAll('p');

// for(let i=0; i<paragraphs.length; i++){
//     console.log(`paragraph with index ${i + 1}: ${paragraphs[i].textContent}`);
// }

// //Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// const fourthText = document.querySelector('#fourth').innerHTML = "Fourth Paragraph";
// console.log(fourthText);

// set class using different setting method

//  const paragraphs = document.querySelectorAll('p');

//  for(let i=0;i<paragraphs.length;i++){
//     let paragraph = paragraphs[i];

//     paragraph.setAttribute('class',`paragraph-class-${i + 1}`)
//  }

//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  if(i === 0 && i === 2){
    paragraph.style.color = 'green';
  }
  else if(i === 1 && i === 3){
    paragraph.style.color = 'red';
  }
}

// print all the ele