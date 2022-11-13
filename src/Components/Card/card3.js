import React, { Component, useState } from 'react'
import "./card.css"
import pic2 from "../../Assets/pic2.png";
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

                <img className="eventImage" src={pic2}></img>
                <div className="cardBody">

                  <div className="cardHeader">WeHACK Hackathon</div>
                  <div className="cardDetails">
                    <div className="name">Veda Charthad</div>
                    <div className="university">The University of Grand Prairie</div>
                    <div className="club">Women Who Code</div></div>
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
                <p>Help us build a hackathon for female-identifying participants and allies! We will need some sponsors to host workshops in any computer science topics, such as AI, Cloud, APIs, and Cybersecurity!</p>
              </div>
              <div className="cardTags">
                <div className="tag"><div className="tagText">women</div></div>
                <div className="tag"><div className="tagText">hackathon</div></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}