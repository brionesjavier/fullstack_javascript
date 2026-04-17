class Taxi {
  constructor(licencia, vehiculo, caracteristica) {
    this.licencia = licencia;
    this.vehiculo = vehiculo;
    this.caracteristica = caracteristica;
  }

  mostrarInformacion() {
    console.log("");
    console.log(`Taxi: ${this.vehiculo}`);
    console.log(`Licencia: ${this.licencia}`);
    console.log(`Caracteristica: ${this.caracteristica}`);
  }
}

class TaxiTradicional extends Taxi {
  constructor() {
    super("A1", "tradicional", "techo amarillo");
  }
}

class TaxiCargo extends Taxi {
  constructor() {
    super("B", "Transporte", "transportar carga");
  }
}

class TaxiParticular extends Taxi {
  constructor(tipoVehiculo) {
    super("B", "particular", "vehiculo propio");
    this.tipoVehiculo = tipoVehiculo;
  }
  mostrarInformacion() {
    super.mostrarInformacion();
    console.log(`Tipo de vehiculo: ${this.tipoVehiculo}`);
  }
}

class TaxiExpress extends TaxiParticular {
  constructor() {
    super("auto tipicos");
  }
}

class TaxiPremium extends TaxiParticular {
  constructor() {
    super("autos de mayor categoría");
  }
}

const tradicional = new TaxiTradicional();
tradicional.mostrarInformacion();

const cargo = new TaxiCargo();
cargo.mostrarInformacion();

const premium = new TaxiPremium();
premium.mostrarInformacion();

const express = new TaxiExpress();
express.mostrarInformacion();
