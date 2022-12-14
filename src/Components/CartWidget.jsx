import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn fondoRosa position-relative">
            <img src={"Media/cart.svg"} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">22</span>
        </button>
    )
}

export default CartWidget;