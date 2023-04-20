window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('#burger-nav').classList.toggle('header__burger-nav--active')
    })

    document.querySelector('.header__burger-close').addEventListener('click', function () {
        document.querySelector('#burger-nav').classList.toggle('header__burger-nav--active')
    })
})