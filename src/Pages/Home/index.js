import React from "react";
import Navbar from "../../Layouts/CommonLayouts/Navbar2";
import Slider from "./Slider";
import WhoWeAre from "./WhoWeAre";
import FeaturedWork from "./FeaturedWork";
import Offer from "./Offer";
import Praktisch from "./Praktisch";
import Service from "./Service";
import OurClients from "./OurClients";
import Footer from "../../Layouts/CommonLayouts/Footer1";

const Home = () => {
  //meta title
  document.title = "Pieds Soingés";
  return (
    <React.Fragment>
      <Navbar navClass="dark" />
      <Slider />
      <div className="content-wrap" id="content-wrap">
        <WhoWeAre />
        {/* <FeaturedWork /> */}
        <Offer />
        <Praktisch />
        {/* <Service /> */}
        <OurClients />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
