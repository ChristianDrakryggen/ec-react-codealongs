//Spread on array
const fruits = ["Apple", "Banana", "Pear"];
const fruitsCopy = [...fruits, "Orange"];

const junk = ["Chips", "Pizza", "Cola"];
const junkCopy = [...junk];

console.log(fruitsCopy);
console.log(junkCopy);

const food = [...fruits, ...junk];

console.log(food);

//Spread on object
const car = {
  brand: "Volvo",
  model: "XC40",
};

const carCopy = { ...car, color: "blue" };

console.log(carCopy);
