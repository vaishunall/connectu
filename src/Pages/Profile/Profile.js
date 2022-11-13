import React, { Component } from 'react'
import "./Profile.css"
import profilePic from "../../Assets/nt-ranking.png"

export default class Profile extends Component {
  render() {
    return (
      <div className='profile-format'>
        <header className="main-header">
        <nav className="nav">
        </nav>
        </header>
        <main>
        <div className="cardP" >
            
                
                {/* <img className="eventImage" src={cardImage1}></img> */}
                <div className="cardTop">
                <img className="profilePicture" src={profilePic}></img>
                  
                    <div className="userName">Molly Smith</div>
                 </div>   
                 <div className="cardBottom">
                    <div className="email1">Email</div>
                    <div className="userEmail">mollysmith01@statefarm.com</div>
                    <div className="institution">Institution Name</div>
                    <div className="userInstitution">StateFarm</div>
                    <div className="website">Website</div>
                    <div className="userWebsite">www.linkedin.com/mollysmith</div>
                    <div className="bio">Bio</div>
                    <div className="userBio">My name is Molly and I am a current Software Engineer at StateFarm! I am the project lead on my team who deals wioth our billing and policy system. I am looking forward to connecting with students organizations who are eager to learn!</div>
                </div> 
               
        </div>
        </main>
      </div>
    )
  }
}