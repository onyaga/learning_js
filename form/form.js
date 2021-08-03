'use strict';

function entryChange() {
  let radio = document.getElementsByName('entry');
  if(radio[0].checked) {
    document.getElementById('not_member').style.display = "";
    document.getElementById('member').style.display = "none";
  } else if(radio[1].checked) {
    document.getElementById('not_member').style.display = "none";
    document.getElementById('member').style.display = "";
  }
}

window.onload = entryChange;