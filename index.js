// Anonymous Functions.
// Q1 print odd nubers from an array.
// let jai = [12,13,14,15,16,21]
// function om (){
//   for (let i=0;i<jai.length;i++)
//     if(jai[i]%2==1){
//       console.log("Odd numbers are",jai[i])
//     }
// };
// om();

// Q2 Convert all the strings to title caps in a string array.
// let name = "jagdish"
// function caps(){
//     console.log(name.toUpperCase())
// };
// caps()

//Q3 Sum of all the numbers in an array.
// let num = [1,2,3,4]
// function sum(){
//   let sum = 0;
//   for(let i=0;i<num.length;i++){
//     sum = sum + num[i]
//   }
//   console.log(sum)
// };
// sum();

//Q4 Return all the prime number in an array.
// let num = [1,2,3,4,5,6,7,8,9]
// function prime(){
//   for(let i=0;i<num.length;i++)
//     if(num[i]%2==0){
//     console.log("Prime numbers are ",num[i])
//     }
// };
// prime();

//Q5 Return all the pallindromes in an array.
// let str = "madam"
// function checkPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// };
// checkPalindrome(str);
// let op = checkPalindrome(str);
// console.log(op)
 
// Q6 Return median of two sorted arrays of the same size.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// function median(){
//   console.log((arr1.length + arr2.length)/2)
// };
// median();

//Q7 Remove duplicates from an array.
// let arr = [1, 2, 2, 3, 4, 5, 1, 2, 3]
// function rm_duplicates(){
//   console.log(...new Set(arr))
// };
// rm_duplicates();

// Arrow Function. 

//Q1 Print odd number in an array.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// const odd = (()=>{
//   for (i=0;i<arr.length;i++)
//     if(arr[i]%2==1){
//   console.log("Odd number are",arr[i])
//     }
// })
// let op = odd();
// console.log(op)

// Q2 Convert all the strings to title caps in a string array.
// let std = "jagdish"
// let caps = ()=>{
//     console.log(std.toUpperCase())
// };
// let up = caps();
// console.log(up)

//Q3 Sum of all the numbers in an array.
// let num = [1,2,3,4]
// let total = ()=> {
//   let sum = 0;
//   for(let i=0;i<num.length;i++){
//     sum = sum + num[i]
//   }
//   console.log(sum)
// };
// total();

//Q4 Return all the prime number in an array.
// let num = [1,2,3,4,5,6,7,8,9]
// let prime = () => {
//   for(let i=0;i<num.length;i++)
//     if(num[i]%2==0){
//     console.log("Prime numbers are ",num[i])
//     }
// };
// prime();

//Q5 Return all the pallindromes in an array.
// let str = "dad"
// function checkPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return `${str} "word is not a palindrome"`;
//         }
//     }
//     return `${str} "word is a palindrome"`;
// };
// checkPalindrome(str);
// let op = checkPalindrome(str);
// console.log(op)