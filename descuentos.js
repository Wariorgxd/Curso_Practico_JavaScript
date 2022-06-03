// const precioOriginal = 120;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const couponList = [
    {
        name: "cupon",
        discount: 15,
    },
    {
        name: "CuP0N155",
        discount: 30,
    },
    {
        name: "CuP0N300",
        discount: 45,
    },
];

function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = parseInt(inputPrice.value);

    const inputCoupon = document.getElementById("inputCoupon");
    const discountValue = toString(inputCoupon.value);

    const isCouponValueValid = function (couponList) {
        if (couponList.name === discountValue)
            isCouponValueValid = discountValue;
        return isCouponValueValid;
    };

    const userCoupon = couponList.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + discountValue + " no es válido");
    } else {
        const discount = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(
            priceValue,
            discount
        );

        resultP.innerText =
            "El precio con descuento son : $" + precioConDescuento;
    }
}

// console.log({
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
//     precioOriginal,
// });
