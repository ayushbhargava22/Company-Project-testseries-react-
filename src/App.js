import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route , Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact' ;
import Courses from './components/courses/courses' ;
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/courses' component={Courses} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Switch>
    <Footer />
    </>
  )
}

export default App;