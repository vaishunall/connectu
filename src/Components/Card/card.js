import React, { Component } from 'react'
import "./card.css"
import cardImage1 from "../../Assets/nt-bill 1.png"
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function Card({data}) {
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
                
                <img className="eventImage" src={cardImage1}></img>
                <div className="cardBody">

                    <div className="cardHeader">{data.header}</div>
                    <div className="cardDetails">
                    <div className="name">{data.name}</div>
                    <div className="university">{data.uni}</div>
                    <div className="club">{data.club}</div></div>
                </div>
                <div className="starIcon">
                <StarOutlineIcon></StarOutlineIcon></div>
                </div>
                <div className="cardDescription">
                    <p>{data.description}</p>  
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
=======
import React, { Component, useState } from 'react'
import "./card.css"
import cardImage1 from "../../Assets/nt-bill1.png";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default class Card extends Component {
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

                <img className="eventImage" src={cardImage1}></img>
                <div className="cardBody">

                  <div className="cardHeader">Women in Tech</div>
                  <div className="cardDetails">
                    <div className="name">Faiza Rahman</div>
                    <div className="university">The University of Texas at Dallas</div>
                    <div className="club">Society of Women Engineers</div></div>
                </div>

                {/* <div onClick={this.handleClick}>
                    {this.state.clicked ? <Star></Star>
                    : <StarOutlineIcon></StarOutlineIcon>}
                </div> */}

                <div>
                    <div className ='starIcon1' id="starPad" onClick={this.handleClick}>{this.state.clicked ? <StarIcon/>
                    : <StarOutlineIcon />}</div>
                </div>
                
              </div>
              <div className="cardDescription">
                <p>We are looking for volunteers/sponsors to help us build a fundraiser to donate to further women's STEM education. We will be hosting a workshop with women speakers who will talk about their experience in a male dominated field.</p>
              </div>
              <div className="cardTags">
                <div className="tag"><div className="tagText">STEM</div></div>
                <div className="tag"><div className="tagText">women</div></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

}