import React, { Component } from 'react';
import aboutuscards from '../aboususcards/aboutuscards.css';

const AboutUsCards = () => {
  return (
    <>
      <section class="about_us_cards mt-5 pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2 pb-1" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>Title</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><img src="https://img.icons8.com/pastel-glyph/22/000000/define-location.png" class="mr-2" />Title</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title"><img src="https://img.icons8.com/material-sharp/24/000000/reflector-bulb.png" class="mr-2" />Title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural</p>
                          </div>
                        </div>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default AboutUsCards;