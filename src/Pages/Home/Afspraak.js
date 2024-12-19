import React from "react";
import { Container } from "reactstrap";
import Cal from "@calcom/embed-react";

const Afspraak = () => {
  return (
    <React.Fragment>
      <Container id="afspraak">
        <div className="pt-100 pb-90">
          <h2 className="display-2 text-center mb-100 mt-n10">Maak een Afspraak</h2>
          <Cal calLink="rick/get-rick-rolled" config={{ theme: "light" }}></Cal>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Afspraak;
