import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import trend from '../../images/trend.jpg' ;

const Trendingcourse = () => {
  return (
    <>
        <div className="trendingCourse pt-5">
            <h1 className="text-center trending_title text-uppercase">Top trending courses and test</h1>
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="inam" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                     <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                            src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                             src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                             src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                    </div>
                                </div>

                                 <div className="carousel-item active">
                                     <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                            src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                             src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title" id="trendingCourseHeading">COURSE HEADING</h4>
                                                        <div className="img">
                                                            <img className="card-img-top"
                                                             src={trend} alt="Card image cap" id="features_course" />
                                                        </div>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        <button type="button" className="btn btn-warning" id="readmore">Read More</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                            <a href="#inam" className="carousel-control-prev" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#inam" className="carousel-control-next" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trendingcourse;