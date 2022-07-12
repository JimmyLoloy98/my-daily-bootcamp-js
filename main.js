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
