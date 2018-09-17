var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

selectPlanButtons.forEach(button => {
    button.addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
});

backdrop.addEventListener('click', function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration', event);
});