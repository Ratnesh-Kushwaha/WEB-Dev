


// function sum(c,d){      //making a function
//     val=c+d;
//     return val;
// }

// const mul=(a,b) => {        //making a arrow function to make it compact
//     val=a*b;
//     return val;
// }









// //writer first n natural number by takin n value from user
// // let n=prompt("Enter number:");
// // let ar=[];
// // for (let i=1; i<=n; i++){
// //     ar[i-1]=i;
// // }
// // console.log(ar);
// // let final=ar.reduce((re,curr)=>{           //to find above arry sum usind reduce method
// //     return re+curr;
// // })
// // console.log(final)

// let dom1=document.getElementById("head1")
// console.log(dom1)
// console.dir(dom1)

// let d2= document.getElementsByClassName("cla")
// console.dir(d2)
// console.log(d2)

// //manupulating html by accesing through javascript and appent more text to out h1 tag
// let h1=document.querySelector("h1")      //we are accessing h1 tag content
// console.dir(h1.innerText)
// h1.innerText=h1.innerText+ "Hello world";

// //writing new text inside of div by accessing and manupulating html from js
// // let divs = document.querySelectorAll(".box")
// // let idx=1;
// // console.log(divs)
// // for(div of divs){
// //     div.innerText=`new value ${idx}`;
// //     idx++
// // }

// //ATTRIBUTE using inJS
// let hed= document.querySelector("h1")
// console.log(hed.getAttribute("id"))    //getAttribute shows ki id ka kya value dii hai hamne similarly setAttribute(attr, value ) set value to a attribute like class, id ,etc.

// let var3= document.querySelector(".idl")
// var3.style.fontSize = "30px";         //doning work of css in JS using node.stle.____  code
// var3.style.color=  "blue"

// let newb= document.createElement("button") //code for creating new element inJS instead of html
// newb.innerText= "click it"                  //button pr text aise likhe
// let di= document.querySelector("div")  //we can also write (".idl") instead of node ("div") for refference see html div first whose class is idl
// di.append(newb)                         //now we add new button to the last of the div that we created in html


// let newheading= document.createElement("h1")
// newheading.innerText= "<i>hee hoo</i>"
// document.querySelector("body").prepend(newheading)     //adding new heading to the top

// //EVENTS
// // let div= document.querySelector(".box")          //ther are many more such event we can read on mdn site
// // div.onmouseover =() => {
// //     console.log("your are on the box");
// // }

// let para= document.querySelector(".para")
// // para.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type)
// //     console.log(evt.target)                 //we can perform many more action 
// // }

// para.addEventListener("click",(evt)=>{
//     console.log("para is clicked")
//     console.log(evt);  
//     console.log(evt.type)
//     console.log(evt.target)
// })
// para.addEventListener("click",(evt)=>{
//     console.log("para is clicked--handler2")});

// const handler3 = () => {
//     console.log("para is clicked --handler 3")
// }
// para.addEventListener("click", handler3)            //handler3 is callback function which is written above and it's calling back

// para.removeEventListener("click",handler3);     //this command will delete handler 3 from console


// //Exersice to change command and background color on clicking the button 
// let mod= document.querySelector("#mod")
// let currMode= "light";
// mod.addEventListener("click",()=>{
//     if (currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black"
//     }else{currMode="light";
//         document.querySelector("body").style.backgroundColor="white"
//     }
//     console.log(currMode)
// });

// //prototype
// const emp= {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// }
// const ram= {
//     salary:150000,
//     calcTax() {
//         console.log("Tx rate is 20%")
//     }
// } 
// ram.__proto__= emp;     //if object and prototype have same method then object method will be used


// //we use classes to make multiple objects on same template it uses to AVOID REPETATION in our program
// class car{
//     constructor(brand, milage){                             //we are creating a function here
//         console.log("creating new objects")
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }
// let fortuner = new car("fortuner", 10);       //the constructor invoke first see in console page in chrome
// console.log(fortuner)
// let innova = new car("innova", 15);         //again constructor invoke
// console.log(innova)
// // fortuner.setBrand("fortuner")   


