//1. Print a pyramid like the one below, here input is 3.
// *
// * *
// * * *

var number = prompt();
for (i = 1; i <= number; i++) {
    let row = "";

    for (j = 1; j <= (number - i); j++) {
        row += "";
    }
    for (k = 1; k <= i; k++) {
        row += "* "

    }
    document.write(row);

}

// 2. Print a pyramid like the one below, here input is 3.
//     *
//    * *
//   * * *


var number = prompt();
for (i = 1; i <= number; i++) {
    let row = "";

    for (j = 1; j <= (number - i); j++) {
        row += " ";
    }
    for (k = 1; k <= i; k++) {
        row += "* "

    }
    document.write(row);

}


// 3. Print a pyramid like the one below, here input is 3.
//     *
//    * *
//   * * *
//    * *
//     *


var number = prompt();
for (i = 1; i <= number; i++) {
    let row = "";

    for (j = 1; j <= (number - i); j++) {
        row += " ";
    }
    for (k = 1; k <= i; k++) {
        row += "* "

    }
    document.write(row);

}
for (i = number - 1; i >= 1; i--) {
    row = "";
    for (j = 1; j <= (number - i); j++) {
        row += " ";
    }
    for (k = 1; k <= i; k++) {
        row += "* "
    }
    document.write(row)
}


//4. Calculate the summation of 1-1000 numbers.     //4. Calculate the summation of 1-1000 numbers.     //4. Calculate the summation of 1-1000 numbers.     //4. Calculate the summation of 1-1000 numbers.     


var sum=0;
for(i=1;i<=1000;i++)
{
    sum+=i
}
document.write(sum)