import React, { Suspense } from 'react';
import HeroCarousel from './HomeCarousel';

const Feedback = React.lazy(() => import('./Feedback'));
const HeroSection2 = React.lazy(() => import('./HeroSection2'));
const Services = React.lazy(() => import('./Services'));

function Homepage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Rest of the sections with lazy loading */}
      <Suspense fallback={<div>Loading Section...</div>}>
        <HeroSection2 />
        <Services />
        <Feedback />
      </Suspense>
    </>
  );
}

export default Homepage;
