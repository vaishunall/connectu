import React, { Component, useState } from 'react'
import "./card.css"
import pic1 from "../../Assets/pic1.png";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default class Card2 extends Component {
  state = { clicked: false};
  handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
  }
  render() {
    
    return (
      <div className='main-card'>
        <header className="main-header">
          <nav className="nav">
          </nav>
        </header>
        <main>
          <div className="HELLO" >
            <div className="cardContents">
              <div className="cardMain">

                <img className="eventImage" src={pic1}></img>
                <div className="cardBody">

                  <div className="cardHeader">First-Gen College Life</div>
                  <div className="cardDetails">
                    <div className="name">Angelina Vu</div>
                    <div className="university">The University of Texas at Dallas</div>
                    <div className="club">Society of Women Engineers</div></div>
                </div>

                {/* <div onClick={this.handleClick}>
                    {this.state.clicked ? <Star></Star>
                    : <StarOutlineIcon></StarOutlineIcon>}
                </div> */}

                <div>
                    <div className ='starIcon1' onClick={this.handleClick}>{this.state.clicked ? <StarIcon/>
                    : <StarOutlineIcon />}</div>
                </div>
                
              </div>
              <div className="cardDescription">
                <p>We are trying to host a workshop to help First-Gen freshmen navigate college life. We will provide resources for them that they may not know about and would like a volunteer who can talk about their personal experience as a first gen student.</p>
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