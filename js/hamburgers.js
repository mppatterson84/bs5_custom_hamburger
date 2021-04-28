const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('collapsed')) {
        hamburger.classList.add('is-active')
    } else {
        hamburger.classList.remove('is-active')
    }
})
