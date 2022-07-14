document.querySelector('#documents').style.display = "none";
document.querySelector('.msg-error-blank').style.display = "none";
publish = document.querySelector('.publishButton');

function openModal(){
  document.querySelector('#documents').style.display = 'flex';
}
function closeModal(){
  document.querySelector('#documents').style.display = 'none';
}
function msgError(){
  document.querySelector('.msg-error-blank').style.display = "block";
}

let openButtons = document.querySelectorAll(".public-button");
let boxes = document.querySelectorAll(".POP");

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
  (location);
  console.log(location);
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