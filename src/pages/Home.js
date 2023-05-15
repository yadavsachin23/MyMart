import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import counterImage from "../assets/images/counter-timer-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setBestMobileProducts] = useState([]);
  const [wirelessProducts, setBestWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSaleProducts(filteredBestSaleProducts);
    setBestMobileProducts(filteredMobileProducts);
    setBestWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle">Trending Product in {year}</p>
                  <h2>Make your Interior more Minimalastic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse iste, maiores iusto et in est beatae sequi dolore
                    aspernatur autem dolorem, perspiciatis doloremque molestiae.
                  </p>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="buy_button">
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Services />

        <section className="trending_products">
          <Container>
            <Row>
              <Col className="text-center" lg="12">
                <h2 className="section_title">Trending Products</h2>
              </Col>
              {loading ? (
                <h5 className="fw-bold">Loading...</h5>
              ) : (
                <ProductsList data={trendingProducts} />
              )}
            </Row>
          </Container>
        </section>

        <section className="best_sales">
          <Container>
            <Row>
              <Col className="text-center" lg="12">
                <h2 className="section_title">Best Sale</h2>
              </Col>
              {loading ? (
                <h5 className="fw-bold">Loading...</h5>
              ) : (
                <ProductsList data={bestSaleProducts} />
              )}
            </Row>
          </Container>
        </section>

        <section className="timer_count">
          <Container>
            <Row>
              <Col lg="6" md="12" className="count_down_col">
                <div className="clock_top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy_button store_btn">
                  <Link to={"/shop"}>Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="12" className="text-end counter_img">
                <img src={counterImage} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="new_arrivals">
          <Container>
            <Row>
              <Col className="text-center mb-3" lg="12">
                <h2 className="section_title">New Arrivals</h2>
              </Col>
              {loading ? (
                <h5 className="fw-bold">Loading...</h5>
              ) : (
                <ProductsList data={mobileProducts} />
              )}
              {loading ? (
                <h5 className="fw-bold">Loading...</h5>
              ) : (
                <ProductsList data={wirelessProducts} />
              )}
            </Row>
          </Container>
        </section>
        <section className="popular_category">
          <Container>
            <Row>
              <Col className="text-center mb-5" lg="12">
                <h2 className="section_title">Popular Category</h2>
              </Col>
              {loading ? (
                <h5 className="fw-bold">Loading...</h5>
              ) : (
                <ProductsList data={popularProducts} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
