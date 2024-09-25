let data = {
    item: "pen",
    price: 10,
}

//  `_____${}___` is template litral which can show string and variable as shown. and \n is next line command and \t is next tab command
let output = `cost of ${data.item} is ${data.price} rupees.\nThank you`;  
console.log(output)