// switch case
let number = 44;
let grade = Number.parseInt(number/10); 
//Number.parseInt used to convert in integer
//here division will be floating number
//console.log("Grade is ", grade);
switch(grade){
    case 9:
        console.log("You got A+");
        break;
    case 8:
        console.log("You got A+");
        break;
    case 7:
        console.log("You got A");
        break;
    case 6:
        console.log("You got B");
        break;
    case 5:
        console.log("You got C");
        break;
    case 4:
        console.log("You got D");
        break;
    default:
        console.log("You failed in exam");
}