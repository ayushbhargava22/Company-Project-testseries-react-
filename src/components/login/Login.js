import React, { Component } from 'react';
import loginpic from '../../images/login.svg';
import { Redirect } from 'react-router-dom';

export default class login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {username , password } = this.state
        if(username === 'A' && password === 'B')
        {
            localStorage.setItem("token", "adjfweuifwijwwvuihh")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/courses" />
        }
        return (
            <div>
                                  
<div class="container">
    <div class="row py-5 mt-4 align-items-center">

        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src={loginpic} alt="" class="img-fluid mb-3 d-none d-md-block" />
            <p class="text-center"><strong>Sign in and Start Learning</strong></p>
        </div>

        <div class="col-md-7 col-lg-6 ml-auto">
            <form action="#" onSubmit={this.submitForm}>
                <div class="row">

                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="text" name="username" placeholder="Email Username" class="form-control bg-white border-left-0 border-md" value={this.state.username} onChange={this.onChange} />
                    </div>

                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" value={this.state.password} onChange={this.onChange} />
                    </div>

                    <div class="form-group col-lg-12 mx-auto mb-0">
                        {/*<a href="#" class="btn btn-primary btn-block py-2">
                            <span class="font-weight-bold">Log in</span>
                        </a>*/}
                        <input type="submit" className="btn btn-primary btn-block py-2" />
                    </div>

                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>

                    <div class="form-group col-lg-12 mx-auto">
                        <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                            <i class="fa fa-facebook-f mr-2"></i>
                            <span class="font-weight-bold">Continue with Facebook</span>
                        </a>
                        <a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
                            <i class="fa fa-twitter mr-2"></i>
                            <span class="font-weight-bold">Continue with Twitter</span>
                        </a>
                    </div>
                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold"><a href="#" class="text-primary ml-2">Forgot Password</a></p>
                    </div>
                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold">Don't Have a account?<a href="#" class="text-primary ml-2">Sign up</a></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
            </div>
        )
    }
}
