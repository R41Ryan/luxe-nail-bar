import { useEffect, useRef, useState } from "react";
import instagramLogo from "../assets/instagram.svg";
import facebookLogo from "../assets/facebook.svg";
import twitterXLogo from "../assets/twitter-x.svg";
import tiktokLogo from "../assets/tiktok.svg"
import threeDots from "../assets/three-dots-vertical.svg";
import businessLogo from "../assets/luxe-nail-bar-logo.png";

function Header({ setPage }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        setMinimized(true);
      } else {
        setMinimized(false);
      }

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={sideNavOpen ? "side-nav-bar open" : "side-nav-bar"}>
        <button
          onClick={() => {
            setSideNavOpen(false);
          }}
          className="close-btn"
        >
          X
        </button>
        <ul className="header-links">
          <a
            onClick={() => {
              setPage("about-us");
              setSideNavOpen(false);
            }}
          >
            <li>About Us</li>
          </a>
          <a
            onClick={() => {
              setPage("services");
              setSideNavOpen(false);
            }}
          >
            <li>Services</li>
          </a>
          <a
            onClick={() => {
              setPage("health-and-safety");
              setSideNavOpen(false);
            }}
          >
            <li>Health And Safety</li>
          </a>
        </ul>
        <div className="social-media-links">
          <a href="https://www.instagram.com/luxenailsbar_bd?igsh=MWM0M2RqbjlhenFqdw==" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Instagram" /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="FaceBook" /></a>
          <a href="https://www.tiktok.com/@luxe.nail.bar.bla?_t=ZM-8w0HZdpPMrG&_r=1" target="_blank" rel="noopener noreferrer"><img src={tiktokLogo} alt="Tiktok" /></a>
        </div>
      </nav>
      <header className={minimized ? "minimized" : ""}>
        <a
          onClick={() => {
            setPage("home");
            setSideNavOpen(false);
          }}
        >
          <img className="business-logo" src={businessLogo} />
        </a>
        <nav id="top-nav-bar">
          <ul className="header-links">
            <a
              onClick={() => {
                setPage("about-us");
              }}
            >
              <li>About Us</li>
            </a>
            <a
              onClick={() => {
                setPage("services");
              }}
            >
              <li>Services</li>
            </a>
            <a
              onClick={() => {
                setPage("health-and-safety");
              }}
            >
              <li>Health And Safety</li>
            </a>
          </ul>
        </nav>
        <div className="social-media-links">
          <a href="https://www.instagram.com/luxenailsbar_bd?igsh=MWM0M2RqbjlhenFqdw==" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Instagram" /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="FaceBook" /></a>
          <a href="https://www.tiktok.com/@luxe.nail.bar.bla?_t=ZM-8w0HZdpPMrG&_r=1" target="_blank" rel="noopener noreferrer"><img src={tiktokLogo} alt="Tiktok" /></a>
        </div>
        <img
          className="side-nav-bar-btn"
          src={threeDots}
          alt="Open Nav Bar Links"
          height="50px"
          onClick={() => {
            setSideNavOpen(true);
          }}
        />
      </header>
    </>
  );
}

export default Header;
