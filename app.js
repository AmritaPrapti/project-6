
    const burger = document.querySelector(".header__nav");
    const nav = document.querySelector(".header__sidebar");
    const x= document.querySelector(".header__sidebar--xlink");
    

    burger.addEventListener('click',() => {
        nav.classList.add("sidebar-active");
    });

    x.addEventListener('click',()=>{
        nav.classList.remove("sidebar-active");
        
    });
    



