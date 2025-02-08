import React, { useState } from 'react';

function DescriptionAnimation() {
  // Array of text options
  const textOptions = [
    'that loves a creamy matcha latte.',
    'that collects trinkets.',
    'that loves cat.',
  ];

  // State to track the current text index
  const [textIndex, setTextIndex] = useState(0);

  // Function to handle text change and cycle through the options
  const handleClick = () => {
    // Cycle to the next index
    setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
  };

  return (
    <div>
      <p onClick={handleClick}>{textOptions[textIndex]}</p>
    </div>
  );
}

export default DescriptionAnimation;
