import React, { Component } from 'react'
import platform from '../platform/platform.css'

const Platform = () => {
  return (
    <>
      <section id="platforms" className="pb-4">
            <div class="container">
                <h1 class="text-center trending_title text-uppercase pt-5">Platforms</h1>
                <p class="text-center ml-5 mr-5 pt-4">We wish to be accessible to everyone preparing for competitive exams, hence we are available on our app, website and YouTube. Exam aspirants can access high quality preparation & practice material, interact with and learn from subject matter experts & fellow students, and boost their preparation by subscribing to Test Series & Live Courses. At Gradeup, we cover a wide variety of exams and video content for exam preparation. We also conduct live sessions, so you can interact and get your doubts solved in real-time. During your course of preparation, Gradeup keeps you updated with all exam related notifications and details.
                <br /><br />
                Gradeup also has an education news portal - NewsEd by Gradeup, which is aimed to help the community to stay updated with all the latest news of the sector.
                </p>
                <div class="row pt-4">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                        <p class="text-center">
                            <img src="https://gs-post-images.grdp.co/2019/1/youtube-img1547187872961-28.png-rs-high-webp.png" class="text-center" />
                            <p class="text-center"><strong>YouTube Channel</strong></p>
                        </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                          <div class="card-body">
                            <p class="text-center">
                                <img src="https://gs-post-images.grdp.co/2019/1/youtube-img1547187872961-28.png-rs-high-webp.png" class="text-center" />
                                <p class="text-center"><strong>Website Name</strong></p>
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default Platform;