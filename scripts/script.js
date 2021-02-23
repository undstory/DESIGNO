const hamburgerBtn = document.querySelector('#hamburger__btn');
const mobileList = document.querySelector('#mobile');
const closeBtn = document.querySelector('#close__btn');

hamburgerBtn.addEventListener('click', () => {
    mobileList.classList.remove('hidden');
    closeBtn.style.display = 'block';
    hamburgerBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    mobileList.classList.add('hidden');
    closeBtn.style.display = 'none';
    hamburgerBtn.style.display = 'block';
})