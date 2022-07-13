
function openModal(){
  document.querySelector('#documents').style.display = 'flex';
}
function closeModal(){
  document.querySelector('#documents').style.display = 'none';
}



let openModalDelete = document.querySelectorAll(".popUp");
let mostrarModalDelete=document.querySelector('#modal-delete');

let closeBotton=document.querySelectorAll(".modal");


openModalDelete.forEach((element, index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("estoy aca");
        mostrarModalDelete.style.display = 'flex';

    });
});



closeBotton.forEach((element, index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
       // console.log("estoy aca");
        mostrarModalDelete.style.display = 'none';

    });
});





