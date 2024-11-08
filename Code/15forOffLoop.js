// for of loop
let array = [87, 65, 73, 34, 55, 76]
console.log("Using only of");
for(let item of array)
{
    console.log("Item ", item);
}
console.log("Using only for in");
for(let item in array)
{
    console.log("Item ", item, " value is: ", array[item]);
}
console.log("Using only for loop basic");
for(let i =0; i<array.length; i++){
    console.log("Item ", i, " value is: ", array[i]);
}