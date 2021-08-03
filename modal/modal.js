'use strict';

const modalOpen = document.querySelectorAll('.js-modal-open');
const modalOpenNum = modalOpen.length;
const modal = document.querySelectorAll('.js-modal');
const modalBg = document.querySelectorAll('.modal__bg');

let modalCloseEvt, dataModalOpen, targetModal;

for (let i = 0; i < modalOpenNum; i++) {
  // modal close
  modalCloseEvt = function(e) {
    targetModal = e.currentTarget.closest('.modal');
    targetModal.classList.remove('is-open');
  };
  
  // modal bg
  const modalWrapClose = function() {
    modalBg[i].addEventListener('click',function(e){
      modalCloseEvt(e);
    });
  };

  // modal open
  const modalWrapOpen = function(e) {
  dataModalOpen = e.currentTarget.getAttribute('data-target');
  for (var b = 0; b < modal.length; b++) {
  
    if (modal[b].getAttribute('id') === dataModalOpen) {
      modal[b].classList.add('is-open');
      modalWrapClose();
      return false;
    }
  }
};
  
  modalOpen[i].addEventListener('click', function(e) {
    modalWrapOpen(e);
  }, false);
}

const modalClose = document.querySelectorAll('.js-modal-close');
const modalCloseNum = modalClose.length;

// modal close
for (let n = 0; n < modalCloseNum; n++) {
  modalClose[n].addEventListener('click', function(e) {
    modalCloseEvt(e);
    return false;
  }, false);
}