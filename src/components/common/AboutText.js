import React, { Component } from 'react'
import Common from '../common/Common.css'

const AboutText = (props) => {
  return (
    <>
    <section className="jumbotron text-center mt-3 pb-0">
        <div className="container">
            <h1 className="jumbotron-heading">{props.title}</h1>
            <p className="lead text-muted">{props.text1}</p>
            <p className="text-center ml-0 mr-0 pt-1">{props.text2}</p>
            <p className="text-center ml-0 mr-0 pt-1">{props.text2}</p>
            <p className="text-center ml-0 mr-0 pt-1">{props.text2}</p>
         </div>
    </section>
    </>
  )
}

export default AboutText;