const API_URL = "https://jsonplaceholder.typicode.com/users";
const output = document.getElementById("output");
let users = [];

// Cargar datos al iniciar la pagina
//usar fetch api //listo
//usar try catch //listo
//usar async await // listo
//usar innerHTML para mostrar los datos
async function loadUsers() {
  try {
    //1. hacer la peticion a la api
    const response = await fetch(API_URL); //devuelve una promesa
    //2. verificar que la respuesta sea correcta
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    //3. convertir la respuesta a json
    const data = await response.json();

    //4. verificar que se recibe la data
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No se recibio la data");
    }

    users = data;
  } catch (error) {
    console.error("Error :", error);
  }
}

// --- Funciones ---

const listAllUserNames = () => {
  //usar map para obtener los nombres de los usuarios
  //usar innerHTML

  const ul = document.createElement("ol");
  output.innerHTML = "<h2>Lista Usuario</h2>";
  users.map(function (user) {
    const li = document.createElement("li");
    li.innerHTML = user.name;
    ul.appendChild(li);
  });
  output.append(ul);
};

const showBasicInfoByPrompt = () => {
  //usar prompt para pedir el nombre del usuario
  //usar find para buscar el usuario por nombre
  //mostrar la informacion basica del usuario (nombre, email, username) usando innerHTML
  output.innerHTML = "";
  const name = prompt("Ingrese el nombre del usuario");

  if (name == null) {
    alert("Operacion Cancelada!");
    return;
  }

  const result = users.find((user) => {
    user.name === name;
  });
  const detailUser = result
    ? `
	<h2>Informacion Usuario</h2>
	<p>name: ${result.name}</p>
	<p>email: ${result.email}</p>
	<p>username: ${result.username}</p>
	`
    : "<h3>Usuario no encontrado!</h3>";

  output.innerHTML = detailUser;
};

const showAddressByPrompt = () => {
  //usar prompt para pedir el nombre del usuario
  //usar find para buscar el usuario por nombre
  //mostrar la direccion del usuario (calle, suite, ciudad, zipcode) usando innerHTML
  const name = prompt("Ingrese el nombre del usuario");

  if (name == null) {
    alert("Operacion Cancelada!.");
    return;
  }
  const result = users.find((user) => {
    user.name === name;
  });
  const detailUser = result
    ? `
	<h2>Direccion Usuario</h2>
	<p>street: ${result.address.street}</p>
	<p>suite: ${result.address.suite}</p>
	<p>city: ${result.address.city}</p>
	<p>zipcode: ${result.address.zipcode}</p>
	<p>geolocation: lat: ${result.address.geo.lat} - lng: ${result.address.geo.lng}</p>
	`
    : "<h3>Usuario no encontrado</h3>";

  output.innerHTML = detailUser;
};

const showAdvancedInfoByPrompt = () => {
  //usar prompt para pedir el nombre del usuario
  //usar find para buscar el usuario por nombre
  //mostrar la informacion avanzada del usuario (nombre, email, username, direccion completa, telefono, website) usando innerHTML

  const name = prompt("Ingrese el nombre del usuario");

  if (name == null) {
    alert("Operacion Cancelada!");
  }
  const result = users.find((user) => user.name === name);
  const detailUser = result
    ? `
	<h2>Informacion Avanzada del Usuario</h2>
	<p>name: ${result.name}</p>
	<p>email:${result.email}</p>
	<p>username: ${result.username}</p>
	<p>phone: ${result.phone}</p>
	<p>website: ${result.website}</p>
	<h2>Direccion</h2>
	<p>street: ${result.address.street}</p>
	<p>suite: ${result.address.suite}</p>
	<p>city: ${result.address.city}</p>
	<p>zipcode: ${result.address.zipcode}</p>
	<p>geolocation: lat: ${result.address.geo.lat} - lng: ${result.address.geo.lng}</p>
	`
    : "<h3>Usuario no encontrado</h3>";

  output.innerHTML = detailUser;
};

const listCompaniesWithCatchphrase = () => {
  //usar map para obtener las empresas y sus slogans
  //usar innerHTML para mostrar la lista de empresas con sus slogans
  const companies = users.map((user) => user.company);

  output.innerHTML = "<h2>Lista de Compañias</h2>";
  const ul = document.createElement("ol");

  companies.forEach(function (company) {
    const li = document.createElement("li");
    li.innerHTML = `${company.name} - ${company.catchPhrase}`;
    ul.appendChild(li);
  });
  output.append(ul);
};

const listUserNamesAlphabetically = () => {
  //usar map para obtener los nombres de los usuarios
  //usar sort para ordenar los nombres alfabeticamente
  //usar join para convertir el array de nombres en una cadena de texto separada por comas
  //usar innerHTML para mostrar la lista de nombres ordenados
  const userList = users.map((user) => ({ name: user.name }));
  userList.sort((a, b) => a.name.localeCompare(b.name));
  const ul = document.createElement("ol");

  output.innerHTML = "<h2>Lista ordenada alfabeticamente</h2>";
  userList.forEach((name) => {
    const li = document.createElement("li");
    li.innerHTML = `${name.name}`;
    ul.appendChild(li);
  });
  output.append(ul);
};

loadUsers();
