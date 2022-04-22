let closeCall = document.querySelector('.close-call'),
 closeMessage = document.querySelector('.close-message'),
 modalCall = document.querySelector('.modal__call'),
 modalMessage = document.querySelector('.modal__message'),
 contactsCall = document.querySelectorAll('.contacts__call'),
 contactsMessage = document.querySelectorAll('.contacts__message'),
 burgerMenu = document.querySelector('.burger__menu'),
 burgerButton = document.querySelector('.burger__icon'),
 burgerList = document.querySelector('.burger__list'),
 burgerListItems = document.querySelectorAll('.burger__list-item'),
 modalOverlay = document.querySelector('.modal-overlay'),
 burgerOverlay = document.querySelector('.burger-overlay'),
 serviceList = document.querySelector('.service__list'),
 serviceListItems = document.querySelectorAll('.service__list-item');

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
    document.body.style.overflow = '';
});

closeMessage.addEventListener('click', () => {
    modalMessage.classList.toggle('modal__closed');
    modalOverlay.classList.toggle('disabled');
    document.body.style.overflow = '';
});

contactsCall.forEach( (item) => {
    item.addEventListener('click', () => {
        modalCall.classList.toggle('modal__closed');
        modalOverlay.classList.toggle('disabled');
        document.body.style.overflow = 'hidden';
    });
});

contactsMessage.forEach( (item) => {
    item.addEventListener('click', () => {
        modalMessage.classList.toggle('modal__closed');
        modalOverlay.classList.toggle('disabled');
        document.body.style.overflow = 'hidden';
    });
});

modalOverlay.addEventListener('click', (ev) => {
    if (ev.target === modalOverlay) {
        modalCall.classList.add('modal__closed');
        modalMessage.classList.add('modal__closed');
        modalOverlay.classList.add('disabled');
        document.body.style.overflow = '';
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
