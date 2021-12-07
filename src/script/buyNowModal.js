(() => {
  const buyNowMenu = document.querySelector("[menu-buynow]");
  const buyNowBtn = document.querySelector("[menu-buynow-open]");
  const byuNowClose = document.querySelector("[data-buynow-close]");
  const mobileBuyOpen = document.querySelector("[data-buy-open]")
  const modalTransition = document.querySelector("[menu-open]");

  const body = document.querySelector('body');
  
    mobileBuyOpen.addEventListener("click", () => {
      buyNowMenu.classList.toggle("is-hidden-2");
      body.classList.toggle("modal-open");
      modalTransition.classList.toggle("buy-now-open");
    });
  
    buyNowBtn.addEventListener("click", () => {
      buyNowMenu.classList.toggle("is-hidden-2");
      body.classList.toggle("modal-open");
      modalTransition.classList.toggle("buy-now-open");
  });

    byuNowClose.addEventListener("click", () => {
      buyNowMenu.classList.toggle("is-hidden-2");
      body.classList.toggle("modal-open");
      modalTransition.classList.toggle("buy-now-open");
  });

  handlerEscModalClose();
})();

// Реализация закрытия модалки при клике в бекдроп
const backdrop2 = document.querySelector('.backdrop-2');
const body = document.querySelector('body');
const buyNowMenu = document.querySelector("[menu-buynow]");
const modalTransition = document.querySelector("[menu-open]");

backdrop2.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

// Функция закрытия модального окна при нажатии на Esc
function handlerEscModalClose() {
  window.addEventListener('keydown', onEsckeyClick);
  function onEsckeyClick(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }
}
// Функция закрытия модального окна и снятия всех классов

function onModalClose() {
  backdrop2.classList.add('is-hidden-2');
  body.classList.remove('modal-open');
  modalTransition.classList.remove('buy-now-open');
}
