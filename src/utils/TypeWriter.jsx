import React, { useState, useEffect } from "react";

function TypeWriter({
  texts,
  styling,
  typingSpeed = 100,
  pauseDuration = 1000,
  cursorColor = "blue", // Cursor color
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // Whether it's deleting text
  const [showCursor, setShowCursor] = useState(true); // Cursor visibility

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2); // Faster deletion
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the start
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p className={`${styling} flex items-center`}>
      {displayedText}
      {/* Blinking Cursor */}
      <span
        style={{
          color: cursorColor,
          marginLeft: "2px",
          visibility: showCursor ? "visible" : "hidden",
        }}
      >
        |
      </span>
    </p>
  );
}

export default TypeWriter;
