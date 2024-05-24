document.getElementById('hamburger').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
        navLinks.classList.add('block');
    } else {
        navLinks.classList.remove('block');
        navLinks.classList.add('hidden');
    }
});