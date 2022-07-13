document.querySelector('#documents').style.display = "flex";

function openModal(){
  document.querySelector('#documents').style.display = 'flex';
}
function closeModal(){
  document.querySelector('#documents').style.display = 'none';
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

