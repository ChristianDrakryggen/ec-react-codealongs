//destructure arrays
const cars = ["Volvo", "Ford", "BMW"];

//const volvo = cars[0];
//const ford = cars[1];

//console.log(ford);

const [, , car3] = cars;

//console.log(car1);
//console.log(car2);
console.log(car3);

//destructure objects
const props = {
  fname: "Christian",
  occupation: "Developer",
  age: 31,
};

//const cfName = props.fname;
//const cOccupation = props.occupation;

//console.log(cfName);
//console.log(cOccupation)

const { occupation, fname, age } = props;

console.log(occupation);
console.log(fname);
console.log(age);
