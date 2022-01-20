function determinarMediana(lista) {
  //se utiliza el metodo sort para ordenar de forma ascendente la lista, creamos una funcion anonima

  lista.sort(function (a, b) {
    return a - b;
  });

  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
      return parseInt(valorAcumulado) + parseInt(nuevoElemento);
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  //se creo esta variable para encontrar el elemento de la mitad de la lista, se utilizo parseInt
  //para volver el numero entero en caso de que fuera un decimal el resultado.

  const elementoMitad = parseInt(lista.length / 2);

  //se creo la funcion validacionPar para validar si el parametro que se pasa es par o impar
  function validacionPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  // se crea un condicional if en el que usamos la funcion validacionPar que creamos, le pasamos
  // como parametro el tamaño de la lista, si validacionPar es true se seleccionan los dos
  // elementos de la mitad, se crea una variable para calcular el promedio donde pasamos
  // la funcion ya creada para calcular el promedio a la cual le pasamos como parametro una lista
  // donde colocaremos los dos elementos de la mitad. Si validacionPar es false la mediana sera
  // igual a la lista con el elemento de la mitad.

  if (validacionPar(lista.length)) {
    const elemento1 = lista[elementoMitad - 1];
    const elemento2 = lista[elementoMitad];

    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElementos;
  } else {
    mediana = lista[elementoMitad];
  }

  return mediana;
}

function calcularMediana() {
  const inputDatos = document.getElementById("datos");
  const datosValue = inputDatos.value;
  const datosListaValue = datosValue.split(",");

  const resultadoMediana = document.getElementById("resultadoMediana");

  if (datosValue.length === 0) {
    resultadoMediana.innerText = "Debe ingresar los datos que desea evaluar";

    //se toma la lista que retorna split para convenrtirlos a numeros, una vez que se
    //convierte en numeros en una nueva lista con .map una vez que se crea la neva lista
    //usamos .some(Number.isNaN) para verificar si algun datos es NaN si lo es nos avisa
    // que los datos no son válidos por un mensaje
  } else if (
    datosListaValue.map((element) => parseInt(element, 10)).some(Number.isNaN)
  ) {
    resultadoMediana.innerText = "Datos no válidos";
  } else {
    const listaObtenida = determinarMediana(datosListaValue);
    resultadoMediana.innerText = `La mediana es ${listaObtenida}`;
  }
}
