import React, { Component } from 'react'
import course from '../../images/courses.svg'
import CourseList from '../courselist/CourseList' ;
import { Redirect } from 'react-router-dom';

export default class Courses extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if(token == null){
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }
  render() {
    if(this.state.loggedIn === false){
      return <Redirect to = "/" />
    }
    return (
      <div>
        <section id="courses_title">
            <section class="contactUs">
                <div class="main-images pl-5 pr-5 text-center pb-5 pt-5">
                    <img src={course} height="240" width="340" class="img-fluid pl-5 pr-5 pt-3" alt="Responsive image" />
                </div>
                <h1 class="text-center trending_title text-uppercase pt-3">Courses</h1>
                <p class="text-center ml-5 mr-5 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia sequi voluptatibus numquam magnam deserunt nisi illo. Voluptate impedit reprehenderit, accusamus doloribus amet reiciendis et esse optio aperiam. Corporis, animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae suscipit odit consectetur, ex dolorum delectus, eum iure architecto debitis molestias </p>
            </section>
        </section>
      <CourseList />
      </div>
    )
  }
}
