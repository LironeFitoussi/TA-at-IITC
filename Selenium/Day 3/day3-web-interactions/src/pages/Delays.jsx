import React, { useEffect, useState } from "react";

const Delays = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Delays</h2>
      {contentLoaded ? (
        <p>Dynamic Content Loaded!</p>
      ) : (
        <p>Loading content... Please wait.</p>
      )}
    </div>
  );
};

export default Delays;
