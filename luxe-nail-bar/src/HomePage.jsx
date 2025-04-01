function HomePage() {
  return (
    <nav id="side-nav-bar">
      <button class="close-btn">X</button>
      <ul class="header-links">
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
      <div class="social-media-links">
        <img src="./imgs/instagram.svg" alt="Instagram" />
        <img src="./imgs/facebook.svg" alt="FaceBook" />
        <img src="./imgs/twitter-x.svg" alt="Twitter X" />
      </div>
    </nav>
    
  );
}

export default HomePage;
