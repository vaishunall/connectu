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
                    <div className="userEmail">mollysmith01@gmail.com</div>
                    <div className="institution">Institution Name</div>
                    <div className="userInstitution">The University of Washington</div>
                    <div className="website">Website</div>
                    <div className="userWebsite">www.linkedin.com/mollysmith</div>
                    <div className="bio">Bio</div>
                    <div className="userBio">My name is Molly and I am a current Junior at the University of Washington! I am the President of Society of Women Engineers at my University and am looking forward to connecting with hardworking industry mentors!</div>
                </div> 
               
        </div>
        </main>
      </div>
    )
  }
}