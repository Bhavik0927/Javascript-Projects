const submitBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popupContainer');

submitBtn.addEventListener('click',() =>{
    popup.classList.add('popupActive');
});

closeBtn.addEventListener('click',() =>{
    popup.classList.remove('popupActive');
})