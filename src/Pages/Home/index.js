import React from "react";
import Navbar from "../../Layouts/CommonLayouts/Navbar";
import Slider from "./Slider";
import WieBenIk from "./WieBenIk";
import WatDoeIk from "./WatDoeIk";
import Praktisch from "./Praktisch";
import Afspraak from "./Afspraak";
import Footer from "../../Layouts/CommonLayouts/Footer";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  //meta title
  document.title = "Pieds Soignés";
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
