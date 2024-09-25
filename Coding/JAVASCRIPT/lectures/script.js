let array1 = [4, 7, 9, 2, 6]         //using reduce method to get largest value in given array
const out = array1.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
});
console.log(out);





// let array1=[4,7,9,2,6]         //using reduce method to get largest value in given array
// const out= array1.reduce((pre, cur)=>{
//     return pre > cur ? pre : cur;
// });
// console.log(out);