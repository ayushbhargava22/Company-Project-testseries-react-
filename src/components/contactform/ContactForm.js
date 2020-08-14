import React, { Component } from 'react'
import contactform from '../contactform/contactform.css'

const ContactForm = () => {
  return (
    <>
      <section class="contact_form pt-5">
            <div className="navbar navbar-light bg-light border-bottom pb-0 mb-3" id="address_line">
              <div className="container">
                  <span className="navbar-text pb-0 pt-0 mb-2">
                    <i className="fa fa-home mr-2"></i>B-107 New York-102891
                  </span>
                  <span className="navbar-text pb-0 pt-0 mb-2">
                    <i className="fa fa-envelope mr-2"></i>info@testseries.com
                  </span>
                  <span className="navbar-text pb-0 pt-0 mb-2">
                    <i className="fa fa-phone mr-2"></i>7300176235
                  </span>
                </div>
              </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-xs-12 col-sm-12">
                        <form id="contact-form" method="post" action="contact.php" role="form">

                            <div class="messages"></div>
                        
                            <div class="controls">
                        
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_name"><strong>FirstName *</strong></label>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_lastname"><strong>Lastname *</strong></label>
                                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_email"><strong>Email *</strong></label>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_need"><strong>Please specify your need *</strong></label>
                                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                <option value=""></option>
                                                <option value="Request quotation">Request quotation</option>
                                                <option value="Request order status">Request order status</option>
                                                <option value="Request copy of an invoice">Request copy of an invoice</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_message"><strong>Message *</strong></label>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Message for us" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-success btn-send" value="Send message" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-muted text-center">
                                            <br />
                                            <strong>*</strong> These fields are required
                                        </p>   
                                    </div>
                                </div>
                            </div>
                        
                        </form>
                    </div>
                    <div class="col-lg-5">

                        <div class="card-body contact text-center h-100 white-text">
                
                        <section id="maps" class="pb-5">
                          <div class="container">
                            <div id="map-container-google-2" class="z-depth-1-half map-container">
                              <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                              allowfullscreen></iframe>
                            </div>
                          </div>
                        </section>
                
                        </div>
                
                      </div>
                
                

                </div>
            </div>
        </section>
    </>
  )
}

export default ContactForm;