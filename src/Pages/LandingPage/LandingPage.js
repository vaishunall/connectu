
import React, { Component, useState } from 'react'
import lpImage from "./landing_page_image.png"
import './LandingPage.css'

function LandingPage() {

  return (
    <div>
      <div className="intro-div">

        <div className="title-div">
          <div className="title">
            take that step.
          </div>
          <div className="title">
            make that connection.
          </div>
          <div className="subtitle">
            an online platform designed to connect student orgs with industry volunteers.
          </div>
          <div className="today-button">
            <h1 className='button-font' style={{fontSize:"25px", padding: "3%"}}>make an account today</h1>
          </div>
        </div>
        <div className="lp-image-div">
          <img className="lp-image" src={lpImage} />
        </div>

        
      </div>

    

      {/* <div className="search-div">
        <div className="search-input-div">
          <input className="search-input" placeholder="Enter text"/>
        </div>
        <div className="search-distance-div">
          <input className="search-distance" placeholder="Enter text"/>
        </div>
      </div> */}
        

        {/* <div className="about-us-div">
          <div className="about-us-title">
            about us
          </div>

          <div className="about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis 
          </div>
      </div> */}

      
    </div>

  )
}

export default LandingPage;