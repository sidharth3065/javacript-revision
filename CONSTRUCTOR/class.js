class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

 encryptPassword(){
      return `${this.password}abc`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("sidharth", "sidexample.com", "123");

console.log(chai.changeUserName());
console.log(chai.encryptPassword());