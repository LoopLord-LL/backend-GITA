//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];

let price = laptops[0].price;
let highestPrice = laptops[0];

for (let i = 0; i < laptops.length; i++) {
  if (laptops[i].price > price) {
    price = laptops[i].price;
    highestPrice = price;
  }
}
// console.log(highestPrice);

// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი,
// რომელიც დააბრუნებს ფართობს.
const rectangle = {
  width: 10,
  height: 5,
  getArea: function () {
    return this.width * this.height;
  },
};
// console.log(rectangle.getArea());

// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];

const list = students
  .filter((student) => student.passed) //filter ავტომატურად ინახავს, მხოლოდ true მნიშვნელობებს.
  .map((student) => student.name);
// console.log(list);

// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი
// სათაურების მასივი.
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];

const filtered = products
  .filter((prod) => prod.price < 10)
  .map((prod) => prod.title);
// console.log(filtered);

// 5)დაალაგე ზრდადობით rating-ის მიხედვით
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];
const lowToHigh = movies.sort((a, b) => a.rating - b.rating);

// console.log(lowToHigh);

// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const cheapestPhone = phones.reduce((min, phone) => {
  return phone.price < min.price ? phone : min;
}, phones[0]);

// console.log(cheapestPhone.model);

// 7)დაბეჭდე 300- გვერდიანზე მეტი
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];
const bigBooks = books
  .filter((book) => book.pages > 300)
  .map((book) => book.title);

// console.log(bigBooks);

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
const Phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const sortedPhones = Phones.sort((a, b) => a.price - b.price);
const totalPrice = sortedPhones.reduce((sum, phone) => sum + phone.price, 0);

// console.log(sortedPhones);
// console.log(totalPrice);
