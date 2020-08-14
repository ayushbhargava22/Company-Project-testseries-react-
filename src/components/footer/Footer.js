import React, { Component } from 'react'
import footer from '../footer/footer.css'
import paymentpic from '../../images/payment-pic.jpg'

const Footer = () => {
  return (
    <>
        <footer class="page-footer font-small unique-color-dark">
            <div id="social_connection">
                <div class="container">
                    <div class="row py-4 d-flex align-items-center">
                        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 class="mb-0" id="social_text">Get connected with us on social networks!</h6>
                        </div>
                        <div class="col-md-6 col-lg-7 text-center text-md-right">
                            <a class="fb-ic" id="social-acc">
                                <i class="fa fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a class="tw-ic" id="social-acc">
                                <i class="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            <a class="gplus-ic" id="social-acc">
                                <i class="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            <a class="you-tb mr-3" id="social-acc">
                                <i class="fa fa-youtube white-text"></i>
                            </a>
                            <a class="ins-ic" id="social-acc">
                                <i class="fa fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center text-md-left mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Company name</h6>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.</p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Ouick links</h6>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <a href="#!">MDBootstrap</a>
                        </p>
                        <p>
                            <a href="#!">MDWordPress</a>
                        </p>
                        <p>
                            <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                            <a href="#!">Bootstrap Angular</a>
                        </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold">Policies</h6>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                    </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 class="text-uppercase font-weight-bold">Contact</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                        <i class="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p>
                        <i class="fa fa-envelope mr-3"></i> info@example.com</p>
                    <p>
                        <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p>
                        <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
  
                </div><div class="card text-center pt-3">
                    <div class="card-header">
                      <h4 id="card_details"> We accept all major credit and debit cards</h4>
                    </div>
                    <div class="card-body">
                        <img class="card-img-top" src={paymentpic} alt="Card image cap" />
                    </div>
                  </div>

        </div>

        </div>
    <div class="footer-copyright text-center py-3 border-top">© 2020 Copyright:
      <a href="#">test.com</a>
    </div>
    </footer>
    </>
  )
}

export default Footer;