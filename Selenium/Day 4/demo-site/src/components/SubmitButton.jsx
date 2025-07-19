import React, { useState } from 'react';

const SubmitButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      {isVisible ? (
        <button id="submit-btn" className="bg-green-500 text-white px-4 py-2">
          Submit
        </button>
      ) : (
        <div className="text-red-500">Button is currently hidden</div>
      )}
      <button
        onClick={toggleVisibility}
        className="bg-yellow-500 text-white px-4 py-2 mt-4"
      >
        Toggle Submit Button
      </button>
    </div>
  );
};

export default SubmitButton;
