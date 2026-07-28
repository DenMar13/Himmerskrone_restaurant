let burger_menu = document.querySelector('.header-burger');
let burger_span = document.querySelector('.header-burger > span');

burger_menu.id = 0;

let main_nav = document.querySelector('.main_nav');

burger_menu.onmouseenter = function () {
    burger_span.classList.add('hovered');
    burger_menu.classList.add('hovered');
};
burger_menu.onmouseleave = function () {
    burger_span.classList.remove('hovered');
    burger_menu.classList.remove('hovered');
};

burger_menu.addEventListener( "click" , () => openBurgerMenu(burger_menu, burger_span, main_nav));

function openBurgerMenu (burger_menu, burger_span, main_nav) {
    if (burger_menu.id == 0) {
        burger_span.classList.add('active');
        burger_menu.classList.add('active');
        main_nav.classList.add('active');

        burger_menu.id = 1;
    }
    else {
        burger_span.classList.remove('active');
        burger_menu.classList.remove('active');
        main_nav.classList.remove('active');

        burger_menu.id = 0;
    }
}

let nav_part = document.querySelectorAll('.main_nav > ul > li > a');

nav_part.forEach((part, index) => { 
    part.addEventListener( "click" , () => closeBurgerMenu(burger_menu, burger_span, main_nav));
});

function closeBurgerMenu(burger_menu, burger_span, main_nav) {
    burger_span.classList.remove('active');
    burger_menu.classList.remove('active');
    main_nav.classList.remove('active');

    burger_menu.id = 0;
}