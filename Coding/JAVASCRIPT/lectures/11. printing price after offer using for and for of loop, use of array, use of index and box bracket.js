//applying offers in arry using loop
let items = [250, 645, 300, 900, 50];
let it = 0;
for (let i of items) {
    console.log(`value at index ${it}=${i}`);
    let offer = i / 10;
    items[it] -= offer;
    console.log(`value after offer= ${items[it]}`);
    it++;
}
for (let it = 0; it < items.length; it++) {
    let offer = items[it] / 10;
    items[it] -= offer;
}
console.log(items);