'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const numbers = document.getElementById('numberColor');
  const numbersTxt = document.getElementById('numberColor').textContent;
  const number = numbersTxt.split('');

  let newNumber = '';
  let numberColor = ['red', 'blue', 'yellow', 'green'];
  for (let i = 0; i < number.length; i++) {
    newNumber += `<span style="color: ${numberColor[i]}">` + number[i] + '</span>';
  }

  numbers.innerHTML = newNumber;
  //console.log(newNumber);
});
