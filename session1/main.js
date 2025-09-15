// -პრაქტიკა-
// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."

let fullName = "Lika Mamaladze";
let initials = fullName.split(" ")
console.log(initials);

// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე,
//  შეიცავს თუ არა "@"
let email = " EXAMPLE@MAIL.COM ";
let trimmed = email.trim().toLocaleLowerCase();
let result = trimmed.includes("@") ? "includes" : "not included";
console.log(trimmed);
console.log(result);

// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-დ
let str = "luka";
let lastLetter = str[str.length - 1].toLocaleUpperCase();
console.log(lastLetter);

// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე - "Foo"
// თუ იყოფა 5-ზე - "Bar"
// თუ იყოფა ორივეზე - "FooBar"
// თუ არა - უბრალოდ რიცხვი
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FooBar");
  } else if (i % 3 == 0) {
    console.log("Foo");
  } else if (i % 5 == 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}

// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
let text = "JS is stupid but sometimes cool";
let changedWord = text.replaceAll("stupid", "s****d");
console.log(changedWord);
