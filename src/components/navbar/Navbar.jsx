import React from "react";
import { Navbar as NavbarBs, Button } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button variant="btn btn-outline-secondary" className="text-white">
            <IoCartOutline className="mx-2 " />
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
    </>
  );
};

export default Navbar;
