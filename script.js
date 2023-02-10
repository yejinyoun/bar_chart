"use strict";
console.log("hihi!");

let model = [];

console.log(model);

init();

function init() {
  loop();
}

function loop() {
  modifyModel();
  modifyBars();

  setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
  //gives a current customer number (between 0-32) : FAKE gets random number
  return Math.floor(Math.random() * 32);
}

function modifyModel() {
  // change the data to 40 most recent data
  // push the most recent customer number, and shift the oldest number
  // need 40 data in the beginning and later on, make it push and shift one by one;

  if (model.length < 40) {
    for (let i = 0; i <= 39; i++) {
      // i = index of array;
      const customer = getNumberOfCustomers();
      model[i] = customer;

      console.log(`current customer data is${model} and most recent data is ${customer}`);
    }
  } else if (model.length == 40) {
    const customer = getNumberOfCustomers();
    model.push(customer);
    model.shift();
    console.log(`current customer data is${model} and most recent data is ${customer}`);
  }
}

function modifyBars() {
  //i = index of each element in the model(array); model[0]
  // make it read one by one and modify the height;

  for (let i = 0; i <= 39; i++) {
    if (model[i] !== undefined) {
      // if the model[i] is undefined, don't just generate bars w base setting

      const bar = document.getElementById(`${i}`);
      bar.style.height = `${(300 / 32) * model[i]}px`;

      console.log(`${model[i]}customers and bar height is ${model[i] * (300 / 32)}px`);
    }
  }
}
