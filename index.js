let closeCall = document.querySelector('.close-call');
let closeMessage = document.querySelector('.close-message');
let modalCall = document.querySelector('.modal__call');
let modalMessage = document.querySelector('.modal__message');
let contactsCall = document.querySelectorAll('.contacts__call');
let contactsMessage = document.querySelectorAll('.contacts__message');
let burgerMenu = document.querySelector('.burger__menu');
let burgerButton = document.querySelector('.burger__icon');
let burgerList = document.querySelector('.burger__list');
let burgerListItems = document.querySelectorAll('.burger__list-item');
let modalOverlay = document.querySelector('.modal-overlay');
let burgerOverlay = document.querySelector('.burger-overlay');
let serviceList = document.querySelector('.service__list');
let serviceListItems = document.querySelectorAll('.service__list-item');

serviceList.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        serviceListItems.forEach( (item) => {
            item.classList.remove('service__list-item-active');
        })
        ev.target.classList.toggle('service__list-item-active');
    }
});

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger__icon-active');
    burgerMenu.classList.toggle('burger-open');
    burgerOverlay.classList.toggle('disabled');
});

closeCall.addEventListener('click', () => {
    modalCall.classList.toggle('modal__closed');
    modalOverlay.classList.toggle('disabled');
});

closeMessage.addEventListener('click', () => {
    modalMessage.classList.toggle('modal__closed');
    modalOverlay.classList.toggle('disabled');
});

contactsCall.forEach( (item) => {
    item.addEventListener('click', () => {
        modalCall.classList.toggle('modal__closed');
        modalOverlay.classList.toggle('disabled');
    });
});

contactsMessage.forEach( (item) => {
    item.addEventListener('click', () => {
        modalMessage.classList.toggle('modal__closed');
        modalOverlay.classList.toggle('disabled');
    });
});

modalOverlay.addEventListener('click', (ev) => {
    if (ev.target === modalOverlay) {
        modalCall.classList.add('modal__closed');
        modalMessage.classList.add('modal__closed');
        modalOverlay.classList.add('disabled');
    }
});

burgerOverlay.addEventListener('click', (ev) => {
    if (ev.target === burgerOverlay) {
        burgerMenu.classList.remove('burger-open');
        burgerOverlay.classList.add('disabled');
        burgerButton.classList.remove('burger__icon-active');
    }
});

burgerList.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        burgerListItems.forEach( (item) => {
            item.classList.remove('active-item');
        });
        ev.target.classList.toggle('active-item');
    }
});
