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
            <div className="cardContents">
                <div className="cardMain">
                <div profilePicture="picture"></div>
                {/* <img className="eventImage" src={cardImage1}></img> */}
                <div className="cardBody">
                    <div className="cardHeader">Firstname Lastname</div>
                    <div className="cardDetails">
                    <div className="name">email</div>
                    <div className="university">phone</div>
                    <div className="club">bio</div>
                    <div className="club">institution name</div>
                    <div className="club">website</div>
                    </div>
                </div>
                
                </div>
                <div className="cardDescription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis </p>  
                </div>
                <div className="cardTags">
                <div className="tag"><div className="tagText">diversity</div></div>
                <div className="tag"><div className="tagText">inclusion</div></div>
                </div>
            </div> 
        </div>
        </main>
      </div>
    )
  }
}
