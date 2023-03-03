import React from "react";
import { Col, Container, Row } from "reactstrap";
import productImg from "../assets/images/arm-chair-01.jpg";
import useGetData from "../custom-hooks/useGetData";

const AllProducts = () => {
  const { data: productsData } = useGetData("products");
  // console.log(productsData);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={productImg} alt="" />
                  </td>
                  <td>Arm Chair</td>
                  <td>Chair</td>
                  <td>$567</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
