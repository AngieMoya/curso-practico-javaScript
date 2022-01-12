function calcularMediaAritmetica(lista){
    //let sumaLista = 0
    //for (i = 0; i < lista.length; i++){
        //sumaLista = sumaLista + lista[i]
    //};

    // sumando elementos de la lista con el metodo reduce

    const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento){
        console.log(valorAcumulado)
        return parseInt(valorAcumulado, 10) + parseInt(nuevoElemento, 10);
    })  ;

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//con split tomamos los valores del input y los convertimos en una lista pasandole un parametro
//en este caso una , para separar los elementos que la conforman.

function calcularPromedio(){
    const inputDatos = document.getElementById("datos");
    const datosValue = inputDatos.value;
    const datosListaValue = datosValue.split(",");
    console.log(datosListaValue);

    const listaObtenida = calcularMediaAritmetica(datosListaValue);

    const resultado = document.getElementById("resultado");

    console.log(listaObtenida)
    resultado.innerText = `El promedio es ${listaObtenida}`;
}