function Footer({ setPage }) {
  return (
    <>
      <footer>
        <p>Contact Info</p>
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
      </footer>
    </>
  );
}

export default Footer;
