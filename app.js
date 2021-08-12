
    const burger = document.querySelector(".header__menu");
    const nav = document.querySelector(".header__sidebar");

    burger.addEventListener('click',() => {
        nav.classList.toggle("sidebar-active");


        burger.classList.toggle("toggle");
    });



