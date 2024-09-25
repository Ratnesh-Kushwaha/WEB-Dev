const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact")      //accessing html para tag whose id is fact
const btn=  document.querySelector("button")        //accessing html button tag


let promise=fetch(url)
console.log(promise)

const getFacts= async () =>{                    //using async await method
    let response =await fetch(url);
    console.log(response);              //data in json format
    let data= await response.json()     //making data from .json to redable form
    factPara.innerText= data[2].text;  //us json data jo ki hmne fetch api ke through request dala tha usme ka data of array index no 2 ka data print krane ke liye
}

// function getFacts(){                    //using promise chain method
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//         factPara.innerText= data[2].text
//     })
// }

btn.addEventListener("click", getFacts)