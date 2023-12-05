// Boolean1
// let A = 20;
// let res = A % 2 == 0;
// console.log(res);


// Boolean2
// let A=-5
// let B=-2
// let res = (A>=0 || B < -2)
// console.log(res)

// Boolean3
// let A=7
// let B=5
// let C=2
// let res = ( B > Math.min(A, C) && B < Math.max(A, C))
// console.log(res)

// Boolean4
// let A=9
// let B=7
// let res =(A % 2 !== 0 && B % 2 !== 0)
// console.log(res)

// Boolean5
// let A=8
// let B=7
// let res =(A % 2 !== 0 || B % 2 !== 0)
// console.log(res)

// Boolean6
// let A=1
// let B=6
// let res = (A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0);
// console.log(res)

// Boolean7
// let A=1
// let B=6
// let C=1
// let res = (A > 0 && B > 0 && C > 0);
// console.log(res)

// Boolean8
// let A=7
// let B=-5
// let C=-8
// let res = (A > 0 && B <= 0 && C <= 0) || (A <= 0 && B > 0 && C <= 0) || (A <= 0 && B <= 0 && C > 0);
// console.log(res)

// Boolean9
// let A=-7
// let B=5
// let C=8
// let res = (A > 0 && B > 0 && C <= 0) || (A > 0 && B <= 0 && C > 0) || (A <= 0 && B > 0 && C > 0);
// console.log(res)

// Boolean10
// let A = 98;
// let res = (A > 9 && A < 100 && A % 2 === 0);
// console.log(res)

// Boolean11
// let A =108;
// let res = (A > 99 && A < 1000 && A % 2 !== 0);
// console.log(res)

// Boolean12
// let A = 5;
// let B = 6;
// let C = -6;
// let k = (A % 2 === 0) || (B % 2 === 0) || (C % 2 === 0);
// let m = (A % 2 !== 0) || (B % 2 !== 0) || (C % 2 !== 0);
// let res = k && m;
// console.log(res);

// Boolean13
// let abc =654;
// let n = abc.toString();
// let m = Math.abs(parseInt(n[0]) - parseInt(n[1])) === 1 &&
//                    Math.abs(parseInt(n[1]) - parseInt(n[2])) === 1;
// let k = parseInt(n[0]) > parseInt(n[1]) &&
//                    parseInt(n[1]) > parseInt(n[2]);
// let res = m || k;
// console.log(res);


// Boolean14
// let abc = 654;
// let n = abc.toString();
// let m = true;
// for (let i = 0; i < n.length - 1; i++) {
//   if (Math.abs(parseInt(n[i]) - parseInt(n[i + 1])) !== 1) {
//     m = false;
//     break;
// }
// }
// let k = parseInt(n[0]) > parseInt(n[1]) && parseInt(n[1]) > parseInt(n[2]);
// let res = m || k;
// console.log(res);

// Boolean15
// let abc =858;
// let strAbc = abc.toString();
// let k = strAbc === strAbc.split('').reverse().join('');
// let res = k;
// console.log(res);

// Shaxmat16
// Berilgan koordinalar
// let x1 =4 ;
// let y1 =1;
// let x2 = 1;
// let y2 =5 ;
// let color1 = (x1 + y1) % 2 === 0 ? 'oq' : 'qora';
// let color2 = (x2 + y2) % 2 === 0 ? 'oq' : 'qora';
// let res = color1 === color2;
// console.log(res ? "Berilgan maydonlar bir xil rangda" : "Berilgan maydonlar bir xil rangda emas");

// Shaxmat17
// Berilgan koordinalar
// let x1 = 4;
// let y1 = 5;
// let x2 = 4;
// let y2 = 6;
// let res = (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);
// console.log(res ? "Ruh bir yurishda bir maydondan ikkinchisiga o'ta oladi" : "Ruh bir yurishda bir maydondan ikkinchisiga o'ta olmaydi");

// Shaxmat18
// Berilgan koordinalar
// let x1 =3;
// let y1 =5;
// let x2 =3;
// let y2 =8;
// let res = (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);
// console.log(res ? "Shoh bir yurishda bir maydondan ikkinchisiga o'ta oladi." : "Shoh bir yurishda bir maydondan ikkinchisiga o'ta olmaydi.");

// Shaxmat19
// Berilgan koordinalar
// let x1 = 4;
// let y1 = 5;
// let x2 = 5;
// let y2 = 6;
// let res = Math.abs(x1 - x2) === Math.abs(y1 - y2);
// console.log(res ? "Fil bir yurishda bir maydondan ikkinchisiga o'ta oladi" : "Fil bir yurishda bir maydondan ikkinchisiga o'ta olmaydi");

// Shaxmat20
// Berilgan koordinalar
// let x1 = 1;
// let y1 =1 ;
// let x2 = 2;
// let y2 = ;
// let res = Math.abs(x1 - x2) * Math.abs(y1 - y2) === 2;
// console.log(res ? "Ot bir yurishda bir maydondan ikkinchisiga o'ta oladi" : "Ot bir yurishda bir maydondan ikkinchisiga o'ta olmaydi");


// Operator1
// let A = 1;
// let B = 2;
// let Y = -B / 2 * (Math.pow(A, 2) + Math.pow(B, 2));
// console.log(Y);

// Operator2
// let A = 3;
// let B = 5;
// let C = 2;
// let D = 1;
// let Y = Math.pow((A + B) / (C + D), 2) + Math.pow(B, 2);
// console.log(Y);

// Operator3
// let A = 3;
// let C = 2;
// let D = 5;
// let Y = 2 * (Math.pow(A, D) + 4 * Math.pow(C, 2) / 3);
// console.log(Y);

// Operator4
// let A = 2;
// let B = 5;
// let C = 3;
// let D = 1;
// let Y = 1 / Math.pow(A, 2) * Math.pow(B / 10, 3) * Math.pow(C + D, 2);
// console.log(Y);

// Operator5
// let A = 4;
// let B = 2;
// let C = 6;
// let D = 3;
// let Y = Math.pow((A / B - 1) / (C / (D - 1)), 2);
// console.log(Y);

// Operator6
// let A = 4;
// let B = 2;
// let C = 6;
// let D = 3;
// let Y = (A + B) / (C + D / (A + C));
// console.log(Y);

// Operator7
// let A = 4;
// let B = 2;
// let C = 6;
// let Y = Math.sqrt(Math.pow(A + B + C, 2) - Math.pow(A - B - C, 2));
// console.log(Y);

// Operator8
// let A = 2;
// let B = 3;
// let C = 4;
// let Y = (Math.pow(A, 2) + Math.pow(B, 2) + Math.pow(C, 2)) / (A * B * C);
// console.log(Y);

// Operator9
// let A = 2;
// let B = 3;
// let C = 4;
// let D = 5;
// let Y = A * (Math.pow(D, 3) / 3) + B * (Math.pow(C, 2) / 2);
// console.log(Y);

// Operator10
// let A = 8;
// let B = 8;
// let C = 8;
// let Y = Math.abs(A / B - B / C) + Math.pow(A + C, 1/4);
// console.log(Y);
