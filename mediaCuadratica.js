function mediaCuadratica(listaError) {
  let suma = 0;

  listaError.forEach((element) => {
    suma += Math.pow(element, 2);
    console.log(suma);
  });

  return Math.sqrt(suma / listaError.length);
}

function calcularMediaCuadratica() {
  const inputDatos = document.getElementById("datos");
  const datosValue = inputDatos.value;
  const datosListaValue = datosValue.split(",");

  const resultadoMediaCuadratica = document.getElementById(
    "resultadoMediaCuadratica"
  );

  if (datosValue.length === 0) {
    resultadoMediaCuadratica.innerText =
      "Debe ingresar los datos que desea evaluar";

    //se toma la lista que retorna split para convenrtirlos a numeros, una vez que se
    //convierte en numeros en una nueva lista con .map una vez que se crea la neva lista
    //usamos .some(Number.isNaN) para verificar si algun datos es NaN si lo es nos avisa
    // que los datos no son válidos por un mensaje
  } else if (
    datosListaValue.map((element) => parseInt(element, 10)).some(Number.isNaN)
  ) {
    resultadoMediaCuadratica.innerText = "Datos no válidos";
  } else {
    const listaObtenida = mediaCuadratica(datosListaValue);
    resultadoMediaCuadratica.innerText = `La media Cuadrática es ${listaObtenida}`;
  }
}
