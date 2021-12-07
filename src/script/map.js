(() => {
    const mapMenu = document.querySelector("[data-map]");
    const mapOpen = document.querySelector("[data-map-open]");
    // const mapClose = document.querySelector("[data-map-close]");
    const mapTransition = document.querySelector("[map-open]");
  
    const body = document.querySelector('body');
  
      mapOpen.addEventListener("click", () => {
        mapMenu.classList.toggle("hidden");
        body.classList.toggle("modal-open");
        mapTransition.classList.toggle("is-open");
    });
  
    //   mapClose.addEventListener("click", () => {
    //     mapMenu.classList.toggle("hidden");
    //     body.classList.toggle("modal-open");
    // });
  
    handlerEscModalClose();
  })();
  
  // Реализация закрытия модалки при клике в бекдроп
  const map = document.querySelector('.map');
  const body = document.querySelector('body');
  const mapTransition = document.querySelector("[map-open]");
  
  map.addEventListener('click', onBackdropClick);
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
    map.classList.add('hidden');
    body.classList.remove('modal-open');
    mapTransition.classList.remove('is-open');
  }