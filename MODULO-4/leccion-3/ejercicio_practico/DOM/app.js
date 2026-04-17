//1. Repetir la palabra
function repetirPalabra() {
  const palabra = document.getElementById("palabra1").value;
  const cantida = document.getElementById("cantida1").value;
  const contenedor = document.getElementById("resultado1");
  console.log(palabra);
  console.log(cantida);

  //generar texto
  contenedor.textContent = `${palabra} `.repeat(cantida);
}

//2. aplicar color
function aplicarColor() {
  const color = document.getElementById("color2").value;
  document.getElementById("parrafo2").style.background = color;
}

//3 calcular llos numeros

function calcular() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);

  
  const suma = sumar(numero1, numero2);
  const resta = restar(numero1, numero2);
  const multiplicacion = multiplicar(numero1, numero2);
  const division = dividir(numero1, numero2);
  
  const resultado = suma + resta + multiplicacion + division;

  document.getElementById("resultado3").innerHTML = `
    <br>
    ${numero1} + ${numero2} = ${suma}<br>
    ${numero1} - ${numero2} = ${resta}<br>
    ${numero1} * ${numero2} = ${multiplicacion}<br>
    ${numero1} / ${numero2} = ${division}<br>
    La suma de los resultados es ${resultado}
  `;
}

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}
function dividir(numero1, numero2) {
  return numero1 / numero2;
}


//invertir la palabra
function invertirPalabra(){
  const palabra = document.getElementById("invertir").value;
  const arreglo = palabra.split("")
  const palabraInversa =arreglo.reverse().join("");
  document.getElementById("resultado4").innerHTML= `<br> ${palabraInversa}`;

}