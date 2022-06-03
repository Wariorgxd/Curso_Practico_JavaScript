const listaSalarios = colombia.map((persona) => persona.salary);

const salariosColSorted = listaSalarios.sort((a, b) => a - b);

function isPar(list) {
    return list.length % 2 === 0;
}

function calcularPromedio(list) {
    const suma = list.reduce((a, b) => a + b);
    return suma / list.length;
}

//Calculadora de medianas
function medianaSalarios(list) {
    const mitad = parseInt(list.length / 2);

    if (isPar(list)) {
        return calcularPromedio([list[mitad], list[mitad - 1]]);
    } else {
        return list[mitad];
    }
}

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);

Number.half(salariosColSorted.length);