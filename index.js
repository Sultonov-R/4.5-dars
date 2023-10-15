// // htts

// function digit(n) {
//   let count = 0;
//   while (n >= 1) {
//     if ((n % 10) % 2 == 1) {
//       count++;
//     } else {
//       console.log("HTTS emas");
//       break;
//     }

//     n = Math.trunc(n / 10);
//   }
//   if (count % 2 == 1) {
//     console.log("HTTS");
//   } else {
//     console.log("not htts");
//   }
// }

// console.log(digit(17974));

// kechikkan poyezd

// function trainTime() {
//     let t = +prompt('1-vaqt');
//     let T = +prompt('2-vaqt');
//     let res = t+T;

//     if ( res <= 23){
//         console.log(res);
//     } else {
//         console.log(res%24);
//     }

// }
// console.log(trainTime());

// sanash vaqti

// function countTime() {
//   let n = +prompt("1-sonni kiriting: ");
//   let m = +prompt("2-sonni kiriting: ");
//   let res = m - n + 1;

//   if (m > n) {
//     console.log(res * 10);
//   } else {
//     console.log("You mada a mistake");
//   }
// }
// console.log(countTime());

// katta-kichik

// function comparison() {
//     let firstNumber = +prompt('1-sonni kiriting: ');
//     let secondNumber = +prompt('2-sonni kiriting: ');

//     if (firstNumber < secondNumber) {
//         console.log('<');
//     } else if (firstNumber == secondNumber) {
//         console.log('=');
//     } else {
//         console.log('>');
//     }
// }

// console.log(comparison());

// YangiYilSovgasi

// function giftsChristmas() {
//   let a = +prompt("Birinchi qizni puli: ");
//   let b = +prompt("Ikkinchi qizni puli: ");
//   let c = +prompt("Uchinchi qizni puli: ");
//   let n = +prompt("Sovgani narxi: ");
//   let res = a + b + c;

//   if (res >= n) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// console.log(giftsChristmas());

//  2xonali sonning 1 chi raqami

// function firstNumner() {

//   let a = +prompt("Ixtiyoriy son kiriting: ");
//   let res = Math.trunc(a / 10);
//   return res;
// }
// console.log(firstNumner());

// oxirgi raqam

// function lastNumber() {
//   let n = +prompt("Ixtiyoriy son kiriting: ");
//   let res = n % 10;

//   return res;
// }
// console.log(lastNumber());

// diaganallar soni

// function dnumber() {
//   let N = +prompt("Tomonlar sonini kiriting: ");
//   let dsoni = (N * (N - 3)) / 2;

//   return dsoni;
// }
// console.log('diagonallar soni '+dnumber());

// Azimjonning qoylari

// function sheepNumber() {
//   let n = +prompt("Qoylarni oyoqlari sonini kiriting: ");
//   let res = n / 2;

//   if (n % 4 == 0) {
//     return res;
//   } else {
//     return -1;
//   }
// }
// console.log(sheepNumber());

// Isfandiyor algebra darsida

// function MathLeson() {
//   let n = +prompt("Son kiriting: ");
//   let res = n ** 5 + 8 * n ** 4 - 5 * n ** 3 + 3 * n ** 2 + n - 12;

//   return res;
// }
// console.log(MathLeson());

// 10000 qadam

// function stepsNumber() {
//     let n = +prompt('Qadamlar sonini kiriting: ');
//     let res = n/100;

//     return res;
// }
// console.log(stepsNumber()+'%');

//  Omadsiz chipta

// function ticket() {
//   let ticketNumber = +prompt("Chiptaning raqami: ");
//   let res;

//   while (ticketNumber >= 1) {
//     if (ticketNumber % 100 == 13) {
//       console.log("Omadsiz chipta");
//       break;
//     } else {
//       console.log("Omadli chipta");
//     }
//     ticketNumber = Math.trunc(ticketNumber / 10);
//   }
// }
// console.log(ticket());

// harorat

// function temperature() {
//   let celsiusNumber = +prompt("Temperaturani kiriting: ");

//   let kelvinNumber = celsiusNumber + 273.15;
//   let fahrenheitNumber = celsiusNumber * 1.8 + 32.0;

//   console.log(kelvinNumber);
//   console.log(fahrenheitNumber);
// }
// console.log(temperature());



// uchburchakli sonlar

// function triangleNumber() {
//   let n = +prompt("sonni kiriting: ");
//   let res = (n * (n + 1)) / 2;

//   return res;
// }
// console.log(triangleNumber());



//  Maosh


function salary() {
    let n = +prompt('1-hodim maoshi: ');
    let m = +prompt('2-hodim maoshi: ');
    let l = +prompt('3-hodim maoshi: ');
    if ( n > m) {
        if ( m > l) {
            console.log(n-l);
        } else {
            console.log(n - m);
        }
    } else {
        if (n>l) {
            console.log(m-l);
        } else {
            console.log(m-n);
        }
    }
}
console.log(salary());
