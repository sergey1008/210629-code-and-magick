'use strict';

var setupOpen = document.querySelector('.setup-open');
var overlay = document.querySelector('.overlay');
var setupClose = document.querySelector('.setup-close');
var userInput = document.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function () {
  overlay.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  overlay.classList.add('invisible');
});

userInput.required = true;
userInput.maxLength = 50;

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length - 1);
  return array[randomElementIndex];
};

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(wizardCoatColors);
});

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(wizardEyesColors);
});

var wizardFierball = document.querySelector('.setup-fireball-wrap');
var wizardFierballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

wizardFierball.addEventListener('click', function () {
  wizardFierball.style.background = getRandomElement(wizardFierballColors);
});
