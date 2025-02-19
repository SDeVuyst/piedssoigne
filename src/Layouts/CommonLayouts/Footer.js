import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Logo from "../../assets/images/logo_transp.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer bg-dark text-white shape-parent overflow-hidden py-130" id="footer">
        <div className="shape align-items-end justify-content-end">
          <svg
            data-rellax-speed="-1"
            className="mb-n130"
            width="525"
            height="641"
            viewBox="0 0 525 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="320.5" cy="320.5" r="320.5" fill=" #202020" />
          </svg>
        </div>
        <Container className="mb-n5">
          <Row className="justify-content-between gh-1 gv-4">
            <Col lg={3}>
              <NavLink to="/" className="d-block mb-30">
                <img width="184" src={Logo} alt="" />
              </NavLink>
            </Col>
            
            <div className="d-none d-lg-block col-3"></div>
            <Col lg={6} className="col-12">
              <Row className="gh-1 gv-1">
                <Col lg={4} className="col-12">
                  <ul className="nav flex-column text-white">
                    <li className="nav-item">
                     <a href="#intro" className="nav-link">
                        Wie ben ik?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#wat-doe-ik" className="nav-link">
                        Wat doe ik?
                      </a>
                    </li>
                    <li className="nav-item">
                     <a href="#praktisch" className="nav-link">
                        Praktisch
                      </a>
                    </li>
                    <li className="nav-item">
                     <a href="#afspraak" className="nav-link">
                        Afspraak maken
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col className="col-auto">
                  <ul className="nav flex-column text-white">
                    <li className="nav-item">
                      <NavLink to="callto:+3250380036" className="nav-link">
                        050 38 00 36
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      BTW Nummer: BE1018288875
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>            
          </Row>
          {/* <Row className="justify-content-between gh-1 gv-4 mb-30">
            <div className="d-none d-lg-block col-2"></div>
            <div className="d-none d-lg-block col-1">
            </div>
          </Row> */}
          <Row className="justify-content-between mb-50 gh-1 gv-4">
            <Col lg={3}>
              <p className="mb-0">
                Voor jong en oud kom ik graag bij u langs voor behandeling, preventie en advies en indien nodig correcte doorverwijzing.
              </p>
            </Col>
            {/* <Col lg={6} className="col-12"></Col>  */}
            <div className="d-none d-lg-block col-6"></div>
            
            <Col className="col-auto">
              <div className="footer-copyright">
                © {new Date().getFullYear()} | Gemaakt door <Link to="https://github.com/SDeVuyst" className="footer-copyright">SDeVuyst</Link>.
              </div>
            </Col>
                       
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
