"use strict";
console.log("hihi!");

let model = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 1, 2, 3, 4, 5, 6, 7, 8,
];

console.log(model);

modifyModel();

modifyBars();

function init() {}

function loop() {}

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
  // make it read one by one and create html and modify the height;

  for (let i = 0; i <= 39; i++) {
    if (model[i] !== undefined) {
      // if the model[i] is undefined, don't just generate bars w base setting

      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${(300 / 32) * model[i]}px`;
      document.querySelector("#barchart").appendChild(bar);

      console.log(`${model[i]}customers and bar height is ${model[i] * (300 / 32)}px`);
    }
  }
}
