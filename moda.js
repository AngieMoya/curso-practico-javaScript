function determinarModa(lista) {
  const listCount = {};

  //se utilizo map para crear un nuevo array con la condicion establecidas para la funcion anonima
  // que define que si el elemento se encuenta en listCount se suma 1 y si no el valor se
  //establece como 1.

  lista.map(function (elemento) {
    if (listCount[elemento]) {
      listCount[elemento] += 1;
    } else {
      listCount[elemento] = 1;
    }
  });

  // convirtiendo un objeto en array

  const listaArray = Object.entries(listCount);

  // utilizando sort para ordenar la lista de manera ascendente.

  listaArray.sort(function (a, b) {
    return a[1] - b[1];
  });

  //la moda es la lista en la ultima posicion del array

  const moda = listaArray[listaArray.length - 1];
  return moda
}

function calcularModa(){
  const inputDatos = document.getElementById("datos");
  const datosValue = inputDatos.value;
  const datosListaValue = datosValue.split(",");
  console.log(datosListaValue);

  const listaObtenida = determinarModa(datosListaValue);

  const resultadoModa = document.getElementById("resultadoModa");

  console.log(listaObtenida)
  resultadoModa.innerText = `la MODA es ${listaObtenida[0]} se repite ${listaObtenida[1]} veces`;
}
