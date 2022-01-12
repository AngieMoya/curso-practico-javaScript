// Helpers (no son parte de la logica pero las use para desarrollar el programa)
function verificarPar(numero){
    return (numero % 2 === 0);
};

function determinarMediana(lista) {
    //se utiliza el metodo sort para ordenar de forma ascendente la lista, creamos una funcion anonima
  
    lista.sort(function (a, b) {
      return a - b;
    });
  
    function calcularMediaAritmetica(lista) {
      const sumaLista = lista.reduce(function (
        valorAcumulado,
        nuevoElemento
      ) {
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
  };

// calculadora de medianas

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (verificarPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = determinarMediana([personaMitad1, personaMitad2]);
        return mediana;

    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    };
};


// mediana general

const salariosCol = colombia.map(function(persona){
    return persona.salary;
});

const salariosColOrdenado = salariosCol.sort(function(a,b){
    return a - b;
});

const medianaGeneral = medianaSalarios(salariosColOrdenado);

//mediana top 10%

const spliceStart = (salariosColOrdenado.length * 90) / 100;
const spliceCount = salariosColOrdenado.length - spliceStart;

const salariosColTop10 = salariosColOrdenado.splice(spliceStart, spliceCount);

const medianaSalariosTop10 = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneral,
    medianaSalariosTop10
});