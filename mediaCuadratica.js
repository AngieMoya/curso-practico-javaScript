function mediaCuadratica(listaError) {
  let suma = 0;

  listaError.forEach((element) => {
    suma = suma + Math.pow(element, 2);
    console.log(suma);
  });

  const rms = Math.sqrt(suma / listaError.length);
  console.log(rms);

  return rms;
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