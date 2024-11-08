// for in loop
let obj = {
    name: "Sakib",
    role: "All-rounder",
    position: 5
}

for(let key in obj)
{
    console.log("key of ",key, " and value is: ", obj[key]);
}

for(let key in obj)
{
    console.log("key of ",key, " and value is: ", obj.key);
}