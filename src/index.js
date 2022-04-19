let closeCall = document.querySelector('.close-call');
let closeMessage = document.querySelector('.close-message');
let modalCall = document.querySelector('.modal__call');
let modalMessage = document.querySelector('.modal__message');
let contactsCall = document.querySelectorAll('.contacts__call');
let contactsMessage = document.querySelectorAll('.contacts__message');
let burgerList = document.querySelector('.burger__list');
let burgerListItems = document.querySelectorAll('.burger__list-item');

closeCall.addEventListener('click', ()=> {
    modalCall.classList.toggle('modal__closed')
});

closeMessage.addEventListener('click', ()=> {
    modalMessage.classList.toggle('modal__closed')
});

contactsCall.forEach( (item) => {
    item.addEventListener('click', () => {
        modalCall.classList.toggle('modal__closed')
    });
});

contactsMessage.forEach( (item) => {
    item.addEventListener('click', () => {
        modalMessage.classList.toggle('modal__closed')
    });
});

burgerList.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        burgerListItems.forEach( (item) => {
            item.classList.remove('active-item')
        })
        ev.target.classList.toggle('active-item')
    }
});
