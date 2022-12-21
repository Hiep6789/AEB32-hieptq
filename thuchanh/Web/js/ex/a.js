// let a = '12'
// console.log(a.slice(0,1));
// console.log(a.slice(1));

// n
// a 1L
// b 2L

//OUTPUT :

// 2a >= b  -> parseInt(n/2) * b  +  [n - (parseInt(n/2) * b)] * a
let n = 5;
let a = 2;
let b = 3;

// 2 =                                                         parseInt(n/2)
// 1 = 5 - 4 =  (n%2)                                          n%2
// 2*2L + 1*1L     -> 2 * b + 1 * a         (chon)

// // 2a < b  -> n * a
// n = 5
// a = 2
// b = 3

// 5 * 1L          -> 5 * a = 5                (chon)
// 1*2L + 3*1L     -> 1 * b + 3 * a = 6
// 2*2L + 1*1L     -> 2 * b + 1 * a = 7

if (2 * a >= b) {
  console.log(parseInt(n / 2) * b + (n % 2) * a);
} else {
  console.log(n * a);
}
