import React from "react";
import Navbar from "../../Layouts/CommonLayouts/Navbar2";
import Slider from "./Slider";
import WieBenIk from "./WieBenIk";
import Offer from "./Offer";
import Praktisch from "./Praktisch";
import Afspraak from "./Afspraak";
import Footer from "../../Layouts/CommonLayouts/Footer1";

const Home = () => {
  //meta title
  document.title = "Pieds Soingés";
  return (
    <React.Fragment>
      <Navbar navClass="dark" />
      <Slider />
      <div className="content-wrap" id="content-wrap">
        <WieBenIk />
        <Offer />
        <Praktisch />
        <Afspraak />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
