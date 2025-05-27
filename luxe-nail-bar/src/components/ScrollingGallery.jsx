import { useEffect, useRef } from "react";
import "./ScrollingGallery.css";

function ScrollingGallery({
  children,
  scrollAmount = 500,
  autoscroll = false,
  autoscrollInterval = 3000,
  direction = "horizontal",
  className = "",
}) {
  const containerRef = useRef(null);

  const scroll = (offset) => {
    if (containerRef.current) {
      if (direction === "horizontal") {
        containerRef.current.scrollLeft += offset;
      } else {
        containerRef.current.scrollTop += offset;
      }
    }
  };

  useEffect(() => {
    if (!autoscroll) return;

    const interval = setInterval(() => {
      scroll(scrollAmount);
    }, autoscrollInterval);

    return () => clearInterval(interval);
  }, [autoscroll, autoscrollInterval, scrollAmount, direction]);

  const galleryStyle = {
    display: "flex",
    flexDirection: direction === "horizontal" ? "row" : "column",
    overflow: "hidden",
    gap: "10px",
    scrollBehavior: "smooth",
    padding: "0 20px",
  };

  return (
    <div
      className={
        className +
        " scrolling-gallery " +
        (direction === "horizontal" ? "horizontal" : "vertical")
      }
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        gap: "10px",
      }}
    >
      <button className="left-scroll-btn" onClick={() => scroll(-scrollAmount)}>
        {"<"}
      </button>
      <div className="gallery-wrapper">
          <div
            ref={containerRef}
            className="gallery-container"
            style={galleryStyle}
          >
            {children}
          </div>
      </div>
      <button className="right-scroll-btn" onClick={() => scroll(scrollAmount)}>
        {">"}
      </button>
    </div>
  );
}

export default ScrollingGallery;
