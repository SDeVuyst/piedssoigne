import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

//Images
//Goud
// import Logo from "../../assets/images/logo_trans_nav.png";
//Wit
import Logo from "../../assets/images/logo_trans_nav_white.png";

const Navbar = ({ navClass }) => {
  const [isClick, setIsClick] = useState(false);
  const location = useLocation();
  const [navbarCollapseHome, setNavbarCollapseHome] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    const navbar = document.getElementById("navBar");
    const menu = navbar.querySelectorAll(".nav-link");

    menu.forEach((ele) => {
      ele.classList.remove("active");
      if (ele.href === window.location.href) {
        ele.classList.add("active");
        const parent = ele.closest(".dropdown-menu");
        if (parent) {
          parent.classList.add("active");
          const parentofparent = parent.closest("div").previousSibling;
          if (parentofparent) {
            parentofparent.classList.add("active");
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
    window.addEventListener("scroll", scrollUpward, false);
  });

  let lastScrollTop = 0;
  const scrollUpward = () => {
    const element = document.getElementsByTagName("body")[0];
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      element.classList.remove("navbar-hide");
      element.classList.add("navbar-show");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  const scrollNavigation = () => {
    const element = document.getElementsByTagName("body")[0];
    const scrollup = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollup / height);

    if (scrollup > 100) {
      element.classList.add("cursor-enabled", "navbar-scroll", "navbar-show");
      element.classList.remove("navbar-hide");

      if (scrollup > 530 && scrolled < 1) {
        element.classList.remove("navbar-show");
        element.classList.remove("navbar-end");
        element.classList.add("navbar-hide");
      } else {
        element.classList.remove("navbar-hide");
        element.classList.add("navbar-show");
        element.classList.add("navbar-end");
      }
    } else {
      element.classList.remove("navbar-scroll");
    }
  };

  const toggleMenu = () => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("fancybox-active", "compensate-for-scrollbar", "fancybox-open");
    document.getElementById("navbar-mobile-style-2").style.display = "block";
    document.getElementById("content-wrap").classList.add("d-none");
    document.getElementById("footer").classList.add("d-none");
  };

  const toggleRemove = useCallback(() => {
    setIsClick(isClick);
    document.body.style.overflow = "";
    document.body.classList.remove("fancybox-active", "compensate-for-scrollbar", "fancybox-open");
    document.getElementById("navbar-mobile-style-2").style.display = "none";
    document.getElementById("content-wrap").classList.remove("d-none");
    document.getElementById("footer").classList.remove("d-none");
  }, [isClick]);

  useEffect(() => {
    toggleRemove();
  }, [location, toggleRemove]);


  return (
    <React.Fragment>
      <header className={"navbar 222 navbar-top navbar-expand-lg navbar-" + navClass}>
        <Container className="justify-content-between">
          <Link className="navbar-brand" to="/">
            <img width="150" src={Logo} alt="" /> 
          </Link>
          <div
            className="navbar-toggle"
            to="/#"
            onClick={() => toggleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav navbar-nav" id="navBar">
            <li className="nav-item">
              <a href="#intro" className="nav-link">
                <span className="nav-link-name">Over Mij</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#wat-doe-ik" className="nav-link">
                <span className="nav-link-name">Wat Doe Ik</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#praktisch" className="nav-link">
                <span className="nav-link-name">Praktisch</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#afspraak" className="nav-link">
                <span className="nav-link-name">Afspraak Maken</span>
              </a>
            </li>
          </ul>
        </Container>
      </header>

      <div
        className={`navbar navbar-mobile navbar-mobile-style-2 ${navClass !== "dark" ? "bg-white" : "navbar-dark"}`}
        style={{ height: "100vh", overflowY: "auto" }}
        id="navbar-mobile-style-2"
      >
        <div className="shape justify-content-end">
          <svg
            data-rellax-speed="0"
            width="544"
            height="362"
            viewBox="0 0 544 362"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="320.5" cy="41.5" r="320.5" fill=" #202020" />
          </svg>
        </div>
        <div className="navbar-head">
          <Container className="justify-content-between">
            <Link className="navbar-brand" to="/home">
              <img width="107" src={Logo} alt="logo" />
            </Link>
            <div className="navbar-toggle" onClick={toggleRemove}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Container>
        </div>
        <Container>
          <Row className="gh-1 justify-content-center">
            <Col md={7} lg={5} xl={4} className="col-12">
              <div className="navbar-body">
                <ul className="nav navbar-nav navbar-nav-collapse" id="navBar">
                  <li className="nav-item navbar-collapse">
                    <a
                      href="#intro"
                      className="nav-link"
                      role="button"
                      onClick={() => setNavbarCollapseHome(!navbarCollapseHome)}
                    >
                      <span className="nav-link-name">Over mij</span>
                      <svg
                        className="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item navbar-collapse">
                  <a
                      href="#wat-doe-ik"
                      className="nav-link"
                      role="button"
                      onClick={() => setNavbarCollapseHome(!navbarCollapseHome)}
                    >
                      <span className="nav-link-name">Wat doe ik?</span>
                      <svg
                        className="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item navbar-collapse ">
                  <a
                      href="#praktisch"
                      className="nav-link"
                      role="button"
                      onClick={() => setNavbarCollapseHome(!navbarCollapseHome)}
                    >
                      <span className="nav-link-name">Praktisch</span>
                      <svg
                        className="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item navbar-collapse">
                    <a
                      href="#afspraak"
                      className="nav-link"
                      role="button"
                      onClick={() => setNavbarCollapseHome(!navbarCollapseHome)}
                    >
                      <span className="nav-link-name">Afspraak maken</span>
                      <svg
                        className="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={1} className="d-none d-md-block"></Col>
            <Col md={4} lg={4} xl={3} className="col-12">
              <div className="navbar-footer">
                <div className="mb-60 text-white">
                  <p className="lead mb-17 fw-medium">Contact informatie:</p>
                  <ul className="list-group borderless font-size-17">
                    <li className="list-group-item">
                      Telefoon:{" "}
                      <Link
                        to="/callto:+3250380036"
                        className="text-decoration-none text-white"
                      >
                        050 38 00 36
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  );
};

export default Navbar;
