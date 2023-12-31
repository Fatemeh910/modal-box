//elemets
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

//OPEN MODAL
openButton.addEventListener("click", () => {
    toggleModal();
});

//CLoSE MODAL Box
closeButton.addEventListener("click", () => {
    toggleModal();
});



const toggleModal = () => {
    modalBackdrop.classList.toggle("show-modal");
};