document.querySelector("#documents").style.display = "none";
document.querySelector(".msg-error-blank").style.display = "none";
const error = "ERROR";

let publish = document.querySelector(".publishButton");
let openDropdowns = document.querySelectorAll(".public-button");
let boxes = document.querySelectorAll(".POP");

const inputImageFiles = document.querySelector(".input-file");
const containerImages = document.querySelector(".container-images");
let images = [];
let post = {};
let postData = {};

// Inicio de eventos para el modal de post
function openModal() {
  document.querySelector("#documents").style.display = "flex";
}
function closeModal() {
  document.querySelector("#documents").style.display = "none";
}
function msgError() {
  document.querySelector(".msg-error-blank").style.display = "block";
}

openDropdowns.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (boxes[index].style.display == "block") {
      boxes[index].style.display = "none";
    } else {
      boxes[index].style.display = "block";
    }
  });
});

publish.addEventListener("click", function (event) {
  try {
    event.preventDefault();
    if (document.querySelector("#post-area").value == "") {
      msgError();
    } else {
      document.querySelector(".msg-error-blank").style.display = "none";
      closeModal();
    }

    saveData();
  } catch (error) {
    throw new Error(error);
  }
});

// Inicio de JS para la geoposition
calculateLocation();
function calculateLocation() {
  if (navigator.geolocation) {
    let options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 1000,
    };
    navigator.geolocation.getCurrentPosition(savePosition, showErrors, options);
  } else {
    alert(
      "Tu navegador no soporta la geolocalización, actualiza tu navegador."
    );
  }
}
async function savePosition(position) {
  let { latitude, longitude } = position.coords;
  let response = await fetch(
    "https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&format=json"
  );
  let responseJson = await response.json();
  let { town, country } = responseJson.address;
  let location = " " + town + ", " + country;
  document.querySelector(".geolocation_position").innerHTML = "From: " + location;
}
function showErrors(){
}
let openlocation = document.querySelectorAll(".icon-geoposition");
let geoposition = document.querySelectorAll(".geolocation");

openlocation.forEach((element, index) => {
	element.addEventListener("click", function (e) {
		e.preventDefault();
		if(geoposition[index].style.display == "none"){
			geoposition[index].style.display = "flex";
		} else {
			geoposition[index].style.display = "none";
		}
	});
});
// Fin de JS para geoposition

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

// Inicio de almacenamiento de datos en LocalStorage
function saveData() {
  post = {
    content: document.querySelector("#post-area").value,
    // images: images
  };
  localStorage.setItem("post", JSON.stringify(post));
}
function removeData() {
  localStorage.removeItem("post");
}
//Inicio de mostrar los datos guardados en LocalStorage
function showData() {
  postData = JSON.parse(localStorage.getItem("post"));
  document.querySelector("#text-area").value = postData.content;
}
