// app/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Slide from './components/Slide';
import SlideNavigation from './components/SlideNavigation';
import { slides } from './slides/slides';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // הוספת ניווט מקלדת
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  // console.log(slides[currentSlide]);
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '70vh',
      justifyContent: 'space-between',
    }}>
      <Slide
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
        codeExample={slides[currentSlide].codeExample}
        challenge={slides[currentSlide].challenge}
        solution={slides[currentSlide].solution}
      />
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
};

export default Slideshow;
