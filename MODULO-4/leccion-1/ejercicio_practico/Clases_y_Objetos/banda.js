class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.discos = discos;
  }

  listaIntegrantes() {
    const nombres = this.integrantes.map(function (data) {
      return data.nombre;
    });
    return nombres.join(", ");
  }

  mostrarInfo() {
    console.log(
      `Banda: ${this.nombre}, Genero: ${this.genero}, Integrantes: ${this.listaIntegrantes()}`,
    );
  }

  listarDiscos() {
    console.log("Discos:", this.discos.join(", "));
  }
}

class Integrantes {
  constructor(nombre, puesto) {
    this.nombre = nombre;
    this.puesto = puesto;
  }
}

/* integrantes */
const integrante1 = new Integrantes("Jorge González ", "Cantante");
const integrante2 = new Integrantes("Claudio Narea ", "Guitarra");
const integrante3 = new Integrantes("Miguel Tapia ", "Batería");

const listaIntegrantes = [integrante1, integrante2, integrante3];

const listaDisco = [
  "La voz de los '80",
  "Los Prisioneros ",
  "Pateando piedras",
];

/* Banda */
const banda1 = new BandaMusical(
  "Los Prisioneros",
  "rock",
  listaIntegrantes,
  listaDisco,
);

banda1.mostrarInfo();
banda1.listarDiscos();
