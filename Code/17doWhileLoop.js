// While loop for n number print
console.log("While loop");
while(false)
{
    console.log("printing false from while");
}
console.log("Do While loop");
do
{
    console.log("printing false from do while");
}while(false)

// While loop for sum of n number print
console.log("Sum of 1-9 natural number using while loop");
i = 0;
let sum = 0
while(i<10)
{
    sum += i;
    i++;
}
console.log("Sum of 1-9 natural number is: ", sum);

console.log("Sum of 1-9 natural number using do while loop");
i = 0;
sum = 0
do
{
    sum += i;
    i++;
}while(i<10)
console.log("Sum of 1-9 natural number is: ", sum);