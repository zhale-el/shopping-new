import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/productItem/ProductItem";
import { productList, getProductData } from "../data/items";
const Shop = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      {productList.map((item) => (
        <Col align="center" key={item.id}>
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Shop;
