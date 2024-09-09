class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    changeUserName(){
        return this.username;
    }
}

class Teacher extends  User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const chai = new Teacher("sidharth", "siddarth@gmail.com", "123");

console.log(chai.addCourse());

// Exercises

class User2 {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    viewData(){
        console.log(`you can see the user is ${this.username} and their email is ${this.email}`);
    }
}

const user2 = new User2("sidharth singh", "sid@gmail.com");

console.log(user2.viewData());
