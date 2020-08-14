import React, { Component } from 'react' ;
import Carousal from '../MainCoursal/Carousal'
import AboutText from '../common/AboutText'
import Trendingcourse from '../common/Trendingcourse';
import Features from '../features/Features';
import Testimonial from '../common/Testimonial';


const Home = () => {
  return (
    <>
       <Carousal />
       <AboutText title="About Us" text1="Something short and leading about the collection below its contents the creator etc Make it short and sweet but not too short so folks dont simply skip over it " />
       <Trendingcourse />
       <Features />
       <Testimonial />
    </>
  )
}

export default Home;