function ex() {
  let a = 4;
  let b = 2;
  // > < >= <= && ||
  // ===

  let x = 1; // number
  let y = "1";
  // cau dieu kien
  if (x === y || a > b) {
    // true
    console.log(" a lon hon b");
  } else {
    console.log(" b lon hon a");
  }
  // condition rendering
  x === y ? console.log(" a lon hon b") : console.log(" b lon hon a");

  x && console.log(1); // res of condition : boolean
  //

  let z = 2;
  if (z) {
    // false
    console.log(true);
  } else {
    console.log(false);
  }
  // xep loai hs
  switch (z) {
    case 2:
      console.log("Mon");
      break;
    case 3:
      console.log("Tue");
      break;
    case 4:
      console.log("Wed");
      break;

    default:
      break;
  }
}

// INPUT : promt : nhap n
// OUT : n la so chan/le

// let input = prompt("Nhap n:");

function vd1() {
  if (input % 2 === 0) {
    console.log(`${input} la so chan`);
  } else {
    console.log(input + " la so le");
  }

  console.log(typeof res);

  a = "1"; // string
  b = parseInt(a); // 1 -> type : number
  // parseInt()

  switch (input % 2) {
    case 0:
      console.log(`${input} la so chan`);
      break;
    default:
      console.log(input + " la so le");
      break;
  }

  console.log(`${input} la so ${input % 2 === 0 ? "chan" : "le"}`);
}

function bt2() {
  // let input = prompt("Nhap cac so tu nhien (cach nhau boi dau ','):");

  // console.log(input, typeof input);
  // let ar = input.split(',')
  // console.log(ar[0]); // typeof
  // console.log(ar[1]);
  // console.log(ar[2]);
  // console.log(ar[3]);

  let NUMBER_MIN = prompt("Nhap so thu nhat:");
  let b = prompt("Nhap so thu hai:");
  let c = prompt("Nhap so thu ba:");
  let d = prompt("Nhap so thu bon:");

  // let NUMBER_MIN = a
  // min = a
  if (parseInt(b) < parseInt(NUMBER_MIN)) NUMBER_MIN = b;
  // b < min -> swap (b,min) -> min = b
  if (c < NUMBER_MIN) NUMBER_MIN = c;
  // c < min -> min = c
  if (d < NUMBER_MIN) NUMBER_MIN = d;
  // d < min -> min = d
  console.log(NUMBER_MIN);

  // 5 3 4 2
}

function bt3() {
  let n = 7;
  //  <= (n-1)/2

  // parseInt(0.5) -> ???
  // Math.floor(1.5)

  // n = 1 -> 0 -> (n-1)/2 = 0
  // n = 2 -> 0 -> (n-1)/2 = 0.5
  // n = 3 -> 1 -> (n-1)/2 = 1
  // n = 4 -> 1 -> (n-1)/2 = 1.5
  // n = 5 -> 2 -> (n-1)/2 = 2
  // n = 6 -> 2 -> (n-1)/2 = 2.5
  // n = 7 -> 3 -> (n-1)/2 = 3
  // n = 8 -> 3 -> (n-1)/2 = 3.5
  // quy luat -> res = phan nguyen duong (n-1)/2
  let res;
}

function bt7() {
  let str = "heLLO woRld";
  let res7 = "";
  let res8 = "";
  let convertArray = str.split(" "); // ['dEar' , 'hAI']

  //index = 0 -> elm = 'dEar'
  convertArray.forEach((element) => {
    res7 += capitalizeFirstLetter(element) + " ";
    res8 += countCharacter(element) + " ";
  });

  console.log(res7.trim());
  console.log(res8.trim());

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  function countCharacter(string) {
    return string.length;
  }
}

bt7();
