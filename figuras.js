//Código del cuadrado

console.group("Cuadrado");

// const sideSquare = 5;
// console.log("Los lados del cuadrado son: " + sideSquare + " cm");

function perimeterSquare(sideSquare) {
    return sideSquare * 4;
}

console.log("El perimetro del cuadrado es: " + perimeterSquare + " cm");

function areaSquare(sideSquare) {
    return sideSquare * sideSquare;
}

console.log("El area del cuadrado es: " + areaSquare + " cm^2");

console.groupEnd();
//Código del triangulo

console.group("Triangulo");

// const sideTriangle = 6;
// const sideTriangle2 = 8;
// const sideTriangle3 = 10;

// console.log(
//   "Los lados del triangulo son: " +
//     sideTriangle +
//     " cm, " +
//     sideTriangle2 +
//     " cm y " +
//     sideTriangle3 +
//     " cm"
// );

function perimeterTriangle(sideTriangle, sideTriangle2, sideTriangle3) {
    return sideTriangle + sideTriangle2 + sideTriangle3;
}
// console.log("El perimetro del triangulo es: " + perimeterTriangle + " cm");

// const heightTriangle = 5.5;
// console.log("La altura del triangulo es: " + heightTriangle + " cm");

// const baseTriangle = sideTriangle2;
// console.log("La base del triangulo es: " + baseTriangle + " cm");

function areaTriangle(baseTriangle, heightTriangle) {
    return (baseTriangle * heightTriangle) / 2;
}
console.log("El area del triangulo es: " + areaTriangle + " cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulo");

// const radiusCircle = 5;
// console.log("El radio del circulo es: " + radiusCircle + " cm");

function diameterCircle(radiusCircle) {
    return radiusCircle * 2;
}

function perimeterCircle(radiusCircle) {
    return 2 * Math.PI * radiusCircle;
}
console.log("El perimetro del circulo es: " + perimeterCircle + " cm");

function areaCircle(radiusCircle) {
    return Math.PI * radiusCircle * radiusCircle;
}
// console.log("El area del circulo es: " + areaCircle + " cm^2");
console.groupEnd();

//Aqui interactuamos con el HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimeterSquare(value);
    alert(perimetro);
}

function calculateSquareArea() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaSquare(value);
    alert(area);
}

function calculateTriangleArea() {
    const input1 = document.getElementById("inputTriangulo4");
    const input2 = document.getElementById("inputTriangulo5");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const area = areaTriangle(value1, value2);

    alert(area);
}

function calculateTrianglePerimeter() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimeter = perimeterTriangle(value1, value2, value3);

    alert(perimeter);
}

function calculateCircleArea() {
    const input = document.getElementById("inputCirculo");

    const value = parseInt(input.value);

    const area = areaCircle(value);
    alert(area);
}

function calculateCirclePerimeter() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const perimeter = perimeterCircle(value);
    alert(perimeter);
}

function heightTriangle(sideTriangle, baseTriangle) {
    return Math.sqrt(
        sideTriangle * sideTriangle - (baseTriangle * baseTriangle) / 4
    );
}

function isIsoscelesTriangle(sideTriangle1, sideTriangle2, sideTriangle3) {
    if (
        sideTriangle1 === sideTriangle2 ||
        sideTriangle1 === sideTriangle3 ||
        sideTriangle2 === sideTriangle3
    ) {
        return true;
    } else {
        return false;
    }
}
function calculateTriangleHeight() {
    const input1 = document.getElementById("inputIsosceles1");
    const input2 = document.getElementById("inputIsosceles2");
    const input3 = document.getElementById("inputIsosceles3");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    if (isIsoscelesTriangle(value1, value2, value3)) {
        const height = heightTriangle(value1, value3);
        alert(height);
    } else {
        alert("No es un triangulo isosceles");
    }
}
