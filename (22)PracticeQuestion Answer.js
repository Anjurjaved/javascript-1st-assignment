
//1. Suppose a string does not contain any special character. Write a javascript program to find out if that string is a number.


function is_number(chq) {
    return !isNaN(chq) && chq !== "";
}

var chq = prompt("Enter Something for chq No.");
document.write(is_number(chq));
