// const arr=[1,2,3,4,5];
// for(const element of arr){
//     console.log(element);
// }
const map=new Map();
map.set("name","Sujal");
map.set("age",21);
map.set("email","sujal@example.com");
// for(const [key, value] of map){
//     console.log(`${key}: ${value}`);
// }
const value=map.forEach((item)=>{
    console.log(item);
})
