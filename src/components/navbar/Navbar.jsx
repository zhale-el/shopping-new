import React, { useState, useContext } from "react";
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);

  let productsCount = cart.items.reduce(
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
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>سبد خرید</Modal.Title>
          <Modal.Body>محصول</Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;
