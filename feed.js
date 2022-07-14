const feedTemplate = document.querySelector("#feed");

let posts = [
  {
    id: 1,
    autor: "Paul Portillo",
    profile: "./assets/profile.jpg",
    fecha: "04 de Julio, 2022",
    descripcion: "aprendi a insertar imagen y icono",
    imagen: [],
  },
  {
    id: 2,
    autor: "Ronaldo Delgado",
    profile: "./assets/companies/profile-2.jpg",
    fecha: "04 de Julio, 2022",
    descripcion: "Aprendimos la jerarquia de clases",
    imagen: [],
  },
  {
    id: 3,
    autor: "Sandrito Hubel",
    profile: "./assets/companies/profile-1.jpg",
    fecha: "04 de Julio, 2022",
    descripcion: "Hoy jugamos lobo",
    imagen: [],
  },
  {
    id: 4,
    autor: "Cucarachita dominguez",
    profile: "./assets/companies/profile-5.jpg",
    fecha: "04 de Julio, 2022",
    descripcion: "Hoy aprendí a usar la target",
    imagen: [],
  },
];

function renderPost() {
  let template = "";
  posts.forEach((element) => {
    console.log(element);
    template += `<div class="public">
      <div class="pop-container">
        <button class="public-button">
          <img src="assets/icons/dots.svg" alt="Menú de Opciones" />
        </button>
        <div class="POP">
          <button class="popUp" data-id="${element.id}" >
            <img src="./assets/basura.svg">
            <p>Delete</p>
          </button>
        </div>
      </div>
      <div class="public-date">
        <div class="date-conte">
          <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank">
            <img class="date-img" src="${element.profile}" alt="Foto de perfil del usuario" />
          </a>
          <div class="date-text">
            <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank">
              <h3>${element.autor}</h3>
            </a>
            <p>04 de Julio, 2022</p>
          </div>
        </div>
      </div>
      <div class="text">
        <p>
          ${element.descripcion}
        </p>
      </div>
    </div>`;
  });

  feedTemplate.innerHTML = template;
}

feedTemplate.addEventListener("change", renderPost());

let botonDeletePost = document.querySelector("#delete-post");

botonDeletePost.addEventListener("click", function (e) {
  const postId = e.currentTarget.dataset.id;
  removePost(postId);
});

function removePost(id) {
  const result = posts.filter((element) => element.id != id);
  posts = result;
  renderPost();
}

//console.log(feedTemplate);
