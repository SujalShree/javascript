// class User{
//     constructor(email,password){
//         this.email=email;
//         this.__password=password;
//     }
//     getPassword(){
//         return this.__password.toUpperCase();
//     }
//     setPassword(value){
//         this.__password=value;
//     }
// }
// const sujal=new User("sujal@example.com","password123");
// sujal.setPassword("newpassword123");
// console.log(sujal.getPassword());
function User(email,password){
    this.__email=email;
    this.__password=password;
    Object.defineProperty(this,"email",{
        get:function(){
            return this.__email.toUpperCase();
        },
        set:function(value){
            this.__email=value;
        }
    });
    Object.defineProperty(this,"password",{
        get:function(){
            return this.__password.toUpperCase();
        },
        set:function(value){
            this.__password=value;
        }
    });
}
const sujal=new User("sujal@example.com","password123");
console.log(sujal.email);