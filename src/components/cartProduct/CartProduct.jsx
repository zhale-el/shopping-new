import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../../data/items";
import { CartContext } from "../../context/CartContext";
const CartProduct = ({ id, quantity }) => {
  const productData = getProductData(id);
  const cart = useContext(CartContext);
  return (
    <>
      <p>عنوان: {productData.title}</p>
      <p>تعداد: {quantity}</p>
      <p>قیمت: {quantity * productData.price}تومان</p>
      <Button
        size="sm"
        onClick={() => cart.deleteFromCart(id)}
        className="mb-5 text-white"
        variant="btn btn-outline-secondary"
      >
        حذف
      </Button>
    </>
  );
};

export default CartProduct;
