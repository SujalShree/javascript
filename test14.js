// const myrr=[1,2,3,4,5];
// const val=myrr.filter((item)=>{
//     return item%2===0;
// });
// //console.log(val);
// const nums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=nums.map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=>num>=40);
// console.log(newNums);
const shoppingCart=[
    {
        item:"Laptop",
        price: 1000
    },
    {
        item:"Phone",
        price: 500
    },
    {
        item:"Headphones",
        price: 100
    }
];
const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice);