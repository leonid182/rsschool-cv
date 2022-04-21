var burgerBtn = document.querySelector('.burger__btn');
var menuActive = document.querySelector('.nav');
burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    menuActive.classList.toggle('active')  
})