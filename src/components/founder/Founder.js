import React, { Component } from 'react'
import founder from '../founder/founder.css' 

const Founder = () => {
  return (
    <>
      <section class="team-section text-center my-5">
        <h1 class="text-center trending_title text-uppercase">Our Founder</h1>
            <p class="grey-text w-responsive mx-auto mb-5 mr-5 ml-5 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
            eum porro a pariatur veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi</p>
        <div class="row text-center" id="founder">
            <div class="col-md-4 mb-md-0 mb-5 text-center">
                <div class="avatar mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded z-depth-1-half" alt="Sample avatar" />
                </div>
                <h4 class="font-weight-bold dark-grey-text my-4">Maria Kate</h4>
                <h6 class="text-uppercase grey-text mb-3"><strong>Photographer</strong></h6>
                <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-fb">
                    <i class="fa fa-facebook-f"></i>
                </a>
                <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-dribbble">
                    <i class="fa fa-dribbble"></i>  
                </a>
                <a type="button" class="btn-floating btn-sm mx-1 mb-0 btn-tw">
                    <i class="fa fa-twitter"></i>
                </a>
            </div>
        </div>
    </section>
</>
  )
}

export default Founder;