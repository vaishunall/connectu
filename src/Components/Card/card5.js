import React, { Component, useState } from 'react'
import "./card.css"
import pic5 from "../../Assets/pic5.png";
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

                <img className="eventImage" src={pic5}></img>
                <div className="cardBody">

                  <div className="cardHeader">Impostor Syndrome Workshop</div>
                  <div className="cardDetails">
                    <div className="name">Twilight Sparkle</div>
                    <div className="university">Allen Community College</div>
                    <div className="club">ML Club</div></div>
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
                <p>Help us combat imposter syndrome for students! We would liek an industry volunteer who will be able to give tips on how to feel a sense of belonging at work.</p>
              </div>
              <div className="cardTags">
                <div className="tag"><div className="tagText">Inclusivity</div></div>
                <div className="tag"><div className="tagText">ML</div></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}