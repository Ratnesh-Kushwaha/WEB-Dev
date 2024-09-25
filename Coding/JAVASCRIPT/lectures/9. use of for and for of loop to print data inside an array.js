let heroes=["ironman", "superman","spiderman","Thor","Hulk","Dr. Strange"];


//printing names of given array in form of list one by one
for(let i=0; i<heroes.length;i++){     //for loop
    console.log(heroes[i]);
}


//printing same thing using for of loop
for (let i of heroes){      //for of loop
    console.log(i)
}