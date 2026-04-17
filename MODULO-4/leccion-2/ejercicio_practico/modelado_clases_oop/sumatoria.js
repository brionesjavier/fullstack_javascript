class Sumatoria {
  constructor(base) {
    this.base = base;
    this.contador = 1;
    this.acumulador = this.base;
    console.log(`Base: ${base} -> Acumulado: ${this.acumulador}`);
  }
  sumar() {
    const valorAnterior = this.acumulador;
    this.acumulador = this.acumulador + this.base * this.contador;
    console.log(
      `click: ${this.contador} -> Acumulado: ${valorAnterior} + (${this.base} * ${this.contador}) = ${this.acumulador}`,
    );
    this.contador++;
  }
}

const base = Math.floor(Math.random() * 10) + 1;

const sumatoria1 = new Sumatoria(base);

sumatoria1.sumar();
sumatoria1.sumar();
sumatoria1.sumar();
sumatoria1.sumar();
sumatoria1.sumar();

