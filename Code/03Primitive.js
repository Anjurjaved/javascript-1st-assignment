let a = null;
let b = 123;
let c = true;
let d = BigInt("5670") + BigInt("3");
let e = "String";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof g);

let items = {
	"one": 123,
	"two": true,
	"three": "String"
}
console.log(items["three"]);
console.log(typeof items);