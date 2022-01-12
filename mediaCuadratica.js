function mediaCuadratica(listaError) {
  let suma = 0;

  listaError.forEach((element) => {
    suma += Math.pow(element, 2);
    console.log(suma);
  });

    return  Math.sqrt(suma / listaError.length);
}

function calcularMediaCuadratica(){
    const inputDatos = document.getElementById("datos");
    const datosValue = inputDatos.value;
    const datosListaValue = datosValue.split(",");
    console.log(datosListaValue);

    const listaObtenida = mediaCuadratica(datosListaValue);

    const resultadoMediaCuadratica = document.getElementById("resultadoMediaCuadratica");

    console.log(listaObtenida)
    resultadoMediaCuadratica.innerText = `La media Cuadrática es ${listaObtenida}`;
}