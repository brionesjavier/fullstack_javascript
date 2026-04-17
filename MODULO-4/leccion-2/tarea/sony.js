class Productos {
  constructor(nombre, modelo, precio) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
  }
  mostrarInformacion() {
    console.log("")
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Precio: $${this.precio}`);
  }
}

class Televisores extends Productos {
  constructor(nombre, modelo, precio, pulgadas) {
    super(nombre, modelo, precio);
    this.pulgadas = pulgadas;
  }
  mostrarInformacion() {
    super.mostrarInformacion();
    console.log(`pulgadas: ${this.pulgadas}`);
  }
}

class Audio extends Productos {
  constructor(nombre, modelo, precio, tipo) {
    super(nombre, modelo, precio);
    this.tipo = tipo;
  }
  mostrarInformacion() {
    super.mostrarInformacion();
    console.log(`tipo: ${this.tipo}`);
  }
}

class Camaras extends Productos {
  constructor(nombre, modelo, precio, resolucion) {
    super(nombre, modelo, precio);
    this.resolucion = resolucion;
  }
  mostrarInformacion() {
    
    super.mostrarInformacion();
    console.log(`Resolución: ${this.resolucion}`);
  }
}

class Consolas extends Productos {
  constructor(nombre, modelo, precio) {
    super(nombre, modelo, precio);

  }
}

class Accesorios extends Productos {
  constructor(nombre, modelo, precio, compatibilidad) {
    super(nombre, modelo, precio);
    this.compatibilidad = compatibilidad;
  }
  mostrarInformacion() {
    super.mostrarInformacion()
    console.log(`Compatibilidad: ${this.compatibilidad}`);
  }
}

const televisor = new Televisores("BRAVIA 5", "K-55XR50 LA8", "1.299.991", "55");
televisor.mostrarInformacion();


const audifono = new Audio("1000X Series", "WH-1000XM6", "369.990", "Audífonos inalámbricos con noise cancelling");
audifono.mostrarInformacion();

const camara = new Camaras("Cinema Line FX2", "ILME-FX2B", "2.219.990", "Full-frame 12.1 MP");
camara.mostrarInformacion();

const playstation = new Consolas("PlayStation 5 Edición Digital", "CFI-2015", "589.990");
playstation.mostrarInformacion();

const control = new Accesorios("DualSense Wireless Controller", "CFI-ZCT1W", "89.990", "PlayStation 5");
control.mostrarInformacion();


