import { useEffect, useRef, useState } from "react";
import instagramLogo from "../assets/instagram.svg";
import facebookLogo from "../assets/facebook.svg";
import twitterXLogo from "../assets/twitter-x.svg";
import threeDots from "../assets/three-dots-vertical.svg";

function Header() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop.current) {
            setMinimized(true)
        } else {
            setMinimized(false)
        }

        lastScrollTop.current = scrollTop;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={sideNavOpen ? "side-nav-bar open" : "side-nav-bar"}>
        <button onClick={() => {setSideNavOpen(false)}} className="close-btn">
          X
        </button>
        <ul className="header-links">
          <a href="./about-us.html">
            <li>About Us</li>
          </a>
          <a href="./services.html">
            <li>Services</li>
          </a>
          <a href="./beverage-menu.html">
            <li>Beverage Menu</li>
          </a>
          <a href="./health-and-safety.html">
            <li>Health And Safety</li>
          </a>
        </ul>
        <div className="social-media-links">
          <img src={instagramLogo} alt="Instagram" />
          <img src={facebookLogo} alt="FaceBook" />
          <img src={twitterXLogo} alt="Twitter X" />
        </div>
      </nav>
      <header className={minimized ? "minimized" : ""}>
        <a href="./index.html">
          <h1>Luxe Nail Bar</h1>
        </a>
        <nav id="top-nav-bar">
          <ul className="header-links">
            <a href="./about-us.html">
              <li>About Us</li>
            </a>
            <a href="./services.html">
              <li>Services</li>
            </a>
            <a href="./beverage-menu.html">
              <li>Beverage Menu</li>
            </a>
            <a href="./health-and-safety.html">
              <li>Health And Safety</li>
            </a>
          </ul>
        </nav>
        <div className="social-media-links">
          <img src={instagramLogo} alt="Instagram" />
          <img src={facebookLogo} alt="FaceBook" />
          <img src={twitterXLogo} alt="Twitter X" />
        </div>
        <img
          className="side-nav-bar-btn"
          src={threeDots}
          alt="Open Nav Bar Links"
          height="50px"
          onClick={() => {setSideNavOpen(true)}}
        />
      </header>
    </>
  );
}

export default Header;
