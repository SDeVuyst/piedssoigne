import Index from "../Pages/Index";

import Home from "../Pages/Home";
import SimplePortfolio from "../Pages/SimplePortfolio";

//Pages
import Aboutus1 from "../Pages/About/AboutUs1";
import Aboutus2 from "../Pages/About/AboutUs2";
import AbouteMe from "../Pages/About/AbouteMe/AbouteMe";
import Services from "../Pages/Services/Services";
import SingleService from "../Pages/Services/SingleService";
import Column3 from "../Pages/Blog/Column3";
import Column1 from "../Pages/Blog/Column1";
import SinglePost from "../Pages/Blog/SinglePost";
import Page404 from "../Pages/404";

import Contact1 from "../Pages/Contact/Contact1";
import Contact2 from "../Pages/Contact/Contact2";
import CreativeAgency from "../Pages/CreativeAgency";
import FreelancerPortfolio from "../Pages/FreelancerPortfolio";
import InteractiveDark from "../Pages/InteractiveDark";
import InteractiveLight from "../Pages/InteractiveLight";
import LeftMenu from "../Pages/LeftMenu";
import CarouselDark from "../Pages/CarouselDark";
import CarouselLight from "../Pages/CarouselLight";
import FullScreenShowcase from "../Pages/FullScreenShowcase";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/home", element: <Home /> },
  { path: "/simple-portfolio", element: <SimplePortfolio /> },
  { path: "/creative-agency", element: <CreativeAgency /> },
  { path: "/freelancer-portfolio", element: <FreelancerPortfolio /> },
  { path: "/interactive-links-dark", element: <InteractiveDark /> },
  { path: "/interactive-links-light", element: <InteractiveLight /> },
  { path: "/left-menu", element: <LeftMenu /> },
  { path: "/carousel-dark", element: <CarouselDark /> },
  { path: "/carousel-light", element: <CarouselLight /> },
  { path: "/fullscreen-showcase", element: <FullScreenShowcase /> },

  { path: "/about-us", element: <Aboutus1 /> },
  { path: "/about-us-2", element: <Aboutus2 /> },
  { path: "/about-me", element: <AbouteMe /> },

  { path: "/services", element: <Services /> },
  { path: "/single-service", element: <SingleService /> },

  { path: "/blog3", element: <Column3 /> },
  { path: "/blog1", element: <Column1 /> },
  { path: "/singlepost", element: <SinglePost /> },

  { path: "*", element: <Page404 /> },

  { path: "/contact1", element: <Contact1 /> },
  { path: "/contact2", element: <Contact2 /> },
];

export default routes;
