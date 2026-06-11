// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     getPassword(){
//         return `${this.password}ab`;
//     }
// }
// const chai=new User("chai","chai@example.com","password123");
// console.log(chai.getPassword());
// class User{
//     constructor(username){
//         this.username=username;
//     }
//     logMe(){
//         console.log("Username is: "+this.username);
//     }
// }
// class Teacher extends User{
//     constructor(username,email,password){
//         super(username);
//         this.email=email;
//         this.password=password;
//     }
//     addCourse(){
//         console.log("Course added by "+this.username);
//     }
// }
// const teacherOne=new Teacher("john","john@example.com","password123");
// teacherOne.addCourse();
// teacherOne.logMe();
class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log("Username is: "+this.username);
    }
    CreateId(){
        return 123;
    }
}
const sujal=new User("sujal");
sujal.logMe();
console.log(sujal.CreateId());
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const teacherOne=new Teacher("john","john@example.com");
console.log(teacherOne.CreateId());