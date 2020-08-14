import React, { Component } from 'react'
import course from '../../images/courses.svg'
import courselist from '../courselist/courselist.css'

const CourseList = () => {
  return (
    <>
        <section id="course_list">
            <div class="container">
                <h3 class="text-uppercase pt-3 pb-2"><strong>Select Course</strong></h3>
            </div>
        </section>
        <section id="first_course" class="pb-5">
            <div class="container">
                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo2">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                            aria-expanded="false" aria-controls="collapseTwo2" id="course_title">
                                <h5 class="mb-0 d-flex justify-content-between">
                                    Class 12<i class="fa fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>
                        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                        data-parent="#accordionEx">
                            <div class="card-body">
                                <div class="container text-center my-3">
                                    <div class="row mx-auto my-auto">
                                        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                            <div class="carousel-inner w-100" role="listbox">
                                                <div class="carousel-item active">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-md-4">
                                                        <div class="card card-body">
                                                            <img class="card-img-top"
                                                            src="https://img-a.udemycdn.com/course/240x135/673654_d677_7.jpg" alt="Card image cap" />
                                                            <p class="card-text mb-0">Some quick</p>
                                                            <p class="mt-0 pt-0 tutor_name">Nikhil Bhargava</p>
                                                            <p class="mb-1"><span>&#8377;999</span></p>
                                                            <button type="button" class="btn btn-primary" id="course_select">Primary</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree3">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                            aria-expanded="false" aria-controls="collapseThree3" id="course_title">
                                <h5 class="mb-0 d-flex justify-content-between">
                                    CA<i class="fa fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>
                        <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    </>
  )
}

export default CourseList;