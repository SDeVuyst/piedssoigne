import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { NavLink } from "react-router-dom";
import Navbar from "../../../Layouts/CommonLayouts/Navbar3";
import Footer from "../../../Layouts/CommonLayouts/Footer2";

import img1 from "../../../assets/images/single-portfolio/style-2-1-1170-1160.jpg";
import img2 from "../../../assets/images/single-portfolio/style-2-2-1170-1160.jpg";
import img3 from "../../../assets/images/single-portfolio/style-2-3-1170-1160.jpg";
import img4 from "../../../assets/images/single-portfolio/style-2-4-1170-1160.jpg";
import { Col, Container, Row } from "reactstrap";

const Style2 = () => {
  //meta title
  document.title = "Themebau | Single Work 2";
  const images = [img1, img2, img3, img4];
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);
  return (
    <React.Fragment>
      <div>
        <Navbar navClass="sticky" />
        {isGallery ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            enableZoom={true}
            onCloseRequest={() => {
              setisGallery(false);
            }}
            onMovePrevRequest={() => {
              setphotoIndex((photoIndex + images.length - 1) % images.length);
            }}
            onMoveNextRequest={() => {
              setphotoIndex((photoIndex + 1) % images.length);
            }}
            imageCaption={"Project " + parseFloat(photoIndex + 1)}
          />
        ) : null}
        <div className="content-wrap" id="content-wrap">
          <Container>
            <Row className="gv-3 align-items-center mb-100 mb-lg-0">
              <Col lg={6} className="col-12">
                <div
                  className="gallery-item gallery-item-lg"
                  data-fancybox="gallery-1"
                  data-aos="fade-right"
                >
                  <img
                    src={img1}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(0);
                    }}
                    alt=""
                  />
                </div>
              </Col>
              <div className="d-none d-lg-block col-1 me-xl-10"></div>
              <Col
                className="col-12 col-lg ms-xl-5 me-xl-n10"
                data-aos="fade-left"
              >
                <h2>Guitar Picks</h2>
                <p className="mb-0 lead fw-normal">
                  Over 10 years of combined experience, and know thing or two
                  about designing websites and mobile apps.
                </p>
                <hr />
                <Row className="gh-1 gv-1">
                  <Col sm={6} className="col-auto">
                    <ul className="list-group list-group-gap borderless">
                      <li className="list-group-item">
                        <span className="fw-medium me-8">Date:</span> June 10,
                        2020
                      </li>
                      <li className="list-group-item">
                        <span className="fw-medium me-8">Category:</span>{" "}
                        Branding
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} className="col-auto">
                    <ul className="list-group list-group-gap borderless">
                      <li className="list-group-item">
                        <span className="fw-medium me-8">Client:</span> Brian
                        Newton
                      </li>
                      <li className="list-group-item">
                        <span className="fw-medium">Share:</span>
                        <ul className="nav nav-gap-sm d-inline-flex align-items-center ms-4">
                          <li className="nav-item">
                            <NavLink
                              to="/https://facebook.com/runwebrun"
                              className="nav-link"
                            >
                              <svg
                                width="6"
                                height="15"
                                viewBox="0 0 10 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="/https://twitter.com/runwebrun"
                              className="nav-link"
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 25 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="/https://instagram.com/runwebrun"
                              className="nav-link"
                            >
                              <svg
                                width="11"
                                height="14"
                                viewBox="0 0 11 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.84375 0C2.90469 0 0 1.91862 0 5.02377C0 6.99849 1.13437 8.12049 1.82187 8.12049C2.10547 8.12049 2.26875 7.34631 2.26875 7.12752C2.26875 6.86665 1.58984 6.31126 1.58984 5.22573C1.58984 2.9705 3.34297 1.37165 5.61172 1.37165C7.5625 1.37165 9.00625 2.45718 9.00625 4.45154C9.00625 5.941 8.39609 8.73479 6.41953 8.73479C5.70625 8.73479 5.09609 8.22989 5.09609 7.5062C5.09609 6.4459 5.85234 5.41927 5.85234 4.32532C5.85234 2.46841 3.1625 2.80501 3.1625 5.04901C3.1625 5.52025 3.22266 6.04198 3.4375 6.47115C3.04219 8.13732 2.23438 10.6198 2.23438 12.3364C2.23438 12.8666 2.31172 13.3883 2.36328 13.9184C2.46068 14.025 2.41198 14.0138 2.56094 13.9605C4.00469 12.0251 3.95313 11.6464 4.60625 9.11346C4.95859 9.76983 5.86953 10.1233 6.59141 10.1233C9.63359 10.1233 11 7.22008 11 4.60301C11 1.81764 8.54219 0 5.84375 0Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <div className="d-none d-xl-block col-1"></div>
            </Row>
            <Row className="gv-3 align-items-center mb-100 mb-lg-0">
              <Col className="col-12 col-lg-6 order-lg-3">
                <div
                  className="gallery-item gallery-item-lg"
                  data-fancybox="gallery-1"
                  data-aos="fade-left"
                >
                  <img
                    src={img2}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(1);
                    }}
                    alt=""
                  />
                </div>
              </Col>
              <div className="d-none d-lg-block col-1 order-lg-2"></div>
              <Col className="col-12 col-lg-5 order-lg-1" data-aos="fade-right">
                <h3>What we do</h3>
                <p>
                  Wherein herb kind creepeth male living life be image. They're
                  it morning day. Isn't fruit of every day. Bearing our third
                  that night kind.
                </p>
                <Row className="justify-content-between">
                  <Col sm={6} className="col-auto">
                    <ul className="list mb-0">
                      <li>Branding Services</li>
                      <li>Identity Design</li>
                    </ul>
                  </Col>
                  <Col sm={6} className="col-auto">
                    <ul className="list mb-0">
                      <li>Logo Design</li>
                      <li>Website Design</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="gv-3 align-items-center mb-100 mb-lg-0">
              <Col lg={6} className="col-12">
                <div
                  className="gallery-item gallery-item-lg"
                  data-fancybox="gallery-1"
                  data-aos="fade-right"
                >
                  <img
                    src={img3}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(2);
                    }}
                    alt=""
                  />
                </div>
              </Col>
              <div className="d-none d-lg-block col-1 me-xl-10"></div>
              <Col
                className="col-12 col-lg ms-xl-5 me-xl-n10"
                data-aos="fade-left"
              >
                <div className="feature mb-30">
                  <div className="feature-icon">
                    <svg
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18911 17.7887L35 0.57735L64.8109 17.7887V52.2113L35 69.4226L5.18911 52.2113V17.7887Z"
                        stroke="currentColor"
                      />
                      <path
                        d="M18.2867 65.3084L1.0754 35.4976L18.2867 5.68667H52.7094L69.9207 35.4976L52.7094 65.3084H18.2867Z"
                        stroke="currentColor"
                      />
                    </svg>
                    1
                  </div>
                  <div className="feature-body">
                    <h6 className="feature-title">Search an Idea</h6>
                    <p className="feature-text">
                      Forth forth moveth shall i unto midst tree, fruit great
                      subdue.
                    </p>
                  </div>
                </div>
                <div className="feature mb-30">
                  <div className="feature-icon">
                    <svg
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18911 17.7887L35 0.57735L64.8109 17.7887V52.2113L35 69.4226L5.18911 52.2113V17.7887Z"
                        stroke="currentColor"
                      />
                      <path
                        d="M18.2867 65.3084L1.0754 35.4976L18.2867 5.68667H52.7094L69.9207 35.4976L52.7094 65.3084H18.2867Z"
                        stroke="currentColor"
                      />
                    </svg>
                    2
                  </div>
                  <div className="feature-body">
                    <h6 className="feature-title">Design &amp; Development</h6>
                    <p className="feature-text">
                      Make one moveth you&#39;ll don&#39;t night, forth wherein
                      behold creeping.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <svg
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18911 17.7887L35 0.57735L64.8109 17.7887V52.2113L35 69.4226L5.18911 52.2113V17.7887Z"
                        stroke="currentColor"
                      />
                      <path
                        d="M18.2867 65.3084L1.0754 35.4976L18.2867 5.68667H52.7094L69.9207 35.4976L52.7094 65.3084H18.2867Z"
                        stroke="currentColor"
                      />
                    </svg>
                    3
                  </div>
                  <div className="feature-body">
                    <h6 className="feature-title">Launch &amp; Testing</h6>
                    <p className="feature-text">
                      Fruitful were give light hath fruit also don&#39;t upon
                      given fowl seas.
                    </p>
                  </div>
                </div>
              </Col>
              <div className="d-none d-xl-block col-1"></div>
            </Row>
            <Row className="gv-3 align-items-center">
              <Col className="col-12 col-lg-6 order-lg-2">
                <div
                  className="gallery-item gallery-item-lg"
                  data-fancybox="gallery-1"
                  data-aos="fade-left"
                >
                  <img
                    src={img4}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(3);
                    }}
                    alt=""
                  />
                </div>
              </Col>
              <div className="d-none d-lg-block col-1 order-lg-1"></div>
              <Col className="col-12 col-lg-5 order-lg-0" data-aos="fade-right">
                <h3>Result</h3>
                <p>
                  In great our fruit give evening whales man lights place were
                  abundantly all creeping over creepeth itself unto saw deep
                  evening male fowl saw.
                </p>
                <NavLink to="/#" className="btn btn-dark btn-with-ball">
                  website
                  <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
                </NavLink>
              </Col>
            </Row>
            <div className="page-navigation mt-160">
              <NavLink to="/portfolio-single-style-1" className="btn btn-clean">
                <svg
                  className="icon-arrow icon-arrow-left"
                  width="26"
                  height="11"
                  viewBox="0 0 26 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 1L1 5.5L5.5 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5.5H1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                prev<span className="d-none d-sm-inline"> project</span>
              </NavLink>
              <NavLink
                to="/portfolio-col-2-style-4"
                className="btn btn-light btn-circle btn-xs"
              >
                all
              </NavLink>
              <NavLink to="/portfolio-single-style-3" className="btn btn-clean">
                next<span className="d-none d-sm-inline"> project</span>
                <svg
                  className="icon-arrow icon-arrow-right"
                  width="26"
                  height="11"
                  viewBox="0 0 26 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 1L25 5.5L20.5 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 5.5H25"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Style2;
