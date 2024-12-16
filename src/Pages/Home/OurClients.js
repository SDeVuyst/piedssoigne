import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import Blog1 from "../../assets/images/blog/blog-1.jpg";
import Blog2 from "../../assets/images/blog/blog-2.jpg";
import Blog3 from "../../assets/images/blog/blog-3.jpg";
import Work from "../../assets/images/portfolio/work-together.jpg";
import Cal from "@calcom/embed-react";

const OurClients = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="pt-100 pb-90">
          <h2 className="display-2 text-center mb-100 mt-n10">Maak een Afspraak</h2>
          <Cal calLink="rick/get-rick-rolled" config={{ theme: "light" }}></Cal>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default OurClients;
