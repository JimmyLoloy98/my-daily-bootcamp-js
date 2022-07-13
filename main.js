document.querySelector('#documents').style.display = "none";
document.querySelector('.msg-error-blank').style.display = "none";

let publish = document.querySelector('.publishButton');
let openButtons = document.querySelectorAll(".public-button");
let boxes = document.querySelectorAll(".POP");

const inputImageFiles = document.querySelector(".input-file");
const containerImages = document.querySelector(".container-images");
let images = [];

// Inicio de eventos para el modal de post
function openModal(){
  document.querySelector('#documents').style.display = 'flex';
}
function closeModal(){
  document.querySelector('#documents').style.display = 'none';
}
function msgError(){
  document.querySelector('.msg-error-blank').style.display = "block";
}

openButtons.forEach((element, index) => {
	element.addEventListener("click", function (e) {
		e.preventDefault();
		if(boxes[index].style.display == "block"){
			boxes[index].style.display = "none";
		} else {
			boxes[index].style.display = "block";
		}
	});
});

publish.addEventListener('click', function(){
  if(document.querySelector('#post-area').value == ''){
    msgError();
  }else{
    document.querySelector('.msg-error-blank').style.display = "none";
    closeModal();
  }
});
// Fin de eventos para el modal de post

// Inicio de lógica para carga de imágenes
inputImageFiles.addEventListener("change", (e) => {
  images = e.currentTarget.files;
  renderImagesPreviews();
});

function removeImage(removedIndex) {
  images = [...images].filter((_img, index) => index != removedIndex);

  renderImagesPreviews();
  console.log("as");
}

function renderImagesPreviews() {
  let imagesHtml = "";

  for (let index = 0; index < images.length; index++) {
    const file = images[index];
    const previewImageUrl = URL.createObjectURL(file);
    imagesHtml += `
      <div class="image-cell container-img">
        <img src="${previewImageUrl}" alt="image-${index}" />
        <button onclick="removeImage(${index})" class="delete-button">Delete</button>
      </div>`;
  }
  containerImages.innerHTML = imagesHtml;
}
// Fin de lógica para carga de imágenes