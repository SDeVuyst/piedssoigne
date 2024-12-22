import React from "react";
import Navbar from "../../Layouts/CommonLayouts/Navbar2";
import Slider from "./Slider";
import WieBenIk from "./WieBenIk";
import WatDoeIk from "./WatDoeIk";
import Praktisch from "./Praktisch";
import Afspraak from "./Afspraak";
import Footer from "../../Layouts/CommonLayouts/Footer1";

const Home = () => {
  //meta title
  document.title = "Pieds Soingés";
  // TODO ergens werkend contact form, eventueel Pages/Contact/Contact1.js hier in, idk als best op aparte pagina
  return (
    <React.Fragment>
      <Navbar navClass="dark" />
      <Slider />
      <div className="content-wrap" id="content-wrap">
        <WieBenIk />
        <WatDoeIk />
        <Praktisch />
        <Afspraak />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
