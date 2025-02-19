import React from "react";
import { Col, Container, Row } from "reactstrap";

const WatDoeIk = () => {
    return (
        <React.Fragment>
        <div className="pt-100 pb-90" id="wat-doe-ik">
          <Container> 
            <h2
              className="display-2 text-center pt-6 mb-10 mt-n10"
              data-aos="fade"
            >
              Wat doe ik?
            </h2>
            <Row className="gh-1 gv-2 mt-n3 pb-6">
              <Col md={6} lg={6} className="col-12" data-aos="fade-up">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2V22" />
                      <path d="M2 12H22" />
                    </svg>

                  </div>
                  <div className="feature-body pt-30">
                    <h4 className="mt-n10 mb-30 pb-5">Behandeling</h4>
                    <Row className="gh-1 gv-1 mt-30">
                    <Col lg={6} className="col-12 pt-0">
                      <ul className="list font-size-18">
                        <li>Knippen van de nagels</li>
                        <li>Verzorging nagelriemen</li>
                        <li>Gespleten nagels</li>
                        <li>Kalk, Schimmel en tunnelnagels</li>
                        <li>Behandelen van kloven</li>
                      </ul>
                    </Col>
                    <Col lg={6} className="col-12 pt-0">
                      <ul className="list font-size-18">
                        <li>Eeltvorming</li>
                        <li>Likdoorns</li>
                        <li>Ingroeiende teennagels</li>
                      </ul>
                    </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={6} className="col-12" data-aos="fade-up">
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
                    <svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 16.584V18.9996C10 20.1042 10.8954 20.9996 12 20.9996C13.1046 20.9996 14 20.1042 14 18.9996L14 16.584M12 3V4M18.3643 5.63574L17.6572 6.34285M5.63574 5.63574L6.34285 6.34285M4 12H3M21 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                  </div>
                  <div className="feature-body pt-30">
                    <h4 className="mt-n10 mb-30 pb-5">Advies & Preventie</h4>
                    <ul className="list font-size-18">
                      <li>advies en preventie op maat</li>
                      <li>doorverwijzing naar erkende podologe indien nodig</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={7} className="col-12 text-center" data-aos="fade-in">
                <p className="h4 mb-0 mt-10">
                    Een deugddoende voetmassage zit bij elke behandeling inbegrepen!
                </p>
                </Col>
            </Row>
          </Container>
        </div>
        </React.Fragment>
    );
};

export default WatDoeIk;
