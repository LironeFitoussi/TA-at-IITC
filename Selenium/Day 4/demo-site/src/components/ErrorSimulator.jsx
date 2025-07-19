import React, { useState } from 'react';

const ErrorSimulator = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowError(!showError)}
        className="bg-red-500 text-white px-4 py-2"
      >
        Simulate Error
      </button>
      {showError && (
        <div id="error-message" className="text-red-500 mt-2">
          Error: Something went wrong!
        </div>
      )}
    </div>
  );
};

export default ErrorSimulator;
