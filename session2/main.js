// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
const arr = [];

for (let i = 5; i <= 15; i++) {
  arr.push(i);
}
// console.log(arr);

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
let arr2 = [1, 2, 3, 4, 5];

for (let i = arr2.length - 1; i >= 0; i--) {
  //   console.log(arr2[i]);
}

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
let arr3 = [100, 2, 3, 9];
let min = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }
}
// console.log(min);
// ან console.log(Math.min(...arr2))

// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let midArr = arr4.slice(2, 5);
// console.log(midArr);

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
let arr5 = [1, 2];
let arr6 = [3, 4];

let combinedArr = arr5.concat(arr6);
// console.log(combinedArr);

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
let arr7 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
let uniqueArr = [...new Set(arr7)];
// console.log(uniqueArr);

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი).
//  მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
let arr8 = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr8.filter((num) => num % 2 === 0);
let oddArr = arr8.filter((num) => num % 2 !== 0);
// console.log(`Even numbers: ${evenArr}`);
// console.log(`Odd numbers: ${oddArr}`);

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
let arr9 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];

let positiveCount = 0;
let negativeSum = 0;
arr9.forEach((num) => {
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeSum += num;
  }
});

// console.log(`positive count: ${positiveCount}`);
// console.log(`negative sum: ${negativeSum}`);

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი
//  (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
let arr10 = [1, 2, 3, -4, 5, -6];
let inversedArr = arr10.map((num) => -num);
// console.log(inversedArr);

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
let arr11 = [1, [2, [3]], [4]];
let flattenedArr = arr11.flat(2);

// console.log(flattenedArr);
