import React, { useRef, useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to the next image
  const scrollToNextImage = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const imageWidth = carousel.clientWidth;

    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) nextIndex = 0; // Loop back to first image

    // Scroll smoothly to the next image
    carousel.scrollTo({
      left: imageWidth * nextIndex,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  };

  // Automatic scroll effect
  useEffect(() => {
    const interval = setInterval(scrollToNextImage, 3000); // Change images every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle scroll to determine active dot
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const imageWidth = carousel.clientWidth;

    const newIndex = Math.round(carousel.scrollLeft / imageWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative z-0 overflow-hidden h-full w-[30%] bg-gray-100 rounded-lg">
      {/* Image Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        style={{ scrollBehavior: "smooth", cursor: "grab" }}
        className="h-full flex justify-start overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className="h-full min-w-full object-contain snap-center"
            draggable="false"
          />
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300 opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
