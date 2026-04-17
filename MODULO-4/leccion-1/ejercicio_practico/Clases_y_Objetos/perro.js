class Perro{
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    mostrarInfo(){
        console.log(`nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`);
    }

    ladrar(){
        console.log("¡Guau guau!");
    }

}

const perro1 = new Perro( "rocky","pastor aleman","7 años");
perro1.mostrarInfo();
perro1.ladrar();