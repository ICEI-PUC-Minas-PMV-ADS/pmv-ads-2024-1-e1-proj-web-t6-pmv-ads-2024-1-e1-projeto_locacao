const openModalFilter = document.querySelector("#button_filter");
const closeModalFilter = document.querySelector("#voltar_principal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");





openModalFilter.addEventListener("click",() => toggleModal());
const toggleModal = () =>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

