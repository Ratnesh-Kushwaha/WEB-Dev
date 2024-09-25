let city1=["Delhi", "Mumbai"]
city1.forEach((val)=>{
    console.log(val.toUpperCase());
});

let city=["Delhi", "Mumbai"]
city.forEach((val, idx, city)=>{
    console.log(val.toUpperCase(), idx, city);
});

//exercise
let num3=[1,2,3,4,5,6]
num3.forEach((val)=>{console.log(val*val)
    return val;
})