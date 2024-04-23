import React, { useState, useContext } from "react";
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import CartProduct from "../cartProduct/CartProduct";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => {
      return sum + product.quantity;
    },

    0
  );

  const handelShow = () => {
    setShowModal(true);
  };

  const handelClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handelShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ( {productsCount})
            <IoCartOutline className="mx-2 " />
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handelClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header>
          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
                <h3>مجموع قیمت:{cart.getTotalAmount()} تومان</h3>
              </>
            ) : (
              <>
                <h3>سبد خرید خالی است.</h3>
              </>
            )}
            <Button
              onClick={handelClose}
              variant="btn btn-outline-secondary"
              className="mt-4 mx-3 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;
