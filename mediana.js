const lista1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const mitadLista1 = parseInt(lista1.length / 2);

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function isPar(lista) {
    return lista.length % 2 === 0;
}

function calcularMediana(lista) {
    const listaOrdenada = lista.sort((a, b) => a - b);
    let mediana;

    const mitadLista = parseInt(listaOrdenada.length / 2);

    if (isPar(lista)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista1[mitadLista1];
    }
    return mediana;
}

console.log(calcularMediana(lista1));
