// Codigo cuadrado

console.group("Cuadrados");


function cuadradoPerimetro(lado){
    return lado * 4;
};

console.log(cuadradoPerimetro(5));

function cuadradoArea(lado){
    return lado * lado;
};

console.log(cuadradoArea(5));


console.groupEnd();

// codigo triangulo

console.group("Triángulos");

function trianguloPerimetro(lado1, lado2, base){
    return lado1 + lado2 + base;
};

console.log(trianguloPerimetro(6,6,4));


function trianguloArea(base, altura){
    return (base * altura)/2;
};

console.log(trianguloArea(4,5.5));

console.groupEnd();


// codigo circulo

console.group("Círculos");

function diametroCirculo(radio){
    return 2*radio;
};

console.log(diametroCirculo(5));


const PI = Math.PI;

console.log(`PI es igual a ${PI}`);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

console.log(perimetroCirculo(5));

function areaCirculo(radio){
    return (radio * radio) * PI;
};

console.log(areaCirculo(5));

console.groupEnd();
