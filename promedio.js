function calcularMediaAritmetica(lista){
    //let sumaLista = 0
    //for (i = 0; i < lista.length; i++){
        //sumaLista = sumaLista + lista[i]
    //};

    // sumando elementos de la lista con el metodo reduce

    const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento){
        //console.log(valorAcumulado)
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
    console.log(datosValue)
    

    const datosListaValue = datosValue.split(",");
    console.log( datosListaValue)

    const resultado = document.getElementById("resultado");

    // validandoo que el input no este vacío

    if(datosValue.length === 0){

        resultado.innerText = "Debe ingresar los datos que desea evaluar";


        //se toma la lista que retorna split para convenrtirlos a numeros, una vez que se
        //convierte en numeros en una nueva lista con .map una vez que se crea la neva lista
        //usamos .some(Number.isNaN) para verificar si algun datos es NaN si lo es nos avisa
        // que los datos no son válidos por un mensaje
    } else if(datosListaValue.map(element => parseInt(element,10)).some(Number.isNaN)){  

        resultado.innerText = "Datos no válidos"

    } else{

        const listaObtenida = calcularMediaAritmetica(datosListaValue);
        resultado.innerText = `El promedio es ${listaObtenida}`;
    };
}