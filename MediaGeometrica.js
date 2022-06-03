const lista = [200, 305, 503, 332, 241, 45, 123, 553, 122, 553, 664];

function calcularMediaGeometrica(lista) {
    let media = 1;

    for (let i = 0; i < lista.length; i++) {
        media = media * lista[i];
    }

    const mediaGeometrica = Math.pow(media, 1 / lista.length);
    return mediaGeometrica;
}
