import React, { Component } from 'react'
import "./Profile.css"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
        <nav className="nav">
        </nav>
        </header>
        <main>
        <div className="card" >
            
                
                {/* <img className="eventImage" src={cardImage1}></img> */}
                <div className="cardTop">
                  <div className="profilePicture"></div>
                    <div className="userName">Faiza Rahman</div>
                 </div>   
                 <div className="cardBottom">
                    <div className="email">Email</div>
                    <div className="userEmail">example@gmail.com</div>
                    <div className="phone">Phone</div>
                    <div className="institution">Institution Name</div>
                    <div className="website">Website</div>
                    <div className="bio">Bio</div>
                </div> 
               
        </div>
        </main>
      </div>
    )
  }
}
