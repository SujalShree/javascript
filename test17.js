// function MultiplyByTwo(num) {
//     return num * 2;
// }
// MultiplyByTwo.power=2;
// console.log(MultiplyByTwo(5));
// console.log(MultiplyByTwo.power);
// console.log(MultiplyByTwo.prototype);
// function CreateUser(username,score){
//     this.username=username;
//     this.score=score;
// }
// CreateUser.prototype.increment=function(){
//     this.score++;
// }
// CreateUser.prototype.printMe=function(){
//     console.log("Score is: "+this.score);
// }
// const userOne=new CreateUser("john",5);
// userOne.increment();
// userOne.printMe();
// let myHeroes=["superman","batman","spiderman"];
// let heroPower={
//     superman:100,
//     batman:50,
//     getSpiderPower:function(){
//         console.log("spiderman power is: "+this.spiderman);
//     }
// }
// Object.prototype.sujal=function(){
//     console.log("Superman power is: "+this.superman);
// }
// heropower=sujal();
// myHeroes.sujal();
// Array.prototype.mySujal=function(){
//     console.log("This is my custom method");
// }
// myHeroes.mySujal();
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:true
}
const TASupport={
    makeAssignment:true,
    fullTime:true,
    __proto__ :TeachingSupport
}
Object.setPrototypeOf(TASupport,Teacher);
