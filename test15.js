const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise is consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({"username":"john","age":30});
    },1000)
}).then(function(user){
    console.log(user);
});
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({"username":"john","age":30});
        }else{
            reject("Error: Something went wrong");
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Promise is settled"));
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({"username":"john","age":30});
        }else{
            reject("Error: Something went wrong");
        }
    },1000)
})
async function consumePromise(){
    try{
        const response=await promiseThree;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}consumePromise();
async function getAllUser(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
}}getAllUser();
fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));