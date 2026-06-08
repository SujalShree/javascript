let obj1={
    name:"Sujal",
    age:21,
    email:"sujal@example.com"
}
// console.log(obj1.name);
// console.log(obj1["email"]);
// Object.freeze(obj1);
// obj1.name=function greeting(){
//     console.log("Namaste ${this.name}");
// }
let obj2={
    email:"obj2@example.com",
    Playername:{
        username:{
            firstName:"Sujal",
            lastName:"Shree"
         }
        },
    phone:1234567890
    }
// console.log(obj2.name.username.firstName);
// console.log(Object.assign({},obj1,obj2));
const {Playername: {username: {firstName: U}}} = obj2;
console.log(U);