import React, { Component } from 'react'
import client1 from '../../images/client-1.jpg'
import client2 from '../../images/client-2.jpg'
import client3 from '../../images/client-3.jpg'

const Testimonial = () => {
  return (
    <>
        <section class="container mb-3 pt-2">
            <h1 class="text-center page-title">TESTIMONIAL</h1>
		    <hr />
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={client1} class="client-img rounded-circle mx-auto d-block" width="100" />
                    <h3 class="client-name text-center">Mohammad <span>Fatih</span></h3>
                    <p class="client-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, blandit a dapibus et, commodo sit amet nisl. Morbi condimentum sapien elit, in eleifend orci tincidunt et.</p>
                  </div>
                  <div class="carousel-item">
                    <img src={client2} class="client-img rounded-circle mx-auto d-block" width="100" />
                    <h3 class="client-name text-center">Mohammad <span>Fatih</span></h3>
                    <p class="client-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, blandit a dapibus et, commodo sit amet nisl. Morbi condimentum sapien elit, in eleifend orci tincidunt et.</p>
                  </div>
                  <div class="carousel-item">
                    <img src={client3} class="client-img rounded-circle mx-auto d-block" width="100" />
                    <h3 class="client-name text-center">Mohammad <span>Fatih</span></h3>
                    <p class="client-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, blandit a dapibus et, commodo sit amet nisl. Morbi condimentum sapien elit, in eleifend orci tincidunt et.</p>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </section>
    </>
  )
}

export default Testimonial;