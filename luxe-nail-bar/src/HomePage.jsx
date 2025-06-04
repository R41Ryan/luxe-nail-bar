import ScrollingGallery from "./components/ScrollingGallery";
import Divider from "./components/Divider";
import backgroundVideo from "./assets/hero-video.mp4";
import "./HomePage.css";

function HomePage() {
  const images = import.meta.glob("./assets/gallery-images/*.jpg", {
    eager: true,
    as: "url",
  });

  return (
    <>
      <main className="home-page">
        <section id="hero">
          <div className="hero-bg">
            <video autoPlay loop muted playsInline className="hero-video">
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
          <div className="hero-content">
            <h1>Luxe Nail Bar</h1>
            <h2>Refresh. Rejuvenate. Repolish!</h2>
            <a href="https://www.dashbooking.com/salon/luxe-nails-spa-diamond-valley" target="_blank"><button>Book Appointment</button></a>
          </div>
        </section>

        <Divider />

        <section className="images-section">
          <h2>Gallery</h2>
          <ScrollingGallery className="image-gallery">
            {Object.values(images).map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </ScrollingGallery>
        </section>

        <Divider />

        <section className="testimonials-section">
          <h2>Testimonials</h2>
          <ScrollingGallery className="testimonial-gallery">
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
          </ScrollingGallery>
        </section>
      </main>
    </>
  );
}

export default HomePage;
