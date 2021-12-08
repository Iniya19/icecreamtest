const productsOpen = document.querySelector(".products__btn");
const productsOpen2 = document.querySelector(".modal__btn-2");
const productsOpen3 = document.querySelector(".modal__btn-3");
// const productsClose = document.querySelector(".products__btn-close");
const animationWindow = document.querySelector(".animation-modal");
const animationWindow2 = document.querySelector(".animation-modal-2");
const animationWindow3 = document.querySelector(".animation-modal-3");
const body = document.querySelector('body');

productsOpen.addEventListener("click", () => {
    animationWindow.classList.add("animation-open");
    body.classList.add("modal-open");

    handlerEscModalClose();
})

productsOpen2.addEventListener("click", () => {
    animationWindow2.classList.add("animation-open");
    body.classList.add("modal-open");

    handlerEscModalClose();
})

productsOpen3.addEventListener("click", () => {
    animationWindow3.classList.add("animation-open");
    body.classList.add("modal-open");

    handlerEscModalClose();
})

// productsClose.addEventListener("click", () => {
//     animationWindow.classList.remove("animation-open");
// })

// Closing products-modal while clicking in the backdrop
const animationClose = document.querySelector(".animation-open");

animationWindow.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onModalClose();
    }
}
animationWindow2.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onModalClose();
    }
}

animationWindow3.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onModalClose();
    }
}


// Closing products-modal while pressing Esc
function handlerEscModalClose() {
    window.addEventListener('keydown', onEsckeyClick);
    function onEsckeyClick(evt) {
        if (evt.code === 'Escape') {
            onModalClose();
        }
    }
}
// Closing products-modal and removing  the classes

function onModalClose() {
    body.classList.remove('modal-open');
    animationWindow.classList.remove('animation-open');
    animationWindow2.classList.remove('animation-open');
    animationWindow3.classList.remove('animation-open');
}