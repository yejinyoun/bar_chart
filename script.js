"use strict";
console.log("hihi!");

let model = [];

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
  // in the beginning, make 40 most recent data
  // after, push the most recent data, and shift the oldest

  if (model.length < 40) {
    for (let i = 0; i <= 39; i++) {
      // i = index of array;
      const customer = getNumberOfCustomers();
      // had to define customer inside this for loop or else it doesn't update each time;
      model[i] = customer;
    }
  } else if (model.length == 40) {
    const customer = getNumberOfCustomers();
    model.push(customer);
    model.shift();
  }
}

function modifyBars() {
  //i = index of each element in the model(array); model[0]
  //get html element one by one and modify the height;

  for (let i = 0; i <= 39; i++) {
    const bar = document.getElementById(`${i}`);
    bar.style.height = `${(300 / 32) * model[i]}px`;

    console.log(`There are ${model[i]}customers and bar height is ${model[i] * (300 / 32)}px`);
  }
}
