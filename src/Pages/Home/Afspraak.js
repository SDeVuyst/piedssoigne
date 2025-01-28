import React from "react";
import { Container, Col, Row } from "reactstrap";
import Cal from "@calcom/embed-react";

const Afspraak = () => {
  return (
    <React.Fragment>
      <div className="pt-100 pb-90" id="afspraak">
        <Container>
          <h2
            className="display-2 text-center pt-6 mb-10 mt-n10"
            data-aos="fade"
          >
            Maak een Afspraak
          </h2>
          <Row className="justify-content-center">
              <Col lg={7} className="col-12 text-center">
              <p className="h4">
                Vraag na bij uw zorgverzekeraar of u in aanmerking komt voor een vergoeding van uw voetverzorging!
              </p>
              </Col>
          </Row>
          <Row className="gh-1 gv-2 mt-40 pb-6">
            <Cal calLink="piedssoignes" config={{ theme: "light" }}></Cal>
          </Row>
           
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Afspraak;