// //USING INHERENT PROPERTY IN CLASSES
// class person{
//     constructor() {
//         // console.log("enter parent constructor")
//         this.species= "homo sepiens"
//     }
//     eat() {
//         console.log("eat")
//     }
//     sleep() {
//         console.log("sleep")
//     }
//     work() {
//         console.log("do something")
//     }
// }
// class engineer extends person {         //inherenting parent properties (here parent is person)
//     constructor(branch){
//         // console.log("enter child constructor")
//         super();                // to invoke parent class constructor
//         this.branch = branch;
//         // console.log("exit child constructor")
//     }
//     work() {
//         console.log("solve proble, do everything")          // child and parent have same method i.e work() so here it will take child's methode of work
//     }
// }
// class doctor extends person {           //inherenting parent properties (here parent is person)
//     constructor(branch){
//         // console.log("enter child constructor")
//         super();                // to invoke parent class constructor
//         this.branch = branch;
//     }
//     work() {
//         console.log("treat patient")
//     }
// }
// let engineerObj = new engineer("Ec dep");
// let doctorObj= new doctor("surgical dep");  //as we use super() keyword in our child class how we can add brach too


// //to show how name variable jo parent constructor me hai use super key se pass kra diya
// class pers{
//     constructor(name) {
//         this.species= "homo sepiens",
//         this.name= name;
//     }
//     work() {
//         console.log("do something")
//     }
// }
// class doc extends pers {          
//     constructor(name){
//         super(name);                // yha name variable jo parent constructor me hai use super key se pass kra diya to get name
//     }
//     work() {
//         console.log("treat patient")
//     }
// }
// let docObj= new doc("ramandep");  


// const hello = () =>{
//     console.log("hello")
// }
// setTimeout(hello , 3000)        //by this command hello will print after 3sec on screen (1000= 1sec)


// //To print two data with simultaneous delay 
// function getData(dataId, getNextData) {     //get next data callback
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }
// // getData(1,()=>{
// //     getData(2,() =>{
// //         getData(3)                          //and so on This will eventually become callback hell
// //     } )
// // })


// //PROMISE sync example
// let promise= new Promise((resolve,reject)=>{
//     console.log("It's a promise");
//     resolve("success")          //try to comment out resolve and decomment out reject and see in console bar by typing promise
//     // reject("erron404 occured")
// }) 
// console.log(promise)


// //creating a function and sync it with promise function
function getData(dataId, getNextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("succes")
            if(getNextData){
                getNextData()
            }
        },4000)
    })     
};

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("It's a promise");
//         // resolve("success")
//         reject("error")
//     })
// }
// let prom=getPromise();
// prom.then((res)=>{
//     console.log("promise fullilled my friend", res);
// });
// prom.catch((err)=>{
//     console.log("Oops something went wrong my friend", err);
// });




//THIS IS A STANDARD EXAMPLE OF CALLBACK HELL
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1")
//             resolve("success")
//         },6000)
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2")
//             resolve("success")
//         },6000)
//     })
// }
// console.log("fetching data1")
// let p1= asyncFunc1();
// p1.then((res)=>{                                //below we will make sure ki jab tk data1 fetch na hoo data1 print na ho
//     console.log("fetching data2")
//     let p2=asyncFunc2()
//     p2.then((res)=>{
//     })
// })

//NOW WE WILL USE PROMISE CHAIN FUNCTION FOR THE SAME ABOVE
// function getData(dataId) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("succes")
//         },1000)
//     })     
// };
// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })

// getData(1).then((res)=>{         //above is the better way to getData() but we can also get data this way (not recommended)
//     getData(2).then(()=>{
//         console.log(res)
//     })
// })


//ASYNC AWAIT FUNCTIONS
// async function hello() {
//     console.log("hello")
// }

// function api(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data ")
//             resolve(200)
//         },2000)
//     })
// }
// async function getWeatherData(){
//     await api()
// }


// function getData(dataId) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("succes")
//         },1000)
//     })     
// };
// async function getAllData(){
//     await getData(1)
//     console.log("fetching data 1..")
//     await getData(2)
//     console.log("fetching data 2..")
//     await getData(3)
//     console.log("fetching data 3..")
//     await getData(4)
//     console.log("fetching data 4..")
// }

//IIFE
// (async function(){
//     await getData(1)
//     console.log("fetching data 1..")
//     await getData(2)
//     console.log("fetching data 2..")
//     await getData(3)
//     console.log("fetching data 3..")
//     await getData(4)
//     console.log("fetching data 4..")
// })();