//Scope

//global
const globalVar = "I'm global";

console.log(globalVar);

const logVar = () => {
  console.log(globalVar);
};

logVar();

for (let index = 0; index < 1; index++) {
  console.log(globalVar);
}

//local (function)
const logLocalVar = () => {
  const localVar = "I'm local";
  console.log(localVar);
};

logLocalVar();

//console.log(localVar)

/*for (let index = 0; index < 1; index++) {
  console.log(localVar);
}*/

//block
for (let index = 0; index < 1; index++) {
  let blockVar = "I'm block local";
  console.log(blockVar);
}

//console.log(blockVar);
