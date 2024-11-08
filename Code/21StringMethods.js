//String methods
let a = "Dhaka is the worst city to live." 
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.slice(0,5));
console.log(a.replace("Dhaka","Damascus"));
let b = a.split(" ");
console.log(b);
console.log(typeof b);
for(str of b){
    console.log(str);
}