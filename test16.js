// const user={
//     username:"john",
//     email:"john@example.com",
//     getUserInfo: function(){
//         console.log("get user info");
//         console.log("username: " + this.username);
//     }
// }
// console.log(user.username);
// console.log(user.getUserInfo());
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;
}
const userOne=new User("john",5,true);
console.log(userOne);
const userTwo=new User("jane",3,false);
console.log(userTwo);
