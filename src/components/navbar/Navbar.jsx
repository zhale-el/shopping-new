import React, { useState } from "react";
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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
