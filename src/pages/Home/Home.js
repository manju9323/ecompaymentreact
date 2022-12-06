import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Contact from '../../Components/Contact/Contact';
import FeaturedProduct from '../../Components/featureProduct/FeaturedProduct';
import Slider from '../../Components/Slider/Slider';

function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home