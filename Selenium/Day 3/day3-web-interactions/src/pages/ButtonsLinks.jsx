import React from "react";

const ButtonsLinks = () => {
  const handleButtonClick = () => alert("Button Clicked!");
  const handleLinkClick = (e) => {
    e.preventDefault();
    alert("Link Clicked!");
  };

  return (
    <div>
      <h2>Buttons & Links</h2>
      <button id="submit-btn" onClick={handleButtonClick}>
        Submit Button
      </button>
      <a href="/learn-more" onClick={handleLinkClick}>
        Learn More
      </a>
    </div>
  );
};

export default ButtonsLinks;
