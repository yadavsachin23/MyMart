import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title={"checkout"} />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Info</h6>
              <form className="row g-3 billing_form">
                <div className="col-12 form_group">
                  <label htmlFor="inputEmail4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-12 form_group">
                  <label htmlFor="inputPassword4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-12 form_group">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-md-6 form_group">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4 form_group">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-2 form_group">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty : <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal : <span>$ {totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping : <br />
                    Free Shipping
                  </span>
                  <span>$ 0</span>
                </h6>
                <h4>
                  Total Cost : <span>$ {totalAmount}</span>
                </h4>
                <button className="buy_button auth_btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
