"use client";
import React, { useState, useEffect } from "react";
//made with chatgpt
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      &#8593;
    </button>
  );
};

export default BackToTopButton;
