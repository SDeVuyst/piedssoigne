import React from "react";
import { Container, Row, Col } from "reactstrap";

//Images
import NoTransport from "../../assets/images/service/no_transport.webp";
import CozyHome from "../../assets/images/service/cozy_home.webp";
import TimeEfficient from "../../assets/images/service/time_efficient.webp";
import Flexible from "../../assets/images/service/flexible.webp";

const WieBenIk = () => {
  return (
    <React.Fragment>
      <div className="py-160" id="intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="col-12 text-center">
              <p className="subtitle mt-n10">Wie ben ik</p>
              <h1 className="h3 mb-0">
                Ik ben Vanessa, een goedlachse en warme persoonlijkheid die u graag op wolkjes doet lopen!👋
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center gh-5 mt-100">
            <Col lg={5}>
              <hr className="mt-0" />
              <p className="lead">
              Voetverzorging is er voor iedereen,
              of u beperkt bent in u mobiliteit,
              herstellende van een operatie of
              u het gewoon gemakkelijker vindt uw voeten
              te laten soigneren bij u thuis.
              </p>
            </Col>
            <Col lg={5}>
              <p>
                Voor jong en oud kom ik graag bij u langs
                voor behandeling, preventie en advies
                en indien nodig correcte doorverwijzing.
              </p>
              <a href="#afspraak" className="btn btn-dark btn-with-ball">
                  afspraak maken
                  <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="px-1" fluid>
        <Row className="gh-1 gv-1 justify-content-center">
          <Col sm={6} lg={5} xl={3} className="col-12">
            <div
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={NoTransport} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                <svg 
                  width="38" 
                  height="38" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </span>
                <span className="card-title h5">
                  Geen vervoer nodig
                </span>
                <span className="btn btn-clean">
                  &#8203;
                  {/* <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </span>
              </span>
            </div>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <div
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={CozyHome} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.619 11.85H26.0952C27.6613 11.85 29.1632 12.5032 30.2705 13.6659C31.3779 14.8287 32 16.4057 32 18.05C32 19.6943 31.3779 21.2713 30.2705 22.4341C29.1632 23.5968 27.6613 24.25 26.0952 24.25H24.619M24.619 11.85H1V25.8C1 27.4443 1.62211 29.0213 2.72946 30.1841C3.83682 31.3468 5.33872 32 6.90476 32H18.7143C20.2803 32 21.7822 31.3468 22.8896 30.1841C23.9969 29.0213 24.619 27.4443 24.619 25.8V11.85ZM6.90476 1V5.65M12.8095 1V5.65M18.7143 1V5.65"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">
                  Zorg op maat en in huiselijke sfeer
                </span>
                <span className="btn btn-clean">
                  &#8203;
                  {/* <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </span>
              </span>
            </div>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <div
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={TimeEfficient} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                <svg 
                  width="35" 
                  height="35" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.24 16.24L12 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
                <span className="card-title h5">
                  Minder tijdsverlies in uw dagelijkse routine
                </span>
                <span className="btn btn-clean">
                  &#8203;
                  {/* <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </span>
              </span>
            </div>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <div
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={Flexible} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7.44444C17 5.73527 16.3257 4.0961 15.1255 2.88753C13.9253 1.67897 12.2974 1 10.6 1H1V25.1667H12.2C13.473 25.1667 14.6939 25.6759 15.5941 26.5823C16.4943 27.4887 17 28.7181 17 30M17 7.44444V30M17 7.44444C17 5.73527 17.6743 4.0961 18.8745 2.88753C20.0747 1.67897 21.7026 1 23.4 1H33V25.1667H21.8C20.527 25.1667 19.3061 25.6759 18.4059 26.5823C17.5057 27.4887 17 28.7181 17 30"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">
                  Even flexibel, hygienisch en deskundig als in een salon
                </span>
                <span className="btn btn-clean">
                  &#8203;
                  {/* <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WieBenIk;
