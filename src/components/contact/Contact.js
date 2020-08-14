import React, { Component } from 'react'
import ContactForm from '../contactform/ContactForm'
import contact from '../contact/contact.css' 

const Contact = () => {
  return (
    <>
      <section class="contactUs">
            <div class="main-images pl-5 pr-5 text-center pb-5 pt-5">
                <img src="https://gs-post-images.grdp.co/2017/11/contact-us_png-image-img1511417208061-88.png-rs-high-webp.png" class="img-fluid pl-5 pr-5 pt-3" alt="Responsive image" />
            </div>
            <h1 class="text-center trending_title text-uppercase pt-3">Contact Us</h1>
            <p class="text-center ml-5 mr-5 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia sequi voluptatibus numquam magnam deserunt nisi illo. Voluptate impedit reprehenderit, accusamus doloribus amet reiciendis et esse optio aperiam. Corporis, animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae suscipit odit consectetur, ex dolorum delectus, eum iure architecto debitis molestias </p>
      </section>
      <ContactForm />
    </>
  )
}

export default Contact;