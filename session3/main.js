// map, filter, reduce, concat

// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

let arr = [1, 2, 3];
let tripledArr = arr.map((num) => num * 3);
// console.log(tripledArr);

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredArr = arr1.filter((num) => num % 3 === 0);
// console.log(filteredArr);

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
let arr2 = [1, -2, 3, -4, 5, 6, 7, -8, 9];

let positiveSum = arr2
  .filter((num) => num > 0)
  .reduce((tot, curr) => tot + curr, 0);
// console.log(positiveSum);

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო

let namesArr = ["giorgi", "nika", "mariami"];

let deletedStr = namesArr.map((name) => name.slice(0, -1));
// console.log(deletedStr);

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
let arr3 = [1, 2, 3];
let changedArr = arr3.map((num) => num * 2).filter((num) => num % 3 === 0);
// console.log(changedArr);

// 6)გაქვთ მასივი - თქვენი მიზანია  დააჯგუფოთ შემდეგნაირად - {
//   '20': [
//     { category: 'pizza', price: 20 },
//     { category: 'pizza', price: 20 }
//   ],
//   '30': [
//     { category: 'sushi', price: 30 },
//     { category: 'sushi', price: 30 }
//   ]
// }

let arr4 = [
  {
    category: "pizza",
    price: 20,
  },
  {
    category: "pizza",
    price: 20,
  },
  {
    category: "sushi",
    price: 30,
  },
  {
    category: "sushi",
    price: 30,
  },
];

let grouped = arr4.reduce((acc, item) => {
  let key = item.price;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});

// console.log(grouped);

// 7) დაალაგე რიცხვები ზრდადობით

let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
let sortedArr = numsArr.sort((a, b) => a - b);
// console.log(sortedArr);

// 8)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია
let arr5 = [1, 3, 2, 7];
let overFive = arr5.map((num) => num * 2).filter((num) => num > 5);
// console.log(overFive);

// 9)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
let arr6 = [1, 1, 1, 1, 2, 2, 3, 3, 3];
let unique = [...new Set(arr)]; // Set ავტომატურად შლის დუბლირებულ მონაცემს მასივში.
// console.log(unique);

// 10) დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს
let arr7 = [-1];
let sortedArr7 = arr7
  .sort((a, b) => a - b)
  .slice(0, 2)
  .reduce((a, b) => a + b, 0);
// console.log(sortedArr7);
