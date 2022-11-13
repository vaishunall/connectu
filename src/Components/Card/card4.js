import React, { Component, useState } from 'react'
import "./card.css"
import pic4 from "../../Assets/nt-ranking.png";
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

                <img className="eventImage" src={pic4}></img>
                <div className="cardBody">

                  <div className="cardHeader">Building Inclusivity</div>
                  <div className="cardDetails">
                    <div className="name">Bob Ross</div>
                    <div className="university">Grand Rapids High School</div>
                    <div className="club">National Honor Society</div></div>
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
                <p>We will be hosting a workshop for how to be more inclusive in a work environment! We would like speakers who can explain their point of view on the diversity and inclusivity in their work spaces.</p>
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