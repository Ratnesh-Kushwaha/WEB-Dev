let str = "hello world";              //we define obj on which operation will done
let len = 0;                          //for measuring length of str
for (let i of str) {                    //for of loop
    console.log("i=", i);
    len++                           //len ke liye bhi eek operation chla diya
} console.log("total length of string is: ", len);


//for in loop
let stu = {
    Name: "Ram",
    class: 20,
};
for (let key in stu) {
    console.log("key=", key, "value=", stu[key]);
}