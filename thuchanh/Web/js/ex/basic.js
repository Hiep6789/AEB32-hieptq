// let/const <ten_bien> = <gia_tri_cua_bien>

// Khai bao bien vs toan bo type da hoc
// kieu nguyen thuy: number, string, boolean, undefined, null
// kieu phuc tap: object, array, function

// Log console: theo format <typeof> <value>
let num = 1;
// console.log("number", num);
// alert('Day la alert dong 10: ' + num)
let number1 = prompt("Please enter your number");
console.log(number1);
let str = "day la string";
console.log("string", str);
let boo = true;
console.log("boolean", boo);
let und;
let unde = undefined;
console.log("undefined", und, unde);
let nu = null;
console.log("null", nu);
let user = {
  name: "ten user",
  age: "tuoi user",
};
console.log("object", user);
console.log("object.name", user.name);
let ar = [1, 2, 3, 4];
let ar1 = ["a", "b", "c"]; // -> Array<string>
console.log("Array<number>", ar);
console.log("lay phan tu", ar[0]); // [0] -> index : 0-> ar.length
function getUser() {
  let user = {
    name: "ten user getUser",
    age: "tuoi user getUser",
  };
}
let res = getUser();
console.log(res);

function getUserParam(_user) {
  console.log(_user);
}
getUserParam(user);
