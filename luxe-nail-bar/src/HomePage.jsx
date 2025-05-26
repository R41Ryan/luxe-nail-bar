import ScrollingGallery from "./components/ScrollingGallery";
import backgroundVideo from "./assets/hero-video.mp4";
import "./HomePage.css";

function HomePage() {
  const images = import.meta.glob("./assets/gallery-images/*.jpg", {
    eager: true,
    as: "url",
  });

  return (
    <>
      <main>
        <section id="hero">
          <div className="hero-bg">
            <video autoPlay loop muted playsInline className="hero-video">
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
          <div className="hero-content">
            <h1>Luxe Nail Bar</h1>
            <h2>Refresh. Rejuvenate. Repolish!</h2>
            <button>Book Appointment</button>
          </div>
        </section>

        <ScrollingGallery className="image-gallery">
          {Object.values(images).map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </ScrollingGallery>

        <section id="testimonials">
          <button className="left-scroll-btn">{"<"}</button>
          <div className="gallery-container">
            <div className="testimonial">
              <img src="https://placehold.co/50x50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="testimontial-author">Testimonial Author</p>
            </div>
          </div>
          <button className="right-scroll-btn">{">"}</button>
        </section>
      </main>
    </>
  );
}

export default HomePage;
