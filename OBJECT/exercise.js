const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  // Find the person with the most skills
 let mostSkill = 0;
 let mostSkilledPerson  = '';
 for(const i in users){
    if(users[i].skills.length > mostSkill){
        mostSkill = users[i].skills.length;
        mostSkilledPerson = i;
    }
 }

 console.log(`the person who have most skill is ${mostSkilledPerson}`);

 // count max loggedin user and user having greater than 50 points

 let maxloggedIn = 0;
 let maxPointUser = 0;

 for(const user in users){
    if(users[user].isLoggedIn){
        maxloggedIn ++;
    }
    if(users[user].points>= 50){
        maxPointUser++;
    }
 }
console.log(`max loggedIn users ${maxloggedIn} and user having greater than 50 points ${maxPointUser} `);

// Users having MERN stack skills

const mernStackSkills = ['MongoDB', 'Express', 'React', 'Node'];
const isMernDevelopers = (skills) => mernStackSkills.every((skill)=> skills.includes(skill));  

const mernDevelopers = [];

for(const user in users){
    if(isMernDevelopers(users[user].skills)){
    mernDevelopers.push(user);
    }
}

console.log('MERN stack developer are:', mernDevelopers);

// const mernStackSkills = ['MongoDB', 'Express', 'React', 'Node'];

// const isMernDeveloper = (skills) => mernStackSkills.every(skill => skills.includes(skill));

// const mernDevelopers = [];

// for (const user in users) {
//   if (isMernDeveloper(users[user].skills)) {
//     mernDevelopers.push(user);
//   }
// }

// console.log('MERN stack developers:', mernDevelopers);

