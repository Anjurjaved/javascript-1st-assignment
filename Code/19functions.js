//functions
// printing the summation of each number
let a = 25;
let b = 30;
let c = 35

function summation(x){
    let sum = 0;
    for(let i = 1; i<=x; i++){
        sum +=i;
    }
    console.log("Sum of up to ", x, " number is: ", sum);
}
summation(a);
summation(b);
summation(c);