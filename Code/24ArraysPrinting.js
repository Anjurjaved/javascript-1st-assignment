let runs = ["Ashraful",true, 56, "Aftab", false, 20, "Sakib", false, 35];
console.log(runs);
console.log(typeof runs)

for(let i = 1; i<=runs.length; i++)
{
	if(i%3==0)
	{
		console.log("Name : ", runs[i-3]);
		console.log("Fifty : ", runs[i-2]);
		console.log("Runs : ", runs[i-1])
		console.log("************Next Batsman**************")
	}
	
}
