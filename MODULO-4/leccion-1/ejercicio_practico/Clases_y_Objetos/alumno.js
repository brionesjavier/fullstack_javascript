class Alumno {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }
  mostrarInfo() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera} `,
    );
  }
}

const alumno1 = new Alumno("Juan", 26, "Ingenierio informatica");
alumno1.mostrarInfo();
