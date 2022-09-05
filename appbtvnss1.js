// Bài 3
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// // Function declaration
// function calAge(year) {
//     return 2022 - year;
// }
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// -------------------------------------
// Bài 4:
// debugger
// console.log(`1. ${age}`); //TODO: undefined vì chưa có giá trị khởi tạo
// var age = 20;
// console.log(`2. ${age}`); // 20
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`) //27 vì function thực hiện trước hay sao logic vẫn oke
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27
// console.log(`5. ${getFullName(firstName, lastName)}`); // Peter Parker
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker
// -------------------------------------
// Bài 5:
// console.log(age); // Lỗi vì bản chất của let là đã cho code biêt có biến này nhưng chưa dc khởi tạo
// let age = 27;
// console.log(age); // 27
// {
// console.log(firstName); // undefined
// console.log(age); // undefined
// console.log(age); // undefined
// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";
// console.log(firstName); // Peter
// console.log(lastName); // Parker
// console.log(job); //Spider man
// }
// -------------------------------------
// Bài 6:
// a = 2;
// var a;
// console.log(a); //2

// -------------------------------------
// Bài 7:
// console.log( a ); //undefined
// var a = 2;

// -------------------------------------
// Bài 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a ); //undefined vì đã khởi tạo nhưng k có giá tri
// a = 2;
// }
// foo();

// -------------------------------------
// Bài 9:
// FIXME: Không đặt được biến var = foo()
// foo();
// var foo;
// function foo() {
// console.log(1); // 1
// }
// foo = function() {
// console.log(2); //!!!!??? 
// }

// -------------------------------------
// Bài 10: Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()
//FIXME: Không đặt được biến var = foo()

// var foo(); // hiện lỗi ngay từ đầu vì để var foo();
// function foo() {
// console.log(1); 
// }
// foo = function() {
// console.log(2);
// }
// foo(); 

// -------------------------------------
// Bài 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// function removeEnd(arr, n) {
//     for (i=0; i<n; i++ ){
//         arr.pop()
//     } return arr
// }
// console.log (removeEnd([1, 2, 3, 4, 6, 8, 33], 2));

// -------------------------------------
// 12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     let newArr = []
//     for (i=0; i<n; i++){
//         newArr.push(arr[i])
//     } return newArr
// }
// console.log(first([1, 2, 3, 4, 6, 8, 33], 2));

// -------------------------------------
// 13: Cho 1 mảng
// const users = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
//     age: 100
// }
// ]
// Sử dụng phương thức map() của array,
// tạo một array mới với các phần tử con ở trong có name 
// nằm trong các thẻ h1, age nằm trong các thẻ h2

// let newArr = users.map(function(users) {
//     return {
//         name: `<h1>${users.name}</h1>`,
//         age: `<h2>${users.age}</h2>`,
//     }
// })

// console.log(newArr);
// -------------------------------------
// Bài 14: Vẫn sử dụng mảng cho sẵn ở bài 12, 
// sử dụng phương thức map() của array, tạo ra một
// mảng mới chỉ chưa tên của các phần tử object con nằm trong mảng lớn.

// let a = users.map(function(users){
//     return users.name
// })
// console.log(a);

// let b = users.map(function(users){
//     return users.age
// })
// console.log(b);
// -------------------------------------
// Bài 15
// - Viết một hàm triple() trả về một số đã được nhân 3
// - Sử dụng phương thức map của array, 
// viết hàm multiply() nhận vào một mảng và
// trả về mảng mới với các số đã được nhân 3.
// Sử dụng hàm triple để nhân 3 các số đó.

// function triple(number) {
//     number = number * 3
//     return number
// }
// console.log(triple(3));

// let arr = [1,2,3,5,5,6,4,8,9]
// let arrMultiply = arr.map(function multiply(arr){
//     return triple(arr)
// })
// console.log(arrMultiply);

// (cacjsh2: function multiply(arr){
//   return arr.map(triple)
// })

// -------------------------------------
// Bài 16.
// Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên, hàm đó
// trả về một mảng mới chỉ chứa các phần tử lớn hơn 5

// function filterArr(arr){
//     let result = arr.filter(function(a){
//         return a > 5
//     })
//     return result
// } console.log(filterArr([1,2,5,6,7,8,9,11]));

// -------------------------------------
// Bài 17
// Cho mảng sau:
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//     ];

// Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array, trả về
// một mảng mới chỉ chữa những phần tử object có gender là female

// var members_gender = members.filter(function (members) {
//   return members.gender == "female";
// });
// console.log(members_gender);
// -------------------------------------
// Bài 18. Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số
// chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined

// let arr = [1,2,6,4,8,11,22,3,5]
// let newArr= arr.find(function(arr){
//   return arr%2 == 0
// })
// console.log(newArr);

// -------------------------------------
// Bài 19. Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên, tham số
// thứ 2 là số cần chia hết. Sử dụng find method của array, trả về số đầu tiên trong mảng
// đầu vào chia hết cho tham số thứ 2. Nếu không tìm thấy trả về undefined

// function findDivisibleNum(array, x) {
//     return array.find(function(array){
//       return array % x == 0
//     })
//   }

// console.log(findDivisibleNum([1,2,3,4,5,6,7,8,9,10], 7));

// -------------------------------------
// Bài 20
// Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
// trả về object mới với các phần tử trong mảng là key,
// và value sẽ là số lần xuất hiện của chúng ở trong mảng

// Input:
// countOccurrences(['a', 'b', 'c', 'b', 'a'])
// Expected output:
// { a: 2, b: 2, c: 1 };

// let arr = ["a", "b", "c", "b", "a"];

// function countOccurrences(arr) {
//   let result = {};

//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     if (!result[element]) {
//       result[element] = 1;
//     } else {
//       result[element] = result[element] + 1;
//     }
//   }
//   return result;
// }
// countOccurrences(arr);

// -------------------------------------
// Bài 21:
// Viết một hàm nhận vào một mảng 2 chiều,
// sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn bộ những phần tử con trong các mảng con
// Input:
// flatternArr([['a', 'b'], ['c', 'b', 'a']])
// Expected output:
//  ['a', 'b', 'c', 'b', 'a']

// function flatterArr(arr) {
//   return arr.reduce(function(pre, cur){
//     for(let i = 0; i <= cur.length - 1; i = i + 1){
//       pre.push(cur[i]);
//     }
//     return pre;
//   },[]);
// }
// let result = flatterArr([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(result);
// --------------------------------------
// Bài 22:
// Viết một hàm nhận vào một mảng số gồm 2 số. Tính tổng của các số tự nhiên trong khoảng 2 số đó

// Input:
// sum([1, 4])
// Expected output:
// 10
// Input:
// sum([4, 1])
// Expected output:
// 10

// function arrSum(arr) {
//   if (arr[0] < arr[1]) {
//     let temp = 0;
//     for (let i = arr[0]; i <= arr[1]; i++) {
//       temp = temp + i;
//     }
//     return temp;
//   } else if (arr[0] > arr[1]) {
//     let temp = 0;
//     for (let i = arr[1]; i <= arr[0]; i++) {
//       temp = temp + i;
//     }
//     return temp;
//   } else if (arr[0] == arr[1]) {
//     temp = arr[0];
//     return temp;
//   }
// }
// let sum = ([4, 1]);
// console.log(arrSum(sum));
// let sum1 = ([1, 4]);
// console.log(arrSum(sum1));


// --------------------------------------
// bai23.
// Viết một hàm nhận vào 2 mảng số, 
// so sánh 2 mảng và trả về một mảng mới chứa các phần tử độc nhất
//  giữa 2 mảng. Chú ý sử dụng hàm filter

// Input: 
// diff([1, 2, 3, 4], [1, 2, 1]) 
// Expected output:  
// [3, 4]
// Input: 
// diff([4, 1, 2], [1, 1]) 
// Expected output:  
// [4, 2]

// function diff(arr1, arr2){
//   let result1 = arr1.filter(function(d, i){
//     return arr2.indexOf(d)=== -1;
//   });
//   let result2 = arr2.filter(function(d, i){
//     return arr1.indexOf(d)=== -1;
//   });
//   return result1.concat(result2);
// }
// let result = diff([1, 2, 3 ,4], [1, 2, 1]);
// console.log(result);
// let result01 = diff([4, 1, 2], [1, 1]);
// console.log(result01);

// --------------------------------------
// bài 24
// Viết một hàm nhận vào 1 số n, 
// tính tổng các số lẻ của dãy fibonacci nhỏ hơn số n
// Lưu ý: Dãy fibonacci bắt đầu từ 1 (1, 1, 2, 3, 5, 8….)

// Input: 
// sum(4) 
// Expected output:  
// 5 (Tổng của 1 + 1 + 3 = 5)

// function sumFib(n){
//   let num1 = 1;
//   let num2 = 1;
//   let temp;
//   let result = [];
//   for(let i = 1; i <= n; i = i + 1){
//     if(num1 <= n){
//       result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num2;
//   }
//   let sum = 0;
//   for(let e of result){
//     if(e % 2 == 1){
//       sum = sum + e;
//     }
//   }
//   return sum;
// }
// console.log(sumFib(4));


// --------------------------------------
// Bai25. Viết một hàm nhận vào 1 đoạn mã nhị phân.
//  Convert đoạn mã nhị phân đó thành tiếng người :))

// Input: 
// binary("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 
// Expected output:  
// Aren't bonfires fun!?
// convert binary to text // bang ma nhi phan
// .........

// ---------------------------------------
//  bai 26
// Viết một hàm nhận vào 2 hoặc nhiều mảng, 
// trả về một mảng mới chứa các phần tử không trùng lặp trong 
// các mảng truyền vào

// Input: 
// uniqueArray([1, 2, 1, 3], [3, 3, 5])
// Expected output:  
// [1, 2, 3, 5]
// Input: 
// uniqueArray([1, 2, 1, 3], [3, 3, 5], [6, 7])
// Expected output:  
// [1, 2, 3, 5, 6, 7]


// function flatternArr(arr) {
//     return arr.reduce(function(pre, cur){
//       return [...pre,...cur]
//     });
//   }
  
//   function uniqueArray(){
//     let result = [];
//     for(let i = 0; i <= arguments.length -1; i = i + 1){
//       result.push(arguments[i]);
//     }
//     result = flatternArr(result);
//     return result.filter(function(e, i){
//       return result.indexOf(e)===i;
//     });
//   }
//   let result = uniqueArray([1, 2, 1, 3], [3, 3, 5]);
//   console.log(result);
//   let result01 = uniqueArray([1, 2, 1, 3], [3, 3, 5], [6, 7]);
//   console.log(result01);