'use strict';

function analogClock() {
  setInterval(() => {
    const now = new Date();
  
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    //各針角度
    const handH = hour * (360 / 12) + minute * (360 / 12 / 60);
    const handM = minute * (360 / 60);
    const handS = second * (360 / 60);
  
    const elmentH = document.querySelector('.lineHour');
    const elmentM = document.querySelector('.lineMin');
    const elmentS = document.querySelector('.lineSec');
  
    elmentH.style.transform = `rotate(${handH}deg)`;
    elmentM.style.transform = `rotate(${handM}deg)`;
    elmentS.style.transform = `rotate(${handS}deg)`;
  }, 1000);
}

window.onload = analogClock();