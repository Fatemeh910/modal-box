///elemets///
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");


openButton.addEventListener('click', () => {
    modalBackdrop.classList.add("show-modal");
});

closeButton.addEventListener('click', () => {
    modalBackdrop.classList.remove("show-modal");
});