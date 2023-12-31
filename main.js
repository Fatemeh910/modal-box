//elemets
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

//  OPEN MODAL BOX
openButton.addEventListener("click", () => {
    toggleModal();
});

//  CLoSE MODAL Box
closeButton.addEventListener("click", () => {
    toggleModal();
});


//  CLoSE MODAL Box WHEN click out of the box content
modalBackdrop.addEventListener('click', (e)=>{
const currentElement = e.target;


if(currentElement.classList.contains('modal-Backdrop')) {
    toggleModal();
}
});


const toggleModal = () => {
    modalBackdrop.classList.toggle("show-modal");
};