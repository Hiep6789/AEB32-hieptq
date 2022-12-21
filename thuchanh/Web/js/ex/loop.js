let input = "a,b,c,d"; // string
let ar = input.split(","); // array [1,2,3,4] -> Array<string>
// index : 0 -> ar.length -> 0,1,2,3
// console.log(ar);

// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);
// console.log(ar[3]);

// -> lan lap for
// index = 0
// index = 0 + 1 -> 1
// index = 0 + 1 -> 1

// 4
// l1 : index = 0 -> log(ar[0]) -> a
// l2 : index = 1 -> log(ar[1]) -> b

// for (let index = 0; index < ar.length; index++) {
//   let element = ar[index]
//   console.log(element);
// }

// (element)=>{

// }

// ar.forEach(element => {
//   console.log(element);
// });

// ar.forEach((element, index) => {
//   console.log(element);
// })

// ar.map((elm)=>{
//   console.log(elm);
// })

function checkNT(number) {
  let isNT = true; // gia su n la so ngto

  // CM gia thuyet
  for (let index = 2; index < n; index++) {
    if (number % index === 0) {
      isNT = false;
    }
  }
  return isNT
}

// h = 5
// for (let index = 1; index <= 5; index++) {
//   let str = ''
//   // ve sao cua 1 hang : star = index
//   for (let star = 0; star < index; star++) {
//     str += '*'
//   }
//   console.log(str); // in ra * , vua de xuong dong
// }

/// ve tam giac vuong
// h = 5
// *                -> index = 1 , * = index
// **               -> index = 2 , * = index
// ***
// ****
// *****

/// ve giac deu    star -> 2*index-1 --- space= h-index 
// h = 5           star, space -> h & index
//    *            -> index = 1 , * = 1  , space = 4        
//   ***           -> index = 2 , * = 3  , space = 3
//  *****          -> index = 3 , * = 5  , space = 2
// *******         -> index = 4 , * = 7  , space = 1
//*********        -> index = 5 , * = 9  , space = 0




let z = 'aBCD'
console.log(z.charAt(0).toUpperCase() + z.slice(1).toLowerCase() );