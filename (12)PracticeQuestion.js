//1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           1. Create 3 variables of number and find out which one is large.           

var first_nmbr = prompt("Enter First Number")
var second_number = prompt("Enter Scond Number")
var third_number = prompt("Enter Your Third Number")

var Large_number_is = 
(first_nmbr > second_number) ? 
(first_nmbr > third_number ? first_nmbr : third_number) : (second_number > third_number ? second_number : third_number);


document.write("<br>" + "the largest number is : " + Large_number_is + "<br>" );


//uisng my own function.

function largest_from_3_numbers(First_number,Second_number,Third_number){
    return(First_number>Second_number)?
    (First_number>Third_number?First_number : Third_number) : (Second_number>Third_number ? Second_number : Third_number);
}
var First_number = prompt("Enter First Number");
var Second_number =  prompt("Enter Scond Number");
var Third_number = prompt("Enter Your Third Number");

var largest = largest_from_3_numbers(First_number,Second_number,Third_number);

document.write("Here your Larges number using function : " + largest + "<br>" )



// 2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               2. Calculate the average of 5 numbers.               

function  avarege(num_1,Num_2,Num_3) 
{
    return((num_1+num_2+num_3)/3)
}
var num_1 = parseFloat (prompt("Enter 1st Number"));
var num_2 = parseFloat( prompt("Enter 2nd Number"));
var num_3 = parseFloat (prompt("Enter 3rd Number"));
var result=avarege(num_1,num_2,num_3);

document.write(result + "<br>");



//3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 3. Take input of birth month in number from the prompt and translate it to String like January, February. Print the translated value.                 
var daynumber = parseInt( prompt("Enter Month Number : ")) 
var dayname;
switch (daynumber){
    case 1: dayname="January" ;break;
    case 2 : dayname="February";break;
    case 3 : dayname="March"; break;
    case 4 : dayname="April";break;
    case 5: dayname ="may";break;
    case 6: dayname="June";break;
    case 7: dayname="july";break;
    case 8: dayname="August";break;
    case 9 : dayname="September";break;
    case 10 : dayname = "Auctober";break;
    case 11: dayname = "Novemebr";break;
    case 12: dayname = "December";break;
    default : dayname= "Invalid Month"
 
}
document.write(dayname  + "<br>");



//4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                4. Console print 1-20 numbers.                


//Using for loop

for( i=1;i<=20;i++ ){
    document.writeln( "<br>"  + i)
}

//using while loop
var i=1;
while(i<=20){
    document.write(i);
    i++;
}

//using do while loop
var i=1
do{
    document.write("<br>"  + i)
    i++
}
while (i<=20);

