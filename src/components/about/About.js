import React, { Component } from 'react'
import about from '../about/about.css'
import AboutText from '../common/AboutText'
import AboutUsCards from '../aboususcards/AboutUsCards'
import Platform from '../platform/Platform';
import Founder from '../founder/Founder' ;

const About = () => {
  return (
    <>
        <section class="aboutUs">
            <div class="main-images pl-5 pr-5 text-center">
               <img src="https://gs-post-images.grdp.co/2019/1/graphic-img1547184749680-77.png-rs-high-webp.png" class="img-fluid pl-5 pr-5 pt-3" alt="Responsive image" />
            </div>
            <AboutText title='About Us' text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia sequi voluptatibus numquam magnam deserunt nisi illo. Voluptate impedit reprehenderit, accusamus doloribus amet reiciendis et esse optio aperiam. Corporis, animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae suscipit odit consectetur, ex dolorum delectus, eum iure architecto debitis molestias " />
        </section>
        <AboutUsCards />
        <Platform />
        <Founder />
    </>
  )
}

export default About;