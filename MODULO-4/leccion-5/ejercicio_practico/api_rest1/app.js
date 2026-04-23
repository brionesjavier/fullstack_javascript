const URL_API =
  "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10";
const output = document.getElementById("output");
let characters = [];

async function loadCharacters() {
  try {
    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }
    const data = await response.json();
    characters = Array.isArray(data) ? data : [];

    return characters;
  } catch (error) {
    console.error("Error:", error);
  }
}


//Funciones
const renderHtml = (title, data, append = false) => {
  const h2 = document.createElement("h2");
  h2.textContent = title;

  if (!append) {
    output.innerHTML = "";
  }

  output.appendChild(h2);

  const ol = document.createElement("ol");
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <img src="${element.image}"> -
            <strong>ID:</strong> ${element.id} -
            <strong>Name:</strong> ${element.name} -
            <strong>Especies:</strong> ${element.species}
        `;
    ol.append(li);
  });

  output.appendChild(ol);
};

const listCharacters = () => {
  if (characters.length === 0) {
    output.innerHTML = "<h2> No hay personajes disponibles</h2>";
    return;
  }

  renderHtml("Lista de Personajes", characters, false);
};

const groupBySpecies = () => {
  if (characters.length === 0) {
    output.innerHTML = "<h2> No hay personajes disponibles</h2>";
    return;
  }
  const humans = characters.filter(
    (character) => character.species === "Human",
  );
  const aliens = characters.filter(
    (character) => character.species === "Alien",
  );

  renderHtml("Humanos", humans, false);
  renderHtml("Aliens", aliens, true);
};

const showCharacterCard = () => {
  if (characters.length === 0) {
    output.innerHTML = "<h2> No hay personajes disponibles</h2>";
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * characters.length);
  const characterInfo = `
    <h2> Ficha de personaje </h2>
    <p><strong>ID:</strong> ${characters[indiceAleatorio].id}</p>
    <p><strong>Nombre:</strong> ${characters[indiceAleatorio].name}</p>
    <p><strong>Especie:</strong> ${characters[indiceAleatorio].species}</p>
    <p>Imagen:</p> <img src="${characters[indiceAleatorio].image}">
    `;
  output.innerHTML = characterInfo;
};

const clearOutput = () => {
  output.innerHTML = `
            <h2>Resultado</h2>
        <p>Haz click en un boton para mostrar informacion en pantalla</p>
    `;
};

document.addEventListener("DOMContentLoaded", () => {
  loadCharacters()
    .then(() => console.log("Datos cargados"))
    .catch((e) => console.error(e));
});
