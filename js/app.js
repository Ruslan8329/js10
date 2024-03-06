function calculateBmi() {
  let userInfo = {
    name: "Ruslan",
    height: 160,
    weight: 60,
  };
  return userInfo;
}
let userInfo = calculateBmi();
console.log(userInfo.weight);

////////////////////////////////////////////2/////////////////////////////////////////////////

let massive = ["hello", "calculate", "apple", "height", "pineapple"];

function findLongestWord() {
  let longestWorld = massive[0];

  for (let i = 0; i < massive.length; i++) {
    if (massive[i].length > longestWorld.length) {
      longestWorld = massive[i];
    }
  }
  return longestWorld;
}
let newMassive = findLongestWord();
console.log(newMassive);

/////////////////////////////////////////////3//////////////////////////////////////////////

function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let user = createUser("Ruslan", 19);
console.log(user);

/////////////////////////////////////////////////////4////////////////////////////////////////////

function filterProductsByPrice(products, maxPrice) {
  let filterProduct = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price <= maxPrice) {
      filterProduct.push(products[i]);
    }
  }
  return filterProduct;
}
let products = [
  { product: "banana", price: 20 },
  { product: "phone", price: 500 },
  { product: "jeans", price: 35 },
  { product: "bootle", price: 40 },
];

let newPrice = filterProductsByPrice(products, 40);
console.log(newPrice);

/////////////////////////////////////////////////5////////////////////////////////////////

function getFullName() {
  let userInfo2 = {
    name: "Ruslan",
    surname: "Gurbanov",
  };
  return userInfo2;
}
let newGetFullName = getFullName();
console.log(`${newGetFullName.name},${newGetFullName.surname}`);

//////////////////////////////////////////////6///////////////////////////////////////////

function sortByAge(people, maxAge) {
  let newSort = [];

  for (let i = 0; i < people.length; i += 1) {
    if (people[i].age > maxAge) {
      newSort.push(people[i]);
    }
  }
  return newSort;
}
let people = [
  { name: "Ruslan", age: 19 },
  { name: "Maqa", age: 20 },
  { name: "Yusif", age: 25 },
  { name: "Murtuz", age: 33 },
  { name: "Emil", age: 18 },
];

let newSortByAge = sortByAge(people, 0);
console.log(newSortByAge);

//////////////////////////////////////////////////////////////////////////////////////////

let singlePartBook = { title: "Одна часть", pages: 100 };
let morePartBook = {
  title: "Несколько частей",
  parts: [{ pages: 80 }, { pages: 120 }, { pages: 70 }],
};

function getTotalPages(book) {
  let totalPages = 0;
  if (book.parts) {
    for (let i = 0; i < book.parts.length; i += 1) {
      totalPages += book.parts[i].pages;
    }
  }
  return totalPages;
}
console.log(getTotalPages(morePartBook));
