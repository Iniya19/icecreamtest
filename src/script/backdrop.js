(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-backdrop-open]"),
        closeModalBtn: document.querySelector("[data-backdrop-close]"),
        modal: document.querySelector("[data-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();