function SetUserName(username){
    this.username=username;
    console.log("Username is set to: "+this.username);
}
function CreateUser(username,email,password){
    this.email=email;
    this.password=password;
}
const userOne=new CreateUser("john","john@example.com","password123");
console.log(userOne);