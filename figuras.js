// Codigo cuadrado

console.group("Cuadrados");

function cuadradoPerimetro(lado) {
  return lado * 4;
}

function cuadradoArea(lado) {
  return lado * lado;
}

console.groupEnd();

// codigo triangulo

console.group("Triángulos");

function trianguloPerimetro(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function trianguloArea(base, altura) {
  return (base * altura) / 2;
}

function alturaTrianguloIsosceles(lado1, lado2, lado3) {
  if (
    (lado1 === lado2 && lado1 !== lado3) ||
    (lado1 === lado3 && lado1 !== lado2) ||
    (lado2 === lado3 && lado2 !== lado1)
  ) {
    console.log("Es un triangulo Isosceles");
    const altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(lado3, 2) / 4);
    return altura;
  } else {
    console.log("No es un triangulo Isosceles");
  }
}

console.groupEnd();

// codigo circulo

console.group("Círculos");

function diametroCirculo(radio) {
  return 2 * radio;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//conectando los input del html con js

//cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("medidasCuadrado");
  const value = parseInt(input.value, 10);

  const resultadoPerimetroCuadrado = document.getElementById("resultadoperimetroCuadrado");

  //validacion para saber si el usuario ingreso informacion

  if(Number.isNaN(value)){

    resultadoPerimetroCuadrado.innerText = "Debe ingresar la medida de los lados";

  } else{

    const perimetro = cuadradoPerimetro(value);
    resultadoPerimetroCuadrado.innerText = `El perimetro es ${perimetro}`;
  }  

}

function calcularAreaCuadrado() {
  const input = document.getElementById("medidasCuadrado");
  const value = parseInt(input.value, 10);

  const resultadoArea = document.getElementById("resultadoAreaCuadrado");

  if (Number.isNaN(value)){

    resultadoArea.innerText = "Debe ingresar la medida de los lados";

  } else{

    const area = cuadradoArea(value);
    resultadoArea.innerText = `El area es ${area}`;
  }
  
}

//triangulo
//cuando se realizo la suma de la funcion trianguloPerimetro se concateno en vez de sumar
//por lo que tuve que pasar el value de input de string a number, utilice la funcion parseInt(cadena, base)

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("lado1-triangulo");
  const value1 = parseInt(inputLado1.value, 10);

  const inputLado2 = document.getElementById("lado2-triangulo");
  const value2 = parseInt(inputLado2.value, 10);

  const inputBase = document.getElementById("base-triangulo");
  const value3 = parseInt(inputBase.value, 10);

  const resultadoperimetroTiangulo = document.getElementById("resultadoperimetroTiangulo");

  if (Number.isNaN(value1) || Number.isNaN(value2) || Number.isNaN(value3)){

    resultadoperimetroTiangulo.innerText = "Debe ingresar la medida de los dos lados y la base del triangulo";
  } else{

    const perimetro = trianguloPerimetro(value1, value2, value3);
    resultadoperimetroTiangulo.innerText = `El perimetro es ${perimetro}`;
  };
  
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("base-triangulo");
  const valueBase = parseInt(inputBase.value, 10);

  const inputAltura = document.getElementById("altura-triangulo");
  const valueAltura = parseInt(inputAltura.value, 10);

  const resultadoAreaTriangulo = document.getElementById("resultadoAreaTriangulo");

  if(Number.isNaN(valueBase) || Number.isNaN(valueAltura)){
    resultadoAreaTriangulo.innerText = "Debe ingresar la medida de la altura y base del triangulo";
  } else{

    const area = trianguloArea(valueBase, valueAltura);
    resultadoAreaTriangulo.innerText = `El area es ${area}`;
  };

}

function calcularAlturaTrianguloIsosceles() {
  const inputLado1 = document.getElementById("lado1-triangulo");
  const valueLado1 = parseInt(inputLado1.value, 10);

  const inputLado2 = document.getElementById("lado2-triangulo");
  const valueLado2 = parseInt(inputLado2.value, 10);

  const inputLado3 = document.getElementById("base-triangulo");
  const valueLado3 = parseInt(inputLado3.value, 10);

  const resultadoAlturaTianguloIsosceles = document.getElementById("resultadoAlturaTianguloIsosceles");

  if(Number.isNaN(valueLado1)|| Number.isNaN(valueLado2) || Number.isNaN(valueLado3)){
    resultadoAlturaTianguloIsosceles.innerText = "Debe ingresar la medida de los tres lados del triangulo";
  } else{

    const alturaIsosceles = alturaTrianguloIsosceles(
      valueLado1,
      valueLado2,
      valueLado3
    );
    resultadoAlturaTianguloIsosceles.innerText = `La altura es ${alturaIsosceles}`;
  };

  
  
    
    
    
}

//circulo

function calcularPerimetroCirculo() {
  const inputradio = document.getElementById("radioCirculo");
  const valueRadio = parseInt(inputradio.value, 10);

  const resultadoperimetroCirculo = document.getElementById("resultadoperimetroCirculo");

  if (Number.isNaN(valueRadio)){

    resultadoperimetroCirculo.innerText = "Debe ingresar el valor del radio";

  } else{

    const perimetro = perimetroCirculo(valueRadio);
    resultadoperimetroCirculo.innerText = `El perimetro es ${perimetro}`;
  };
  
}

function calcularAreaCirculo() {
  const inputradio = document.getElementById("radioCirculo");
  const valueRadio = parseInt(inputradio.value, 10);

  const resultadoAreaCirculo = document.getElementById("resultadoAreaCirculo");

  if(Number.isNaN(valueRadio)){

    resultadoAreaCirculo.innerText = "Debe ingresar el valor del radio";

  } else{

    const area = areaCirculo(valueRadio);
    resultadoAreaCirculo.innerText = `El area es ${area}`;
  };
}

//mostrar la seleccion de las figuras al dar click calcular y seleccionar la que desea 
//ocultanto las no seleccionadas

function imprimir(argumento) {
  const containerArray = document.getElementsByClassName("container");
  let container;

  if (containerArray.length > 0 && containerArray[0] !== null) {
    container = containerArray[0];
  }

  console.log(containerArray);
  console.log(container);
  container.style.display = "flex";

  for (let child = 0; container.children.length > child; child++) {
    console.log(container.children[child]);
    if (container.children[child].id === argumento) {
      container.children[child].style.display = "block";
    } else {
      container.children[child].style.display = "none";
    }
  }
}
