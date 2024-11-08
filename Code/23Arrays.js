let marks = [56, 54, 87, 90];
console.log(marks);
console.log(typeof marks)


for(let i in marks){
	console.log(i);
}

for(let i of marks){
	console.log(i);
}

for(let i in marks){
	console.log(marks[i]);
}

marks.forEach((e)=>{
	console.log(e)
});