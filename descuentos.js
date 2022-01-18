function aplicarDescuento(precio, descuento) {
  const descuentoPorcentaje = 100 - descuento;
  const precioFinal = (precio * descuentoPorcentaje) / 100;

  return precioFinal;
}

function calcularPriceFinal() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = parseInt(inputPrice.value, 10);

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseInt(inputDiscount.value, 10);

  const valorDescuentoAplicado = aplicarDescuento(priceValue, discountValue);

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = `El precio con descuento es $ ${valorDescuentoAplicado}`;
}

// cree un array de objetos para guardar los cupones, cada cupon tiene un codigo
// y su correspondiente valor de descuento

const cupones = [
  {
    codigo: "dis10",
    value: 10,
  },

  {
    codigo: "dis15",
    value: 15,
  },

  {
    codigo: "dis25",
    value: 25,
  },

  {
    codigo: "dis50",
    value: 50,
  },
];

function calcularDescuentoCupon() {
  const inputPrice = document.getElementById("inputPrecio");
  const priceValue = parseInt(inputPrice.value, 10);

  const inputDiscount = document.getElementById("inputCupon");
  const discountValue = inputDiscount.value;

  const resultPriceCupon = document.getElementById("resultDescuentoCupon");

  // se creo una variable a la cual se le asigno una funcion anonima que buscaba en los
  //objetos del array si la propiedad codigo tenia igual al ingresado

  const validacionCupon = cupones.find(function(objeto){
    return objeto.codigo === discountValue;
  });

  // se valido si validacionCupon es diferente de null o undefined con el if(validacionCupon)

  if (validacionCupon) {
    //console.log("validado");
    const descuento = aplicarDescuento(priceValue, validacionCupon.value);
    resultPriceCupon.innerText = `El precio con descuento es: $ ${descuento}`;
  } else {
    resultPriceCupon.innerText = "El cupon de descuento es invalido";
  }
}


