function Footer({ setPage }) {
  return (
    <>
      <footer>
        <div className="contact-info">
          <p>116 Government Road North, Diamond Valley <br /> AB, Canada T0L 0H0</p>
          <p>+1(587) 837-1781</p>
        </div>
        <ul>
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
              setPage("beverage-menu");
            }}
          >
            <li>Beverage Menu</li>
          </a>
          <a
            onClick={() => {
              setPage("health-and-safety");
            }}
          >
            <li>Health And Safety</li>
          </a>
        </ul>
        <div className="attribution">
          <p>Background <a href="http://www.freepik.com">designed by Dotstudio / Freepik</a></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
