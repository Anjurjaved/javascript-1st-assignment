
// 1. Create two string variables and add variables data to another variable.

var Data_1 = "Anjur";
var Data_2 = " Javed";
var Data = Data_1 + Data_2;
document.write("My Full Name Is : ", Data);


// 2. 2. Find out the type of the newly created variable.

document.write("<br>" + typeof (Data) + "<br>");


// 3. Create an object variable and change the value of the object key, repeat the same task creating an object variable using const.

var data = { First_Name: "am", Last_Name: "I" }

data.First_Name = "I";
data.Last_Name = " Am";

document.write(data.First_Name + data.Last_Name + " ");

//2nd part


const Datas = { first_Name: "CSE", last_Name: "studing" }

Datas.first_Name = "Studing";
Datas.last_Name = " CSE";

document.write(Datas.first_Name + Datas.last_Name + "<br>");

// 4. Create an object variable which holds all primitive data types.
var all_primitive_data_type = {
    string: "Birth",
    Number: 2004,
    Boolean:true,
    bigInt : 900546545458454584584854,  // big int ar normal int r diff holo 15 digit r


}
document.write(all_primitive_data_type.string + " <br>" + all_primitive_data_type.Number + " <br> " + all_primitive_data_type. Boolean + "  <br>" + all_primitive_data_type. bigInt  )

