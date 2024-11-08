// for loop
process.stdout.write("Printing without newline \n"); 
for(let i = 0; i<10; i++){
    console.log(i);
}

console.log("Sum of first 20 natural numbers");
let sum = 0;
for(let i = 1; i<=20; i++){
    sum += i;
}
console.log("Sum of first 20 natural numbers is: ", sum); 