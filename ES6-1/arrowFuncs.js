//arrow funcs
/*function returnHello() {
  return "Hello";
}*/

const returnHello = () => {
  const message = "Hello";
  return message;
};

const returnHello2 = () => "Hello too";

const logHello = () => {
  console.log("Hello in the log");
};

const LogHello2 = () => console.log("Hello in the log here aswell");

console.log(returnHello());
console.log(returnHello2());

logHello();
LogHello2();

//-----------------------------------------------------------------------//

//Arrow funcs and this

//class with regular function
class Message {
  constructor() {
    this.phrase = "Hi";
  }
  //regular function
  logThis() {
    console.log(this);
  }
}

const msg = new Message();

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";
btn1.setAttribute("id", "btn1");
document.body.append(btn1);

//-------------------------------------------------------------------------//

//class with regular function
class Message2 {
  constructor() {
    this.phrase = "Hi";
  }
  //regular function
  logThis = () => {
    console.log(this);
  };
}

const msg2 = new Message2();

const btn2 = document.createElement("button");
btn2.innerHTML = "Click me too";
btn2.setAttribute("id", "btn2");
document.body.append(btn2);

//--------------------------------------------------------------------//

window.addEventListener("load", () => {
  msg.logThis();
  document.querySelector("#btn1").addEventListener("click", msg.logThis);
  msg2.logThis();
  document.querySelector("#btn2").addEventListener("click", msg2.logThis);
});
