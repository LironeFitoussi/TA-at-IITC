// app/components/SlideNavigation.tsx

'use client';

import React from 'react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
}) => {
  return (
    <div className="navigation">
      <button onClick={onPrev} disabled={currentSlide === 0}>
        קודם
      </button>
      <span>
        {currentSlide + 1} / {totalSlides}
      </span>
      <button onClick={onNext} disabled={currentSlide === totalSlides - 1}>
        הבא
      </button>
    </div>
  );
};

export default SlideNavigation;
