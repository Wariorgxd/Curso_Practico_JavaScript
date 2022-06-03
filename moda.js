const lista1 = [
    1,
    5,
    3,
    67,
    3,
    4,
    1,
    465,
    1,
    3,
    4,
    65,
    23,
    4,
    1,
    2,
    4,
    54,
    ,
    56,
    4,
    23,
    42,
    3452,
];

const lista1Count = {};

lista1.map((elemento) =>
    lista1Count[elemento]
        ? (lista1Count[elemento] += 1)
        : (lista1Count[elemento] = 1)
);

const lista1Array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(lista) {
    const lista1Count = {};

    lista.map((element) =>
        lista1Count[element]
            ? (lista1Count[element] += 1)
            : (lista1Count[element] = 1)
    );
    const lista1Array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}