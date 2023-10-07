// const hidden_forms = document.querySelector(".hidden-form__search");
// const btnSearch = document.querySelector(".header__item header__item--right"); 

// btnSearch.addEventListener("click", ()=>{
//     hidden_form__search.classList.toggle("search__open");
// })


// const menu = document.querySelector(".hidden-forma");
// const menuButton = document.querySelector("#btnSearch");

// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("navbar__open");
// });


function ShowS(){
    CloseF();
    document.querySelector(".hidden-form__search").style.opacity = "1";
    document.querySelector(".hidden-form__search").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";
    on();
}

function ShowL(){
    CloseF();
    document.querySelector(".hidden-form__login").style.opacity = "1";
    document.querySelector(".hidden-form__login").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";
    on();
}


function ShowC(){
    CloseF();
    document.querySelector(".hidden-form__cart").style.opacity = "1";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";
    on(); 
}

function CloseF(){
    document.querySelector(".hidden-form__login").style.opacity = "0";
    document.querySelector(".hidden-form__login").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__search").style.opacity = "0";
    document.querySelector(".hidden-form__search").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__signup").style.opacity = "0";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__cart").style.opacity = "0";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__recovery").style.opacity = "0";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__add").style.opacity = "0";
    document.querySelector(".hidden-form__add").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__add").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__update").style.opacity = "0";
    document.querySelector(".hidden-form__update").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__update").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__delete").style.opacity = "0";
    document.querySelector(".hidden-form__delete").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__delete").style. transition = "var(--smooth)";

    off();
}

function ShowR(){
    document.querySelector(".hidden-form__signup").style.opacity = "1";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";
}

function ShowReP(){
    document.querySelector(".hidden-form__recovery").style.opacity = "1";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";
}

function showItem(){
    // var imgSrc = document.getElementById("#milk_1").scr;
    // document.querySelector(".item__img img").src = imgSrc;
    document.location = 'product_1.html';
}

function showAdd(){
    CloseF();
    document.querySelector(".hidden-form__add").style.opacity = "1";
    document.querySelector(".hidden-form__add").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__add").style. transition = "var(--smooth)";
    on();
}

function showUpd(){
    CloseF();
    document.querySelector(".hidden-form__update").style.opacity = "1";
    document.querySelector(".hidden-form__update").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__update").style. transition = "var(--smooth)";
    on();
}

function showDel(){
    CloseF();
    document.querySelector(".hidden-form__delete").style.opacity = "1";
    document.querySelector(".hidden-form__delete").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__delete").style. transition = "var(--smooth)";
    on();
}

function on() {
    document.querySelector("#overlay").style.transform = "translateX(0)";
    document.querySelector("#overlay").style. transition = "var(--smooth)";
}

function off() {
    document.querySelector("#overlay").style.transform = "translateX(100%)";
    document.querySelector("#overlay").style. transition = "var(--smooth)";
}